"use client";

import { motion } from 'framer-motion';
import { Award, Code2, Users, Smile } from 'lucide-react';

const stats = [
  {
    icon: Code2,
    value: '500+',
    label: 'Projects Completed',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Happy Clients',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Awards Won',
  },
  {
    icon: Smile,
    value: '99%',
    label: 'Client Satisfaction',
  },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}