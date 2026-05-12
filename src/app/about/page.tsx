"use client";

import { motion } from "framer-motion";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { pageTransition } from "@/lib/animations";

export default function AboutPage() {
  return (
    <motion.div {...pageTransition} className="pt-24">
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
    </motion.div>
  );
}
