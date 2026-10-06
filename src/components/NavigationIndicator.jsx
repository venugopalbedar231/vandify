import React from 'react';
import { motion } from 'framer-motion';

export default function NavigationIndicator({ currentSection, totalSections = 10, scrollProgress }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formattedCurrent = currentSection.toString().padStart(2, '0');
  const formattedTotal = totalSections.toString().padStart(2, '0');

  return (
    <>
      {/* Top Left Monogram */}
      <header className="fixed top-6 left-6 md:top-10 md:left-10 z-40">
        <button
          onClick={scrollToTop}
          aria-label="Return to beginning"
          className="group flex items-center space-x-3 text-left focus:outline-none"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#f4efe6]/15 flex items-center justify-center backdrop-blur-md bg-[#0e0d0c]/40 group-hover:border-[#f4efe6]/40 transition-colors duration-500">
            <span className="font-serif italic text-lg md:text-xl text-[#f4efe6] group-hover:scale-110 transition-transform duration-300">
              V
            </span>
          </div>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#a09489] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline-block">
            06.10.2026
          </span>
        </button>
      </header>

      {/* Right Edge Editorial Counter & Indicator */}
      <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center select-none pointer-events-none">
        <span className="text-xs md:text-sm font-mono tracking-widest text-[#eae2d5] font-light">
          {formattedCurrent}
        </span>
        
        {/* Vertical thin track */}
        <div className="h-20 md:h-28 w-[1px] bg-[#f4efe6]/10 my-3 relative overflow-hidden">
          <motion.div
            className="w-full bg-[#f4efe6]"
            style={{ height: `${Math.max(scrollProgress * 100, 4)}%` }}
          />
        </div>

        <span className="text-[10px] md:text-xs font-mono tracking-widest text-[#72675e]">
          {formattedTotal}
        </span>
      </div>
    </>
  );
}
