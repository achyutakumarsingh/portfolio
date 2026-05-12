"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ExternalLink, GraduationCap, Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative" id="experience">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sm font-mono text-neon-blue mb-2 uppercase tracking-widest">
            Experience
          </motion.p>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl md:text-5xl font-display font-bold mb-6">
            Where I&apos;ve Worked
          </motion.h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/50 via-neon-purple/30 to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                i % 2 === 0 ? "md:pr-[calc(50%+2rem)] md:text-right" : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-1 w-3 h-3 rounded-full border-2 border-neon-blue bg-background z-10 ${
                  i % 2 === 0
                    ? "left-[-5px] md:left-auto md:right-[calc(50%-5px)] md:translate-x-0"
                    : "left-[-5px] md:left-[calc(50%-5px)]"
                }`}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 hover:border-white/10 transition-all group"
              >
                <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.type === "education" ? (
                    <GraduationCap className="w-4 h-4 text-neon-purple" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-neon-blue" />
                  )}
                  <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                </div>

                <h3 className="text-lg font-display font-semibold text-white">{exp.role}</h3>
                <div className={`flex items-center gap-1.5 mt-1 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className="text-sm text-neon-blue">{exp.company}</span>
                  {exp.companyUrl && (
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 text-muted-foreground hover:text-white" />
                    </a>
                  )}
                  <span className="text-xs text-muted-foreground">· {exp.location}</span>
                </div>

                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{exp.description}</p>

                <ul className={`mt-3 space-y-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="text-xs text-muted-foreground/80">
                      {i % 2 === 0 ? `${a} ←` : `→ ${a}`}
                    </li>
                  ))}
                </ul>

                <div className={`flex flex-wrap gap-1.5 mt-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.stack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-white/5 text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
