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
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState<Record<string, { x: number; y: number }>>({});

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const displayed = showAll ? filtered : filtered.filter((p) => p.featured);

  const handleMouseMove = (e: React.MouseEvent, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos((prev) => ({
      ...prev,
      [id]: {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      },
    }));
  };

  return (
    <section ref={ref} className="section-padding relative" id="projects">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-10 sm:mb-12"
        >
          <motion.p variants={fadeInUp} className="text-xs font-mono text-neon-blue mb-2 uppercase tracking-widest">
            Projects
          </motion.p>
          <motion.h2 variants={fadeInUp} custom={1} className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4">
            Selected Work
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="text-muted-foreground max-w-xl text-sm sm:text-base">
            A curated collection of projects showcasing my skills in frontend engineering and product design.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all capitalize ${
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
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl glass overflow-hidden cursor-pointer"
                style={{
                  ["--mouse-x" as string]: `${mousePos[project.id]?.x ?? 50}%`,
                  ["--mouse-y" as string]: `${mousePos[project.id]?.y ?? 50}%`,
                }}
              >
                {/* Spotlight effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 spotlight" />

                <div className="relative p-6 space-y-4">
                  {/* Project image placeholder */}
                  <div className="h-40 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center overflow-hidden">
                    <div className="text-4xl font-display font-bold gradient-text opacity-20 group-hover:opacity-40 transition-opacity">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-display font-semibold text-white group-hover:gradient-text transition-all">
                        {project.title}
                      </h3>
                      <span className="text-[10px] font-mono text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
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
                  <div className="flex items-center gap-3 pt-2">
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

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="flex gap-4 pt-2 border-t border-white/5">
                      {project.metrics.stars && (
                        <span className="text-[10px] text-muted-foreground font-mono">
                          ⭐ {project.metrics.stars.toLocaleString()}
                        </span>
                      )}
                      {project.metrics.users && (
                        <span className="text-[10px] text-muted-foreground font-mono">
                          👥 {project.metrics.users}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-neon-blue/20 transition-colors" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <a href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm font-medium text-white hover:bg-white/5 transition-colors"
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
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="fixed inset-4 md:inset-12 lg:inset-24 z-50 glass-strong rounded-3xl overflow-y-auto"
            >
              <div className="p-6 md:p-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-xs font-mono text-neon-blue mb-1">{selectedProject.year} · {selectedProject.category}</p>
                    <h3 className="text-2xl md:text-4xl font-display font-bold">{selectedProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl glass hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Overview</h4>
                      <p className="text-muted-foreground leading-relaxed">{selectedProject.longDescription}</p>
                    </div>
                    {selectedProject.metrics && (
                      <div>
                        <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Metrics</h4>
                        <div className="grid grid-cols-3 gap-4">
                          {selectedProject.metrics.stars && (
                            <div className="glass rounded-xl p-4 text-center">
                              <p className="text-xl font-bold gradient-text">{selectedProject.metrics.stars.toLocaleString()}</p>
                              <p className="text-xs text-muted-foreground mt-1">GitHub Stars</p>
                            </div>
                          )}
                          {selectedProject.metrics.users && (
                            <div className="glass rounded-xl p-4 text-center">
                              <p className="text-xl font-bold gradient-text">{selectedProject.metrics.users}</p>
                              <p className="text-xs text-muted-foreground mt-1">Users</p>
                            </div>
                          )}
                          {selectedProject.metrics.performance && (
                            <div className="glass rounded-xl p-4 text-center">
                              <p className="text-xl font-bold gradient-text">{selectedProject.metrics.performance}</p>
                              <p className="text-xs text-muted-foreground mt-1">Performance</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stack.map((tech) => (
                          <span key={tech} className="px-3 py-1.5 text-xs font-mono rounded-lg glass text-white/70">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {selectedProject.live && (
                        <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-medium flex items-center justify-center gap-2">
                            <ExternalLink className="w-4 h-4" /> Live Demo
                          </motion.button>
                        </a>
                      )}
                      {selectedProject.github && (
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-4 py-3 rounded-xl glass text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/5">
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
