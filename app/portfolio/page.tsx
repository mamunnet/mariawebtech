import { Metadata } from 'next';
import { PortfolioHero } from '@/components/sections/portfolio-hero';
import { PortfolioGrid } from '@/components/sections/portfolio-grid';
import { PortfolioCTA } from '@/components/sections/portfolio-cta';

export const metadata: Metadata = {
  title: 'Portfolio - MariaWebTech',
  description: 'Explore our portfolio of web design and development projects. See how we help businesses transform their digital presence.',
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
    </>
  );
}