import { Project, Experience, Skill, SocialLink, NavItem } from "@/types";

export const siteConfig = {
  name: "Achyuta Kr. Singh",
  title: "Software Engineer & Competitive Programmer",
  description:
    "I’m a first-year Information Technology student at IIIT Allahabad. My interests lie at the intersection of engineering, product design, and usability. I actively practice competitive programming to build strong problem-solving abilities and write efficient code. I enjoy transforming ideas into refined digital products.",
  url: "https://hackathon-snowy-ten.vercel.app",
  email: "achyutasingh17@gmail.com",
  location: "Kolkata, India",
  availability: "Available for collaborations & projects",
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
  { name: "GitHub", url: "https://github.com/achyutakumarsingh", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/achyuta-singh", icon: "linkedin" },
  { name: "Email", url: "mailto:achyutasingh17@gmail.com", icon: "mail" },
];

export const projects: Project[] = [
  {
    id: "civic-sense",
    title: "Civic Issue Reporting Platform",
    description: "A scalable civic-tech platform designed to simplify public issue reporting and improve communication between citizens and authorities.",
    longDescription: "A platform focused on usability, accessibility, and structured issue tracking. Features include issue reporting workflows, real-time status tracking, responsive dashboards, category-based filtering, and a highly optimized frontend performance.",
    image: "/images/project-civic.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    category: "web",
    github: "https://github.com/achyutakumarsingh/Hackathon",
    live: "https://hackathon-snowy-ten.vercel.app/",
    featured: true,
    metrics: { users: "Responsive Dashboard", performance: "Real-time Tracking" },
    year: "2025",
    stack: ["React", "TypeScript", "Tailwind CSS"],
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Competitive Programmer",
    company: "Codeforces & CodeChef",
    location: "Remote",
    period: "Active",
    description: "Active problem solver with a strong DSA foundation, focused on algorithmic thinking and optimization.",
    achievements: [
      "Codeforces Pupil",
      "CodeChef 2⭐",
      "Consistently solving complex algorithmic problems",
    ],
    stack: ["C++", "Java", "Python", "Data Structures", "Algorithms"],
    type: "work",
  },
  {
    id: "edu-1",
    role: "B.Tech in Information Technology",
    company: "Indian Institute of Information Technology (IIIT) Allahabad",
    location: "Prayagraj, India",
    period: "2025 – 2029",
    description: "First-year student exploring Data Structures, Algorithms, and Frontend Development.",
    achievements: [
      "JEE Main Rank: 4788 (99.7 percentile)",
      "JEE Advanced Qualified 2025",
    ],
    stack: ["C++", "Python", "Frontend Architecture", "Product Design"],
    type: "education",
  },
  {
    id: "edu-2",
    role: "Higher Secondary (12th CBSE)",
    company: "Zoom International School",
    location: "Durgapur, India",
    period: "2023 – 2025",
    description: "Completed higher secondary education with a strong focus on sciences and mathematics.",
    achievements: [
      "Score: 91%",
    ],
    stack: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    type: "education",
  },
  {
    id: "edu-3",
    role: "Secondary (10th ICSE)",
    company: "St. Xavier's School",
    location: "Durgapur, India",
    period: "2012 – 2023",
    description: "Completed foundational education with excellence.",
    achievements: [
      "Score: 96.6%",
    ],
    stack: [],
    type: "education",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", level: 90, category: "frontend" },
  { name: "TypeScript", icon: "📘", level: 85, category: "frontend" },
  { name: "JavaScript", icon: "🟨", level: 90, category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", level: 95, category: "frontend" },
  { name: "Framer Motion", icon: "🎬", level: 80, category: "frontend" },
  { name: "HTML5 & CSS3", icon: "🌐", level: 95, category: "frontend" },
  // Backend / Languages
  { name: "C++", icon: "⚙️", level: 90, category: "backend" },
  { name: "Java", icon: "☕", level: 80, category: "backend" },
  { name: "Python", icon: "🐍", level: 85, category: "backend" },
  // Tools
  { name: "Git", icon: "🔀", level: 90, category: "tools" },
  { name: "GitHub", icon: "🐙", level: 90, category: "tools" },
  { name: "VS Code", icon: "💻", level: 95, category: "tools" },
  // Design
  { name: "UI/UX Design", icon: "✏️", level: 85, category: "design" },
  { name: "Figma", icon: "🎨", level: 80, category: "design" },
  { name: "Responsive Design", icon: "📱", level: 90, category: "design" },
];

export const techStackIcons = [
  "React", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "C++",
  "Java", "Python", "Git", "GitHub", "Figma", "DSA",
];
