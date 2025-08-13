"use client";

import { motion } from "framer-motion";

const floatingElements = [
  { emoji: "💻", delay: 0, duration: 4 },
  { emoji: "☕", delay: 1, duration: 5 },
  { emoji: "🚀", delay: 2, duration: 3.5 },
  { emoji: "⚡", delay: 0.5, duration: 4.5 },
  { emoji: "🎯", delay: 1.5, duration: 4 },
];

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-6xl opacity-10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
            rotate: [0, 360],
          }}
          transition={{
            duration: element.duration + Math.random() * 3,
            delay: element.delay + Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
};
