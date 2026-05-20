"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig, socialLinks, navItems } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUpRight } from "lucide-react";
import { NeonBadge } from "@humlabs/react";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  twitter: <Twitter className="w-4 h-4" />,
  mail: <Mail className="w-4 h-4" />,
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-sm font-bold text-white">
                A
              </div>
              <span className="font-display font-semibold text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Crafting exceptional digital experiences with clean code and modern design.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-1 group w-fit"
                >
                  {item.name}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/20 transition-colors"
                  aria-label={link.name}
                >
                  {iconMap[link.icon]}
                </motion.a>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-glow-pulse" />
              <span className="text-xs text-muted-foreground">{siteConfig.availability}</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-neon-pink" /> using Next.js & Framer Motion
            </p>
            <NeonBadge />
          </div>
        </div>
      </div>
    </footer>
  );
}
