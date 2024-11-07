"use client";

import { motion } from 'framer-motion';

export function SectionSeparator() {
  return (
    <div className="relative h-16 overflow-hidden bg-black">
      {/* Indian Flag Colors */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {/* Saffron */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[#FF9933] to-transparent"
        />
        {/* White */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
          className="w-full h-px mt-2 bg-gradient-to-r from-transparent via-white to-transparent"
        />
        {/* Green */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
          className="w-full h-px mt-2 bg-gradient-to-r from-transparent via-[#138808] to-transparent"
        />
      </div>
    </div>
  );
}