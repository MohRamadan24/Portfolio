// Frontend-only mock data (no backend yet)
// Replace with real API calls later.

import { Instagram } from "lucide-react";

export const resume = {
  title: "Download CV",
}

export const profile = {
  name: "Moh. Ramadan",
  headline: "QA Analyst",
  location: "Remote / Worldwide",
  photoUrl:
    "/images/fotoBebasRamaKotak280x280.png",
  summary:
    "I am a QA Analyst with over three years of experience in ensuring software quality. I possess strong verbal and written communication skills and am adept at explaining complex software issues in a clear and understandable manner. Through effective testing strategies, I significantly minimized bug leakage into production, achieving a reduction of up to 95%. I am detail-oriented, collaborative, and committed to delivering high-quality software products.",
  quickStats: [
    { label: "Experience", value: "4+ years" },
    { label: "Bug leakage reduction", value: "Up to 95%" },
    { label: "Platforms", value: "Web • Android • iOS" },
  ],
  contact: {
    email: "moh.ramadan8h@gmail.com",
    fiverr: "https://www.fiverr.com/ramadan56",
    linkedin: "https://www.linkedin.com/in/moh-ramadan-a26453264/",
    github: "https://github.com/MohRamadan24",
    instagram: "https://www.instagram.com/moh.ramadan_/",
  },
};

export const services = [
  {
    title: "QA & UAT (Web & Mobile)",
    description:
      "Scenario-based testing, exploratory testing, regression, smoke, and UAT with reproducible steps.",
    highlights: [
      "Test plan & checklist",
      "Clear bug reports",
      "Cross-device coverage",
      "Release sign-off support",
    ],
  },
  {
    title: "UI & UX Design",
    description:
      "User-centered interface and experience design focused on clarity, usability, and visual consistency across platforms.",
    highlights: [
      "User flow & wireframes",
      "High-fidelity UI design",
      "Design system & components",
      "Usability & UX review",
    ],
  },
  {
    title: "Landing Page & CMS",
    description:
      "Conversion-focused landing pages and CMS-based websites that are fast, responsive, and easy to manage.",
    highlights: [
      "Modern landing page design",
      "Responsive",
      "CMS setup (WordPress / Processwire)",
      "Easy content management",
    ],
  },
];

export const toolbox = {
  primary: [
    "Jira",
    "Trello",
    "Katalon",
    "Postman",
    "Figma",
    "Google Sheets",
    "Slack",
    "Microsoft Teams",
  ],
  testing: [
    "Exploratory Testing",
    "Regression",
    "Smoke",
    "UAT",
    "API Testing",
    "Cross-browser",
    "Mobile testing",
  ],
  deliverables: [
    "Bug reports",
    "Test cases",
    "Test summary report",
    "UI/UX checklist",
    "Release notes support",
  ],
};

export const certifications = [
  {
    title: "Agile Requirements Analysis",
    issuer: "Alison",
    year: "2024",
    credential: "https://alison.com/certification/check/fdd0490960",
  },
  {
    title: "EF SET English Certificate 73/100 (C2 Proficient)",
    issuer: "EF SET",
    year: "2025",
    credential: "https://cert.efset.org/id/2EGvH4",
  },
  {
    title: "Lembaga Sertifikasi Profesi (LSP) - RPL (88 Points)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2022",
    credential: "https://drive.google.com/file/d/1LOp9lABezSVNaY5fAA06zTIAd0YjCGpI/view?usp=sharing",
  },
  {
    title: "MongoDB and the Document Model",
    issuer: "MongoDB",
    year: "2023",
    credential: "https://learn.mongodb.com/c/UQ3b-G77Q4KVwfh_vRusSw",
  },
];

const baseReview = {
  countryCode: "SA",
  country : "Saudi Arabia",
  stars: 5,
  timeAgo: "1 month ago",
  body:
    "Working with this Moh Ramadan was an excellent experience! He completed a thorough review of our hotel booking app on both Android and iOS, providing detailed feedback on UI and UX. Their observations were clear, constructive, and professional—highlighting what works well and pinpointing exactly where improvements could enhance the user experience. Highly recommended for anyone looking for reliable, insightful app testing! Already started to work on another gig, All the very best.",
};

