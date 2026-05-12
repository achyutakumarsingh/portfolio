"use client";

import { motion } from "framer-motion";
import ContactSection from "@/components/sections/ContactSection";
import { pageTransition } from "@/lib/animations";

export default function ContactPage() {
  return (
    <motion.div {...pageTransition} className="pt-24">
      <ContactSection />
    </motion.div>
  );
}
