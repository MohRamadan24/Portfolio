// フロントエンド専用のモックデータ（まだバックエンドなし）
// 後で本物のAPI呼び出しに置き換えてください。

import { Instagram } from "lucide-react";

export const resume = {
  title: "CVをダウンロード",
}

export const profile = {
  name: "モハメッド・ラマダン",
  headline: "QAアナリスト",
  location: "リモート / 世界中",
  photoUrl: "/images/fotoBebasRamaKotak280x280.png",
  summary:
    "私はソフトウェアの品質を確保することにおいて、3年以上の経験を持つQAアナリストです。優れた口頭および文章でのコミュニケーション能力を備え、複雑なソフトウェアの問題をわかりやすく説明することが得意です。効果的なテスト戦略により、プロダクションへのバグ流出を最大95％削減しました。細部に注意を払い、チームと協力し、高品質なソフトウェア製品を提供することに尽力しています。",
  quickStats: [
    { label: "経験", value: "4年以上" },
    { label: "バグ流出削減率", value: "最大95％" },
    { label: "対応プラットフォーム", value: "Web • Android • iOS" },
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
    title: "QA＆UAT（Web＆モバイル）",
    description:
      "シナリオベーステスト、探索的テスト、回帰テスト、スモークテスト、および再現可能な手順を伴うユーザー受け入れテスト（UAT）。",
    highlights: [
      "テスト計画＆チェックリスト",
      "明確なバグ報告",
      "マルチデバイス対応",
      "リリース承認サポート",
    ],
  },
  {
    title: "UI＆UXデザイン",
    description:
      "ユーザー中心のインターフェイスと体験設計。プラットフォーム間での明確さ、使いやすさ、視覚的一貫性に重点を置く。",
    highlights: [
      "ユーザーフロー＆ワイヤーフレーム",
      "高精度UIデザイン",
      "デザインシステム＆コンポーネント",
      "ユーザビリティ＆UXレビュー",
    ],
  },
  {
    title: "ランディングページ＆CMS",
    description:
      "コンバージョンに最適化されたランディングページおよびCMSベースのウェブサイト。高速、レスポンシブ、管理が簡単。",
    highlights: [
      "モダンなランディングページデザイン",
      "レスポンシブ対応",
      "CMS設定（WordPress / Processwire）",
      "簡単なコンテンツ管理",
    ],
  },
];


export const toolbox = {
  primary: [
    "ジラ (Jira)",
    "トレロ (Trello)",
    "カタロン (Katalon)",
    "ポストマン (Postman)",
    "フィグマ (Figma)",
    "グーグルスプレッドシート (Google Sheets)",
    "スラック (Slack)",
    "マイクロソフトチームズ (Microsoft Teams)",
  ],
  testing: [
    "探索的テスト (Exploratory Testing)",
    "回帰テスト (Regression)",
    "スモークテスト (Smoke)",
    "ユーザー受け入れテスト (UAT)",
    "APIテスト (API Testing)",
    "クロスブラウザテスト (Cross-browser)",
    "モバイルテスト (Mobile testing)",
  ],
  deliverables: [
    "バグ報告書 (Bug reports)",
    "テストケース (Test cases)",
    "テストサマリーレポート (Test summary report)",
    "UI/UXチェックリスト (UI/UX checklist)",
    "リリースノートサポート (Release notes support)",
  ],
};


export const certifications = [
  {
    title: "Agile Requirements Analysis",
    issuer: "Alison",
    year: "2024年",
    credential: "https://alison.com/certification/check/fdd0490960",
  },
  {
    title: "EF SET English Certificate 73/100 (C2レベル・上級)",
    issuer: "EF SET",
    year: "2025年",
    credential: "https://cert.efset.org/id/2EGvH4",
  },
  {
    title: "Lembaga Sertifikasi Profesi (LSP) - RPL (88点)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2022年",
    credential: "https://drive.google.com/file/d/1LOp9lABezSVNaY5fAA06zTIAd0YjCGpI/view?usp=sharing",
  },
  {
    title: "MongoDB and the Document Model",
    issuer: "MongoDB",
    year: "2023年",
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
    country : "Kuwait（クウェート）",
    stars: 5,
    timeAgo: "9か月前",
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
    status: "リピートクライアント",
    countryCode: "IN",
    country : "India（インド）",
    stars: 5,
    timeAgo: "7か月前",
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
    status: "リピートクライアント",
    countryCode: "IN",
    country : "India（インド）",
    stars: 5,
    timeAgo: "7か月前",
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
    status: "リピートクライアント",
    countryCode: "US",
    country : "United States（アメリカ合衆国）",
    stars: 5,
    timeAgo: "5か月前",
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
    status: "リピートクライアント",
    countryCode: "SA",
    country : "Saudi Arabia（サウジアラビア）",
    stars: 5,
    timeAgo: "2か月前",
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
    status: "リピートクライアント",
    countryCode: "SA",
    country : "Saudi Arabia（サウジアラビア）",
    stars: 5,
    timeAgo: "1か月前",
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
    tags: ["Company Profile", "Google Cloud VM", "Processwire"],
  },
  {
    id: "p2",
    title: "Cafe Landing Page",
    subtitle: "Business Profile & CMS",
    href: "https://mohramadan-wordpress.infinityfree.me/wordpress",
    thumbnail:
      "/images/screenshotPortfolio2.png",
    tags: ["Bussiness Profile", "CPanel", "Wordpress"],
  },
  {
    id: "p3",
    title: "Portfolio Site",
    subtitle: "Static Landing Page",
    href: "https://mohramadan.trinitymerge.my.id/",
    thumbnail:
      "/images/screenshotPortfolio3.png",
    tags: ["Landing Page", "Github Pages", "Responsive"],
  },
];

