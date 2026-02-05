// ==========================================
// PORTFOLIO DATA - Easy to edit!
// ==========================================

export const personalInfo = {
  name: "Mohamed Osama",
  title: "Flutter Developer",
  tagline: "Building cross-platform mobile experiences with clean architecture",
  email: "mohamed.99.kandel@gmail.com",
  phone: "+201098964321",
  location: "Cairo, Egypt",
  profileImage: "public/assets/profile.jpeg", // Add your profile image to public/assets/
};

export const socialLinks = {
  github: "https://github.com/MohamedOsama26",
  linkedin: "https://linkedin.com/in/mohamed-osama-kandil",
  twitter: "",
  dribbble: "",
};

export const aboutMe = {
  description: `I'm a Flutter developer currently working at GTS software systems company, focused on building
    high-quality cross-platform mobile applications. I'm passionate about clean architecture
    and creating tools that help developers work more efficiently. Recently completed a
    Digital Twin diploma and excited to explore the intersection of mobile development and IoT.`,
  highlights: [
    "Flutter Developer at GTS software systems company",
    "Published package on pub.dev (next_feature)",
    "App published on Google Play Store",
    "Digital Twin diploma graduate",
  ],
  currentlyWorkingOn: "Expanding my skills in Digital Twin technologies while building Flutter applications",
};

export const projects = [
  {
    id: 1,
    title: "next_feature",
    description: "A CLI tool I created to generate Flutter feature folder structure with clean architecture. Supports multiple state management solutions (Bloc, GetX, Provider, Riverpod) and automates boilerplate code creation for faster development.",
    image: "/assets/projects/next-feature.png",
    technologies: ["Dart", "CLI", "Clean Architecture", "Code Generation"],
    github: "https://github.com/MohamedOsama26/next-feature",
    demo: "https://pub.dev/packages/next_feature",
    apk: "",
    featured: true,
  },
  {
    id: 2,
    title: "Cash Note",
    description: "A personal finance mobile application to track income and expenses. Helps users manage their money by recording transactions and providing an overview of their financial activity.",
    image: "/assets/projects/cash-note.png",
    technologies: ["Flutter", "Dart", "Local Storage"],
    github: "https://github.com/MohamedOsama26/cash_note",
    demo: "https://play.google.com/store/apps/details?id=com.bedaya.cash_note",
    apk: "",
    featured: true,
  },
  {
    id: 3,
    title: "Mason Bricks",
    description: "A collection of Mason bricks for Flutter development. Helps generate consistent boilerplate code and maintain project structure standards across Flutter projects.",
    image: "/assets/projects/mason-bricks.png",
    technologies: ["Dart", "Mason", "Code Generation"],
    github: "https://github.com/MohamedOsama26/mason-bricks",
    demo: "",
    featured: false,
  },
  {
    id: 4,
    title: "Fruits Market",
    description: "An e-commerce mobile application for fruits. Features product browsing, cart management, and a clean user interface for online shopping.",
    image: "/assets/projects/fruits-market.png",
    technologies: ["Flutter", "Dart", "E-Commerce"],
    github: "https://github.com/MohamedOsama26/FruitsMarket",
    demo: "",
    featured: false,
  },
  {
    id: 5,
    title: "City Weather App",
    description: "A weather application that displays current weather conditions and forecasts for cities. Built to practice API integration and state management in Flutter.",
    image: "/assets/projects/weather.png",
    technologies: ["Flutter", "Dart", "REST API", "Weather API"],
    github: "https://github.com/MohamedOsama26/City-Weather-Application",
    demo: "",
    featured: false,
  },
];

export const skills = {
  "Mobile Development": [
    { name: "Flutter", level: 90 },
    { name: "Dart", level: 90 },
    { name: "Clean Architecture", level: 85 },
    { name: "State Management (Bloc/GetX)", level: 85 },
  ],
  "Tools & DevOps": [
    { name: "Git & GitHub", level: 85 },
    { name: "Mason CLI", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Firebase", level: 75 },
  ],
  "Learning & Exploring": [
    { name: "Digital Twin Concepts", level: 60 },
    { name: "IoT Basics", level: 50 },
    { name: "Unity 3D", level: 40 },
    { name: "REST APIs", level: 80 },
  ],
};

export const education = [
  {
    id: 1,
    title: "Digital Twin Diploma",
    institution: "National Technology Institute",
    period: "Oct 2024 - Feb 2025",
    description: "Comprehensive training in Digital Twin technologies, covering IoT integration, 3D modeling concepts, and real-time data synchronization fundamentals.",
    certificate: "",
  },
  {
    id: 2,
    title: "Bachelor's in Computer Science",
    institution: "Suez Canal University",
    period: "2017 - 2021",
    description: "Focused on software engineering, mobile development, and emerging technologies.",
    certificate: "",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
