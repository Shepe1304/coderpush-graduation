"use client";

import { motion } from "framer-motion";
import { PaperAirplane } from "./PaperAirplane";

interface ProgressBarProps {
  progress: number;
  isVisible: boolean;
}

export const ProgressBar = ({ progress, isVisible }: ProgressBarProps) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-1/2 z-50 w-80 -translate-x-1/2 transform"
    >
      <div className="rounded-2xl border border-white/10 bg-cp-navy/90 py-4 pl-8 pr-10 shadow-xl backdrop-blur">
        <div className="relative">
          <div className="h-4 w-full rounded-full border border-white/10 bg-white/5">
            <motion.div
              className="h-4 rounded-full bg-gradient-to-r from-cp-lime via-cp-lime/80 to-cp-lime/50 shadow-lg shadow-cp-lime/30"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          <motion.div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transform"
            initial={{ left: "0%" }}
            animate={{ left: `${Math.max(2, progress)}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="rounded-full bg-cp-lime p-1 shadow-lg shadow-cp-lime/40">
              <PaperAirplane isFlying={false} className="text-cp-navy" />
            </div>
          </motion.div>
        </div>

        <div className="mt-3 text-center text-sm font-medium text-white">
          Internship Journey:{" "}
          <span className="text-cp-lime">{Math.round(progress)}%</span> Complete
        </div>
      </div>
    </motion.div>
  );
};
