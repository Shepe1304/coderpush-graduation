"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { interns, epilogue } from "@/data/story";
import InternGrid from "../interns/InternGrid";

interface EpilogueProps {
  isVisible: boolean;
}

export const Epilogue = ({ isVisible }: EpilogueProps) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowConfetti(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden text-cp-white">
      {/* Hero-like navy gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cp-navy via-[#122638] to-[#0B1621]" />

      {/* Structured network pattern (desktop only) */}
      <svg
        className="pointer-events-none absolute inset-0 hidden md:block opacity-25"
        viewBox="0 0 1440 800"
        aria-hidden
      >
        <g
          className="text-cp-lime"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          {/* LEFT CLUSTER */}
          {/* connections */}
          <path d="M120 140 L260 200 L200 320 L120 140" />
          <path d="M200 320 L340 260 L260 200 L200 320" />
          <path d="M120 140 L200 80 L360 160 L260 200 L120 140" />
          {/* nodes */}
          <circle cx="120" cy="140" r="4" fill="currentColor" />
          <circle cx="260" cy="200" r="4" fill="currentColor" />
          <circle cx="200" cy="320" r="4" fill="currentColor" />
          <circle cx="340" cy="260" r="4" fill="currentColor" />
          <circle cx="200" cy="80" r="4" fill="currentColor" />
          <circle cx="360" cy="160" r="4" fill="currentColor" />

          {/* RIGHT CLUSTER */}
          <path d="M1080 160 L1240 120 L1320 220 L1200 300 Z" />
          <path d="M1080 160 L1160 260 L1200 300 Z" />
          {/* nodes */}
          <circle cx="1080" cy="160" r="4" fill="currentColor" />
          <circle cx="1240" cy="120" r="4" fill="currentColor" />
          <circle cx="1320" cy="220" r="4" fill="currentColor" />
          <circle cx="1200" cy="300" r="4" fill="currentColor" />
          <circle cx="1160" cy="260" r="4" fill="currentColor" />

          {/* LOWER-LEFT MINI CLUSTER */}
          <path d="M260 540 L340 600 L420 540 L340 480 Z" />
          <circle cx="260" cy="540" r="3.5" fill="currentColor" />
          <circle cx="340" cy="600" r="3.5" fill="currentColor" />
          <circle cx="420" cy="540" r="3.5" fill="currentColor" />
          <circle cx="340" cy="480" r="3.5" fill="currentColor" />

          {/* LOWER-RIGHT MINI CLUSTER */}
          <path d="M1060 560 L1140 500 L1240 560 L1160 620 Z" />
          <circle cx="1060" cy="560" r="3.5" fill="currentColor" />
          <circle cx="1140" cy="500" r="3.5" fill="currentColor" />
          <circle cx="1240" cy="560" r="3.5" fill="currentColor" />
          <circle cx="1160" cy="620" r="3.5" fill="currentColor" />
        </g>
      </svg>

      {/* soft lime glows (very subtle) */}
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-cp-lime/12 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-[-10%] w-[32rem] h-[32rem] bg-cp-lime/10 rounded-full blur-3xl" />

      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                y: -100,
                x:
                  Math.random() *
                  (typeof window !== "undefined" ? window.innerWidth : 1200),
                rotate: 0,
                scale: 1,
              }}
              animate={{
                y:
                  (typeof window !== "undefined" ? window.innerHeight : 800) +
                  500,
                rotate: 1440,
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                delay: Math.random() * 2.5,
                ease: "easeInOut",
              }}
              className="absolute text-2xl"
            >
              {
                ["🎉", "✨", "⚡", "🏆", "🌟", "🎯", "💻"][
                  Math.floor(Math.random() * 7)
                ]
              }
            </motion.div>
          ))}
        </div>
      )}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={
          isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }
        }
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={
            isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
          }
          transition={{
            delay: 0.3,
            duration: 1,
            type: "spring",
            stiffness: 110,
          }}
          className="text-9xl mb-8 drop-shadow-xl"
        >
          {epilogue.emoji}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          <span className="bg-gradient-to-r from-white to-cp-lime bg-clip-text text-transparent">
            {epilogue.title}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="text-xl md:text-2xl leading-relaxed mb-16 text-white/85 max-w-4xl mx-auto"
        >
          {epilogue.content}
        </motion.p>

        {/* Intern cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">
            Graduated Interns
          </h3>

          <InternGrid interns={interns} />

          {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {interns.map((intern, index) => (
              <motion.div
                key={intern.name}
                initial={{ opacity: 0, y: 42, scale: 0.98 }}
                animate={
                  isVisible
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 42, scale: 0.98 }
                }
                transition={{
                  delay: 1.2 + index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{ translateY: -6 }}
                className="rounded-2xl p-6 border border-white/10 bg-cp-white/95 shadow-sm hover:shadow-[var(--shadow-cp-glow)] transition-all duration-300"
              >
                <div className="text-4xl mb-3 drop-shadow">{intern.avatar}</div>
                <h3 className="font-bold text-lg mb-2 text-cp-ink">
                  {intern.name}
                </h3>
                <p className="text-sm text-cp-ink/70 leading-relaxed">
                  {intern.message}
                </p>
                <div className="mt-3 w-8 h-1 bg-gradient-to-r from-cp-lime to-cp-primary rounded-full mx-auto" />
              </motion.div>
            ))}
          </div> */}
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }
          }
          transition={{ delay: 2.1, duration: 0.6, type: "spring" }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cp-lime/15 to-cp-primary/15 blur-2xl" />
          <div className="relative rounded-3xl p-8 border border-white/10 bg-white/95 shadow-sm">
            <p className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-cp-lime to-cp-primary bg-clip-text text-transparent">
              Thank you CoderPush! <span className="inline-block ml-2">💚</span>
            </p>
            <p className="text-lg md:text-xl text-cp-ink/80 mb-4">
              Where boundaries are pushed and pioneers are born
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
