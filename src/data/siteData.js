export const projectList = [
  {
    index: "01",
    category: "BUSINESS SYSTEMS",
    name: "QPOOS ERP",
    stack: "Java 21 · Spring Boot · PostgreSQL",
    summary:
      "Modular ERP backend for accounting, company management, customers, inventory, and expense workflows.",
    points: [
      "Structured as a modular monolith, with domain boundaries designed to support future service extraction.",
      "Models accounting through balanced journal entries and ledger postings.",
      "Includes role-based authentication and authorization with Spring Security.",
    ],
    link: "https://github.com/shivampatel183/qpooserp",
  },
  {
    index: "02",
    category: "MULTI-TENANT PORTAL",
    name: "VisaFlow",
    stack: "Angular · TypeScript · Supabase",
    summary:
      "A multi-tenant application with distinct workflows for administrators and visa applicants.",
    points: [
      "Supports administrator-managed applicant access and applicant visa forms.",
      "Uses Supabase authentication and PostgreSQL row-level security for tenant-scoped data access.",
      "Separates application, admin, and applicant routes.",
    ],
    link: "https://github.com/shivampatel183/VisaFlow-",
  },
  {
    index: "03",
    category: "REAL-TIME OPERATIONS",
    name: "Restaurant QR Order",
    stack: "Angular · TypeScript · Supabase Realtime",
    summary:
      "QR ordering and kitchen board for restaurant operations and customer ordering.",
    points: [
      "Customers access a table-specific menu through a QR code and place orders.",
      "Kitchen staff see incoming orders on a live order board; admins manage menus and orders.",
      "Uses Supabase database, realtime updates, authentication, and row-level security without a custom backend.",
    ],
    link: "https://github.com/shivampatel183/Restaurant-qr-order",
  },
  {
    index: "04",
    category: "WEB APP",
    name: "ARV Tune",
    stack: "React.js · JavaScript · Web Speech API",
    summary:
      "A music web app for listening, building playlists, and controlling playback by voice.",
    points: [
      "Supports voice commands for playback actions, including play, pause, next, and volume.",
      "Uses modular React components to keep the interface organized.",
    ],
    link: "https://github.com/shivampatel183/arv-tune",
  },
  {
    index: "05",
    category: "VOICE AI",
    name: "EDITH",
    stack: "Python",
    summary:
      "A personal assistant built around voice-activated commands for everyday tasks.",
    points: [
      "Provides weather updates, calendar scheduling, and web search capabilities.",
      "Combines multiple utility actions in a single voice-driven interface.",
    ],
    link: "https://github.com/shivampatel183/E.D.I.T.H",
  },
  {
    index: "06",
    category: "BUSINESS WEBSITE",
    name: "TheVID IMPEX",
    stack: "HTML · CSS · JavaScript",
    summary:
      "A responsive business portfolio website presenting company products, services, and achievements.",
    points: [
      "Designed to keep company information accessible across different device sizes.",
      "Built the interface around clear presentation of business offerings.",
    ],
    link: "https://github.com/shivampatel183/THEVID-IMPEX",
  },
  {
    index: "07",
    category: "DESKTOP APP",
    name: "IMS",
    stack: "Python · Tkinter · SQLite",
    summary:
      "Inventory Management System to maintain and update inventory records.",
    points: [
      "Supports adding items, updating quantities, and removing inventory.",
      "Uses SQLite to store and retrieve inventory information.",
    ],
    link: "https://github.com/shivampatel183/Inventory-Management-System",
  },
  {
    index: "08",
    category: "DATA SCIENCE",
    name: "Banking",
    stack: "Python · Pandas · NumPy · Matplotlib · Seaborn",
    summary:
      "Predictive analytics project exploring how data models can help inform bank marketing campaigns.",
    points: [
      "Applied exploratory analysis and feature extraction to campaign data.",
      "Compared prediction algorithms and model accuracy to identify useful campaign signals.",
    ],
    link: "https://github.com/shivampatel183/--Bank-marketing-campaign-Predictive-analytics-",
  },
  {
    index: "09",
    category: "DIGITAL SYSTEMS",
    name: "8085",
    stack: "Logisim",
    summary:
      "A digital logic project exploring the operation and architecture of the 8085 microprocessor.",
    points: [
      "Implemented circuit logic in Logisim to study how the processor operates.",
      "Built practical understanding of processor architecture and digital systems.",
    ],
    link: "https://github.com/shivampatel183/8085-microprocessor",
  },
];

export const educationDetails = [
  {
    school: "Pandit Deendayal Energy University, Gujarat",
    degree: "B.Tech in Information and Communication Technology",
    years: "2021 - 2025",
    detail: "CGPA: 8.6",
  },
  {
    school: "Maharshi Gurukul, Halvad",
    degree: "Secondary and Higher Secondary Education",
    years: "2019 - 2021",
    detail: "Percentage: 85%",
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    items: "C++, C#, Python, JAVA, HTML, CSS, JavaScript, TypeScript",
  },
  { title: "Frameworks", items: "React, Angular, Spring Boot, .Net" },
  { title: "Cloud & Databases", items: "MongoDB, SQL, AWS, Azure" },
  { title: "Developer Tools", items: "GitHub, Splunk, Jira, Slack, Postman" },
  {
    title: "Soft Skills",
    items: "Problem Solving, Teamwork, Leadership, Adaptability",
  },
  {
    title: "Areas of Interest",
    items:
      "Software Development, Artificial Intelligence, Machine Learning, Neural Networks",
  },
];

export const experienceItems = [
  {
    badge: "Jan 2025 - Present",
    role: "Software Development Engineer",
    company: "InfoElegant Solution Pvt Ltd",
    bullets: [
      "AI-Assisted Development: Utilized Cursor and AI-driven pair programming to optimize code performance and accelerate learning of emerging cloud technologies.",
      "CI/CD & Testing: Automated code validation by triggering Jenkins test suites for all feature changes, ensuring high-quality deployments to company staging environments.",
      "Version Control: Managed complex codebases using Git, overseeing the full lifecycle of Pull Requests (PRs) and merge requests to maintain repository integrity.",
      "Agile & Collaboration: Executed sprint cycles via Jira for task tracking and coordinated with teams using Slack and Zoom for daily stand-ups.",
      "Quality Assurance: Validated integration logic in Playground environments to minimize downtime in the sync middleware before production rollout.",
    ],
  },
  {
    badge: "Jul 2024 - Sep 2024",
    role: "SDE Intern",
    company: "Brainy Beam InfoTech",
    bullets: [
      "Data Pipelines: Engineered automated data pipelines and implemented Machine Learning classification models using Python.",
      "Predictive Analytics: Applied analytics to bank marketing campaigns, achieving 85% model accuracy and delivering insights through interactive dashboards.",
    ],
  },
];

export const certifications = [
  {
    title: "BRAINYBEAM Internship",
    detail: "Data Science & Machine Learning • May - July 2024",
  },
  {
    title: "Privacy and Security in Online Social Media",
    detail: "NPTEL • Jan - Apr 2024",
  },
  { title: "Full Stack Web Development", detail: "Codedamn • Apr 2024" },
  {
    title: "AWS Data Analytics Fundamentals",
    detail: "Amazon Web Services • Jan 2024",
  },
];

export const achievements = [
  "Participated in Smart India Hackathon 2023",
  "School Level Winner in Tata Building India Essay Competition 2015-16",
  "Strong academic performance with B.Tech in Information and Communication Technology and 85% in senior secondary education",
];
