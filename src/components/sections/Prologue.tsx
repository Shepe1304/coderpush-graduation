"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaperAirplane } from "../PaperAirplane";
import { prologue } from "@/data/story";
import InternGrid from "../interns/InternGrid";
import { interns } from "@/data/story";

interface PrologueProps {
  onStart: () => void;
}

export const Prologue = ({ onStart }: PrologueProps) => {
  const [isFlying, setIsFlying] = useState(false);

  const handleStart = () => {
    setIsFlying(true);
    setTimeout(() => {
      onStart();
      setIsFlying(false);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-cp-navy via-[#122638] to-[#0B1621] text-white">
      {/* soft lime glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-cp-lime/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-24 h-[28rem] w-[28rem] rounded-full bg-cp-lime/10 blur-3xl" />

      {/* subtle lime grid */}
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,theme(colors.cp.lime/20)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.cp.lime/20)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="pt-28 pb-20"
        >
          <h1 className="mb-4 text-5xl font-extrabold md:text-7xl">
            <span className="bg-gradient-to-r from-white to-cp-lime bg-clip-text text-transparent">
              {prologue.title}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 text-xl font-semibold text-white/80 md:text-2xl"
          >
            {prologue.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mx-auto mb-6 max-w-4xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            {prologue.content}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mb-12 text-base font-medium text-cp-lime/70"
          >
            {prologue.subtext}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(155,228,58,0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
            className="mx-auto flex items-center gap-4 rounded-2xl border border-white/10 bg-cp-lime px-10 py-4 text-lg font-bold text-cp-navy shadow-[0_10px_30px_-10px_rgba(155,228,58,0.35)] transition-all"
          >
            <span>{prologue.cta}</span>
            <PaperAirplane isFlying={isFlying} />
          </motion.button>

          {/* avatars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-16"
          >
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/50">
              Meet the Interns
            </p>
            <InternGrid interns={interns} />
            {/* <div className="flex justify-center gap-6">
              {["👨‍💻", "👩‍💻", "👨‍💻", "👩‍💻", "👨‍💻"].map((avatar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.7 + i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.2, y: -12 }}
                  className="group relative cursor-pointer"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl backdrop-blur-sm transition-all duration-300 group-hover:border-cp-lime/40">
                    {avatar}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cp-lime opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* floating code bits */}
          <motion.div
            animate={{ y: [0, -10, 0], opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-10 top-1/4 hidden font-mono text-xs text-cp-lime/40 lg:block"
          >
            {"{ innovation: true }"}
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0], opacity: [0.25, 0.6, 0.25] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="pointer-events-none absolute right-10 top-1/3 hidden font-mono text-xs text-cp-lime/35 lg:block"
          >
            {"<Future />"}
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0], opacity: [0.25, 0.6, 0.25] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="pointer-events-none absolute left-1/4 bottom-1/4 hidden font-mono text-xs text-cp-lime/35 lg:block"
          >
            {"push(boundaries)"}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
