"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/layout/CustomCursor";
import CommandPalette from "@/components/layout/CommandPalette";
import GrainOverlay from "@/components/animations/GrainOverlay";
import ParticleBackground from "@/components/animations/ParticleBackground";
import LoadingScreen from "@/components/layout/LoadingScreen";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  const openCommand = useCallback(() => setIsCommandOpen(true), []);
  const closeCommand = useCallback(() => setIsCommandOpen(false), []);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      // Cmd/Ctrl + K for command palette
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }

      // Number shortcuts for navigation
      if (!e.metaKey && !e.ctrlKey && !e.altKey) {
        const routes: Record<string, string> = {
          "1": "/",
          "2": "/projects",
          "3": "/about",
          "4": "/contact",
          "5": "/resume",
        };
        if (routes[e.key]) {
          router.push(routes[e.key]);
        }
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [router]);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <GrainOverlay />
      <ParticleBackground />
      <ScrollProgress />
      <Navbar onCommandPalette={openCommand} />
      <CommandPalette isOpen={isCommandOpen} onClose={closeCommand} />
      <main className="relative z-[3]">{children}</main>
      <Footer />
    </>
  );
}
