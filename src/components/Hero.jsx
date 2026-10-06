import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      id="section-hero"
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 md:px-16 py-12 md:py-20 bg-[#070605] text-[#f4efe6] overflow-hidden"
    >
      {/* Subtle radial ambient glow in deep burgundy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3a101b]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Timestamp */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1.2 }}
        className="z-10 text-center"
      >
        <span className="text-xs md:text-sm font-mono tracking-[0.4em] uppercase text-[#8c8074]">
          06.10.2026
        </span>
      </motion.div>

      {/* Center Cinematic Typography Block */}
      <div className="z-10 my-auto text-center flex flex-col items-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.8, duration: 1.4 }}
          className="text-base md:text-xl font-serif italic text-[#c2b6a9] tracking-widest mb-2 md:mb-4"
        >
          for
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-serif font-light tracking-tight text-[#f9f6f0] leading-none"
        >
          Vandana
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ delay: 2.3, duration: 1.6 }}
          className="mt-8 md:mt-12 text-sm sm:text-base md:text-xl font-sans font-light tracking-wide text-[#b5a799] max-w-md md:max-w-xl leading-relaxed text-center"
        >
          the girl who lives 2,000 miles away,<br />
          <span className="italic font-serif text-[#ece2d3]">but somehow never feels far.</span>
        </motion.p>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1.4 }}
        className="z-10 flex flex-col items-center text-center pb-4"
      >
        <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#6f6459] mb-3">
          scroll slowly
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#8c8074] to-transparent"
        />
      </motion.div>
    </section>
  );
}
