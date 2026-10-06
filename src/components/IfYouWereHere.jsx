import React from 'react';
import { motion } from 'framer-motion';

export default function IfYouWereHere({ memories }) {
  // Use Photos 24, 25, 26, 27
  const photos = memories.slice(23, 27);

  return (
    <section 
      id="section-if-here"
      className="relative min-h-[140vh] w-full flex flex-col justify-center items-center px-6 md:px-16 py-36 bg-[#060505] text-[#f4efe6] overflow-hidden"
    >
      {/* Dark intimate ambience */}
      <div className="absolute inset-0 bg-radial from-[#220710]/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
        
        {/* Intro prompt */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-[#dfd4c4] text-center"
        >
          If you were here...
        </motion.p>

        {/* Empty space surrounded by staggered candid memories */}
        <div className="relative w-full min-h-[480px] my-16 md:my-24 flex items-center justify-center">
          
          {/* Subtle center ghost frame representing the missing person */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="w-48 h-64 md:w-64 md:h-80 border border-dashed border-[#f4efe6] rounded-sm flex items-center justify-center"
          >
            <span className="text-xs font-mono tracking-widest text-[#f4efe6] uppercase">
              [ empty chair ]
            </span>
          </motion.div>

          {/* Floating photos around empty center */}
          {photos[0] && (
            <motion.div
              initial={{ opacity: 0, x: -60, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2 }}
              className="absolute left-2 md:left-12 top-4 w-32 sm:w-44 md:w-56 p-2 bg-[#141110] border border-white/10 shadow-2xl -rotate-6 hover:rotate-0 transition-transform"
            >
              <div className="aspect-[4/5] overflow-hidden bg-black">
                <img src={photos[0].src} alt="" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          )}

          {photos[1] && (
            <motion.div
              initial={{ opacity: 0, x: 60, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.4 }}
              className="absolute right-2 md:right-12 top-8 w-36 sm:w-48 md:w-60 p-2 bg-[#141110] border border-white/10 shadow-2xl rotate-6 hover:rotate-0 transition-transform"
            >
              <div className="aspect-[4/5] overflow-hidden bg-black">
                <img src={photos[1].src} alt="" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          )}

          {photos[2] && (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.6 }}
              className="absolute bottom-0 left-8 md:left-28 w-32 sm:w-40 md:w-52 p-2 bg-[#141110] border border-white/10 shadow-2xl 2 hover:rotate-0 transition-transform"
            >
              <div className="aspect-[4/5] overflow-hidden bg-black">
                <img src={photos[2].src} alt="" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Playful punchline */}
        <div className="text-center mt-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-[#f7f2ea]"
          >
            I'd probably just stare at you.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg font-mono text-[#a19488] mt-4 tracking-wider"
          >
            ...and pretend I wasn't.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
