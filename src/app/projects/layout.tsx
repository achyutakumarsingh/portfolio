import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of projects spanning full-stack development, AI, mobile apps, and open-source contributions.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
