import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about my journey, skills, and experience as a full-stack developer and designer.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
