"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techStackIcons, skills } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { key: "frontend", label: "Frontend", color: "from-neon-blue to-cyan-400" },
    { key: "backend", label: "Backend", color: "from-neon-purple to-violet-400" },
    { key: "tools", label: "Tools & DevOps", color: "from-neon-green to-emerald-400" },
    { key: "design", label: "Design", color: "from-neon-pink to-rose-400" },
  ] as const;

  return (
    <section ref={ref} className="section-padding relative overflow-hidden" id="skills">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sm font-mono text-neon-blue mb-2 uppercase tracking-widest">
            Skills
          </motion.p>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl md:text-5xl font-display font-bold mb-6">
            Tech Arsenal
          </motion.h2>
        </motion.div>

        {/* Marquee */}
        <div className="mb-16 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techStackIcons, ...techStackIcons].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="mx-6 text-lg md:text-2xl font-display font-bold text-white/5 hover:text-white/20 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex animate-marquee-reverse whitespace-nowrap mt-4">
            {[...techStackIcons, ...techStackIcons].reverse().map((tech, i) => (
              <span
                key={`${tech}-rev-${i}`}
                className="mx-6 text-lg md:text-2xl font-display font-bold text-white/5 hover:text-white/20 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Categorized Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, catIdx) => {
            const categorySkills = skills.filter((s) => s.category === cat.key);
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-white/10 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cat.color}`} />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all cursor-default"
                    >
                      <span className="text-base">{skill.icon}</span>
                      <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
