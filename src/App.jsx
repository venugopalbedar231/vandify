import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import NavigationIndicator from './components/NavigationIndicator';
import Hero from './components/Hero';
import DistanceSection from './components/DistanceSection';
import FirstMemory from './components/FirstMemory';
import TwoMeetings from './components/TwoMeetings';
import MemoryGallery from './components/MemoryGallery';
import IfYouWereHere from './components/IfYouWereHere';
import BeautySection from './components/BeautySection';
import LoveLetter from './components/LoveLetter';
import SongPlayer from './components/SongPlayer';
import Finale from './components/Finale';

import { memories } from './data/memories';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Track scroll progress and active section
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? currentScroll / totalScroll : 0;
      setScrollProgress(progress);

      // Map progress to 1..10 indicator
      const sectionNum = Math.min(10, Math.max(1, Math.floor(progress * 10) + 1));
      setCurrentSection(sectionNum);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070605] text-[#f4efe6] selection:bg-[#4a1525] selection:text-[#f7e7ce]">
      {/* Luxury Film Grain Overlay */}
      <div className="film-grain" />

      {/* Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom Desktop Cursor */}
      <Cursor />

      {/* Fixed Navigation Monogram & Progress Indicator */}
      <NavigationIndicator
        currentSection={currentSection}
        totalSections={10}
        scrollProgress={scrollProgress}
      />

      {/* Main Flow of 12 Storytelling Sections */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* 1. Opening: For Vandana */}
        <Hero />

        {/* 2. The Distance: 2,000 Miles (KGP -> Surathkal) */}
        <DistanceSection />

        {/* 3. First Memory: Developing photo */}
        <FirstMemory photo={memories[0]} />

        {/* 4. The "Only Twice" Section: 2 meetings, 4 hours each */}
        <TwoMeetings photoMeeting1={memories[1]} photoMeeting2={memories[2]} />

        {/* 5. The 31 Memories: Scroll-driven editorial photo journey */}
        <MemoryGallery memories={memories} />

        {/* 7. "If you were here..." */}
        <IfYouWereHere memories={memories} />

        {/* 8. Her Beauty Section */}
        <BeautySection memories={memories} />

        {/* 9. The Letter */}
        <LoveLetter />

        {/* 10. The Song: "I wrote you something" */}
        <SongPlayer albumPhoto={memories[0]} />

        {/* 11 & 12. Final Photo & Celebration */}
        <Finale finalPhoto={memories[30]} />
      </main>
    </div>
  );
}
