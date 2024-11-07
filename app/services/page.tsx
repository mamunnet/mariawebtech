import { Metadata } from 'next';
import { ServicesHero } from '@/components/sections/services-hero';
import { ServicesList } from '@/components/sections/services-list';
import { ProcessSection } from '@/components/sections/process';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { ServicesCTA } from '@/components/sections/services-cta';

export const metadata: Metadata = {
  title: 'Services - MariaWebTech',
  description: 'Explore our comprehensive web design and development services. From UI/UX design to full-stack development, we deliver exceptional digital solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <TestimonialsSection />
      <ServicesCTA />
    </>
  );
}