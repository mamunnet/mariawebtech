import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ClientLayout } from '@/components/client-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MariaWebTech - Modern Web Design Agency',
  description: 'Professional web design and development services for businesses of all sizes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn('dark', inter.className)}>
      <body className="min-h-screen bg-black">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}