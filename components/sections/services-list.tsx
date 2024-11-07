"use client";

import { motion } from 'framer-motion';
import { Palette, Code, Layout, Megaphone, Rocket, Shield } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
  },
];

export function ServicesList() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
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
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}