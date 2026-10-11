// === CLAUDE CODE START ===
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

export default defineConfig(({ mode }) => {
  const babelPlugins = [];
  const vitePlugins = [];

  if (mode === "development") {
    babelPlugins.push("./plugins/visual-edits/babel-metadata-plugin");
    const visualEditsPlugin = require("./plugins/visual-edits/vite-dev-server-plugin");
    vitePlugins.push(visualEditsPlugin());
  }

  return {
    plugins: [
      react({ babel: { plugins: babelPlugins } }),
      ...vitePlugins,
    ],
    resolve: {
      alias: { "@": path.resolve(__dirname, "src") },
    },
    server: { port: 3000, open: true },
    build: { outDir: "dist" },
    test: { environment: "jsdom", globals: true },
  };
});
// === CLAUDE CODE END ===
