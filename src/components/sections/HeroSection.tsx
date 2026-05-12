"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Mail, ArrowDown, ChevronRight, Terminal, Code2 } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  twitter: <Twitter className="w-4 h-4" />,
  mail: <Mail className="w-4 h-4" />,
  codeforces: <Terminal className="w-4 h-4" />,
  codechef: <Code2 className="w-4 h-4" />,
};

const subtitles = [
  "Software Engineer",
  "Competitive Programmer",
  "Codeforces Pupil",
  "CodeChef 2⭐",
];

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((i) => (i + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const nameChars = siteConfig.name.split("");

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Spotlight effect - desktop only for perf */}
      <div
        className="absolute inset-0 opacity-20 transition-all duration-1000 hidden sm:block pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 212, 255, 0.08), transparent 40%)`,
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-16 sm:-left-32 w-48 sm:w-96 h-48 sm:h-96 bg-neon-blue/10 rounded-full blur-[80px] sm:blur-[128px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-16 sm:-right-32 w-48 sm:w-96 h-48 sm:h-96 bg-neon-purple/10 rounded-full blur-[80px] sm:blur-[128px] animate-float animate-delay-300 pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10 text-center pt-24 pb-16">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 sm:mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-neon-green animate-glow-pulse shrink-0" />
          <span className="text-[11px] sm:text-xs text-muted-foreground font-mono">{siteConfig.availability}</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-[2.8rem] leading-tight sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-4 sm:mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: (idx: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: idx * 0.04,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                }),
              }}
              className={char === " " ? "inline" : "inline-block"}
              style={{ whiteSpace: char === " " ? "pre" : undefined }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Rotating subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-8 sm:h-10 mb-4 sm:mb-6 overflow-hidden"
        >
          <motion.p
            key={subtitleIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="text-base sm:text-xl md:text-2xl text-neon-blue font-mono font-medium"
          >
            {subtitles[subtitleIndex]}
          </motion.p>
        </motion.div>

        {/* Short intro - 2 lines on mobile */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm sm:text-base text-muted-foreground max-w-sm sm:max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          First-year IT student at IIIT Allahabad. Competitive programmer & frontend engineer building clean, modern web experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 sm:mb-12"
        >
          <Link href="/projects" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto group px-6 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-neon-blue/20"
            >
              View My Work
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl glass text-white font-medium text-sm hover:bg-white/5 transition-colors"
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Links - wrap on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + i * 0.07 }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/20 transition-all"
              aria-label={link.name}
            >
              {iconMap[link.icon]}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1.5 text-muted-foreground"
        >
          <span className="text-[9px] font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
