// Frontend-only mock data (Bahasa Indonesia)

import { Instagram } from "lucide-react";

export const profile = {
  name: "Moh. Ramadan",
  headline: "QA Analyst",
  location: "Remote / Seluruh Dunia",
  photoUrl: "/images/fotoBebasRamaKotak280x280.png",
  summary:
    "Saya adalah QA Analyst dengan pengalaman lebih dari tiga tahun dalam memastikan kualitas perangkat lunak. Saya memiliki kemampuan komunikasi verbal dan tulisan yang baik serta mahir menjelaskan masalah perangkat lunak yang kompleks dengan jelas dan mudah dimengerti. Melalui strategi pengujian yang efektif, saya berhasil meminimalkan bug hingga 95%. Saya detail, kolaboratif, dan berkomitmen untuk menghasilkan produk perangkat lunak berkualitas tinggi.",
  quickStats: [
    { label: "Pengalaman", value: "4+ tahun" },
    { label: "Pengurangan bug", value: "Hingga 95%" },
    { label: "Platform", value: "Web • Android • iOS" },
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
      "Pengujian berbasis skenario, exploratory testing, regresi, smoke testing, dan UAT dengan langkah-langkah yang dapat direproduksi.",
    highlights: [
      "Rencana & checklist pengujian",
      "Laporan bug yang jelas",
      "Cakupan lintas perangkat",
      "Dukungan tanda tangan rilis",
    ],
  },
  {
    title: "UI & UX Design",
    description:
      "Desain antarmuka dan pengalaman pengguna yang berfokus pada kejelasan, kemudahan penggunaan, dan konsistensi visual di berbagai platform.",
    highlights: [
      "Alur pengguna & wireframe",
      "Desain UI high-fidelity",
      "Sistem desain & komponen",
      "Review kegunaan & UX",
    ],
  },
  {
    title: "Landing Page & CMS",
    description:
      "Landing page dan situs CMS yang berfokus pada konversi, cepat, responsif, dan mudah dikelola.",
    highlights: [
      "Desain landing page modern",
      "Responsif",
      "Setup CMS (WordPress / Processwire)",
      "Mudah mengelola konten",
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
  country: "Arab Saudi",
  stars: 5,
  timeAgo: "1 bulan lalu",
  body:
    "Bekerja dengan Moh Ramadan adalah pengalaman yang sangat baik! Ia menyelesaikan review mendetail pada aplikasi hotel kami di Android dan iOS, memberikan masukan yang jelas dan profesional. Observasinya sangat konstruktif dan menyoroti area yang perlu ditingkatkan. Sangat direkomendasikan bagi siapa saja yang mencari penguji aplikasi yang handal dan berpengalaman. Saya sudah mulai bekerja di gig lainnya. Semoga sukses selalu.",
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
    title: "Situs Agen Properti",
    subtitle: "Profil Perusahaan & CMS",
    href: "https://stayco.trinitymerge.my.id/",
    thumbnail: "/images/screenshotPortfolio1.png",
    tags: ["Profil Perusahaan", "Multi-halaman", "CMS"],
  },
  {
    id: "p2",
    title: "Situs Portofolio",
    subtitle: "Landing Page Statis",
    href: "https://mohramadan.trinitymerge.my.id/",
    thumbnail: "/images/screenshotPortfolio3.png",
    tags: ["Landing Page", "Satu halaman", "Responsif"],
  },
];

export const experience = [
  {
    id: "e1",
    title: "Software Tester (Freelance)",
    company: "PT. Alpha Tech Indonesia",
    period: "Oct 2021 - November 2021",
    duration: "1 month",
    opening:
      "Saya mendapatkan pengalaman freelance sebagai penguji perangkat lunak untuk sebuah perusahaan software, dengan spesialisasi:",
    bullets: [
      "Mengidentifikasi bug perangkat lunak.",
      "Melaporkan bug dengan dokumentasi yang detail.",
    ],
    ending:
      "Peran ini memungkinkan saya memahami seluk-beluk pengembangan perangkat lunak secara mendalam dan meningkatkan keterampilan saya.",
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
      "Sebagai peserta program magang di sekolah menengah, saya bertugas sebagai Asisten Administrasi di perusahaan nasional, di mana saya:",
    bullets: [
      "Menangani berbagai tugas administrasi (Ms Word, Ms Excel, Canva).",
      "Berinteraksi dengan pelanggan dan melakukan sosialisasi melalui berbagai platform.",
      "Mengembangkan keterampilan dalam menangani keluhan pelanggan dan menjawab pertanyaan mereka.",
    ],
    ending:
      "Pengalaman ini memberikan wawasan dan pengetahuan berharga tentang operasi perusahaan, serta mempersiapkan saya untuk karir profesional di masa depan.",
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
      "Selama masa SMA, saya berkesempatan bekerja di Littlemisshamper sebagai penjahit dan desainer produk, di mana saya memperoleh keterampilan dalam:",
    bullets: [
      "Membuat produk custom sesuai kebutuhan dan preferensi unik klien.",
      "Merancang dan memproduksi berbagai jenis tas, termasuk hampers, laptop bag, gift bag, dan dompet, dengan memperhatikan gaya dan fungsionalitas.",
      "Melaksanakan penjahitan yang presisi dan kerajinan tangan untuk memenuhi standar kualitas tinggi setiap produk.",
      "Menerapkan teknik kreatif secara langsung untuk menghasilkan produk yang unik, menggabungkan estetika dan praktikabilitas.",
    ],
    ending:
      "Peran ini memungkinkan saya mengeksplorasi kreativitas dan mengembangkan keterampilan profesional yang berharga.",
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
      "Saya mengambil peran freelance sebagai pengembang perangkat lunak untuk membuat situs survei bagi mahasiswa, dengan fokus pada penilaian kesehatan mental. Selama dua minggu, saya:",
    bullets: [
      "Melakukan analisis menyeluruh terhadap fitur situs untuk memahami kebutuhan pengguna dan persyaratan.",
      "Merancang arsitektur sistem dan basis data untuk memastikan skalabilitas dan manajemen data yang efisien.",
      "Mengembangkan dan mengimplementasikan fungsi inti, mengintegrasikan komponen front-end dan back-end.",
      "Menyelesaikan pengujian akhir, penyempurnaan, dan berhasil meluncurkan situs web yang sepenuhnya berfungsi.",
    ],
    ending:
      "Proyek ini memungkinkan saya mendukung inisiatif kesehatan mental bagi mahasiswa melalui solusi web yang praktis.",
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
      "Sebagai Purchaser untuk bisnis F&B yang saya dan teman-teman mulai, saya menangani pembelian bahan baku dan perlengkapan, termasuk:",
    bullets: [
      "Mengelola hubungan dengan pemasok.",
      "Memantau tingkat stok.",
      "Melakukan pembelian tepat waktu.",
      "Memastikan semua kebutuhan untuk produksi snack berkualitas tinggi terpenuhi.",
    ],
    ending:
      "Peran ini memungkinkan saya memanfaatkan keterampilan organisasi dan negosiasi untuk membantu kesuksesan bisnis kami.",
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
      "Sebagai Sales Representative, saya mengelola kemitraan sekolah untuk bisnis F&B kami, termasuk:",
    bullets: [
      "Mempresentasikan produk snack kami kepada sekolah untuk sistem konsinyasi.",
      "Memperluas jangkauan menggunakan keterampilan penjualan dan negosiasi.",
      "Membangun hubungan yang kuat dengan administrator sekolah dan pengelola kantin.",
    ],
    ending:
      "Peran ini membantu memperluas bisnis kami dan memperkuat kehadiran di kantin sekolah.",
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
      "Dalam peran saya sebagai Quality Assurance Analyst, saya memastikan keandalan dan kualitas produk perangkat lunak sebelum sampai ke pengguna akhir, termasuk:",
    bullets: [
      "Memvalidasi fitur dengan teliti agar sesuai ekspektasi klien.",
      "Mengurangi risiko bug kritis.",
      "Melakukan pengujian menyeluruh untuk menghasilkan produk yang dapat diandalkan (Trello, Notion).",
      "Menyediakan laporan bug yang detail untuk memudahkan penyelesaian masalah (Spreadsheet, Google Docs).",
    ],
    ending:
      "Hal ini berkontribusi pada peningkatan pengalaman dan kepuasan pengguna.",
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
      "Dalam peran kedua saya sebagai anggota tim operasional, saya mendukung pemimpin tim untuk memenuhi kebutuhan perusahaan, termasuk:",
    bullets: [
      "Membuat proposal (Google Docs).",
      "Mengelola interaksi dan keterlibatan klien.",
      "Mengembangkan materi pemasaran (Figma, Canva).",
      "Mengatur dan mempersiapkan rapat (GMeet, Google Calendar).",
      "Membantu entri data dan manajemen konten untuk situs pelanggan.",
    ],
    ending:
      "Menyeimbangkan tanggung jawab ini dengan peran awal saya menunjukkan kemampuan saya menangani banyak tugas dan berkontribusi pada keberhasilan tim.",
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
      "Dalam peran ketiga saya sebagai Generalist, saya memberikan dukungan fleksibel di berbagai tim untuk memastikan operasi berjalan lancar dan berkontribusi pada kesuksesan perusahaan, termasuk:",
    bullets: [
      "Membantu tim yang membutuhkan, terutama saat mengembangkan perangkat lunak dan menangani kebutuhan pelanggan.",
      "Melatih tim pemasaran agar memahami produk secara menyeluruh.",
      "Mempersiapkan dan menyampaikan presentasi produk dan sistem kepada klien, menjelaskan alur kerja, fitur, dan pendekatan teknis dengan jelas.",
      "Membuat antarmuka / desain Frontend sebagai dukungan bagi tim yang membutuhkan bantuan atas permintaan.",
      "Melakukan riset dan pengembangan mengenai kelayakan aplikasi, cakupan fitur, dan teknologi yang dapat digunakan untuk pengembangan aplikasi.",
    ],
    ending:
      "Fleksibilitas ini menunjukkan kemampuan saya untuk beradaptasi dan berkontribusi secara efektif di berbagai area dalam perusahaan.",
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
      "Sebagai Content Analyst, saya bekerja erat dengan konten video dan materi iklan untuk mengidentifikasi momen penting dan mengoptimalkan konten agar menarik bagi audiens, termasuk:",
    bullets: [
      "Memilih 15–25 timestamp untuk materi iklan, masing-masing 1–2 menit, berdasarkan kekuatan konten dan daya tarik penonton.",
      "Meninjau dan mengedit naskah iklan berdurasi 2 menit untuk memastikan akurasi tata bahasa dan penggunaan bahasa Indonesia yang jelas dan alami.",
      "Memastikan konten iklan memiliki hook yang kuat agar cepat menarik perhatian dan mempertahankan minat penonton.",
      "Memberikan insight mengenai segmen konten yang paling cocok untuk penggunaan marketing dan promosi.",
    ],
    ending:
      "Peran ini menunjukkan kemampuan saya dalam mengidentifikasi konten yang berdampak dan memastikan kualitas bahasa yang sesuai dengan merek dan audiens.",
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
      "Dalam peran saya sebagai QA Specialist, saya memastikan kualitas dan keandalan aplikasi mobile, khususnya di platform Android, termasuk:",
    bullets: [
      "Melakukan pengujian detail pada aplikasi Android untuk mengidentifikasi bug dan masalah kegunaan.",
      "Menguji seluruh proses pembayaran, termasuk transaksi sukses, penanganan gagal, dan skenario refund.",
      "Mengevaluasi dan mendokumentasikan area sistem yang perlu perbaikan atau tidak memenuhi standar internal.",
      "Memastikan setiap fitur memenuhi ekspektasi visual, fungsional, dan pengalaman pengguna.",
      "Memberikan masukan dan saran yang jelas untuk meningkatkan performa dan konsistensi sistem secara keseluruhan.",
      "Bekerja sama dengan developer untuk memverifikasi perbaikan bug dan memastikan aplikasi berjalan lancar.",
    ],
    ending:
      "Peran ini menyoroti perhatian saya terhadap detail, kemampuan berpikir dari perspektif pengguna, dan komitmen dalam menjaga kualitas produk yang tinggi.",
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
      "Dalam peran saya sebagai QA Specialist, saya memastikan kualitas dan keandalan aplikasi booking hotel di platform mobile maupun sistem admin, termasuk:",
    bullets: [
      "Melakukan pengujian menyeluruh pada fitur mobile dan admin untuk mengidentifikasi masalah fungsional, kegunaan, dan edge-case.",
      "Memvalidasi alur booking end-to-end, termasuk pembuatan reservasi, update status, dan pembatalan.",
      "Menguji proses pembayaran dan dompet digital, mencakup transaksi sukses, penanganan gagal, dan skenario refund.",
      "Memverifikasi akurasi transaksi dan konsistensi data antara aplikasi pengguna dan sistem admin.",
      "Memastikan setiap fitur memenuhi persyaratan bisnis, spesifikasi fungsional, dan standar pengalaman pengguna.",
    ],
    ending:
      "Pengalaman ini menyoroti perhatian saya terhadap detail, pemahaman alur bisnis, dan komitmen untuk memastikan pengalaman booking yang lancar dan dapat diandalkan bagi pengguna maupun administrator.",
    stack: ["Microsoft Teams", "Google Sheets", "Chrome DevTools", "Google Drive"],
    skills: ["Testing Process", "Text Planning", "Bug Triage", "Test-Driven Development", "Test Cases"],
    location: "Saudi Arabia - Remote"
  },
];


export const faqs = [
  {
    q: "Apa yang Anda butuhkan dari saya untuk memulai?",
    a: "Akses ke build/lingkungan, alur pengguna, kriteria penerimaan, dan risiko yang diketahui. Jika belum ada test plan, saya bisa membuatkan.",
  },
  {
    q: "Bagaimana cara Anda melaporkan bug?",
    a: "Langkah jelas untuk reproduksi bug, hasil yang diharapkan vs aktual, saran severity/priority, dan bukti pendukung (screenshot/video).",
  },
  {
    q: "Apakah bisa menguji Android + iOS?",
    a: "Ya—cakupan tergantung perangkat target. Untuk preview ini, ditampilkan sebagai kemampuan; nanti bisa ditambahkan matriks perangkat nyata.",
  },
];
