// SimpleConstructionHero.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDE_INTERVAL = 5000; // 5 seconds

const slides = [
  "https://images.pexels.com/photos/7931/pexels-photo-7931.jpg",
  "https://images.pexels.com/photos/8159/pexels-photo.jpg",
  "https://images.pexels.com/photos/162639/digger-machine-machinery-construction-162639.jpeg",
  "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg",
];

const SimpleConstructionHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % slides.length),
      SLIDE_INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black text-white"
    >
      {/* Background slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[activeIndex]}
            src={slides[activeIndex]}
            alt="Construction background"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Dark overlay like reference */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center space-y-5 sm:space-y-6">
          {/* Top small label */}
          <motion.p
            className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-gray-200/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            RISEVO CONSTRUCTION &amp; PROJECT DEVELOPERS
          </motion.p>

          {/* Main heading – spacing fix (no big gaps between letters) */}
          <motion.h1
            className="font-extrabold uppercase leading-[1.05] tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] drop-shadow-[0_8px_24px_rgba(0,0,0,0.75)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <span className="block text-white">
              BUILD WITH CONFIDENCE
            </span>
            <span className="mt-1 block text-amber-400">
              WITH RISEVO
            </span>
            <span className="block text-amber-400">
              PROJECT DEVELOPERS
            </span>
          </motion.h1>

          {/* Sub text */}
          <motion.p
            className="mx-auto max-w-2xl text-sm sm:text-lg md:text-xl text-gray-100/90 leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          >
            BUILDING TRUST. DELIVERING EXCELLENCE.
          </motion.p>
        </div>
      </div>

      {/* Slider dots bottom center */}
      <div className="pointer-events-auto absolute inset-x-0 bottom-6 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-white"
                : "w-2.5 bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SimpleConstructionHero;