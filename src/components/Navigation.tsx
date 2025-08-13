"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { weeklyContent } from "@/data/story";

interface NavigationProps {
  isVisible: boolean;
}

export const Navigation = ({ isVisible }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div>
      <motion.button
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-50 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border hover:shadow-xl transition-shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed top-0 left-0 h-full w-80 bg-white/95 backdrop-blur-sm shadow-2xl z-40 pt-20 px-6"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Journey Navigation
            </h3>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {weeklyContent.map((week) => (
                <div
                  key={week.week}
                  className="border-l-2 border-purple-200 pl-4"
                >
                  <button
                    onClick={() => scrollToSection(`week-${week.week}`)}
                    className="text-left w-full mb-2 hover:text-purple-600 font-semibold transition-colors"
                  >
                    Week {week.week}: {week.title}
                  </button>

                  <div className="space-y-1 ml-4">
                    {week.sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="block text-sm text-gray-600 hover:text-purple-500 transition-colors"
                      >
                        {section.emoji} {section.title}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={() => scrollToSection("epilogue")}
                className="w-full text-left font-semibold text-purple-700 hover:text-purple-900 transition-colors mt-4 pt-4 border-t"
              >
                🎓 Graduation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
