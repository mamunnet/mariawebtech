import { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about-hero';
import { TeamSection } from '@/components/sections/team';
import { ValuesSection } from '@/components/sections/values';
import { StatsSection } from '@/components/sections/stats';

export const metadata: Metadata = {
  title: 'About Us - MariaWebTech',
  description: 'Learn about our mission, values, and the talented team behind MariaWebTech.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ValuesSection />
      <TeamSection />
      <StatsSection />
    </>
  );
}