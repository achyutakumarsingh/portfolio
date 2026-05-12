"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Menu, X, Command } from "lucide-react";

export default function Navbar({ onCommandPalette }: { onCommandPalette?: () => void }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMobile = useCallback(() => setIsMobileOpen(false), []);

  // Close on route change
  useEffect(() => { closeMobile(); }, [pathname, closeMobile]);

  // Lock body scroll when mobile nav open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          isScrolled
            ? "py-2.5 sm:py-3 glass-strong shadow-lg shadow-black/20"
            : "py-4 sm:py-5 bg-transparent"
        )}
      >
        <nav className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative z-10">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-sm font-bold text-white shrink-0">
                A
              </div>
              <span className="font-display font-semibold text-base hidden sm:block">
                {siteConfig.name.split(" ")[0]}
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={cn(
                    "relative px-3.5 py-2 text-[13px] font-medium transition-colors rounded-lg",
                    pathname === item.href
                      ? "text-white"
                      : "text-muted-foreground hover:text-white"
                  )}
                >
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/5 rounded-lg border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                  {item.shortcut && (
                    <span className="relative z-10 ml-1.5 text-[10px] text-muted-foreground/40 font-mono">
                      {item.shortcut}
                    </span>
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Command Palette — desktop only */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onCommandPalette}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] text-muted-foreground border border-white/10 rounded-lg hover:border-white/20 hover:text-white transition-all"
            >
              <Command className="w-3 h-3" />
              <span className="font-mono">K</span>
            </motion.button>

            {/* Hamburger — 44x44 tap target on mobile */}
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden relative z-10 flex items-center justify-center w-11 h-11 -mr-1.5 text-white"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu — full screen overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/97 backdrop-blur-2xl"
              onClick={closeMobile}
            />

            {/* Nav items */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.05 }}
              className="relative flex flex-col items-center justify-center h-full gap-1"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.06 + i * 0.045 }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className={cn(
                      "block px-8 py-3 text-2xl font-display font-semibold transition-colors text-center",
                      pathname === item.href
                        ? "gradient-text"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Bottom email hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-10 text-xs text-muted-foreground font-mono"
              >
                achyutasingh17@gmail.com
              </motion.p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
