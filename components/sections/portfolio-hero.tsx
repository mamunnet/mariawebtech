"use client";

import { motion } from 'framer-motion';

export function PortfolioHero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="relative mb-6">
            {/* Animated line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5 }}
              className="h-1 bg-gradient-to-r from-primary via-yellow-500 to-primary absolute -top-2 left-0"
            />
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-primary">
              Our Creative Portfolio
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Explore our latest projects and see how we've helped businesses
            transform their digital presence with innovative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}