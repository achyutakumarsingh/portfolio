"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Send, Github, Linkedin, Twitter, Mail, MapPin, Clock, CheckCircle, Terminal, Code2 } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  twitter: <Twitter className="w-4 h-4" />,
  mail: <Mail className="w-4 h-4" />,
  codeforces: <Terminal className="w-4 h-4" />,
  codechef: <Code2 className="w-4 h-4" />,
};

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section ref={ref} className="section-padding relative" id="contact">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-10 sm:mb-14"
        >
          <motion.p variants={fadeInUp} className="section-label">
            Contact
          </motion.p>
          <motion.h2 variants={fadeInUp} custom={1} className="section-heading">
            Let&apos;s Work Together
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="section-subheading max-w-lg">
            Available for collaborations, frontend roles, and product-focused engineering projects.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-5 sm:p-7 space-y-5"
          >
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs text-white/60 font-medium">Name</label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-muted-foreground focus:outline-none focus:border-neon-blue/40 focus:ring-1 focus:ring-neon-blue/15 transition-all"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs text-white/60 font-medium">Email</label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-muted-foreground focus:outline-none focus:border-neon-blue/40 focus:ring-1 focus:ring-neon-blue/15 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs text-white/60 font-medium">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-muted-foreground focus:outline-none focus:border-neon-blue/40 focus:ring-1 focus:ring-neon-blue/15 transition-all resize-none"
                placeholder="Tell me about your project or just say hi..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-neon-blue/15"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isSubmitted ? (
                <><CheckCircle className="w-4 h-4" /> Message Sent!</>
              ) : (
                <><Send className="w-4 h-4" /> Send Message</>
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="space-y-4"
          >
            {/* Info card */}
            <div className="glass rounded-2xl p-5 sm:p-7 space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-neon-blue" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground mb-0.5">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-white hover:text-neon-blue transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-neon-purple" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground mb-0.5">Location</p>
                  <p className="text-sm text-white">{siteConfig.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-neon-green" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground mb-0.5">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-glow-pulse shrink-0" />
                    <p className="text-sm text-white">{siteConfig.availability}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-5 sm:p-7">
              <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-4">Connect</h4>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-white transition-all"
                    aria-label={link.name}
                  >
                    {iconMap[link.icon]}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
