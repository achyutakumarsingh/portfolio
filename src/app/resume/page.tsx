"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig, experiences, skills, projects } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Download, MapPin, Mail, Globe, Github, Linkedin } from "lucide-react";

export default function ResumePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const workExp = experiences.filter((e) => e.type === "work");
  const education = experiences.filter((e) => e.type === "education");
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-28 pb-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold">
                {siteConfig.name}
              </motion.h1>
              <motion.p variants={fadeInUp} custom={1} className="text-lg text-neon-blue mt-1">
                {siteConfig.title}
              </motion.p>
            </div>
            <motion.a
              variants={fadeInUp}
              custom={2}
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-medium shadow-lg shadow-neon-blue/20"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </motion.a>
          </div>

          <motion.div variants={fadeInUp} custom={3} className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{siteConfig.location}</span>
            <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" />{siteConfig.email}</span>
            <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" />{siteConfig.url}</span>
            <span className="flex items-center gap-1"><Github className="w-3.5 h-3.5" />github.com/achyut</span>
            <span className="flex items-center gap-1"><Linkedin className="w-3.5 h-3.5" />linkedin.com/in/achyut</span>
          </motion.div>

          <motion.div variants={fadeInUp} custom={4} className="mt-6 h-px bg-gradient-to-r from-neon-blue/50 via-neon-purple/50 to-transparent" />
        </motion.div>

        {/* Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-3">Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            {siteConfig.description} With 3+ years of experience building scalable web applications, AI-powered tools, and open-source libraries, I bring a unique blend of technical expertise and design sensibility. Proven track record of delivering high-impact products used by thousands.
          </p>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-6">Experience</h2>
          <div className="space-y-6">
            {workExp.map((exp) => (
              <div key={exp.id} className="glass rounded-xl p-6">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                  <h3 className="text-lg font-display font-semibold text-white">{exp.role}</h3>
                  <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm text-neon-blue mb-3">{exp.company} · {exp.location}</p>
                <ul className="space-y-1.5">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-neon-blue mt-1.5 text-[6px]">●</span>
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.stack.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-6">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="glass rounded-xl p-6">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                <h3 className="text-lg font-display font-semibold text-white">{edu.role}</h3>
                <span className="text-xs font-mono text-muted-foreground">{edu.period}</span>
              </div>
              <p className="text-sm text-neon-purple mb-3">{edu.company}</p>
              <ul className="space-y-1">
                {edu.achievements.map((a, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-neon-purple mt-1.5 text-[6px]">●</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-6">Featured Projects</h2>
          <div className="space-y-4">
            {featuredProjects.map((p) => (
              <div key={p.id} className="glass rounded-xl p-5">
                <div className="flex justify-between items-start">
                  <h3 className="font-display font-semibold text-white">{p.title}</h3>
                  <span className="text-xs font-mono text-muted-foreground">{p.year}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.stack.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-6">Technical Skills</h2>
          <div className="glass rounded-xl p-6">
            {(["frontend", "backend", "tools", "design"] as const).map((cat) => (
              <div key={cat} className="mb-4 last:mb-0">
                <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">{cat}: </span>
                <span className="text-sm text-muted-foreground">
                  {skills.filter((s) => s.category === cat).map((s) => s.name).join(" · ")}
                </span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
