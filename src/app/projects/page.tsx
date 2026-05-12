"use client";

import { motion } from "framer-motion";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { pageTransition } from "@/lib/animations";

export default function ProjectsPage() {
  return (
    <motion.div {...pageTransition} className="pt-24">
      <ProjectsSection showAll />
    </motion.div>
  );
}