export const reviews = [
  {
    id: "r1",
    client: { name: "fahadibrahim82", avatarSeed: "fahad" },
    ...baseReview,
    countryCode: "KW",
    country : "Kuwait",
    stars: 5,
    timeAgo: "9 month ago",
    body:
      "Mohammad Ramadan exceeded all expectations with his exceptional app testing skills. His attention to detail was outstanding, identifying even the smallest issues and providing comprehensive feedback that greatly improved the app’s usability and performance. He demonstrated a deep understanding of both technical and user experience aspects, ensuring thorough testing across all features\n\nBeyond his expertise, Mohammad was incredibly professional, polite, and easy to communicate with. He delivered detailed reports with clear insights and suggestions, making the entire process smooth and productive. I highly recommend him to anyone looking for a meticulous and reliable app tester. His work truly made a difference!",
    tags: [
      "Deep understanding",
      "Proactive communication",
      "Level of cooperation",
      "Language fluency",
      "Delivery time",
      "Politeness",
      "Went above and beyond",
      "Quick responsiveness",
      "Documentation",
      "Attention to details",
      "Code expertise",
      "Professionalism of work",
      "Exceeded expectations",
      "Bug free",
    ],
  },
  {
    id: "r2",
    client: { name: "gopinathkukufm", avatarSeed: "gopi" },
    ...baseReview,
    status: "Repeat Client",
    countryCode: "IN",
    country : "India",
    stars: 5,
    timeAgo: "7 month ago",
    body:
      "Good to have with our team. gave quality of bug.",
    tags: [
      "Exceeded expectations",
      "Professionalism of work",
      "Attention to details",
      "Bug free",
      "Documentation",
    ],
  },
  {
    id: "r3",
    client: { name: "gopinathkukufm", avatarSeed: "gopi" },
    ...baseReview,
    status: "Repeat Client",
    countryCode: "IN",
    country : "India",
    stars: 5,
    timeAgo: "7 months ago",
    body:
      "Moh. Ramadan delivers EXCEPTIONAL work—bug free and surpassing expectations every time! His language fluency makes collaborating with him a breeze. Highly recommend! 🙌",
    tags: [
      "language fluency",
      "Bug free",
      "Exceeded expectations",
    ],
  },
  {
    id: "r4",
    client: { name: "kenjamusa", avatarSeed: "kenja" },
    ...baseReview,
    status: "Repeat Client",
    countryCode: "US",
    country : "United States",
    stars: 5,
    timeAgo: "5 months ago",
    body:
      "This project went extremely well from beginning to end. I was very pleased with the level of engagement and how easy it was to go back and get very good explanations of the issues that were identified. I would recommend working with this individual.",
    tags: [
      "Quick responsiveness",
      "Lanuage fluency",
      "Went above and beyond",
      "Delivery time",
      "Politeness",
      "Level of cooperation",
      "Proactive communication",
      "Attention to details",
      "Exceeded expectations",
      "Professionalism of work",
    ],
  },
  {
    id: "r5",
    client: { name: "thatspasha", avatarSeed: "pasha" },
    ...baseReview,
    status: "Repeat Client",
    countryCode: "SA",
    country : "Saudi Arabia",
    stars: 5,
    timeAgo: "2 month ago",
    body:
      "Working with this Moh Ramadan was an excellent experience! He completed a thorough review of our hotel booking app on both Android and iOS, providing detailed feedback on UI and UX. Their observations were clear, constructive, and professional—highlighting what works well and pinpointing exactly where improvements could enhance the user experience. Highly recommended for anyone looking for reliable, insightful app testing! Already started to work on another gig, All the very best.",
    tags: [
      "Deep understanding",
      "Proactive communication",
      "Level of cooperation",
      "Language fluency",
      "Delivery time",
      "Politeness",
      "Went above and beyond",
      "Quick responsiveness",
      "Documentation",
      "Attention to details",
      "Code expertise",
      "Professionalism of work",
      "Exceeded expectations",
      "Bug free",
    ],
  },
  {
    id: "r6",
    client: { name: "thatspasha", avatarSeed: "pasha" },
    ...baseReview,
    status: "Repeat Client",
    countryCode: "SA",
    country : "Saudi Arabia",
    stars: 5,
    timeAgo: "1 month ago",
    body:
      "Excellent experience with Rama, he is the best and UAT testing so far in my working experience, outstanding, detailed review and a sharp attention to detail and persistence to solving the issue.",
    tags: [
      "Deep understanding",
      "Proactive communication",
      "Level of cooperation",
      "Language fluency",
      "Delivery time",
      "Politeness",
      "Went above and beyond",
      "Quick responsiveness",
      "Documentation",
      "Attention to details",
      "Code expertise",
      "Professionalism of work",
      "Exceeded expectations",
      "Bug free",
    ],
  },
];

