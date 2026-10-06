import React from 'react';
import { motion } from 'framer-motion';

export default function BeautySection({ memories }) {
  // Use Photos 28, 29, 30 for the beauty showcase
  const portraitPhoto1 = memories[27] || memories[7];
  const portraitPhoto2 = memories[28] || memories[8];
  const centerPhoto = memories[29] || memories[9];

  return (
    <section 
      id="section-beauty"
      className="relative min-h-[180vh] w-full flex flex-col justify-center items-center px-6 md:px-16 py-36 bg-[#080706] text-[#f4efe6] overflow-hidden"
    >
      {/* Subtle warm glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#421320]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        
        {/* Poetic Questions Scroll Flow */}
        <div className="w-full space-y-28 md:space-y-40 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-[#786c5f] mb-3">
              Question 01
            </span>
            <p className="text-3xl sm:text-5xl md:text-6xl font-serif italic text-[#dfd2c0] font-light max-w-3xl">
              "How can your eyes shine so bright?"
            </p>
          </motion.div>

          {/* Photo Reveal 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
              className="md:col-span-6 md:col-start-2 p-3 bg-[#131110] border border-[#f4efe6]/10"
            >
              <div className="aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={portraitPhoto1.src}
                  alt="Vandana Portrait"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-[#786c5f] mb-3">
              Question 02
            </span>
            <p className="text-3xl sm:text-5xl md:text-6xl font-serif italic text-[#dfd2c0] font-light max-w-3xl">
              "Where did that smile come through?"
            </p>
          </motion.div>

          {/* Photo Reveal 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
              className="md:col-span-6 md:col-start-6 p-3 bg-[#131110] border border-[#f4efe6]/10"
            >
              <div className="aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={portraitPhoto2.src}
                  alt="Vandana Radiance"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-[#786c5f] mb-3">
              Question 03
            </span>
            <p className="text-3xl sm:text-5xl md:text-6xl font-serif italic text-[#dfd2c0] font-light max-w-3xl">
              "How can I stop thinking of you?"
            </p>
          </motion.div>

        </div>

        {/* The Grand Centerpiece: "Vandana" Enormous Visual Monolith */}
        <div className="mt-40 md:mt-56 text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.5em] text-[#8c7f72] block mb-4">
              The Centerpiece
            </span>
            <h2 className="text-6xl sm:text-8xl md:text-[11rem] lg:text-[13rem] font-serif font-light text-[#f8f5ee] tracking-tight leading-none">
              Vandana
            </h2>
            <p className="text-sm md:text-base font-mono text-[#a39485] mt-6 tracking-widest uppercase">
              The girl whose name is written into all my plans.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
