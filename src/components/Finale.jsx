import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, PhoneCall, Sparkles } from 'lucide-react';

export default function Finale({ finalPhoto }) {
  const [showFinalModal, setShowFinalModal] = useState(false);
  const photoSrc = finalPhoto?.src || "/images/31.jpg";

  const triggerCelebration = () => {
    setShowFinalModal(true);

    // Subtle drifting confetti & rose petals effect
    const count = 200;
    const defaults = {
      origin: { y: 0.8 },
      zIndex: 9999
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 45,
      colors: ['#f4efe6', '#8a233b', '#e2a3b0']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#ffffff', '#601124', '#d4af37']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#f4efe6', '#b0304a']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#a83248', '#ffffff']
    });
  };

  return (
    <section 
      id="section-finale"
      className="relative min-h-[160vh] w-full flex flex-col justify-between items-center px-6 md:px-16 py-32 bg-[#060505] text-[#f4efe6] overflow-hidden"
    >
      {/* SECTION 11: FINAL PHOTO */}
      <div className="w-full max-w-5xl flex flex-col items-center text-center my-auto">
        
        {/* Enormous Slow-Zooming Final Photograph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl aspect-[3/4] sm:aspect-[4/5] md:aspect-[16/11] overflow-hidden rounded-sm p-3 bg-[#110f0e] border border-[#f4efe6]/15 shadow-2xl"
        >
          <motion.img
            src={photoSrc}
            alt="Vandana - Final Memory"
            whileInView={{ scale: 1.08 }}
            transition={{ duration: 12, ease: "easeOut" }}
            className="w-full h-full object-cover rounded-sm"
          />
        </motion.div>

        {/* Cinematic Dedication & Birthday Wish */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="mt-16 sm:mt-20 flex flex-col items-center"
        >
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#7a6d61] mb-4">
            06.10.2026 // Birthday Wish
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif font-light text-[#f8f5ee] leading-tight">
            Happy Birthday, Vandana.
          </h2>

          <p className="mt-8 text-lg sm:text-2xl md:text-3xl font-serif italic text-[#d4c7b6] max-w-2xl leading-relaxed">
            "2,000 miles never changed where you are in my heart."
          </p>

          <p className="mt-8 text-xl sm:text-2xl font-serif text-[#f4efe6] font-normal">
            — Venugopal
          </p>
        </motion.div>

      </div>

      {/* SECTION 12: FINAL INTERACTION */}
      <div className="z-10 flex flex-col items-center mt-24 mb-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={triggerCelebration}
          className="group relative px-8 py-3.5 rounded-full border border-[#f4efe6]/30 bg-[#141110]/80 backdrop-blur-md hover:bg-[#f4efe6] hover:text-[#110f0e] transition-all duration-500 flex items-center space-x-3 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-[#d4af37] group-hover:text-[#110f0e] transition-colors" />
          <span className="text-xs font-mono tracking-[0.3em] uppercase">
            one more thing
          </span>
        </motion.button>
      </div>

      {/* Playful & Romantic Modal Finale */}
      <AnimatePresence>
        {showFinalModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md w-full p-8 sm:p-12 bg-[#120f0e] border border-white/15 rounded-sm shadow-2xl flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#3b0d18] flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#f4efe6] fill-current animate-pulse" />
              </div>

              <h3 className="text-4xl sm:text-5xl font-serif font-light text-[#f8f5ee] mb-3">
                I love you.
              </h3>

              <p className="text-sm font-mono tracking-widest uppercase text-[#a59789] mb-8">
                Across 2,000 miles, two campuses, and every day in between.
              </p>

              <div className="w-full pt-6 border-t border-white/10 flex flex-col items-center">
                <p className="text-xl sm:text-2xl font-serif italic text-[#e6dbce] mb-6">
                  Now go call me.
                </p>

                <button
                  onClick={() => setShowFinalModal(false)}
                  className="px-6 py-2.5 rounded-full bg-[#f4efe6] text-[#120f0e] hover:bg-white text-xs font-mono uppercase tracking-widest transition-colors"
                >
                  Close & Smile
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
