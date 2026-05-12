import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "View and download Achyut Kumar Singh's professional resume — Full Stack Developer, AI enthusiast, and open source contributor.",
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