export const portfolioItems = [
  {
    id: "p1",
    title: "Property Agency Site",
    subtitle: "Company Profile & CMS",
    href: "https://stayco.trinitymerge.my.id/",
    thumbnail:
      "/images/screenshotPortfolio1.png",
    tags: ["Company Profile", "Multi-page", "CMS"],
  },
  {
    id: "p2",
    title: "Cafe Landing Page",
    subtitle: "Business Profile & CMS",
    href: "https://mohramadan-wordpress.infinityfree.me/wordpress",
    thumbnail:
      "/images/screenshotPortfolio2.png",
    tags: ["Bussiness Profile", "Wordpress", "Elementor"],
  },
  {
    id: "p3",
    title: "Portfolio Site",
    subtitle: "Static Landing Page",
    href: "https://mohramadan.trinitymerge.my.id/",
    thumbnail:
      "/images/screenshotPortfolio3.png",
    tags: ["Landing Page", "Single-page", "Responsive"],
  },
  // {
  //   id: "p4",
  //   title: "Landing Page QA (Preview)",
  //   subtitle: "Cross-browser & responsiveness",
  //   href: "https://example.com",
  //   thumbnail:
  //     "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1200'%20height='720'%3E%3Crect%20width='1200'%20height='720'%20fill='%230d0f14'/%3E%3Crect%20x='90'%20y='110'%20width='1020'%20height='500'%20rx='26'%20fill='rgba(255,255,255,0.07)'%20stroke='rgba(160,112,255,0.25)'/%3E%3Ctext%20x='130'%20y='200'%20fill='rgba(255,255,255,0.9)'%20font-size='34'%20font-family='Inter, Arial'%3EPreview%20Screenshot%3C/text%3E%3Ctext%20x='130'%20y='250'%20fill='rgba(255,255,255,0.55)'%20font-size='18'%20font-family='Inter, Arial'%3EMobile%20shows%201-per-row%3C/text%3E%3C/svg%3E",
  //   tags: ["Responsive", "Cross-browser", "Checklist"],
  // },
];

