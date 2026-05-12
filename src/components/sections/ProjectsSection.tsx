"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import type { Project } from "@/types";

const categories = ["all", "web", "ai", "mobile", "open-source", "design"] as const;

export default function ProjectsSection({ showAll = false }: { showAll?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const displayed = showAll ? filtered : filtered.filter((p) => p.featured);

  return (
    <section ref={ref} className="section-padding relative" id="projects">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-10 sm:mb-12"
        >
          <motion.p variants={fadeInUp} className="section-label">
            Projects
          </motion.p>
          <motion.h2 variants={fadeInUp} custom={1} className="section-heading">
            Selected Work
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="section-subheading max-w-xl">
            Projects showcasing my frontend engineering and product thinking.
          </motion.p>
        </motion.div>

        {/* Category Filter — scrollable row on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="flex gap-2 mb-8 sm:mb-10 overflow-x-auto pb-1 scrollbar-none"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all capitalize whitespace-nowrap shrink-0 ${
                activeCategory === cat
                  ? "bg-white text-black"
                  : "glass text-muted-foreground hover:text-white"
              }`}
            >
              {cat === "all" ? "All" : cat.replace("-", " ")}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl glass overflow-hidden cursor-pointer border border-white/[0.06] hover:border-neon-blue/15 transition-all"
              >
                <div className="relative p-5 sm:p-6 space-y-3.5">
                  {/* Placeholder image */}
                  <div className="h-36 sm:h-40 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center">
                    <div className="text-3xl sm:text-4xl font-display font-bold gradient-text opacity-20 group-hover:opacity-40 transition-opacity">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-[14px] sm:text-base font-display font-semibold text-white leading-snug">
                        {project.title}
                      </h3>
                      <span className="text-[10px] font-mono text-muted-foreground shrink-0 ml-2">{project.year}</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-muted-foreground line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-white/5 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-1">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-neon-blue transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-10 text-center"
          >
            <a href="/projects">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm font-medium text-white hover:bg-white/5 transition-colors border border-white/10"
              >
                View All Projects
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </a>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              className="fixed inset-3 sm:inset-8 md:inset-16 lg:inset-24 z-50 glass-strong rounded-2xl sm:rounded-3xl overflow-y-auto"
            >
              <div className="p-5 sm:p-8 md:p-10">
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div>
                    <p className="text-xs font-mono text-neon-blue mb-1">{selectedProject.year} · {selectedProject.category}</p>
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-display font-bold leading-tight">{selectedProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl glass hover:bg-white/10 transition-colors ml-4 shrink-0"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Overview</h4>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{selectedProject.longDescription}</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stack.map((tech) => (
                          <span key={tech} className="px-3 py-1.5 text-xs font-mono rounded-lg glass text-white/70">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {selectedProject.live && (
                        <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-medium flex items-center justify-center gap-2">
                            <ExternalLink className="w-4 h-4" /> Live Demo
                          </motion.button>
                        </a>
                      )}
                      {selectedProject.github && (
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-4 py-3 rounded-xl glass text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/5 border border-white/10">
                            <Github className="w-4 h-4" /> Source Code
                          </motion.button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
