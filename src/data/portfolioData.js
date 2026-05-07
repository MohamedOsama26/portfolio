// ==========================================
// PORTFOLIO DATA - Easy to edit!
// ==========================================

export const personalInfo = {
  name: "Mohamed Osama Kandil",
  title: "Flutter Developer",
  tagline: "Building AI-powered Flutter apps for the Egyptian market",
  email: "mohamed.99.kandel@gmail.com",
  phone: "+201098964321",
  location: "Cairo, Egypt",
  profileImage: "https://raw.githubusercontent.com/MohamedOsama26/portfolio/refs/heads/main/public/assets/profile.jpeg",
};

export const socialLinks = {
  github: "https://github.com/MohamedOsama26",
  linkedin: "https://linkedin.com/in/mohamed-osama-kandil",
  pubdev: "https://pub.dev/packages/next_feature",
  twitter: "",
  dribbble: "",
};

export const aboutMe = {
  description: `Flutter developer with 3+ years of experience building production mobile applications.
    Currently at GTS Systems as sole mobile developer. Published on pub.dev and Google Play.
    Integrating AI into mobile apps — currently building Makany, a bilingual AI discovery app
    for Egypt using Google Gemini and Egyptian Arabic NLP.`,
  highlights: [
    "Flutter Developer at GTS Systems — sole mobile developer",
    "Published next_feature package on pub.dev",
    "Cash Note app on Google Play Store (50+ downloads)",
    "ITIDA Digital Twin Diploma (Oct 2024 – Feb 2025)",
  ],
  currentlyWorkingOn: "Building Makany — an AI-powered local discovery app for Egypt with bilingual Arabic/English NLP. Also building an open-source Flutter Ollama chat client with Egyptian Arabic dialect support.",
};

export const projects = [
  {
    id: 1,
    title: "Makany — مكاني",
    description: "An AI-powered local discovery app for Egypt with bilingual Arabic/English NLP. Helps users discover nearby places with natural language search in Egyptian Arabic dialect using Google Gemini.",
    image: "/assets/projects/makany.png",
    technologies: ["Flutter", "Dart", "Google Gemini", "NLP", "Arabic NLP", "Firebase"],
    github: "",
    demo: "",
    apk: "",
    featured: true,
    badge: "In Development",
  },
  {
    id: 2,
    title: "next_feature",
    description: "A CLI tool published on pub.dev that generates Flutter feature folder structure with clean architecture. Supports Bloc, GetX, Provider, and Riverpod — automating boilerplate for faster development.",
    image: "/assets/projects/next-feature.png",
    technologies: ["Dart", "CLI", "Clean Architecture", "Code Generation"],
    github: "https://github.com/MohamedOsama26/next-feature",
    demo: "https://pub.dev/packages/next_feature",
    apk: "",
    featured: true,
    badge: "pub.dev",
  },
  {
    id: 3,
    title: "Ollama Egyptian Chat",
    description: "An open-source Flutter chat client for Ollama with Egyptian Arabic dialect support. Allows users to run local LLMs and converse in Egyptian Arabic.",
    image: "/assets/projects/ollama-chat.png",
    technologies: ["Flutter", "Dart", "Ollama", "LLM", "Egyptian Arabic"],
    github: "",
    demo: "",
    apk: "",
    featured: true,
    badge: "In Development",
  },
  {
    id: 4,
    title: "Cash Note",
    description: "A personal finance mobile application to track income and expenses, available on Google Play Store. Helps users manage their money by recording transactions and providing financial overviews.",
    image: "/assets/projects/cash-note.png",
    technologies: ["Flutter", "Dart", "Local Storage"],
    github: "https://github.com/MohamedOsama26/cash_note",
    demo: "https://play.google.com/store/apps/details?id=com.bedaya.cash_note",
    apk: "",
    featured: false,
    badge: "Google Play",
  },
  {
    id: 5,
    title: "Mason Bricks",
    description: "A collection of Mason bricks for Flutter development. Generates consistent boilerplate code and maintains project structure standards across Flutter projects.",
    image: "/assets/projects/mason-bricks.png",
    technologies: ["Dart", "Mason", "Code Generation"],
    github: "https://github.com/MohamedOsama26/mason-bricks",
    demo: "",
    apk: "",
    featured: false,
    badge: "",
  },
  {
    id: 6,
    title: "City Weather App",
    description: "A weather application displaying current conditions and forecasts for cities. Built to practice API integration and state management in Flutter.",
    image: "/assets/projects/weather.png",
    technologies: ["Flutter", "Dart", "REST API", "Weather API"],
    github: "https://github.com/MohamedOsama26/City-Weather-Application",
    demo: "",
    apk: "",
    featured: false,
    badge: "",
  },
];

export const skills = {
  "Mobile Development": [
    "Flutter", "Dart", "Bloc", "Riverpod", "GetX", "Hive", "Dio", "Firebase",
  ],
  "Architecture & Patterns": [
    "Clean Architecture", "Repository Pattern", "MVVM", "REST API Integration",
  ],
  "AI & Emerging Tech": [
    "Google Gemini", "Ollama", "LLM Integration", "Egyptian Arabic NLP", "Digital Twin",
  ],
  "Backend & Tools": [
    "Node.js", "Express", "MongoDB", "Git", "Mason CLI", "pub.dev", "Google Play Console",
  ],
};

export const education = [
  {
    id: 1,
    title: "Digital Twin Diploma",
    institution: "ITIDA — Information Technology Industry Development Agency",
    period: "Oct 2024 - Feb 2025",
    description: "Comprehensive training in Digital Twin technologies, covering IoT integration, 3D modeling concepts, and real-time data synchronization fundamentals.",
    certificate: "",
  },
  {
    id: 2,
    title: "B.Sc. in Computer Science",
    institution: "Faculty of Science, Suez Canal University",
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
