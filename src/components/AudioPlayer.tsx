import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Still blocked or link issue, will try again on next interaction
          });
      }
    };

    // Listen for the custom event from Hero button
    window.addEventListener('startAudio', startAudio);
    
    // Also listen for any click or scroll on the document to bypass autoplay restrictions
    document.addEventListener('click', startAudio, { once: true });
    window.addEventListener('scroll', startAudio, { once: true });
    
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }

    return () => {
      window.removeEventListener('startAudio', startAudio);
      document.removeEventListener('click', startAudio);
      window.removeEventListener('scroll', startAudio);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.error("Playback failed:", err));
      }
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <audio
        ref={audioRef}
        src="https://uninterested-tomato-lmad35rvdu.edgeone.app/Abhinandana%20Ade%20Neevu%20Ade%20Nenu%20Song%20_%20Karthik%20_%20%20Sobhana%20%20_%20TeluguOne(MP3_160K).mp3"
        loop
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation(); // Prevent the document click listener from firing again
          togglePlay();
        }}
        className="bg-maroon text-gold p-4 rounded-full shadow-2xl border border-gold/30 flex items-center justify-center backdrop-blur-sm bg-opacity-90"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Volume2 size={24} className="animate-pulse" />
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <VolumeX size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="ml-2 text-xs font-medium uppercase tracking-widest hidden md:block">
          {isPlaying ? "Music On" : "Music Off"}
        </span>
      </motion.button>
    </div>
  );
}
