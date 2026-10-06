import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Music, Disc } from 'lucide-react';

export default function SongPlayer({ albumPhoto }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioExists, setAudioExists] = useState(true);

  const audioRef = useRef(null);
  const coverSrc = albumPhoto?.src || "/images/01.jpg";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration || 180);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    const handleError = () => {
      console.info("Audio /music/song.mp3 not found yet; running demo simulator mode.");
      setAudioExists(false);
    };

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  // Simulated progress timer when no file is present so UI remains completely functional
  useEffect(() => {
    let interval = null;
    if (!audioExists && isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev >= 204 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [audioExists, isPlaying]);

  const togglePlay = () => {
    if (audioExists && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          setAudioExists(false);
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const effectiveDuration = duration > 0 ? duration : 204; // 3:24 default
  const progressPercent = (currentTime / effectiveDuration) * 100;

  return (
    <section 
      id="section-song"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-16 py-36 bg-[#0a0808] text-[#f4efe6] overflow-hidden"
    >
      {/* Audio element pointing to /music/song.mp3 */}
      <audio ref={audioRef} src="/music/song.mp3" preload="metadata" />

      {/* Subtle pulsing background glow synced to music playing */}
      <motion.div 
        animate={{
          scale: isPlaying ? [1, 1.15, 1] : 1,
          opacity: isPlaying ? [0.15, 0.3, 0.15] : 0.08
        }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#61182c] rounded-full blur-[170px] pointer-events-none"
      />

      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center">
        
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#85776a] block mb-3">
            Audio Track // Original Piece
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-light text-[#f8f4ee]">
            I wrote you something.
          </h2>
          <p className="text-base sm:text-lg font-serif italic text-[#c2b5a5] mt-4">
            "Because apparently, texting you wasn't enough."
          </p>
        </motion.div>

        {/* Minimalist Luxury Music Player Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="w-full max-w-xl p-6 sm:p-8 bg-[#141110] border border-[#f4efe6]/12 rounded-sm shadow-2xl relative"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            
            {/* Spinning / Floating Vinyl Album Cover */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 group">
              <motion.div 
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
                className="w-full h-full rounded-full overflow-hidden p-1 bg-[#221e1c] border border-white/10 shadow-lg"
              >
                <img
                  src={coverSrc}
                  alt="My song for Vandana"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
              {/* Center hole of vinyl */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#141110] border border-white/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
              </div>
            </div>

            {/* Song Info & Controls */}
            <div className="flex-1 w-full flex flex-col justify-center text-center sm:text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#7f7164] uppercase block">
                Side A • Kharagpur to Surathkal
              </span>
              <h4 className="text-xl sm:text-2xl font-serif text-[#f4efe6] font-normal mt-1">
                My song for Vandana
              </h4>
              <p className="text-xs font-mono text-[#a5978a] mt-1">
                Venugopal • Dedicated to Vandu
              </p>

              {/* Dynamic Waveform Visualizer */}
              <div className="flex items-center justify-center sm:justify-start gap-1 h-8 my-4">
                {[40, 70, 95, 30, 85, 60, 100, 45, 80, 50, 90, 35, 75, 55, 85, 40].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scaleY: isPlaying ? [h / 100, (120 - h) / 100, h / 100] : 0.2
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8 + (i % 5) * 0.15,
                      ease: "easeInOut"
                    }}
                    className="w-1 bg-[#f4efe6]/60 rounded-full origin-bottom"
                    style={{ height: '24px' }}
                  />
                ))}
              </div>

              {/* Play / Pause button & time */}
              <div className="flex items-center justify-between mt-2">
                <button
                  onClick={togglePlay}
                  className="flex items-center space-x-3 px-5 py-2 rounded-full bg-[#f4efe6] text-[#141110] hover:bg-white transition-all transform hover:scale-105 font-mono text-xs font-medium"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      <span>PAUSE</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      <span>PLAY TRACK</span>
                    </>
                  )}
                </button>

                <div className="text-xs font-mono text-[#8a7c6f]">
                  <span>{formatTime(currentTime)}</span>
                  <span className="mx-1">/</span>
                  <span>{formatTime(effectiveDuration)}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
            <div
              className="h-full bg-[#f4efe6] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </motion.div>

        {!audioExists && (
          <p className="text-[11px] font-mono text-[#7a6d61] mt-4 tracking-wider">
            (Playing in ambient preview mode. Place your mp3 at public/music/song.mp3 to stream your personal recording.)
          </p>
        )}

      </div>
    </section>
  );
}
