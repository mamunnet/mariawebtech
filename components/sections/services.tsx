"use client";

import { motion } from 'framer-motion';
import { Palette, Code, Layout, Megaphone, Rocket, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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
    href: '/services/ui-ux-design',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Build fast, scalable, and secure web applications using cutting-edge technologies.',
    features: [
      'Front-end Development',
      'Back-end Development',
      'API Integration',
      'Database Design',
    ],
    href: '/services/web-development',
  },
  {
    icon: Layout,
    title: 'Responsive Design',
    description: 'Ensure your website looks and works perfectly on all devices and screen sizes.',
    features: [
      'Mobile-First Design',
      'Cross-Browser Compatibility',
      'Performance Optimization',
      'Accessibility Standards',
    ],
    href: '/services/responsive-design',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Boost your online presence and reach your target audience effectively.',
    features: [
      'SEO Optimization',
      'Content Strategy',
      'Social Media Marketing',
      'Analytics & Reporting',
    ],
    href: '/services/digital-marketing',
  },
  {
    icon: Rocket,
    title: 'E-commerce Solutions',
    description: 'Create powerful online stores that drive sales and enhance customer experience.',
    features: [
      'Custom E-commerce Development',
      'Payment Gateway Integration',
      'Inventory Management',
      'Shopping Cart Optimization',
    ],
    href: '/services/e-commerce',
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Keep your digital assets secure, updated, and performing at their best.',
    features: [
      'Regular Updates & Backups',
      'Security Monitoring',
      'Performance Optimization',
      '24/7 Technical Support',
    ],
    href: '/services/maintenance-support',
  },
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

            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-primary">
              Our Services
            </h2>
          </div>

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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <Card className="h-full hover:bg-muted/50 transition-colors duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
