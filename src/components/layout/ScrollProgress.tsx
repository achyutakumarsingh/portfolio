"use client";

import { useScrollProgress } from "@/hooks/useAnimations";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{
        scaleX: progress,
        background: "linear-gradient(90deg, #00d4ff, #a855f7, #ec4899)",
      }}
    />
  );
}
