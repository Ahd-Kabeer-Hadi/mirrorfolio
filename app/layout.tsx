import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { ThemeProvider } from "@/components/ThemeProvider";

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
  title: "Mirrorfolio",
  description: "A creative exploration of a self-taught developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background font-inter antialiased",
          {
            "font-syne": syne.variable,
            "font-inter": inter.variable,
          }
        )}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
        > */}
          <Header />
          {children}
          <Footer />
        {/* </ThemeProvider> */}
        <SpeedInsights/>
      </body>
    </html>
  );
}
