import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ShoppingCart } from 'lucide-react';

export default function Hero() {
  const scrollToCompliments = () => {
    const element = document.getElementById('compliments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Start audio on user interaction if not already playing
    const audioEvent = new CustomEvent('startAudio');
    window.dispatchEvent(audioEvent);
  };

  return (
    <section className="relative min-height-[100vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/10 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 max-w-4xl"
      >
        <motion.h1 
          className="telugu-heading text-6xl md:text-9xl text-maroon mb-4 leading-tight font-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <span className="block">అదే నువ్వు</span>
          <span className="block">అదే నేను</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-serif italic text-gold mb-8 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          A Beautiful Confluence of Hearts & Humanity
        </motion.p>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p className="text-lg uppercase tracking-[0.3em] text-maroon/60 mb-2">Author</p>
          <h2 className="telugu-heading text-3xl md:text-4xl text-maroon">డా. వి.ఎల్. నరసింహం శివకోటి</h2>
        </motion.div>

        <motion.div
          className="bg-maroon/5 border border-gold/20 backdrop-blur-sm p-6 rounded-2xl mb-12 inline-block"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <p className="telugu-body text-xl md:text-2xl text-maroon italic glow-text">
            "ఇది కేవలం అనువాదం కాదు, రెండు హృదయాల సంగమం"
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#600000' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCompliments}
            className="flex items-center gap-3 bg-maroon text-white px-12 py-5 rounded-full shadow-xl transition-all cursor-pointer"
          >
            <BookOpen size={20} className="text-gold" />
            <span className="font-medium tracking-wide text-lg">Read the Journey</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
