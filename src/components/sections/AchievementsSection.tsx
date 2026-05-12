"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const achievements = [
  {
    icon: "🎓",
    title: "9.1 GPA — Semester I",
    subtitle: "IIIT Allahabad",
    description: "Strong academic performance in the first semester of B.Tech in Information Technology.",
    tag: "Academic",
    tagColor: "text-neon-blue border-neon-blue/20 bg-neon-blue/5",
  },
  {
    icon: "🏆",
    title: "JEE Main — 99.7 Percentile",
    subtitle: "Rank 4788 (2025)",
    description: "Secured an all-India rank of 4788 among over 1.2 million candidates.",
    tag: "Entrance Exam",
    tagColor: "text-neon-purple border-neon-purple/20 bg-neon-purple/5",
  },
  {
    icon: "🎯",
    title: "JEE Advanced Qualified",
    subtitle: "2025",
    description: "Qualified one of the world's most competitive engineering entrance examinations.",
    tag: "Entrance Exam",
    tagColor: "text-neon-purple border-neon-purple/20 bg-neon-purple/5",
  },
  {
    icon: "💻",
    title: "Codeforces Pupil",
    subtitle: "Active Competitive Programmer",
    description: "Consistently solving algorithmic problems, building strong DSA foundations.",
    tag: "Competitive Programming",
    tagColor: "text-neon-green border-neon-green/20 bg-neon-green/5",
  },
  {
    icon: "⭐",
    title: "CodeChef 2⭐",
    subtitle: "Rated Competitive Programmer",
    description: "Achieved a 2-star rating on CodeChef through regular contest participation.",
    tag: "Competitive Programming",
    tagColor: "text-neon-green border-neon-green/20 bg-neon-green/5",
  },
  {
    icon: "🛠️",
    title: "Civic Issue Reporting Platform",
    subtitle: "Civic-Tech Web Application",
    description: "Built a scalable full-stack platform for public issue reporting with a modern UI.",
    tag: "Project",
    tagColor: "text-neon-pink border-neon-pink/20 bg-neon-pink/5",
  },
];

const stats = [
  { value: "9.1", label: "GPA (Sem I)", suffix: "" },
  { value: "99.7", label: "JEE Main Percentile", suffix: "%" },
  { value: "2⭐", label: "CodeChef Rating", suffix: "" },
  { value: "4788", label: "JEE Main Rank", suffix: "" },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative" id="achievements">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-mono text-neon-blue mb-2 uppercase tracking-widest"
          >
            Achievements
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Built on Consistency
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-muted-foreground max-w-xl text-lg leading-relaxed"
          >
            A snapshot of my academic performance, competitive programming milestones, and engineering work.
          </motion.p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              custom={i}
              className="glass rounded-xl p-5 text-center border border-white/5 hover:border-neon-blue/20 transition-all group"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-neon-blue transition-colors">
                {stat.value}
                <span className="text-neon-blue">{stat.suffix}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1 font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              custom={i}
              className="group relative glass rounded-2xl p-6 border border-white/[0.06] transition-all duration-300 hover:border-white/15 hover:shadow-[0_0_30px_rgba(0,212,255,0.04)] overflow-hidden"
            >
              {/* Hover glow line at top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/0 to-transparent group-hover:via-neon-blue/40 transition-all duration-500" />

              {/* Icon */}
              <div className="text-2xl mb-4">{item.icon}</div>

              {/* Tag */}
              <span className={`inline-block text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border mb-4 ${item.tagColor}`}>
                {item.tag}
              </span>

              {/* Content */}
              <h4 className="text-white font-semibold text-base leading-snug mb-1">
                {item.title}
              </h4>
              <p className="text-xs font-mono text-neon-blue mb-3">{item.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
