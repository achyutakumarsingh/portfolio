export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "web" | "mobile" | "ai" | "design" | "open-source";
  github?: string;
  live?: string;
  featured: boolean;
  metrics?: {
    stars?: number;
    users?: string;
    performance?: string;
  };
  year: string;
  stack: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  stack: string[];
  type: "work" | "education";
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "tools" | "design" | "other";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
  shortcut?: string;
}
