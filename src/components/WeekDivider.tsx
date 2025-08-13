"use client";

import { motion } from "framer-motion";

interface WeekDividerProps {
  weekNumber: number;
  title: string;
  isVisible: boolean;
}

export const WeekDivider = ({
  weekNumber,
  title,
  isVisible,
}: WeekDividerProps) => {
  return (
    <div className="relative overflow-hidden py-20 bg-gradient-to-b from-cp-navy via-[#122638] to-[#0B1621]">
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,theme(colors.cp.lime/20)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.cp.lime/20)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="pointer-events-none absolute -top-24 -left-24 h-[22rem] w-[22rem] rounded-full bg-cp-lime/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-[24rem] w-[24rem] rounded-full bg-cp-lime/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={
          isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }
        }
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur">
            <h3 className="text-3xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white to-cp-lime bg-clip-text text-transparent">
                Week {weekNumber}: {title}
              </span>
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={
            isVisible ? { width: 300, opacity: 1 } : { width: 0, opacity: 0 }
          }
          transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-8 h-1 rounded-full bg-gradient-to-r from-transparent via-cp-lime to-transparent"
        />
      </motion.div>
    </div>
  );
};
