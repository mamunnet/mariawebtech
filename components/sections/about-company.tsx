"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

export function AboutCompany() {
  return (
    <section className="py-16 relative overflow-hidden bg-black/95">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-background/80 to-background/20" />

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
                  WELCOME TO MARIAWEBTECH
                </h2>
              </div>
            </div>
            <p className="text-lg text-gray-300">
              MariaWebTech is a leading web development company based in the heart of digital innovation. 
              We started as a website design & development company, and over the years we have expanded into 
              a full-service software development powerhouse.
            </p>
            <p className="text-lg text-gray-300">
              Our company is well-known for creating exceptional digital experiences. We are looking for 
              strategists, designers, producers, and technologists who are passionate about creating 
              innovative ideas and transforming them into engaging user experiences.
            </p>
            <Button className="group bg-primary hover:bg-primary/90" size="lg">
              <FileDown className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
              Download Company Profile
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
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800&h=600"
                  alt="Team at work"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Glassy overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-yellow-500/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}