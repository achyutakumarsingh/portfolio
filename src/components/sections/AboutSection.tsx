"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, siteConfig } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const journey = [
    {
      year: "2025 – Present",
      event: "B.Tech in Information Technology",
      detail: "Indian Institute of Information Technology (IIIT) Allahabad",
    },
    {
      year: "2023 – 2025",
      event: "12th CBSE — 91%",
      detail: "Zoom International School, Durgapur",
    },
    {
      year: "2012 – 2023",
      event: "10th ICSE — 96.6%",
      detail: "St. Xavier's School, Durgapur",
    },
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
          className="mb-12 sm:mb-16"
        >
          <motion.p variants={fadeInUp} className="section-label">
            About Me
          </motion.p>
          <motion.h2 variants={fadeInUp} custom={1} className="section-heading">
            The Story So Far
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="section-subheading max-w-2xl">
            {siteConfig.description}
          </motion.p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Timeline */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <h3 className="text-sm sm:text-base font-display font-semibold mb-6 text-white/70 uppercase tracking-wider">
              Education & Journey
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-neon-blue/40 via-neon-purple/30 to-transparent" />
              {journey.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  custom={i}
                  className="relative pl-8 pb-8 last:pb-0 group"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 border-neon-blue bg-background group-hover:bg-neon-blue transition-colors duration-200" />
                  <span className="text-[11px] font-mono text-neon-blue/80 block mb-0.5">{item.year}</span>
                  <h4 className="text-sm sm:text-[15px] font-semibold text-white leading-snug">{item.event}</h4>
                  <p className="text-xs sm:text-[13px] text-muted-foreground mt-1 leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <h3 className="text-sm sm:text-base font-display font-semibold mb-6 text-white/70 uppercase tracking-wider">
              Core Skills
            </h3>

            <div className="space-y-7">
              <div>
                <p className="text-[10px] font-mono text-neon-blue uppercase tracking-[0.15em] mb-4">Frontend</p>
                <div className="space-y-3.5">
                  {frontendSkills.slice(0, 5).map((skill, i) => (
                    <motion.div key={skill.name} variants={fadeInUp} custom={i}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[13px] sm:text-sm text-white/80">{skill.icon} {skill.name}</span>
                        <span className="text-[11px] text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono text-neon-purple uppercase tracking-[0.15em] mb-4">Languages</p>
                <div className="space-y-3.5">
                  {backendSkills.slice(0, 3).map((skill, i) => (
                    <motion.div key={skill.name} variants={fadeInUp} custom={i + 5}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[13px] sm:text-sm text-white/80">{skill.icon} {skill.name}</span>
                        <span className="text-[11px] text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.08, ease: "easeOut" }}
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
