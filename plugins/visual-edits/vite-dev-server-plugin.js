// === CLAUDE CODE START ===
// Vite plugin adapter for visual-edits dev server middleware
// Ports the webpack-dev-server middleware from dev-server-setup.js to Vite's configureServer hook
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

function getCodeServerPassword() {
  try {
    const conf = fs.readFileSync(
      "/etc/supervisor/conf.d/supervisord_code_server.conf",
      "utf8",
    );
    const match = conf.match(/PASSWORD="([^"]+)"/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

const SUP_PASS = getCodeServerPassword();

function visualEditsPlugin() {
  return {
    name: "visual-edits-dev-server",
    configureServer(server) {
      const isAllowedOrigin = (origin) => {
        if (!origin) return false;
        if (origin.match(/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/)) return true;
        if (origin.match(/^https:\/\/([a-zA-Z0-9-]+\.)*emergent\.sh$/)) return true;
        if (origin.match(/^https:\/\/([a-zA-Z0-9-]+\.)*emergentagent\.com$/)) return true;
        if (origin.match(/^https:\/\/([a-zA-Z0-9-]+\.)*appspot\.com$/)) return true;
        return false;
      };

      server.middlewares.use("/ping", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ status: "ok", time: new Date().toISOString() }));
      });

      server.middlewares.use("/edit-file", (req, res) => {
        if (req.method === "OPTIONS") {
          const origin = req.headers.origin;
          if (origin && isAllowedOrigin(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
            res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
            res.statusCode = 200;
            res.end();
          } else {
            res.statusCode = 403;
            res.end();
          }
          return;
        }

        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end();
          return;
        }

        let body = "";
        req.on("data", (chunk) => { body += chunk; });
        req.on("end", () => {
          try {
            const origin = req.headers.origin;
            if (origin && isAllowedOrigin(origin)) {
              res.setHeader("Access-Control-Allow-Origin", origin);
              res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
            }

            const key = req.headers["x-api-key"];
            if (!SUP_PASS || key !== SUP_PASS) {
              res.statusCode = 401;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "Unauthorized" }));
              return;
            }

            const { changes } = JSON.parse(body);
            if (!changes || !Array.isArray(changes) || changes.length === 0) {
              res.statusCode = 400;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "No changes provided" }));
              return;
            }

            const parser = require("@babel/parser");
            const traverse = require("@babel/traverse").default;
            const generate = require("@babel/generator").default;
            const t = require("@babel/types");

            const edits = [];
            const rejectedChanges = [];
            const frontendRoot = path.resolve(__dirname, "../..");

            const getRelativePath = (absolutePath) => {
              return "/" + path.relative(frontendRoot, absolutePath);
            };

            const findFileRecursive = (dir, filename) => {
              try {
                const files = fs.readdirSync(dir, { withFileTypes: true });
                for (const file of files) {
                  const fullPath = path.join(dir, file.name);
                  if (file.isDirectory()) {
                    if (["node_modules", "public", ".git", "build", "dist", "coverage"].includes(file.name)) continue;
                    const found = findFileRecursive(fullPath, filename);
                    if (found) return found;
                  } else if (file.isFile()) {
                    const fileBaseName = file.name.replace(/\.(js|jsx|ts|tsx)$/, "");
                    if (fileBaseName === filename) return fullPath;
                  }
                }
              } catch (err) {}
              return null;
            };

            const parseJsxChildren = (content) => {
              if (content === undefined) return null;
              const sanitizeMetaAttributes = (node) => {
                if (t.isJSXElement(node)) {
                  node.openingElement.attributes = node.openingElement.attributes.filter((attr) => {
                    if (t.isJSXAttribute(attr) && t.isJSXIdentifier(attr.name)) {
                      return !attr.name.name.startsWith("x-");
                    }
                    return true;
                  });
                  node.children.forEach((child) => sanitizeMetaAttributes(child));
                } else if (t.isJSXFragment(node)) {
                  node.children.forEach((child) => sanitizeMetaAttributes(child));
                }
              };
              try {
                const wrapperExpression = parser.parseExpression(
                  `(<gjs-wrapper>${content}</gjs-wrapper>)`,
                  { sourceType: "module", plugins: ["jsx", "typescript"] },
                );
                if (t.isJSXElement(wrapperExpression)) {
                  const innerChildren = wrapperExpression.children || [];
                  innerChildren.forEach((child) => sanitizeMetaAttributes(child));
                  return innerChildren;
                }
              } catch (parseError) {}
              return [t.jsxText(content)];
            };

            const changesByFile = {};
            changes.forEach((change) => {
              if (!changesByFile[change.fileName]) changesByFile[change.fileName] = [];
              changesByFile[change.fileName].push(change);
            });

            Object.entries(changesByFile).forEach(([fileName, fileChanges]) => {
              let targetFile = findFileRecursive(frontendRoot, fileName);
              if (!targetFile) {
                targetFile = path.resolve(frontendRoot, "src/components", `${fileName}.js`);
              }

              const normalizedTarget = path.normalize(targetFile);
              const isInFrontend = normalizedTarget.startsWith(frontendRoot) && !normalizedTarget.includes("..");
              const isNodeModules = normalizedTarget.includes("node_modules");
              const isPublic = normalizedTarget.includes("/public/") || normalizedTarget.endsWith("/public");

              if (!isInFrontend || isNodeModules || isPublic) {
                throw new Error(`Forbidden path for file ${fileName}`);
              }

              if (!fs.existsSync(targetFile)) {
                throw new Error(`File not found: ${targetFile}`);
              }

              const currentContent = fs.readFileSync(targetFile, "utf8");
              const ast = parser.parse(currentContent, {
                sourceType: "module",
                plugins: ["jsx", "typescript"],
              });

              const changesByLine = {};
              fileChanges.forEach((change) => {
                if (!changesByLine[change.lineNumber]) changesByLine[change.lineNumber] = [];
                changesByLine[change.lineNumber].push(change);
              });

              traverse(ast, {
                JSXOpeningElement: (nodePath) => {
                  const lineNumber = nodePath.node.loc?.start.line;
                  if (!lineNumber) return;
                  const changesAtLine = changesByLine[lineNumber];
                  if (!changesAtLine || changesAtLine.length === 0) return;
                  const elementName = nodePath.node.name.name;

                  changesAtLine.forEach((change) => {
                    if (elementName !== change.component) return;

                    if (change.type === "className" && change.className !== undefined) {
                      let classAttr = nodePath.node.attributes.find(
                        (attr) => t.isJSXAttribute(attr) && attr.name.name === "className",
                      );
                      const oldClassName = classAttr?.value?.value || "";
                      if (classAttr) {
                        classAttr.value = t.stringLiteral(change.className);
                      } else {
                        nodePath.node.attributes.push(
                          t.jsxAttribute(t.jsxIdentifier("className"), t.stringLiteral(change.className)),
                        );
                      }
                      edits.push({ file: getRelativePath(targetFile), lineNumber, element: elementName, type: "className", oldData: oldClassName, newData: change.className });
                    } else if (change.type === "textContent" && change.textContent !== undefined) {
                      const parentElementPath = nodePath.parentPath;
                      if (parentElementPath && parentElementPath.isJSXElement()) {
                        const children = parentElementPath.node.children || [];
                        let targetTextNode = null;
                        for (const child of children) {
                          if (t.isJSXText(child) && child.value.trim().length > 0) { targetTextNode = child; break; }
                        }
                        const firstTextNode = targetTextNode;
                        const fallbackWhitespaceNode = children.find((child) => t.isJSXText(child) && child.value.trim().length === 0);
                        const newContent = change.textContent;
                        let oldContent = "";
                        const preserveWhitespace = (originalValue, updatedCore) => {
                          const leading = (originalValue.match(/^\s*/) || [""])[0];
                          const trailing = (originalValue.match(/\s*$/) || [""])[0];
                          return `${leading}${updatedCore}${trailing}`;
                        };
                        if (firstTextNode) {
                          oldContent = firstTextNode.value.trim();
                          firstTextNode.value = preserveWhitespace(firstTextNode.value, newContent);
                        } else if (fallbackWhitespaceNode) {
                          fallbackWhitespaceNode.value = preserveWhitespace(fallbackWhitespaceNode.value, newContent);
                        } else {
                          parentElementPath.node.children = [t.jsxText(newContent), ...children];
                        }
                        edits.push({ file: getRelativePath(targetFile), lineNumber, element: elementName, type: "textContent", oldData: oldContent, newData: newContent });
                      }
                    } else if (change.type === "content" && change.content !== undefined) {
                      const parentElementPath = nodePath.parentPath;
                      if (parentElementPath && parentElementPath.isJSXElement()) {
                        const oldChildren = parentElementPath.node.children || [];
                        const oldContentAST = { type: "JSXFragment", children: oldChildren };
                        const oldContent = generate(oldContentAST, {}, "").code.replace(/^<>/, "").replace(/<\/>$/, "").trim();
                        const newChildren = parseJsxChildren(change.content);
                        if (newChildren) parentElementPath.node.children = newChildren;
                        edits.push({ file: getRelativePath(targetFile), lineNumber, element: elementName, type: "content", oldData: oldContent, newData: change.content });
                      }
                    } else {
                      rejectedChanges.push({ change, reason: `Invalid type: ${change.type || "undefined"}`, file: getRelativePath(targetFile), lineNumber, element: elementName });
                    }
                  });
                  delete changesByLine[lineNumber];
                },
              });

              const { code } = generate(ast, { retainLines: true, retainFunctionParens: true, comments: true });
              const backupFile = targetFile + ".backup";
              if (fs.existsSync(targetFile)) {
                fs.writeFileSync(backupFile, fs.readFileSync(targetFile, "utf8"), "utf8");
              }
              fs.writeFileSync(targetFile, code, "utf8");
              try {
                execSync(`git -c user.name="visual-edit" -c user.email="support@emergent.sh" add "${targetFile}"`);
                execSync(`git -c user.name="visual-edit" -c user.email="support@emergent.sh" commit -m "visual_edit_${Date.now()}"`);
              } catch (gitError) {
                console.error(`Git commit failed: ${gitError.message}`);
              }
              if (fs.existsSync(backupFile)) fs.unlinkSync(backupFile);
            });

            const response = { status: "ok", edits };
            if (rejectedChanges.length > 0) response.rejectedChanges = rejectedChanges;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(response));
          } catch (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      });
    },
  };
}

module.exports = visualEditsPlugin;
// === CLAUDE CODE END ===
