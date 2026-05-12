import { Project, Experience, Skill, SocialLink, NavItem } from "@/types";

export const siteConfig = {
  name: "Achyuta Kumar Singh",
  title: "Full Stack Developer & Designer",
  description:
    "I craft exceptional digital experiences that live at the intersection of design and engineering. Passionate about building products that make a difference.",
  url: "https://Achyuta.dev",
  email: "hello@Achyuta.dev",
  location: "India",
  availability: "Available for freelance & full-time",
  resumeUrl: "/resume.pdf",
};

export const navItems: NavItem[] = [
  { name: "Home", href: "/", shortcut: "1" },
  { name: "Projects", href: "/projects", shortcut: "2" },
  { name: "About", href: "/about", shortcut: "3" },
  { name: "Contact", href: "/contact", shortcut: "4" },
  { name: "Resume", href: "/resume", shortcut: "5" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Achyuta", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/Achyuta", icon: "linkedin" },
  { name: "Twitter", url: "https://x.com/Achyuta", icon: "twitter" },
  { name: "Email", url: "mailto:hello@Achyuta.dev", icon: "mail" },
];

export const projects: Project[] = [
  {
    id: "civic-sense",
    title: "Civic Sense",
    description: "A smart city platform using ML/NLP to intelligently route, prioritize, and resolve citizen-reported civic issues.",
    longDescription: "Civic Sense transforms how cities handle public complaints. Using natural language processing and machine learning, the platform automatically categorizes issues, predicts priority levels, detects duplicates, and routes complaints to the right department. The result: 60% faster resolution times and 40% reduction in duplicate reports.",
    image: "/images/project-civic.jpg",
    tags: ["Full Stack", "ML", "React", "FastAPI"],
    category: "web",
    github: "https://github.com/achyutakumarsingh/Hackathon",
    live: "https://hackathon-snowy-ten.vercel.app/",
    featured: true,
    metrics: { stars: 850, users: "5K+", performance: "60% faster resolution" },
    year: "2025",
    stack: ["React", "FastAPI", "TensorFlow", "PostgreSQL", "Vercel", "Render"],
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Full Stack Developer",
    company: "TechNova Inc.",
    companyUrl: "https://technova.io",
    location: "Remote",
    period: "Jan 2025 – Present",
    description: "Leading development of AI-powered developer tools and internal platforms serving 200+ engineers.",
    achievements: [
      "Architected microservices platform reducing deployment time by 70%",
      "Led migration from monolith to event-driven architecture",
      "Mentored team of 5 junior developers",
      "Achieved 99.99% uptime across all services",
    ],
    stack: ["Next.js", "TypeScript", "Go", "PostgreSQL", "AWS", "Docker"],
    type: "work",
  },
  {
    id: "exp-2",
    role: "Full Stack Developer",
    company: "DigitalCraft Studio",
    companyUrl: "https://digitalcraft.dev",
    location: "Bangalore, India",
    period: "Jun 2023 – Dec 2024",
    description: "Built consumer-facing products and internal tools for a fast-growing startup.",
    achievements: [
      "Developed real-time collaboration features used by 50K+ users",
      "Reduced page load time by 60% through performance optimization",
      "Implemented CI/CD pipeline reducing release cycle from weeks to hours",
      "Built analytics dashboard processing 10M+ events daily",
    ],
    stack: ["React", "Node.js", "MongoDB", "Redis", "GCP", "Kubernetes"],
    type: "work",
  },
  {
    id: "exp-3",
    role: "Frontend Developer Intern",
    company: "InnovateLabs",
    companyUrl: "https://innovatelabs.co",
    location: "Remote",
    period: "Jan 2023 – May 2023",
    description: "Contributed to the development of a SaaS platform for project management.",
    achievements: [
      "Built 15+ reusable UI components for the design system",
      "Improved web vitals score from 60 to 95+",
      "Implemented dark mode and accessibility improvements",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    type: "work",
  },
  {
    id: "edu-1",
    role: "B.Tech in Computer Science",
    company: "National Institute of Technology",
    location: "India",
    period: "2021 – 2025",
    description: "Specialized in Software Engineering and Machine Learning.",
    achievements: [
      "CGPA: 9.1/10",
      "Published 2 research papers on ML optimization",
      "President of the Coding Club",
      "Won 5+ hackathons at national level",
    ],
    stack: ["Data Structures", "Algorithms", "Machine Learning", "Systems Design"],
    type: "education",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", level: 95, category: "frontend" },
  { name: "Next.js", icon: "▲", level: 92, category: "frontend" },
  { name: "TypeScript", icon: "📘", level: 90, category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", level: 95, category: "frontend" },
  { name: "Framer Motion", icon: "🎬", level: 88, category: "frontend" },
  { name: "Three.js", icon: "🎲", level: 75, category: "frontend" },
  { name: "React Native", icon: "📱", level: 80, category: "frontend" },
  // Backend
  { name: "Node.js", icon: "🟩", level: 90, category: "backend" },
  { name: "Python", icon: "🐍", level: 85, category: "backend" },
  { name: "PostgreSQL", icon: "🐘", level: 82, category: "backend" },
  { name: "MongoDB", icon: "🍃", level: 85, category: "backend" },
  { name: "Redis", icon: "🔴", level: 78, category: "backend" },
  { name: "GraphQL", icon: "◈", level: 80, category: "backend" },
  { name: "FastAPI", icon: "⚡", level: 82, category: "backend" },
  // Tools
  { name: "Git", icon: "🔀", level: 92, category: "tools" },
  { name: "Docker", icon: "🐳", level: 85, category: "tools" },
  { name: "AWS", icon: "☁️", level: 78, category: "tools" },
  { name: "Vercel", icon: "▲", level: 90, category: "tools" },
  { name: "GitHub Actions", icon: "🔄", level: 85, category: "tools" },
  { name: "Linux", icon: "🐧", level: 82, category: "tools" },
  // Design
  { name: "Figma", icon: "🎨", level: 85, category: "design" },
  { name: "UI/UX Design", icon: "✏️", level: 80, category: "design" },
  { name: "Motion Design", icon: "🎞️", level: 75, category: "design" },
];

export const techStackIcons = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Python",
  "Tailwind CSS", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS",
  "Git", "Figma", "GraphQL", "FastAPI", "Vercel", "Firebase",
  "Three.js", "Framer Motion", "GSAP", "D3.js",
];
