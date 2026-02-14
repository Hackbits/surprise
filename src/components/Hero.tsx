"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";

export default function Hero({ onUnlock }: { onUnlock: () => void }) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    // Confetti explosion
    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff0000", "#ffa500", "#ffffff"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff0000", "#ffa500", "#ffffff"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    setIsUnlocked(true);
    setTimeout(onUnlock, 1500);
  };

  return (
    <AnimatePresence>
      {!isUnlocked && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FDFBF7]"
          exit={{ opacity: 0, transition: { duration: 1.5 } }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl font-serif text-[#8B0000] mb-8"
            >
              For My Valentine ❤️
            </motion.h1>

            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgb(212, 175, 55)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUnlock}
              className="px-8 py-4 bg-[#D4AF37] text-white text-xl font-serif rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <span>Unlock My Heart</span>
              <Heart className="w-5 h-5 fill-current" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
