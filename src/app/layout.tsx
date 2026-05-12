import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://achyut.dev"),
  title: {
    default: "Achyut Kumar Singh — Full Stack Developer & Designer",
    template: "%s | Achyut Kumar Singh",
  },
  description:
    "I craft exceptional digital experiences at the intersection of design and engineering. Full Stack Developer specializing in React, Next.js, TypeScript, and AI.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "UI/UX",
    "Portfolio",
    "Achyut Kumar Singh",
  ],
  authors: [{ name: "Achyut Kumar Singh" }],
  creator: "Achyut Kumar Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://achyut.dev",
    siteName: "Achyut Kumar Singh",
    title: "Achyut Kumar Singh — Full Stack Developer & Designer",
    description:
      "I craft exceptional digital experiences at the intersection of design and engineering.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Achyut Kumar Singh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achyut Kumar Singh — Full Stack Developer & Designer",
    description:
      "I craft exceptional digital experiences at the intersection of design and engineering.",
    images: ["/og-image.png"],
    creator: "@achyut",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
