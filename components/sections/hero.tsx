"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import Link from 'next/link';
import { ContactFormModal } from '@/components/contact-form-modal';
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

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
  const [heroContent, setHeroContent] = useState({
    title: 'We Create Digital Experiences',
    subtitle: '',
    description: 'Transform your brand with cutting-edge web solutions. We blend creativity and technology to deliver exceptional digital experiences.',
    buttonText: 'Get Started',
    buttonLink: '#contact'
  });

  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        const docRef = doc(db, 'content', 'hero');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setHeroContent({
            title: data.title || heroContent.title,
            subtitle: data.subtitle || heroContent.subtitle,
            description: data.description || heroContent.description,
            buttonText: data.buttonText || heroContent.buttonText,
            buttonLink: data.buttonLink || heroContent.buttonLink
          });
        }
      } catch (error) {
        console.error('Error fetching hero content:', error);
      }
    };

    fetchHeroContent();
  }, []);

  return (
    <section className="h-[50vh] pt-6 lg:pt-0 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-background to-primary/5 animate-gradient">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))] opacity-80" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-yellow-500/20 to-primary/20 animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-background/50 to-primary/10 animate-gradient-y" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.5))] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="relative">
            {/* Animated SVG Path */}
            <svg
              className="absolute -inset-2 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] pointer-events-none"
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

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-primary relative z-10">
              {heroContent.title.split(' ').map((word, index) => (
                <span key={index} className={word.toLowerCase() === 'digital' ? 'text-primary' : ''}>
                  {word}{' '}
                  {index === 2 && <br />}
                </span>
              ))}
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

          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-xl mt-3">
            {heroContent.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-base"
              onClick={() => setIsContactModalOpen(true)}
            >
              {heroContent.buttonText}
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 text-base"
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
          className="h-[300px] lg:h-[400px] w-full relative hidden lg:block"
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
            className="absolute top-1/3 left-1/3 w-20 h-20 bg-primary/20 rounded-full blur-xl"
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
            className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl"
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
