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
          className="space-y-8"
        >
          <div className="relative space-y-6">
            <motion.div 
              className="relative mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative inline-block">
                {/* Background glow effect */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-yellow-500/20 to-primary/20 rounded-lg blur-xl"
                />
                
                {/* Top line with glow */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "60%", opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute -top-4 left-0 h-[3px] rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{
                    boxShadow: '0 0 10px var(--primary)'
                  }}
                />

                {/* Main title */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative"
                >
                  <h1 className="text-4xl sm:text-5xl font-bold relative py-2">
                    <span className="relative inline-block overflow-hidden">
                      {/* Shimmer effect */}
                      <motion.div
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "linear",
                        }}
                        className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      />
                      
                      {/* Title text */}
                      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-primary">
                        {heroContent.title}
                      </span>
                    </span>
                  </h1>

                  {/* Bottom line with glow */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left rounded-full bg-gradient-to-r from-primary via-yellow-500 to-primary"
                    style={{
                      boxShadow: '0 0 10px var(--primary)'
                    }}
                  />

                  {/* Side accent lines */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -left-6 top-0 w-[2px] rounded-full bg-gradient-to-b from-primary to-transparent"
                    style={{
                      boxShadow: '0 0 8px var(--primary)'
                    }}
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute -right-6 top-0 w-[2px] rounded-full bg-gradient-to-b from-primary to-transparent"
                    style={{
                      boxShadow: '0 0 8px var(--primary)'
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-muted-foreground max-w-xl"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4"
          >
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
          </motion.div>
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
