"use client";

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <Image
        src="/images/logo.png"
        alt="MariaWebTech Logo"
        width={180}
        height={50}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}