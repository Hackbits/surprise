"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";

export default function Proposal() {
  const [accepted, setAccepted] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });

  const handleNoHover = () => {
    // Determine random new position
    const x = Math.random() * 200 - 100; // -100 to 100
    const y = Math.random() * 200 - 100; // -100 to 100
    setNoBtnPosition({ x, y });
  };

  const handleYesClick = () => {
    setAccepted(true);
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#FF0000", "#FF69B4", "#FFD700"],
    });
  };

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center p-4 relative overflow-hidden bg-rose-50/50">
      <AnimatePresence>
        {!accepted ? (
          <motion.div
            key="question"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-center z-10"
          >
            <h2 className="text-4xl md:text-6xl text-[#8B0000] mb-8 font-serif">
              Will you be my Valentine?
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleYesClick}
                className="px-12 py-4 bg-[#D4AF37] text-white text-2xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                YES! ❤️
              </motion.button>

              <motion.button
                animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
                onHoverStart={handleNoHover}
                onClick={handleNoHover} // Mobile fallback
                className="px-8 py-4 bg-gray-200 text-gray-500 text-lg rounded-full"
              >
                No...
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center z-20"
          >
            <h2 className="text-5xl md:text-7xl text-[#D4AF37] font-serif mb-4">
              YAYYYYY!!! 🎉
            </h2>
            <p className="text-2xl text-rose-500">I love you so much! ❤️</p>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="mt-8 inline-block"
            >
              <Heart className="w-24 h-24 fill-rose-500 text-rose-600" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
