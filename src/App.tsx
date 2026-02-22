/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Hero from './components/Hero';
import Appreciation from './components/Appreciation';
import AboutBook from './components/AboutBook';
import AboutAuthor from './components/AboutAuthor';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="relative w-32 h-40 mb-8 mx-auto">
                <motion.div 
                  className="absolute inset-0 bg-maroon rounded-r-lg shadow-2xl origin-left"
                  animate={{ rotateY: [0, -180, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 border-2 border-gold rounded-r-lg" />
              </div>
              <h2 className="telugu-heading text-3xl text-maroon mb-2">అదే నువ్వు అదే నేను</h2>
              <div className="w-48 h-1 bg-maroon/10 mx-auto rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gold"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="river-animation" />
      
      <main className="relative z-10">
        <Hero />
        <Appreciation />
        <AboutBook />
        <AboutAuthor />
        <Footer />
      </main>

      <AudioPlayer />
    </div>
  );
}
