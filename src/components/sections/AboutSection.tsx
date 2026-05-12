"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const journey = [
    { year: "2021", event: "Started B.Tech in Computer Science", detail: "Began the journey into the world of programming and algorithms." },
    { year: "2022", event: "First Hackathon Win", detail: "Won my first national-level hackathon, building a real-time collaboration tool in 24 hours." },
    { year: "2023", event: "First Industry Role", detail: "Joined InnovateLabs as a Frontend Intern, later moved to DigitalCraft Studio." },
    { year: "2024", event: "Open Source Impact", detail: "Quantum UI hit 4K+ stars. Started contributing to major React ecosystem projects." },
    { year: "2025", event: "Senior Developer", detail: "Leading teams, architecting systems, and building AI-powered developer tools." },
  ];

  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");

  return (
    <section ref={ref} className="section-padding relative" id="about">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sm font-mono text-neon-blue mb-2 uppercase tracking-widest">
            About Me
          </motion.p>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl md:text-5xl font-display font-bold mb-6">
            The Story So Far
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            I&apos;m a full stack developer with a passion for creating exceptional digital experiences. 
            I believe in writing clean, performant code and designing interfaces that delight users.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <h3 className="text-lg font-display font-semibold mb-8 text-white/80">My Journey</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/50 via-neon-purple/50 to-transparent" />
              {journey.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  custom={i}
                  className="relative pl-12 pb-8 last:pb-0 group"
                >
                  <div className="absolute left-[11px] top-1.5 w-[10px] h-[10px] rounded-full border-2 border-neon-blue bg-background group-hover:bg-neon-blue transition-colors" />
                  <span className="text-xs font-mono text-neon-blue">{item.year}</span>
                  <h4 className="text-sm font-semibold text-white mt-1">{item.event}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills with progress bars */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <h3 className="text-lg font-display font-semibold mb-8 text-white/80">Core Skills</h3>

            <div className="space-y-8">
              <div>
                <p className="text-xs font-mono text-neon-blue uppercase tracking-wider mb-4">Frontend</p>
                <div className="space-y-3">
                  {frontendSkills.slice(0, 5).map((skill, i) => (
                    <motion.div key={skill.name} variants={fadeInUp} custom={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-white/80">{skill.icon} {skill.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-mono text-neon-purple uppercase tracking-wider mb-4">Backend</p>
                <div className="space-y-3">
                  {backendSkills.slice(0, 5).map((skill, i) => (
                    <motion.div key={skill.name} variants={fadeInUp} custom={i + 5}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-white/80">{skill.icon} {skill.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-neon-purple to-neon-pink"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
