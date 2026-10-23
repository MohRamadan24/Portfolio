// === CLAUDE CODE START ===
// API fetch layer for Payload CMS backend
// Fetches portfolio data from Payload REST API and transforms it
// to match the shape expected by the frontend components.

const BASE = import.meta.env.VITE_BACKEND_URL;

const LOCALE_MAP = { EN: "en", ID: "id", JP: "ja" };

async function fetchGlobal(slug, locale) {
  const res = await fetch(
    `${BASE}/api/globals/${slug}?locale=${LOCALE_MAP[locale]}&depth=1`
  );
  if (!res.ok) throw new Error(`Failed to fetch global ${slug}: ${res.status}`);
  return res.json();
}

async function fetchCollection(slug, locale) {
  const res = await fetch(
    `${BASE}/api/${slug}?locale=${LOCALE_MAP[locale]}&depth=1&limit=100&sort=sortOrder`
  );
  if (!res.ok)
    throw new Error(`Failed to fetch collection ${slug}: ${res.status}`);
  const json = await res.json();
  return json.docs;
}

const flattenTextArray = (arr) =>
  arr ? arr.map((item) => item.text || item.name || item) : [];

function transformProfile(raw) {
  return {
    name: raw.name,
    headline: raw.headline,
    location: raw.location,
    photoUrl: raw.photo?.url ? `${BASE}${raw.photo.url}` : null,
    summary: raw.summary,
    quickStats: raw.quickStats
      ? raw.quickStats.map((s) => ({ label: s.label, value: s.value }))
      : [],
    contact: raw.contact || {},
  };
}

function transformToolbox(raw) {
  return {
    primary: flattenTextArray(raw.primary),
    testing: flattenTextArray(raw.testing),
    deliverables: flattenTextArray(raw.deliverables),
  };
}

function transformServices(docs) {
  return docs.map((doc) => ({
    title: doc.title,
    description: doc.description,
    highlights: flattenTextArray(doc.highlights),
  }));
}

function transformApproaches(docs) {
  return docs.map((doc) => ({
    number: doc.number,
    title: doc.title,
    description: doc.description,
  }));
}

function transformCertifications(docs) {
  return docs.map((doc) => ({
    title: doc.title,
    issuer: doc.issuer,
    year: doc.year,
    credential: doc.credential,
  }));
}

function transformReviews(docs) {
  return docs.map((doc) => ({
    id: doc.id,
    client: {
      name: doc.clientName,
      avatarSeed: doc.clientAvatarSeed,
    },
    countryCode: doc.countryCode,
    country: doc.country,
    stars: doc.stars,
    timeAgo: doc.timeAgo,
    body: doc.body,
    tags: flattenTextArray(doc.tags),
    status: doc.status || undefined,
  }));
}

function transformPortfolioItems(docs) {
  return docs.map((doc) => ({
    id: doc.id,
    title: doc.title,
    subtitle: doc.subtitle,
    href: doc.href,
    thumbnail: doc.thumbnail?.url ? `${BASE}${doc.thumbnail.url}` : null,
    tags: flattenTextArray(doc.tags),
  }));
}

function transformExperience(docs) {
  return docs.map((doc) => ({
    id: doc.id,
    title: doc.title,
    company: doc.company,
    period: doc.period,
    duration: doc.duration,
    opening: doc.opening,
    bullets: flattenTextArray(doc.bullets),
    ending: doc.ending,
    skills: flattenTextArray(doc.skills),
    location: doc.location,
    stack: flattenTextArray(doc.stack),
    status: doc.status || undefined,
  }));
}

function transformFaqs(docs) {
  return docs.map((doc) => ({
    q: doc.question,
    a: doc.answer,
  }));
}

export async function fetchAllData(locale) {
  const [
    pageDetails,
    resume,
    profileRaw,
    approachesExtra,
    toolboxRaw,
    servicesDocs,
    approachesDocs,
    certificationsDocs,
    reviewsDocs,
    portfolioItemsDocs,
    experienceDocs,
    faqsDocs,
  ] = await Promise.all([
    fetchGlobal("page-details", locale),
    fetchGlobal("resume", locale),
    fetchGlobal("profile", locale),
    fetchGlobal("approaches-extra", locale),
    fetchGlobal("toolbox", locale),
    fetchCollection("services", locale),
    fetchCollection("approaches", locale),
    fetchCollection("certifications", locale),
    fetchCollection("reviews", locale),
    fetchCollection("portfolio-items", locale),
    fetchCollection("experience", locale),
    fetchCollection("faqs", locale),
  ]);

  return {
    pageDetails,
    resume,
    profile: transformProfile(profileRaw),
    approaches_extra: {
      coreQuestionTitle: approachesExtra.coreQuestionTitle,
      coreQuestionHeading: approachesExtra.coreQuestionHeading,
      coreQuestionDescription: approachesExtra.coreQuestionDescription,
    },
    toolbox: transformToolbox(toolboxRaw),
    services: transformServices(servicesDocs),
    approaches: transformApproaches(approachesDocs),
    certifications: transformCertifications(certificationsDocs),
    reviews: transformReviews(reviewsDocs),
    portfolioItems: transformPortfolioItems(portfolioItemsDocs),
    experience: transformExperience(experienceDocs),
    faqs: transformFaqs(faqsDocs),
  };
}
// === CLAUDE CODE END ===
