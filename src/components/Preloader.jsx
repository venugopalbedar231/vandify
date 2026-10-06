import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 28);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070605] text-[#f4efe6] select-none"
    >
      <div className="relative flex flex-col items-center">
        {/* Monogram Monolith */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-8xl md:text-9xl font-serif italic tracking-tighter text-[#eae2d5] font-light"
        >
          V
        </motion.span>

        {/* Dedication Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-xs md:text-sm tracking-[0.35em] uppercase text-[#a99c92] font-mono"
        >
          for Vandana
        </motion.p>

        {/* Elegant Counter Line */}
        <div className="w-40 md:w-56 h-[1px] bg-[#221f1d] mt-10 relative overflow-hidden">
          <motion.div
            className="h-full bg-[#f4efe6]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        <motion.span
          className="mt-4 text-[11px] font-mono tracking-widest text-[#7a6f66]"
        >
          {progress.toString().padStart(3, '0')}%
        </motion.span>
      </div>
    </motion.div>
  );
}
