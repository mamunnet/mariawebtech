"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import Link from 'next/link';
import { ContactFormModal } from '@/components/contact-form-modal';
import { useState } from 'react';

function AnimatedSphere() {
  return (
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial
        color="#4338ca"
        wireframe
        roughness={0.5}
        metalness={0.5}
      />
    </Sphere>
  );
}

const pathVariants = {
  initial: {
    pathLength: 0,
    opacity: 0
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop" as const
    }
  }
};

export function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="min-h-screen pt-32 lg:pt-0 flex items-center relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-background/90 to-primary/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="relative">
            {/* Animated SVG Path */}
            <svg
              className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] pointer-events-none"
              style={{ filter: 'blur(1px)' }}
            >
              <motion.path
                d="M20 20 Q 150 10, 280 20 Q 350 30, 420 20 Q 500 10, 580 20"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                initial="initial"
                animate="animate"
                variants={pathVariants}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F6202C" />
                  <stop offset="50%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#F6202C" />
                </linearGradient>
              </defs>
            </svg>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-primary relative z-10">
              We Create
              <span className="text-primary"> Digital</span>
              <br />
              Experiences
            </h1>

            {/* Bottom decorative line */}
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-yellow-500 to-primary"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-lg">
            Transform your brand with cutting-edge web solutions. We blend creativity
            and technology to deliver exceptional digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => setIsContactModalOpen(true)}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <Link href="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* 3D Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-[400px] w-full relative hidden lg:block"
        >
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>

          {/* Decorative floating elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-xl"
            animate={{
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </section>
  );
}
