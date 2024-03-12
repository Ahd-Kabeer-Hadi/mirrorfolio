import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const syne = Syne({
  weight: "700",
  subsets: ["latin"],

  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],

  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mirrorfolio : A creative reflection of Kabeer Hadi,a Software Engineer from Calicut, India.",
  description: "Hey, I'm Ahd. Kabeer Hadi, a self-taught software engineer from Calicut, Kerala. India. and this is my eploration of what I can do with technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("bg-background font-inter antialiased relative ", {
          "font-syne": syne.variable,
          "font-inter": inter.variable,
        })}
      >
        <Header />
        <main>{children}</main>
        <Toaster />
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
