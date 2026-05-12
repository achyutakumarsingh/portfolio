"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Mail, ArrowDown, ChevronRight, Terminal, Code2 } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-[18px] h-[18px]" />,
  linkedin: <Linkedin className="w-[18px] h-[18px]" />,
  twitter: <Twitter className="w-[18px] h-[18px]" />,
  mail: <Mail className="w-[18px] h-[18px]" />,
  codeforces: <Terminal className="w-[18px] h-[18px]" />,
  codechef: <Code2 className="w-[18px] h-[18px]" />,
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((i) => (i + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isMobile) return; // skip on mobile for perf
    const handler = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [isMobile]);

  const nameChars = siteConfig.name.split("");

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Spotlight effect — desktop only */}
      {!isMobile && (
        <div
          className="absolute inset-0 opacity-25 pointer-events-none transition-all duration-700"
          style={{
            background: `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 212, 255, 0.07), transparent 40%)`,
          }}
        />
      )}

      {/* Gradient orbs — smaller on mobile */}
      <div className="absolute top-1/4 -left-16 sm:-left-24 w-48 sm:w-80 lg:w-96 h-48 sm:h-80 lg:h-96 bg-neon-blue/10 rounded-full blur-[80px] sm:blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-16 sm:-right-24 w-48 sm:w-80 lg:w-96 h-48 sm:h-80 lg:h-96 bg-neon-purple/10 rounded-full blur-[80px] sm:blur-[120px] animate-float animate-delay-300 pointer-events-none" />

      <div className="container-custom relative z-10 text-center py-28 sm:py-0">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full glass mb-6 sm:mb-8"
        >
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-neon-green animate-glow-pulse shrink-0" />
          <span className="text-[10px] sm:text-xs text-muted-foreground font-mono">
            {siteConfig.availability}
          </span>
        </motion.div>

        {/* Name — fluid scale */}
        <motion.h1
          style={{ fontSize: "clamp(2.2rem, 9vw, 7rem)", lineHeight: 0.92 }}
          className="font-display font-bold tracking-tighter mb-5 sm:mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: (idx: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: idx * 0.035,
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
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="h-8 sm:h-10 mb-5 sm:mb-6 overflow-hidden"
        >
          <motion.p
            key={subtitleIndex}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.25rem)" }}
            className="text-neon-blue font-mono font-medium"
          >
            {subtitles[subtitleIndex]}
          </motion.p>
        </motion.div>

        {/* Short, punchy description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-sm sm:text-base text-muted-foreground max-w-[30ch] sm:max-w-md md:max-w-xl mx-auto mb-8 sm:mb-10 leading-[1.7]"
        >
          First-year IT student at IIIT Allahabad. Competitive programmer & frontend engineer building clean digital experiences.
        </motion.p>

        {/* CTA Buttons — stacked on mobile, side-by-side on sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 sm:mb-12"
        >
          <Link href="/projects" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto group px-7 py-3.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-neon-blue/20"
            >
              View My Work
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl glass text-white font-semibold text-sm hover:bg-white/5 transition-colors border border-white/10"
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Links — wrap gracefully */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.94 }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1 + i * 0.07 }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-white transition-all"
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
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1.5 text-muted-foreground"
        >
          <span className="text-[9px] font-mono uppercase tracking-widest opacity-60">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
