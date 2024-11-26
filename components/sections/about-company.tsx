"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export function AboutCompany() {
  const [aboutContent, setAboutContent] = useState({
    title: 'WELCOME TO MARIAWEBTECH',
    content: 'MariaWebTech is a leading web development company based in the heart of digital innovation. We started as a website design & development company, and over the years we have expanded into a full-service software development powerhouse.',
    mission: 'Our company is well-known for creating exceptional digital experiences. We are looking for strategists, designers, producers, and technologists who are passionate about creating innovative ideas and transforming them into engaging user experiences.',
    buttonText: 'Download Company Profile',
    buttonLink: '#',
    imageUrl: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800&h=600',
    imageAlt: 'Team at work'
  });

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const docRef = doc(db, 'content', 'about');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setAboutContent({
            title: data.title || aboutContent.title,
            content: data.content || aboutContent.content,
            mission: data.mission || aboutContent.mission,
            buttonText: data.buttonText || aboutContent.buttonText,
            buttonLink: data.buttonLink || aboutContent.buttonLink,
            imageUrl: data.imageUrl || aboutContent.imageUrl,
            imageAlt: data.imageAlt || aboutContent.imageAlt
          });
        }
      } catch (error) {
        console.error('Error fetching about content:', error);
      }
    };

    fetchAboutContent();
  }, []);

  return (
    <section className="py-16 relative overflow-hidden bg-black/95">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-background/80 to-background/20" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-yellow-500/10 to-primary/10 animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-background/50 to-background/20 animate-gradient-y" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5 }}
                  className="h-1 bg-gradient-to-r from-primary via-yellow-500 to-primary absolute -top-2 left-0"
                />
                <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-primary inline-flex items-center">
                  {aboutContent.title}
                </h2>
              </div>
            </div>
            <p className="text-lg text-gray-300">
              {aboutContent.content}
            </p>
            <p className="text-lg text-gray-300">
              {aboutContent.mission}
            </p>
            <Button 
              className="group bg-primary hover:bg-primary/90" 
              size="lg"
              asChild
            >
              <a href={aboutContent.buttonLink} download>
                <FileDown className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
                {aboutContent.buttonText}
              </a>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg group">
              {/* Glassy container */}
              <div className="absolute inset-0 backdrop-blur-[2px] bg-white/5 border border-white/10 rounded-lg" />
              
              {/* Image */}
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <Image
                  src={aboutContent.imageUrl}
                  alt={aboutContent.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Glassy overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-yellow-500/20 rounded-full blur-2xl" />

              {/* Additional floating elements */}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}