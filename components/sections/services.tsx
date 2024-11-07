"use client";

import { motion } from 'framer-motion';
import { Palette, Code, Layout, Megaphone, Rocket, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Create intuitive and engaging user experiences that delight your customers.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design',
      'Usability Testing',
    ],
    slug: 'ui-ux-design',
  },
  // ... rest of the services array remains the same
];

export function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/95">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-background/80 to-background/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          {/* Animated heading with orbital lines */}
          <div className="relative inline-block">
            {/* SVG Container */}
            <svg
              className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] pointer-events-none"
              style={{ filter: 'blur(1px)' }}
            >
              {/* First Orbital Path */}
              <motion.path
                d="M20 50 Q 150 0, 280 50 Q 400 100, 520 50"
                stroke="url(#orbital-gradient-1)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              {/* Second Orbital Path */}
              <motion.path
                d="M20 30 Q 150 80, 280 30 Q 400 -20, 520 30"
                stroke="url(#orbital-gradient-2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 3,
                  delay: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              {/* Gradients */}
              <defs>
                <linearGradient id="orbital-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F6202C" stopOpacity="0" />
                  <stop offset="50%" stopColor="#F6202C" />
                  <stop offset="100%" stopColor="#F6202C" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="orbital-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
                  <stop offset="50%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Heading text */}
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5 }}
                className="h-1 bg-gradient-to-r from-primary via-yellow-500 to-primary absolute -top-2 left-0"
              />
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-primary relative z-10">
                Our Services
              </h2>
            </div>

            {/* Animated checkmark */}
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5
              }}
              className="absolute -right-12 top-0 inline-flex items-center justify-center w-8 h-8 bg-green-500/20 rounded-full"
            >
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Check className="w-5 h-5 text-green-500" />
              </motion.div>
            </motion.span>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mt-6"
          >
            We offer a comprehensive range of digital services to help your business
            thrive in the digital age.
          </motion.p>
        </motion.div>

        {/* Rest of the services section remains the same */}
      </div>
    </section>
  );
}