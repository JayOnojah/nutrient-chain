import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "NutrientChain: Empowering African Farmers. Nourishing the World.",
  description:
    "We use technology to empower smallholder farmers in Africa with access to finance, data-driven best practices, and access to local & global markets — driving food security for all.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
