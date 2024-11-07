import { Metadata } from 'next';
import { ContactHero } from '@/components/sections/contact-hero';
import { ContactForm } from '@/components/sections/contact-form';
import { ContactInfo } from '@/components/sections/contact-info';

export const metadata: Metadata = {
  title: 'Contact Us - MariaWebTech',
  description: 'Get in touch with MariaWebTech. Let\'s discuss your project and create something amazing together.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </>
  );
}