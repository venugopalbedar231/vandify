import React from 'react';
import { motion } from 'framer-motion';

export default function DistanceSection() {
  return (
    <section 
      id="section-distance"
      className="relative min-h-[140vh] w-full flex flex-col justify-center items-center px-6 md:px-16 py-32 bg-[#0a0908] text-[#f4efe6] overflow-hidden"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-radial from-[#1e0a12]/30 via-transparent to-transparent pointer-events-none" />

      {/* Main Massive Editorial Number */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <span className="text-[18vw] md:text-[22vw] leading-none font-serif font-light tracking-tighter text-[#eae2d5]/90 select-none block">
            2,000
          </span>
          <span className="block text-xs md:text-sm font-mono tracking-[0.6em] uppercase text-[#96897c] -mt-2 md:-mt-6">
            MILES
          </span>
        </motion.div>
      </div>

      {/* Campus Nodes & Animated Distance Vector */}
      <div className="relative z-10 w-full max-w-5xl mt-20 md:mt-28">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 relative">
          
          {/* Node 1: IIT Kharagpur */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#a8998b] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#f4efe6]/60 animate-pulse" />
              <span>West Bengal</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-serif text-[#f4efe6] font-normal">
              IIT Kharagpur
            </h3>
            <p className="text-xs font-mono text-[#6e6256] mt-1 tracking-wider">
              22.3149° N, 87.3105° E
            </p>
          </motion.div>

          {/* Animated Connecting Line */}
          <div className="hidden md:flex flex-1 mx-8 relative items-center justify-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-[#f4efe6]/10 via-[#f4efe6]/35 to-[#f4efe6]/10 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="w-24 h-full bg-gradient-to-r from-transparent via-[#f4efe6] to-transparent"
              />
            </div>
            <div className="absolute px-3 py-1 bg-[#141210] border border-[#f4efe6]/10 rounded-full text-[10px] font-mono tracking-widest text-[#8b7e72]">
              railways & long calls
            </div>
          </div>

          {/* Node 2: NITK Surathkal */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex flex-col items-center md:items-end text-center md:text-right"
          >
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#a8998b] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#8c2d3f] animate-pulse" />
              <span>Karnataka Coast</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-serif text-[#f4efe6] font-normal">
              NITK Surathkal
            </h3>
            <p className="text-xs font-mono text-[#6e6256] mt-1 tracking-wider">
              13.0110° N, 74.7943° E
            </p>
          </motion.div>
        </div>

        {/* Emotional Turn */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="mt-28 md:mt-36 text-center max-w-xl mx-auto"
        >
          <p className="text-lg md:text-2xl font-serif italic text-[#c8bdaf] leading-relaxed">
            "and somehow,<br />
            <span className="text-[#f7f2ea] not-italic font-normal">you still feel closer than anyone else."</span>
          </p>
          <div className="w-12 h-[1px] bg-[#f4efe6]/20 mx-auto mt-6" />
        </motion.div>
      </div>
    </section>
  );
}
