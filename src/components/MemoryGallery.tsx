"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type Photo = {
  id: number;
  src: string;
  text?: string;
};

const photos: Photo[] = [
  {
    id: 1,
    src: "/memories/WhatsApp Image 2026-02-14 at 11.14.07.jpeg",
    text: "Our First Memory",
  },
  {
    id: 2,
    src: "/memories/WhatsApp Image 2026-02-14 at 11.14.08 (1).jpeg",
    text: "That Little Cute Baby",
  },
  {
    id: 3,
    src: "/memories/WhatsApp Image 2026-02-14 at 11.14.08.jpeg",
    text: "Perfect Couple",
  },
  {
    id: 4,
    src: "/memories/WhatsApp Image 2026-02-14 at 11.21.00 (1).jpeg",
    text: "That OverCute Baby",
  },
  {
    id: 5,
    src: "/memories/WhatsApp Image 2026-02-14 at 11.21.00 (2).jpeg",
    text: "Dance Nights",
  },
  {
    id: 6,
    src: "/memories/WhatsApp Image 2026-02-14 at 11.21.00.jpeg",
    text: "That Eye Contact",
  },
];

export default function MemoryGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl text-center mb-16 text-[#8B0000]"
      >
        Our Beautiful Moments
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer relative group overflow-hidden rounded-2xl shadow-lg aspect-[3/4]"
            onClick={() => setSelectedId(photo.id)}
          >
            <Image
              src={photo.src}
              alt="Memory"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            {photo.text && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-playfair text-xl">{photo.text}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setSelectedId(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <motion.div
            layoutId={`image-${selectedId}`}
            className="relative w-full max-w-lg aspect-[3/4] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos.find((p) => p.id === selectedId)?.src || ""}
              alt="Memory"
              fill
              className="object-contain"
            />
            {photos.find((p) => p.id === selectedId)?.text && (
              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-2xl font-serif drop-shadow-lg">
                {photos.find((p) => p.id === selectedId)?.text}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
