"use client";

import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  ShoppingBag,
  Camera,
  Phone,
  Gift,
  Video,
  Coffee,
  MapPin,
  CloudLightning,
  Film,
  Shirt,
  Flower2,
  Car,
} from "lucide-react";

const milestones = [
  {
    date: "Oct 05, 2024",
    title: "First Message",
    description: "A simple 'Hello' that started a lifetime of conversations.",
    icon: MessageCircle,
  },
  {
    date: "Oct 30, 2024",
    title: "First Shopping Date",
    description:
      "Wandering the aisles, but I was only shopping for your smile.",
    icon: ShoppingBag,
  },
  {
    date: "Oct 31, 2024",
    title: "First Pic",
    description: "Captured a moment, froze a memory forever.",
    icon: Camera,
  },
  {
    date: "Nov 03, 2024",
    title: "First Phone Call",
    description: "Hearing your voice for the first time was music to my ears.",
    icon: Phone,
  },
  {
    date: "Nov 04, 2024",
    title: "Confession",
    description: "The day feelings found words and hearts found home.",
    icon: Heart,
  },
  {
    date: "Nov 05, 2024",
    title: "First Gift",
    description: "A small token of a love that was just beginning to bloom.",
    icon: Gift,
  },
  {
    date: "Nov 06, 2024",
    title: "First Rose",
    description: "A single flower to say what words couldn't express.",
    icon: Flower2,
  },
  {
    date: "Nov 09, 2024",
    title: "First Video Call",
    description: "Seeing your face light up my screen and my world.",
    icon: Video,
  },
  {
    date: "Nov 17, 2024",
    title: "First Kiss",
    description: "The moment time stood still and the world faded away.",
    icon: Heart,
  },
  {
    date: "Nov 29, 2024",
    title: "First Coffee Date",
    description: "Warm cups, warm hearts, and endless laughter.",
    icon: Coffee,
  },
  {
    date: "Dec 06, 2024",
    title: "First Dress",
    description: "You looked stunning, and I couldn't take my eyes off you.",
    icon: Shirt,
  },
  {
    date: "Jan 07, 2025",
    title: "First Trip",
    description: "Exploring new places, but my favorite view was always you.",
    icon: MapPin,
  },
  {
    date: "May 24, 2025",
    title: "First Major Fight",
    description: "Storms make trees take deeper roots. We grew stronger.",
    icon: CloudLightning,
  },
  {
    date: "July 22, 2025",
    title: "First Movie Date",
    description: "Popcorn, darkness, and holding hands deeply.",
    icon: Film,
  },
  {
    date: "Feb 03, 2026",
    title: "Our first Road Trip",
    description: "Miles of smiles, music, and the open road with you.",
    icon: Car,
  },
];

export default function Timeline() {
  return (
    <section className="py-20 relative px-4 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl md:text-5xl text-center mb-16 text-[#8B0000]"
      >
        Our Love Story
      </motion.h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Central Line */}
        {/* Wrapper for Milestones with Solid Line */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-rose-200 md:-translate-x-1/2" />

          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === milestones.length - 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring" }}
                className={`flex items-center relative ${
                  isLast ? "mb-0" : "mb-12 md:mb-24"
                } ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#D4AF37] rounded-full border-4 border-white transform -translate-x-1/2 z-10" />

                {/* Content Card */}
                <div
                  className={`pl-12 md:pl-0 md:w-1/2 ${
                    isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-rose-50">
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        isEven ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <milestone.icon className="w-5 h-5 text-rose-400" />
                      <span className="text-sm font-semibold text-rose-400 uppercase tracking-wider">
                        {milestone.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-serif text-[#8B0000] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 italic">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>

        {/* Dotted Line Connector */}
        <div className="relative h-24 md:h-32">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 border-l-4 border-dotted border-rose-300 md:-translate-x-1/2 opacity-80" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-start md:justify-center relative pb-8"
        >
          <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#D4AF37] rounded-full border-4 border-white transform -translate-x-1/2 z-10" />
          <div className="ml-12 md:ml-0 bg-white px-6 py-2 rounded-full border border-rose-200 shadow-sm z-20">
            <span className="text-lg md:text-xl font-serif font-bold text-[#8B0000]">
              Till Infinity
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export const photos = [
  {
    id: 1,
    src: "/memories/What",
  },
  {
    id: 2,
    src: "https://placehold.co/600x800/orange/white?text=Memory+2",
  },
  {
    id: 3,
    src: "https://placehold.co/600x800/red/white?text=Memory+3",
  },
  {
    id: 4,
    src: "https://placehold.co/600x800/purple/white?text=Memory+4",
  },
  {
    id: 5,
    src: "https://placehold.co/600x800/blue/white?text=Memory+5",
  },
  {
    id: 6,
    src: "https://placehold.co/600x800/green/white?text=Memory+6",
  },
];
