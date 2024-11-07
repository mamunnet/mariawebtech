"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'A modern e-commerce solution with advanced features.',
  },
  {
    title: 'Portfolio Website',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Creative portfolio for showcasing work.',
  },
  {
    title: 'Mobile App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Cross-platform mobile application.',
  },
];

export function FeaturedWork() {
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
          className="text-center mb-16"
        >
          {/* Heading with orbital lines */}
          <div className="relative inline-block">
            {/* SVG Container */}
            <svg
              className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] pointer-events-none"
              style={{ filter: 'blur(1px)' }}
            >
              {/* Orbital Path */}
              <motion.path
                d="M20 50 Q 150 0, 280 50 Q 400 100, 520 50"
                stroke="url(#orbital-gradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                  }
                }}
              />
              {/* Gradient */}
              <defs>
                <linearGradient id="orbital-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F6202C" stopOpacity="0" />
                  <stop offset="50%" stopColor="#F6202C" />
                  <stop offset="100%" stopColor="#F6202C" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-primary">
              Featured Work
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
            Explore some of our recent projects and see how we help businesses
            transform their digital presence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-sm text-primary mb-2">{project.category}</p>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}