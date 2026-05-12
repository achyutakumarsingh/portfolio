import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me. I'm available for freelance work, full-time roles, and collaborations.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
