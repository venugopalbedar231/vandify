import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  const cursorX = useSpring(0, { damping: 28, stiffness: 250, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    // Only show on devices with mouse pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('img, button, a, [data-magnetic]');
      if (target) {
        setIsHoveringImage(true);
      } else {
        setIsHoveringImage(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [visible, cursorX, cursorY]);

  if (!visible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isHoveringImage ? 1.9 : 1,
          borderColor: isHoveringImage ? 'rgba(235, 220, 200, 0.6)' : 'rgba(235, 220, 200, 0.25)',
          backgroundColor: isHoveringImage ? 'rgba(235, 220, 200, 0.08)' : 'transparent'
        }}
        transition={{ duration: 0.2 }}
        className="w-10 h-10 rounded-full border border-white/20 fixed top-0 left-0 backdrop-blur-[1px]"
      />

      {/* Center Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isHoveringImage ? 0.5 : 1
        }}
        className="w-1.5 h-1.5 bg-[#f4efe6] rounded-full fixed top-0 left-0"
      />
    </div>
  );
}