export const experience = [
  {
    id: "e1",
    title: "Software Tester (Freelance)",
    company: "PT. Alpha Tech Indonesia",
    period: "Oct 2021 - November 2021",
    duration: "1 month",
    opening:
      "I gained freelance experience as a software tester for a software company, specializing in:",
    bullets: [
      "Identifying software bugs.",
      "Reporting bugs with detailed documentation.",
    ],
    ending:
      "This role allowed me to develop a deep understanding of software development intricacies and enhance my skills.",
    stack: ["Google Docs", "Google Drive", "Google Slides"],
    skills: ["Software Testing", "Bug Tracking"],
    location: "Aliyan Business Centre, Jl. Hasanuddin No.66, Plipir, Sekardangan, Kec. Sidoarjo, Jawa Timur 61215 - Remote"
  },
  {
    id: "e2",
    title: "Administration Assistant (Internship)",
    company: "BPJS Ketenagakerjaan",
    period: "Apr 2021 — Dec 2021",
    duration: "9 months",
    opening:
      "As a participant in my high school's internship program, I served as an Administration Assistant at National Assurance Company, where I:",
    bullets: [
      "Handled various administrative tasks (Ms Word, Ms Excel, Canva).",
      "Engaged in customer interactions and socialization across different platforms.",
      "Developed skills in managing customer complaints and addressing inquiries.",
    ],
    ending:
      "This experience provided me with valuable knowledge and insights into company operations, preparing me for future professional endeavors.",
    stack: ["Google Sheet", "Canva", "Ms Excel", "Ms Word", "Google Contact"],
    skills: ["Problem Solving", "Data Entry", "Data Visualization", "Customer Service", "File Management", "Critical Thinking", "Administrative Assistance"],
    location: "Jl. Doktor Sutomo No.1, Klojen, Malang, Jawa Timur - Onsite"
  },
  {
    id: "e3",
    title: "Tailor (Part-time)",
    company: "Littlemisshamper",
    period: "Sep 2021 — Dec 2022",
    duration: "1 year 4 months",
    opening:
      "During my high school years, I had the privilege of working at Littlemisshamper as a tailor and product designer, where I gained skills in:",
    bullets: [
      "Creating custom products tailored to client's unique needs and preferences.",
      "Design and produce a variety of bags, including hampers, laptop bags, gift bags, and wallets, ensuring both style and functionality.",
      "Execute precise tailoring and craftsmanship to meet high-quality standards for each product.",
      "Apply creative hands-on techniques to craft distinctive items, combining aesthetics and practicality."
    ],
    ending:
      "This role allowed me to explore my creativity and develop valuable professional skills.",
    // stack: ["Chrome DevTools", "Trello"],
    skills: ["Team Management", "Creative Pattern Cutting", "Cutting Cloth", "Design Thinking", "Critical Thinking", "Project Management", "Product Design", "Tailoring"],
    location: "Perumahan bukit dieng R 10 Malang Jawa Timur - Onsite"
  },
  {
    id: "e4",
    title: "Software Developer (Freelance)",
    company: "Universitas Negeri Malang",
    period: "Dec 2023 — Jan 2024",
    duration: "1 month",
    opening:
      "I undertook a freelance role as a software developer to create a survey website for college students, focusing on assessing mental health. Over two weeks, I:",
    bullets: [
      "Conducted a thorough analysis of the website’s features to understand requirements and user needs.",
      "Designed the system architecture and database to ensure scalability and efficient data management.",
      "Developed and implemented core functionalities, integrating front-end and back-end components.",
      "Completed final testing, refinement, and successfully launched the fully functional website."
    ],
    ending:
      "This project allowed me to support mental health initiatives for college students through a practical web solution.",
    stack: ["PHP", "MySQL", "CSS", "Apache"],
    skills: ["Front-End Development", "Software System Analysis", "Back-End Web Development"],
    location: "Jl. Ambarawa No.5, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145 - Remote"
  },
  {
    id: "e5",
    title: "Purchaser (Part-time)",
    company: "SSR Snack",
    period: "Feb 2024 — Oct 2024",
    duration: "9 month",
    opening:
      "As a Purchaser for the F&B business my friends and I started, I handle buying ingredients and supplies, including :",
    bullets: [
      "Managing supplier relationships.",
      "Monitoring stock levels.",
      "Making timely purchases.",
      "Ensuring we have everything needed to produce high-quality snacks."
    ],
    ending:
      "This role lets me use my organizational and negotiation skills to help our business succeed",
    skills: ["Market Research", "Market Analysis"],
    location: "Sidoarjo, East Java, Indonesia - Hybrid"
  },
  {
    id: "e6",
    title: "Sales Representative (Part-time)",
    company: "SSR Snack",
    period: "Feb 2024 — Oct 2024",
    duration: "9 month",
    opening:
      "As a Sales Representative, I manage our F&B business's school partnerships, including:",
    bullets: [
      "Presenting our snacks to schools for consignment.",
      "Expanding our reach using sales and negotiation skills.",
      "Building strong relationships with school administrators and canteen managers.",
    ],
    ending:
      "This role helps to expand our business and strengthen our presence in school canteens.",
    skills: ["Sales and Negotiation", "Market Research", "Analytical Skills"],
    location: "Sidoarjo, East Java, Indonesia - Hybrid"
  },
  {
    id: "e7",
    title: "Quality Assurance Analyst",
    company: "PT. Alpha Tech Indonesia",
    period: "May 2022 — Jun 2025",
    duration: "3 Years 2 month",
    opening:
      "In my role as a Quality Assurance Analyst, I ensure the reliability and quality of software products before they reach the end user, including:",
    bullets: [
      "Carefully validating features to meet client expectations.",
      "Reducing the risk of critical bugs.",
      "Conducting thorough testing to deliver a dependable product (Trello, Notion.",
      "Providing detailed bug reports to facilitate effective resolution (Spreadsheet, Google Docs)."
    ],
    ending:
      "This contributes to enhancing user experience and satisfaction.",
    stack: ["Postman", "Trello", "GitMind", "Google Sheets"],
    skills: ["System Analysis", "MySQL", "Problem Solving", "Technical Documentation", "Test Planning", "MongoDB", "Software Testing", "Quality Management", "PHP", "Critical Thinking", "Software System Analysis", "JavaScript", "PhpMyAdmin", "Unified Modeling Language (UML)", "REST APIs", "Requirements Analysis", "Node.js", "Analytical Skills"],
    location: "Aliyan Business Centre, Jl. Hasanuddin No.66, Plipir, Sekardangan, Kec. Sidoarjo, Jawa Timur 61215 - Onsite"
  },
  {
    id: "e8",
    title: "Operations Team Member",
    company: "PT. Alpha Tech Indonesia",
    period: "Jun 2023 — Jun 2025",
    duration: "2 Years 1 month",
    opening:
      "In my second role as an Operations Team Member, I support my team leader in meeting the company's needs, including:",
    bullets: [
      "Creating proposals (Google Docs).",
      "Managing client interactions and engagement.",
      "Developing marketing materials (Figma, Canva).",
      "Organizing and preparing for meetings (GMeet, Google Calendar).",
      "Assisting with data entry and content management for customer websites.",
    ],
    ending:
      "Balancing these responsibilities with my initial role demonstrates my ability to handle multiple tasks and contribute to our team’s success.",
    stack: ["Figma", "Canva", "Google Docs", "Google Meet"],
    skills: ["Problem Solving", "Proposal Writing", "Figma", "Requirement Analysis", "Canva", "Public Speaking"],
    location: "Aliyan Business Centre, Jl. Hasanuddin No.66, Plipir, Sekardangan, Kec. Sidoarjo, Jawa Timur 61215 - Onsite"
  },
  {
    id: "e9",
    title: "Generalist",
    company: "PT. Alpha Tech Indonesia",
    period: "Jul 2024 — Jun 2025",
    duration: "1 Year",
    opening:
      "In my third role as a Generalist, I provide flexible support across different teams to ensure smooth operations and contribute to the company's success, including :",
    bullets: [
      "Assisting any team that requires help, particularly when developing software and handling customer needs.",
      "Train marketing team to ensure they understand the product thoroughly.",
      "Preparing and delivering product and system presentations to clients, explaining workflows, features, and technical approaches clearly.",
      "Create use interfaces / Frontend designs as a support member for teams that need help upon request.",
      "Research and development about application feasibility, feature coverage, and technology that can be used for development application.",
    ],
    ending:
      "This flexibility demonstrates my ability to adapt and contribute effectively to multiple areas within the company.",
    stack: ["Bootstrap", "Canva", "Google Docs", "VS Code"],
    skills: ["Tailwind CSS", "Problem Solving", "Presentation Skills", "Software Tutorial - Document", "Research and Development (R&D)", "Software Trainer", "HMVC Framework"],
    location: "Aliyan Business Centre, Jl. Hasanuddin No.66, Plipir, Sekardangan, Kec. Sidoarjo, Jawa Timur 61215 - Onsite"
  },
  {
    id: "e10",
    title: "Content Analyst",
    company: "KUKU FM",
    period: "May 2025 — Jul 2025",
    duration: "3 months",
    opening:
      "As a Content Analyst, I work closely with video content and advertising material to help identify key moments and optimize content for audience engagement, including :",
    bullets: [
      "Selecting 15–25 timestamps for ad materials, each 1–2 minutes, based on content strength and viewer appeal.",
      "Reviewing and editing 2-minute ad scripts to ensure grammar accuracy and natural, clear use of the Indonesian language.",
      "Ensuring ad content includes strong hooks that capture attention quickly and maintain interest.",
      "Providing insight on which content segments are most suitable for marketing and promotional use.",
    ],
    ending:
      "This role demonstrates my ability to identify impactful content and ensure language quality that aligns with the brand and audience.",
    stack: ["Slack", "Google Sheets", "Google Docs", "Google Drive"],
    skills: ["Analytical Skills", "Script Editing", "Content Review"],
    location: "Mumbai, India - Remote"
  },
  {
    id: "e11",
    title: "QA Specialist",
    company: "KUKU FM",
    period: "May 2025 — Jul 2025",
    duration: "3 months",
    opening:
      "In my role as a QA Specialist, I ensure the quality and reliability of mobile applications, specifically on the Android platform, including :",
    bullets: [
      "Performing detailed testing on Android apps to identify bugs and usability issues.",
      "Testing the entire payment process, including successful transactions, failure handling, and refund scenarios.",
      "Evaluating and documenting areas of the system that need improvement or do not meet internal standards.",
      "Ensuring each feature meets visual, functional, and user experience expectations.",
      "Providing clear feedback and suggestions to help improve the system's overall performance and consistency.",
      "Collaborating with developers to verify bug fixes and confirm smooth operation of the app.",
    ],
    ending:
      "This role highlights my attention to detail, ability to think from the user's perspective, and commitment to maintaining high product quality.",
    stack: ["Slack", "Google Sheets", "Google Docs", "Google Drive"],
    skills: ["Bug Triage", "Test Planning", "Test Cases"],
    location: "Mumbai, India - Remote"
  },
  {
    id: "e12",
    title: "QA Specialist",
    company: "NNTRAVEL LLC",
    period: "Oct 2025 — Dec 2025",
    duration: "3 months",
    opening:
      "In my role as a QA Specialist, I ensure the quality and reliability of a hotel booking application across mobile platforms and admin systems, including:",
    bullets: [
      "Performing comprehensive testing on mobile and admin features to identify functional, usability, and edge-case issues.",
      "Validating end-to-end booking flows, including reservation creation, status updates, and cancellations.",
      "Testing payment and wallet processes, covering successful transactions, failure handling, and refund scenarios.",
      "Verifying transaction accuracy and data consistency between user-facing applications and admin systems.",
      "Ensuring each feature meets business requirements, functional specifications, and user experience standards.",
    ],
    ending:
      "This experience highlights my attention to detail, understanding of business workflows, and commitment to ensuring a seamless and reliable booking experience for both users and administrators.",
    stack: ["Microsoft Teams", "Google Sheets", "Chrome DevTools", "Google Drive"],
    skills: ["Testing Process", "Text Planning", "Bug Triage", "Test-Driven Development", "Test Cases"],
    location: "Saudi Arabia - Remote"
  },
];

export const faqs = [
  {
    q: "What do you need from me to start?",
    a: "Access to the build/environment, user flows, acceptance criteria, and any known risks. If you don’t have a test plan yet, I can propose one.",
  },
  {
    q: "How do you report bugs?",
    a: "Clear steps to reproduce, expected vs actual results, severity/priority suggestion, and supporting evidence (screenshots/video) when possible.",
  },
  {
    q: "Can you test Android + iOS?",
    a: "Yes—coverage depends on your target devices. For this preview, it’s shown as capability; later you can list your real device matrix.",
  },
];