export const experience = [
  {
    id: "e1",
    title: "ソフトウェアテスター（フリーランス）",
    company: "PT. Alpha Tech Indonesia",
    period: "2021年10月 - 2021年11月",
    duration: "1か月",
    opening:
      "ソフトウェア会社でフリーランスのソフトウェアテスターとして経験を積み、以下の分野を専門に担当しました：",
    bullets: [
      "ソフトウェアのバグを特定する。",
      "詳細なドキュメントと共にバグを報告する。",
    ],
    ending:
      "この役割により、ソフトウェア開発の複雑さを深く理解し、スキルを向上させることができました。",
    stack: ["Google Docs", "Google Drive", "Google Slides"],
    skills: ["Software Testing", "Bug Tracking"],
    location: "Aliyan Business Centre, Jl. Hasanuddin No.66, Plipir, Sekardangan, Kec. Sidoarjo, Jawa Timur 61215 - Remote"
  },
  {
    id: "e2",
    title: "アドミニストレーションアシスタント（インターンシップ）",
    company: "BPJS Ketenagakerjaan",
    period: "2021年4月 — 2021年12月",
    duration: "9か月",
    opening:
      "高校のインターンシッププログラムの一環として、全国保険会社でアドミニストレーションアシスタントとして勤務し、以下の業務を担当しました：",
    bullets: [
      "さまざまな事務作業を担当（Ms Word、Ms Excel、Canva）。",
      "顧客とのやり取りやプラットフォーム上でのソーシャル化を実施。",
      "顧客からの苦情対応や問い合わせ処理のスキルを習得。",
    ],
    ending:
      "この経験により、会社の運営に関する貴重な知識と洞察を得ることができ、将来の職業生活に備えることができました。",
    stack: ["Google Sheet", "Canva", "Ms Excel", "Ms Word", "Google Contact"],
    skills: ["Problem Solving", "Data Entry", "Data Visualization", "Customer Service", "File Management", "Critical Thinking", "Administrative Assistance"],
    location: "Jl. Doktor Sutomo No.1, Klojen, Malang, Jawa Timur - Onsite"
  },
  {
    id: "e3",
    title: "テーラー（パートタイム）",
    company: "Littlemisshamper",
    period: "2021年9月 — 2022年12月",
    duration: "1年4か月",
    opening:
      "高校時代、Littlemisshamperでテーラー兼プロダクトデザイナーとして勤務し、以下のスキルを習得しました：",
    bullets: [
      "クライアントのニーズに合わせたカスタム製品の作成。",
      "ハンパー、ラップトップバッグ、ギフトバッグ、財布など様々なバッグをデザイン・製作し、スタイルと機能性を両立。",
      "高品質基準を満たすための精密な裁縫とクラフトマンシップを実行。",
      "美的センスと実用性を兼ね備えた独創的なアイテムを手作業で制作。",
    ],
    ending:
      "この役割により、創造力を発揮し、貴重なプロフェッショナルスキルを身につけることができました。",
    skills: ["Team Management", "Creative Pattern Cutting", "Cutting Cloth", "Design Thinking", "Critical Thinking", "Project Management", "Product Design", "Tailoring"],
    location: "Perumahan bukit dieng R 10 Malang Jawa Timur - Onsite"
  },
  {
    id: "e4",
    title: "ソフトウェア開発者（フリーランス）",
    company: "Universitas Negeri Malang",
    period: "2023年12月 — 2024年1月",
    duration: "1か月",
    opening:
      "大学生向けのメンタルヘルス調査ウェブサイトを作成するフリーランスのソフトウェア開発者として勤務し、2週間にわたり以下を行いました：",
    bullets: [
      "ウェブサイトの機能を分析し、要件とユーザーのニーズを把握。",
      "スケーラビリティと効率的なデータ管理を考慮したシステムアーキテクチャとデータベースを設計。",
      "フロントエンドとバックエンドを統合し、コア機能を開発・実装。",
      "最終テストと改善を行い、完全に機能するウェブサイトを公開。",
    ],
    ending:
      "このプロジェクトにより、大学生のメンタルヘルス支援に貢献する実践的なウェブソリューションを提供できました。",
    stack: ["PHP", "MySQL", "CSS", "Apache"],
    skills: ["Front-End Development", "Software System Analysis", "Back-End Web Development"],
    location: "Jl. Ambarawa No.5, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145 - Remote"
  },
  {
    id: "e5",
    title: "購買担当（パートタイム）",
    company: "SSR Snack",
    period: "2024年2月 — 2024年10月",
    duration: "9か月",
    opening:
      "友人と共同で始めたF&Bビジネスの購買担当として、以下の業務を担当しました：",
    bullets: [
      "サプライヤーとの関係管理。",
      "在庫レベルの監視。",
      "タイムリーな購入。",
      "高品質なスナックを生産するために必要なすべてを確保。",
    ],
    ending:
      "この役割により、組織力と交渉力を活用してビジネス成功に貢献できます。",
    skills: ["Market Research", "Market Analysis"],
    location: "Sidoarjo, East Java, Indonesia - Hybrid"
  },
  {
    id: "e6",
    title: "営業担当（パートタイム）",
    company: "SSR Snack",
    period: "2024年2月 — 2024年10月",
    duration: "9か月",
    opening:
      "営業担当として、学校との提携や販売業務を管理し、以下を行いました：",
    bullets: [
      "学校へのスナックの展示と委託販売。",
      "営業と交渉スキルを活用して販路拡大。",
      "学校の管理者やカフェテリアマネージャーとの良好な関係構築。",
    ],
    ending:
      "この役割により、ビジネスを拡大し、学校カフェテリアでの存在感を強化できます。",
    skills: ["Sales and Negotiation", "Market Research", "Analytical Skills"],
    location: "Sidoarjo, East Java, Indonesia - Hybrid"
  },
  {
    id: "e7",
    title: "品質保証アナリスト",
    company: "PT. Alpha Tech Indonesia",
    period: "2022年5月 — 2025年6月",
    duration: "3年2か月",
    opening:
      "品質保証アナリストとして、ソフトウェア製品がエンドユーザーに届く前に、信頼性と品質を確保するために以下を行いました：",
    bullets: [
      "機能がクライアントの期待に沿っているか慎重に検証。",
      "重大なバグのリスクを低減。",
      "徹底的なテストを実施し、信頼性の高い製品を提供（Trello, Notion）。",
      "詳細なバグ報告書を作成し、効率的な解決を支援（Spreadsheet, Google Docs）。",
    ],
    ending:
      "これにより、ユーザーエクスペリエンスと満足度を向上させることができました。",
    stack: ["Postman", "Trello", "GitMind", "Google Sheets"],
    skills: ["System Analysis", "MySQL", "Problem Solving", "Technical Documentation", "Test Planning", "MongoDB", "Software Testing", "Quality Management", "PHP", "Critical Thinking", "Software System Analysis", "JavaScript", "PhpMyAdmin", "Unified Modeling Language (UML)", "REST APIs", "Requirements Analysis", "Node.js", "Analytical Skills"],
    location: "Aliyan Business Centre, Jl. Hasanuddin No.66, Plipir, Sekardangan, Kec. Sidoarjo, Jawa Timur 61215 - Onsite"
  },
  {
    id: "e8",
    title: "オペレーションチームメンバー",
    company: "PT. Alpha Tech Indonesia",
    period: "2023年6月 — 2025年6月",
    duration: "2年1か月",
    opening:
      "オペレーションチームメンバーとして、チームリーダーをサポートし、以下の業務を行いました：",
    bullets: [
      "提案書作成（Google Docs）。",
      "クライアント対応・関与管理。",
      "マーケティング資料作成（Figma, Canva）。",
      "会議の準備・整理（GMeet, Google Calendar）。",
      "顧客ウェブサイトのデータ入力およびコンテンツ管理を補助。",
    ],
    ending:
      "最初の役割と並行してこれらの業務をこなすことで、複数タスクを扱う能力を示しました。",
    stack: ["Figma", "Canva", "Google Docs", "Google Meet"],
    skills: ["Problem Solving", "Proposal Writing", "Figma", "Requirement Analysis", "Canva", "Public Speaking"],
    location: "Aliyan Business Centre, Jl. Hasanuddin No.66, Plipir, Sekardangan, Kec. Sidoarjo, Jawa Timur 61215 - Onsite"
  },
  {
    id: "e9",
    title: "ゼネラリスト",
    company: "PT. Alpha Tech Indonesia",
    period: "2024年7月 — 2025年6月",
    duration: "1年",
    opening:
      "ゼネラリストとして、さまざまなチームを柔軟にサポートし、円滑な業務運営と会社の成功に貢献しました：",
    bullets: [
      "特にソフトウェア開発や顧客対応で、必要なチームを支援。",
      "マーケティングチームへの製品理解のトレーニング。",
      "クライアント向けに製品・システムプレゼンテーションを準備・実施。",
      "フロントエンドデザインやUI作成をチームサポートとして提供。",
      "アプリケーションの実現可能性、機能範囲、技術調査および研究開発。",
    ],
    ending:
      "この柔軟性により、会社の複数分野で効果的に貢献できる能力を示しました。",
    stack: ["Bootstrap", "Canva", "Google Docs", "VS Code"],
    skills: ["Tailwind CSS", "Problem Solving", "Presentation Skills", "Software Tutorial - Document", "Research and Development (R&D)", "Software Trainer", "HMVC Framework"],
    location: "Aliyan Business Centre, Jl. Hasanuddin No.66, Plipir, Sekardangan, Kec. Sidoarjo, Jawa Timur 61215 - Onsite"
  },
  {
    id: "e10",
    title: "コンテンツアナリスト",
    company: "KUKU FM",
    period: "2025年5月 — 2025年7月",
    duration: "3か月",
    opening:
      "コンテンツアナリストとして、動画コンテンツや広告素材と密接に連携し、主要な瞬間を特定し、視聴者エンゲージメントを最適化しました：",
    bullets: [
      "広告素材用の15〜25個のタイムスタンプを選定（各1〜2分）、内容の強さと視聴者の魅力に基づく。",
      "2分間の広告スクリプトをレビュー・編集し、文法の正確性と自然で明確なインドネシア語の使用を確認。",
      "広告内容に注目を引く強力なフックを含め、関心を維持。",
      "マーケティングやプロモーションに最適なコンテンツセグメントを提案。",
    ],
    ending:
      "この役割により、インパクトのあるコンテンツを特定し、ブランドや視聴者に沿った言語品質を確保する能力を示しました。",
    stack: ["Slack", "Google Sheets", "Google Docs", "Google Drive"],
    skills: ["Analytical Skills", "Script Editing", "Content Review"],
    location: "Mumbai, India - Remote"
  },
  {
    id: "e11",
    title: "QAスペシャリスト",
    company: "KUKU FM",
    period: "2025年5月 — 2025年7月",
    duration: "3か月",
    opening:
      "QAスペシャリストとして、特にAndroidプラットフォーム上でのモバイルアプリの品質と信頼性を確保しました：",
    bullets: [
      "Androidアプリの詳細テストを実施し、バグや使いやすさの問題を特定。",
      "支払いプロセス全体をテスト（成功、失敗処理、返金シナリオ）。",
      "システムの改善が必要な箇所を評価・記録。",
      "各機能が視覚・機能・ユーザー体験の期待に沿っているか確認。",
      "改善提案とフィードバックを明確に提供し、システムの性能向上を支援。",
      "開発者と協力してバグ修正を確認し、アプリのスムーズな動作を保証。",
    ],
    ending:
      "この役割は、細部への注意、ユーザー視点で考える能力、高品質な製品を維持するコミットメントを示しています。",
    stack: ["Slack", "Google Sheets", "Google Docs", "Google Drive"],
    skills: ["Bug Triage", "Test Planning", "Test Cases"],
    location: "Mumbai, India - Remote"
  },
  {
    id: "e12",
    title: "QAスペシャリスト",
    company: "NNTRAVEL LLC",
    period: "2025年10月 — 2025年12月",
    duration: "3か月",
    opening:
      "QAスペシャリストとして、ホテル予約アプリケーションのモバイルおよび管理システム上での品質と信頼性を確保しました：",
    bullets: [
      "モバイルおよび管理機能の包括的なテストを実施し、機能、使いやすさ、エッジケースの問題を特定。",
      "予約作成、ステータス更新、キャンセルを含むエンドツーエンドの予約フローを検証。",
      "支払いおよびウォレットプロセスをテスト（成功、失敗処理、返金シナリオ）。",
      "ユーザー向けアプリと管理システム間のトランザクションの正確性とデータ整合性を確認。",
      "各機能がビジネス要件、機能仕様、ユーザー体験基準を満たしているか確認。",
    ],
    ending:
      "この経験は、細部への注意、業務フローの理解、およびユーザーと管理者にとってシームレスで信頼性のある予約体験を提供するコミットメントを示しています。",
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
