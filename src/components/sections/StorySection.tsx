"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { StorySection as StorySectionType } from "@/types";

interface StorySectionProps {
  section: StorySectionType;
  isVisible: boolean;
  fadeOutStart?: number;
}

export const StorySection = ({
  section,
  isVisible,
  fadeOutStart = 0.7,
}: StorySectionProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setScrollProgress(v);
  });

  useEffect(() => {
    if (isVisible && !hasAnimated) setHasAnimated(true);
  }, [isVisible, hasAnimated]);

  const getOpacity = () => {
    if (scrollProgress < 0.2) {
      return scrollProgress / 0.2;
    } else if (scrollProgress < fadeOutStart) {
      return 1;
    } else {
      const fadeProgress = (scrollProgress - fadeOutStart) / (1 - fadeOutStart);
      return Math.max(0, 1 - fadeProgress);
    }
  };

  const getYPosition = () => {
    if (scrollProgress < 0.15) {
      return 40 * (1 - scrollProgress / 0.15);
    } else if (scrollProgress > fadeOutStart) {
      const fadeProgress = (scrollProgress - fadeOutStart) / (1 - fadeOutStart);
      return 40 * fadeProgress;
    }
    return 0;
  };

  const opacity = getOpacity();
  const yPosition = getYPosition();

  return (
    <section ref={containerRef} className="relative min-h-[200vh] py-50">
      <div className="sticky top-1/2 -translate-y-1/2 transform mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{
            opacity: hasAnimated ? opacity : 0,
            y: hasAnimated ? yPosition : 40,
            scale: hasAnimated ? 1 : 0.98,
          }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          className="relative text-center"
        >
          <div className="relative rounded-3xl bg-cp-white shadow-sm border border-black/5">
            <div className="pointer-events-none absolute -inset-1 rounded-[1.6rem] bg-gradient-to-r from-cp-lime/10 to-cp-primary/10 blur-xl" />
            <div className="relative p-8 sm:p-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={
                  hasAnimated
                    ? { opacity: Math.min(1, opacity * 1.2), y: 0 }
                    : { opacity: 0, y: 10 }
                }
                transition={{ delay: 0.1, duration: 0.3 }}
                className="text-4xl md:text-5xl font-extrabold text-cp-ink tracking-tight"
              >
                {section.title}
              </motion.h2>

              <div
                className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-cp-lime to-cp-primary"
                style={{ opacity: Math.min(1, opacity * 1.1) }}
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={
                  hasAnimated
                    ? { opacity: Math.min(1, opacity * 1.2), y: 0 }
                    : { opacity: 0, y: 10 }
                }
                transition={{ delay: 0.2, duration: 0.3 }}
                className="mt-6 text-lg md:text-xl leading-relaxed text-cp-ink/80 max-w-3xl mx-auto"
              >
                {section.content}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
