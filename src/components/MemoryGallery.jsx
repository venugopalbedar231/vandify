import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export default function MemoryGallery({ memories }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Take memories from index 3 to 26 (Photos 04 to 27) for this continuous scroll editorial gallery
  const galleryItems = memories.slice(3, 27);

  const getStoryQuote = (index) => {
    const quotes = [
      "you make ordinary days feel different.",
      "somehow, I remember the smallest things.",
      "I wish distance came with an undo button.",
      "you are my favorite part of the screen.",
      "four hours wasn't nearly enough.",
      "neither were two meetings.",
      "still, I would choose you again."
    ];
    return quotes[index % quotes.length];
  };

  return (
    <section 
      id="section-gallery"
      className="relative w-full py-28 md:py-44 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#0a0908] text-[#f4efe6]"
    >
      {/* Editorial Section Header */}
      <div className="max-w-4xl mx-auto mb-28 md:mb-40 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#7d7063] block mb-4">
          Curated Archive // 31 Fragments
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[#f3ede3] tracking-tight">
          The quiet evidence of us.
        </h2>
        <div className="w-16 h-[1px] bg-[#f4efe6]/15 mx-auto mt-8" />
      </div>

      {/* Irregular Asymmetric Compositions */}
      <div className="max-w-7xl mx-auto space-y-36 md:space-y-56">

        {/* SET 1: Full-Bleed Cinematic Hero (Photo 04) + Text Over */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4 }}
            onClick={() => setSelectedPhoto(galleryItems[0])}
            className="cursor-pointer group relative w-full h-[65vh] md:h-[82vh] overflow-hidden rounded-sm border border-[#f4efe6]/10"
          >
            <img
              src={galleryItems[0]?.src}
              alt={galleryItems[0]?.caption}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
            <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 max-w-lg">
              <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-[#9c8e80]">
                {galleryItems[0]?.location} • 04
              </span>
              <p className="text-xl md:text-3xl font-serif text-[#f7f2ea] mt-2 font-light">
                {galleryItems[0]?.caption}
              </p>
            </div>
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                <ZoomIn className="w-4 h-4 text-white/80" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* INTERSTITIAL QUOTE 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center py-6"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#ded3c3] max-w-2xl mx-auto">
            "{getStoryQuote(0)}"
          </p>
        </motion.div>

        {/* SET 2: Overlapping Pair (Photo 05 & Photo 06) */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            onClick={() => setSelectedPhoto(galleryItems[1])}
            className="md:col-span-7 cursor-pointer group p-3 bg-[#131110] border border-[#f4efe6]/10 rounded-sm relative z-10 shadow-2xl"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#181615]">
              <img
                src={galleryItems[1]?.src}
                alt={galleryItems[1]?.caption}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs md:text-sm font-serif italic text-[#c4b6a6]">
              {galleryItems[1]?.caption}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 }}
            onClick={() => setSelectedPhoto(galleryItems[2])}
            className="md:col-span-5 md:-ml-16 md:mt-32 cursor-pointer group p-4 bg-[#181514] border border-[#f4efe6]/15 rounded-sm relative z-20 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#1e1a18]">
              <img
                src={galleryItems[2]?.src}
                alt={galleryItems[2]?.caption}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="mt-3 flex justify-between items-center text-[10px] font-mono text-[#8b7d70] uppercase">
              <span>{galleryItems[2]?.note}</span>
              <span>06</span>
            </div>
          </motion.div>
        </div>

        {/* SET 3: Polaroid-Style Floating Images (Photo 07, 08, 09) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {galleryItems.slice(3, 6).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 + idx * 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.15 }}
              onClick={() => setSelectedPhoto(item)}
              className={`cursor-pointer group bg-[#151312] p-4 md:p-5 border border-[#f4efe6]/10 shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                idx === 0 ? '-rotate-2' : idx === 1 ? 'rotate-1 md:mt-16' : '-rotate-1 md:mt-8'
              }`}
            >
              <div className="aspect-square overflow-hidden bg-[#1d1a18]">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="pt-4 pb-1 text-center">
                <p className="text-xs md:text-sm font-serif italic text-[#ded3c5]">
                  "{item.caption}"
                </p>
                <span className="block mt-2 text-[9px] font-mono tracking-widest text-[#6c6156] uppercase">
                  {item.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* INTERSTITIAL QUOTE 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center py-6"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#ded3c3] max-w-2xl mx-auto">
            "{getStoryQuote(1)}"
          </p>
        </motion.div>

        {/* SET 4: Side-By-Side Editorial Diptych (Photo 10 & 11) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            onClick={() => setSelectedPhoto(galleryItems[6])}
            className="cursor-pointer group p-3 bg-[#12100f] border border-[#f4efe6]/10"
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#181615]">
              <img
                src={galleryItems[6]?.src}
                alt={galleryItems[6]?.caption}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <span className="text-[10px] font-mono tracking-widest text-[#7f7164] uppercase block">
                SURATHKAL HORIZON
              </span>
              <p className="text-sm font-serif text-[#ebe3d5] mt-1">
                {galleryItems[6]?.caption}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 }}
            onClick={() => setSelectedPhoto(galleryItems[7])}
            className="cursor-pointer group p-3 bg-[#12100f] border border-[#f4efe6]/10 md:mt-20"
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#181615]">
              <img
                src={galleryItems[7]?.src}
                alt={galleryItems[7]?.caption}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <span className="text-[10px] font-mono tracking-widest text-[#7f7164] uppercase block">
                MID-GLANCE
              </span>
              <p className="text-sm font-serif text-[#ebe3d5] mt-1">
                {galleryItems[7]?.caption}
              </p>
            </div>
          </motion.div>
        </div>

        {/* INTERSTITIAL QUOTE 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center py-6"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#ded3c3] max-w-2xl mx-auto">
            "{getStoryQuote(2)}"
          </p>
        </motion.div>

        {/* SET 5: Editorial Centered Tall Frame (Photo 12, 13, 14, 15) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            onClick={() => setSelectedPhoto(galleryItems[8])}
            className="md:col-span-8 cursor-pointer group p-4 bg-[#141210] border border-[#f4efe6]/10"
          >
            <div className="aspect-[16/10] overflow-hidden bg-[#191614]">
              <img
                src={galleryItems[8]?.src}
                alt={galleryItems[8]?.caption}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="pt-3 flex justify-between items-center text-xs font-mono text-[#8c7f72]">
              <span>{galleryItems[8]?.caption}</span>
              <span>12 // ARCHIVE</span>
            </div>
          </motion.div>

          <div className="md:col-span-4 space-y-8">
            {galleryItems.slice(9, 11).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: idx * 0.2 }}
                onClick={() => setSelectedPhoto(item)}
                className="cursor-pointer group p-3 bg-[#141210] border border-[#f4efe6]/10"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#1b1816]">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-xs font-serif italic text-[#c2b5a5]">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SET 6: Playful Candid Collage (Photos 16 to 23) */}
        <div className="relative">
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#7a6e61]">
              The Unfiltered Moments
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {galleryItems.slice(11, 19).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx % 4) * 0.1 }}
                onClick={() => setSelectedPhoto(item)}
                className="cursor-pointer group p-2 bg-[#12100f] border border-[#f4efe6]/10 rounded-sm hover:border-[#f4efe6]/30 transition-colors"
              >
                <div className="aspect-square overflow-hidden bg-[#181615]">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-[11px] font-sans text-[#a6998c] truncate">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* INTERSTITIAL QUOTE 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center py-6"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#ded3c3] max-w-2xl mx-auto">
            "{getStoryQuote(3)}"
          </p>
        </motion.div>

        {/* SET 7: Remaining Scattered Masterpieces (Photos 24 to 27) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            onClick={() => setSelectedPhoto(galleryItems[19])}
            className="md:col-span-5 cursor-pointer group p-3 bg-[#131110] border border-[#f4efe6]/10"
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#191614]">
              <img
                src={galleryItems[19]?.src}
                alt={galleryItems[19]?.caption}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs md:text-sm font-serif italic text-[#c9bdae]">
              {galleryItems[19]?.caption}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 }}
            onClick={() => setSelectedPhoto(galleryItems[20])}
            className="md:col-span-7 cursor-pointer group p-4 bg-[#151211] border border-[#f4efe6]/10"
          >
            <div className="aspect-[16/10] overflow-hidden bg-[#1d1917]">
              <img
                src={galleryItems[20]?.src}
                alt={galleryItems[20]?.caption}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="mt-3 flex justify-between items-center text-xs font-mono text-[#8b7e71]">
              <span>{galleryItems[20]?.caption}</span>
              <span>KHARAGPUR // SURATHKAL</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Lightbox Modal for Full Cinematic View */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-pointer"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[90vh] flex flex-col items-center cursor-default bg-[#12100f] p-3 md:p-6 rounded-sm border border-white/15"
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="max-h-[75vh] w-auto object-contain rounded-sm"
              />
              <div className="mt-4 text-center">
                <p className="text-base md:text-xl font-serif text-[#f4efe6]">
                  {selectedPhoto.caption}
                </p>
                <span className="text-xs font-mono tracking-widest text-[#8a7d71] uppercase mt-1 block">
                  {selectedPhoto.location}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
