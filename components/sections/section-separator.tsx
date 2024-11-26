"use client";

import { motion } from 'framer-motion';

export function SectionSeparator() {
  return (
    <div className="relative h-16 overflow-hidden">
      {/* Gradient background for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      {/* Tricolor glowing line */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-[2px] relative"
        >
          {/* Main gradient line */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] animate-glow-line" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933]/30 via-white/30 to-[#138808]/30 blur-[8px] animate-glow-line" />
        </motion.div>
      </div>
    </div>
  );
}