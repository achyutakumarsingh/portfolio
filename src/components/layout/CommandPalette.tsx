"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, projects } from "@/data/portfolio";
import { Search, ArrowRight, FileText, Home, User, Mail, Briefcase } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-4 h-4" />,
  Projects: <Briefcase className="w-4 h-4" />,
  About: <User className="w-4 h-4" />,
  Contact: <Mail className="w-4 h-4" />,
  Resume: <FileText className="w-4 h-4" />,
};

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const allItems = [
    ...navItems.map((item) => ({
      id: item.href,
      title: item.name,
      subtitle: `Navigate to ${item.name}`,
      action: () => router.push(item.href),
      icon: iconMap[item.name],
      category: "Pages",
    })),
    ...projects.slice(0, 4).map((p) => ({
      id: p.id,
      title: p.title,
      subtitle: p.description.slice(0, 60) + "...",
      action: () => router.push(`/projects#${p.id}`),
      icon: <Briefcase className="w-4 h-4" />,
      category: "Projects",
    })),
  ];

  const filteredItems = query
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase())
      )
    : allItems;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => (i + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => (i - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
        onClose();
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [filteredItems, selectedIndex, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    setQuery("");
    setSelectedIndex(0);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[71] w-[90%] max-w-lg"
          >
            <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-muted-foreground focus:outline-none"
                />
                <kbd className="px-2 py-0.5 text-[10px] text-muted-foreground border border-white/10 rounded font-mono">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-72 overflow-y-auto py-2">
                {filteredItems.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-8">No results found.</p>
                )}
                {filteredItems.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      item.action();
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                      i === selectedIndex ? "bg-white/5 text-white" : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    <span className="text-muted-foreground">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{item.subtitle}</p>
                    </div>
                    {i === selectedIndex && (
                      <ArrowRight className="w-3 h-3 text-neon-blue" />
                    )}
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 px-4 py-2 border-t border-white/5 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <kbd className="px-1 py-0.5 border border-white/10 rounded font-mono">↑↓</kbd> navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1 py-0.5 border border-white/10 rounded font-mono">↵</kbd> select
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
