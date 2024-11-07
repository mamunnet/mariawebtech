import { HeroSection } from '@/components/sections/hero';
import { SectionSeparator } from '@/components/sections/section-separator';
import { AboutCompany } from '@/components/sections/about-company';
import { ServicesSection } from '@/components/sections/services';
import { FeaturedWork } from '@/components/sections/featured-work';
import { CTASection } from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionSeparator />
      <AboutCompany />
      <ServicesSection />
      <FeaturedWork />
      <CTASection />
    </>
  );
}