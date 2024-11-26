import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard | Maria Web Tech",
  description: "Secure admin panel for website management",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-black via-gray-900 to-black ${inter.className}`}>
      {children}
    </div>
  );
}
