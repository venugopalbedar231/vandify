import React from 'react';
import { motion } from 'framer-motion';

export default function TwoMeetings({ photoMeeting1, photoMeeting2 }) {
  const photo1 = photoMeeting1?.src || "/images/02.jpg";
  const photo2 = photoMeeting2?.src || "/images/03.jpg";

  return (
    <section 
      id="section-two-meetings"
      className="relative min-h-[170vh] w-full flex flex-col justify-center items-center px-6 md:px-16 py-32 bg-[#090807] text-[#f4efe6] overflow-hidden"
    >
      <div className="max-w-5xl w-full flex flex-col items-center">
        
        {/* Massive "2" Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="text-center"
        >
          <span className="text-[25vw] md:text-[20vw] font-serif leading-none text-[#eae1d2]/85 font-light block">
            2
          </span>
          <p className="text-xl md:text-3xl font-serif text-[#d8cbba] -mt-4 md:-mt-8">
            That's how many times<br />
            <span className="text-[#f7f3eb] italic">I've actually stood beside you.</span>
          </p>
        </motion.div>

        {/* Cinematic Staggered Images for the 2 Meetings */}
        <div className="w-full mt-24 md:mt-36 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Meeting 1 Photo (Left, Staggered high) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="md:col-span-6 flex flex-col items-start"
          >
            <div className="relative group p-2 md:p-3 bg-[#131110] border border-[#f4efe6]/10 rounded-sm shadow-xl w-full">
              <div className="overflow-hidden aspect-[3/4] bg-[#1a1715]">
                <img
                  src={photo1}
                  alt="Meeting One"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-3 flex justify-between items-center text-[10px] font-mono tracking-widest text-[#7a6d62] uppercase">
                <span>Meeting 01</span>
                <span>Daylight • 04 Hours</span>
              </div>
            </div>
          </motion.div>

          {/* Meeting 2 Photo (Right, Staggered lower) */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="md:col-span-6 md:mt-24 flex flex-col items-end"
          >
            <div className="relative group p-2 md:p-3 bg-[#131110] border border-[#f4efe6]/10 rounded-sm shadow-xl w-full">
              <div className="overflow-hidden aspect-[3/4] bg-[#1a1715]">
                <img
                  src={photo2}
                  alt="Meeting Two"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-3 flex justify-between items-center text-[10px] font-mono tracking-widest text-[#7a6d62] uppercase">
                <span>Meeting 02</span>
                <span>Daylight • 04 Hours</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emotional Cadence on the 4 Hours */}
        <div className="mt-32 md:mt-44 text-center max-w-2xl flex flex-col items-center">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl font-serif text-[#eae0d2] font-light mb-4"
          >
            4 hours.
          </motion.h4>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-[#8e8175] mb-8"
          >
            That's all we got.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#c9bea7] leading-relaxed"
          >
            "And somehow,<br />
            those hours became memories<br />
            <span className="not-italic text-[#f4efe6]">I keep replaying."</span>
          </motion.p>
        </div>

      </div>
    </section>
  );
}
