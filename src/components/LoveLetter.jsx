import React from 'react';
import { motion } from 'framer-motion';

export default function LoveLetter() {
  return (
    <section 
      id="section-letter"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 sm:px-12 md:px-20 py-36 bg-[#f7f2ea] text-[#1c1917] transition-colors duration-1000"
    >
      <div className="max-w-2xl w-full mx-auto relative">
        
        {/* Subtle Paper Details */}
        <div className="flex justify-between items-center text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase text-[#7a6f64] border-b border-[#1c1917]/10 pb-6 mb-12">
          <span>Letter // Private</span>
          <span>06.10.2026</span>
        </div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#161413] text-center mb-12 md:mb-16 italic"
        >
          A letter I couldn't fit into a text.
        </motion.h3>

        {/* The Letter Body - Genuine, Young Man's Heartfelt Tone */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.2 }}
          className="font-serif text-lg sm:text-xl md:text-[22px] leading-[1.9] text-[#2c2825] space-y-7 text-justify"
        >
          <p>
            Dear Vandu,
          </p>

          <p>
            When I look at a map of India, Kharagpur and Surathkal look so stubbornly far apart. Two thousand miles of railways, flight layovers, and completely different time zones in everything except the clock. You are studying computer science by the Arabian Sea, and I am here surrounded by red brick buildings and endless lab hours.
          </p>

          <p>
            We have only stood in the same room twice. Just two times in our entire story. And when we counted the hours, it wasn't even a full day — barely four hours each time, under the harsh afternoon sun, watching the seconds slip away way too fast. We never got the luxury of lazy Sunday walks, or spontaneous dinners after class, or just sitting next to each other doing nothing.
          </p>

          <p>
            Yet somehow, you managed to sneak in and become the most indispensable part of my everyday life. You became the person I reach out to before anything good or bad is even processed in my own mind. Every late-night voice call, every random picture of your coffee or your hostel room, every time you laugh so hard your voice breaks through the earphones — you made two thousand miles feel completely irrelevant.
          </p>

          <p>
            Today is your birthday, and more than anything, I wish I was standing right in front of you right now instead of looking at you through a screen. But I promise you, these short four-hour meetings will turn into days, weeks, and a lifetime where distance doesn't get a say anymore.
          </p>

          <p>
            Happy Birthday, Vandana. Thank you for choosing me across every single mile.
          </p>

          <div className="pt-8 text-right font-serif">
            <p className="text-xl md:text-2xl italic text-[#161413]">With all my heart,</p>
            <p className="text-2xl md:text-3xl font-serif mt-1 font-semibold text-[#161413]">Venugopal</p>
          </div>
        </motion.div>

        {/* Bottom subtle wax/stamp accent */}
        <div className="mt-16 pt-6 border-t border-[#1c1917]/10 flex justify-center">
          <div className="w-8 h-8 rounded-full border border-[#1c1917]/20 flex items-center justify-center font-serif italic text-xs text-[#5c5249]">
            V
          </div>
        </div>

      </div>
    </section>
  );
}
