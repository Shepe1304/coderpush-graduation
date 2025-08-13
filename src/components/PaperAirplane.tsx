'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface PaperAirplaneProps {
  isFlying: boolean;
  onAnimationComplete?: () => void;
  className?: string;
}

export const PaperAirplane = ({ 
  isFlying, 
  onAnimationComplete,
  className = "" 
}: PaperAirplaneProps) => {
  return (
    <motion.div
      className={`${className} flex center items-center justify-center`}
      initial={{ scale: 1, rotate: 0 }}
      animate={
        isFlying
          ? {
              scale: [1, 2, 1.5, 1],
              rotate: [0, 15, -15, 0, 360],
              x: [0, 100, 200, 0],
              y: [0, -50, -100, 0],
            }
          : { scale: 1, rotate: 0 }
      }
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.3, 0.6, 1],
      }}
      onAnimationComplete={onAnimationComplete}
    >
      <Send 
        className={`${isFlying ? 'text-blue-500' : 'text-gray-700'} transition-colors duration-300`}
        size={isFlying ? 32 : 24}
      />
    </motion.div>
  );
};