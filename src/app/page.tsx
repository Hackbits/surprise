"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import MemoryGallery from "@/components/MemoryGallery";
import Timeline from "@/components/Timeline";
import Proposal from "@/components/Proposal";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <main
      suppressHydrationWarning
      className="min-h-screen relative overflow-x-hidden bg-[#FDFBF7]"
    >
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

      {/* Floating Entry Screen */}
      <AnimatePresence>
        {!showContent && <Hero onUnlock={() => setShowContent(true)} />}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            {/* Header / Intro */}
            <section className="h-screen flex items-center justify-center flex-col text-center px-4 relative">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-5xl md:text-7xl font-serif text-[#8B0000] mb-6"
              >
                Happy Valentine&apos;s Day Tanisha
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-xl md:text-2xl text-gray-600 max-w-2xl font-light italic"
              >
                &quot;Every moment with you is my favorite memory.&quot;
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 animate-bounce"
              >
                <span className="text-gray-400 text-sm">Scroll Down ↓</span>
              </motion.div>
            </section>

            {/* Components */}
            <Timeline />
            <MemoryGallery />
            <Proposal />

            {/* Footer */}
            <footer className="py-10 text-center text-gray-400 text-sm">
              <p>Made with ❤️ for My Boss Baby.</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
