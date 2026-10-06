import React from 'react';
import { motion } from 'framer-motion';

export default function FirstMemory({ photo }) {
  const imageSrc = photo?.src || "/images/01.jpg";

  return (
    <section 
      id="section-first-memory"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-16 py-28 bg-[#0b0a09] text-[#f4efe6] overflow-hidden"
    >
      <div className="max-w-4xl w-full flex flex-col items-center">
        {/* Intro sentence */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-base sm:text-lg md:text-xl font-serif italic text-[#baa99b] text-center mb-10 md:mb-14"
        >
          Somewhere between all those messages...
        </motion.p>

        {/* Developing photograph frame */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px) contrast(150%)", scale: 0.95 }}
          whileInView={{ opacity: 1, filter: "blur(0px) contrast(100%)", scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group p-3 md:p-5 bg-[#141210] border border-[#f4efe6]/10 rounded-sm shadow-2xl max-w-2xl w-full"
        >
          {/* Subtle tape / photo mount on top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#f4efe6]/10 backdrop-blur-sm border border-white/5 rotate-1" />

          <div className="overflow-hidden aspect-[4/5] sm:aspect-[16/11] relative bg-[#1c1917]">
            <img
              src={imageSrc}
              alt="First memory"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="mt-4 flex justify-between items-center text-[10px] md:text-xs font-mono text-[#82756a] tracking-widest uppercase">
            <span>MEM_01 // ARCHIVE</span>
            <span>surathkal • kharagpur</span>
          </div>
        </motion.div>

        {/* Concluding playful romantic punchline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-serif text-[#f4efe6] text-center mt-12 md:mt-16 font-light"
        >
          ...you became my favorite notification.
        </motion.p>
      </div>
    </section>
  );
}
