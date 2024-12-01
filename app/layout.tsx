import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

const syne = Syne({
  weight: "700",
  subsets: ["latin"],

  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],

  variable: "--font-inter",
});

// export const metadata: Metadata = {
//   title:
//     "Mirrorfolio : A creative reflection of Kabeer Hadi,a Software Engineer from Calicut, India.",
//   description:
//     "Hey, I'm Ahd. Kabeer Hadi, a self-taught software engineer from Calicut, Kerala. India. and this is my eploration of what I can do with technology.",
// };
// export const metadata: Metadata = {
//   title:
//     "Mirrorfolio: Tech Idea Execution Lab by Kabeer Hadi from Kerala, India",
//   description:
//     "Welcome to Mirrorfolio, a tech idea execution lab founded by A. Kabeer Hadi in Calicut, Kerala. Specializing in AI-driven solutions, startup enablement, and cutting-edge software development, we transform innovative ideas into impactful realities.",
// };
// export const metadata: Metadata = {
//   title:
//     "Mirrorfolio: Transforming Ideas into Reality - Tech Lab by Ahd. Kabeer Hadi",
//   description:
//     "Mirrorfolio is a leading tech idea execution lab founded by Ahd. Kabeer Hadi in Calicut, Kerala, India. We specialize in AI-powered applications, startup enablement, and innovative software solutions, turning visionary ideas into impactful digital products.",
// };
export const metadata: Metadata = {
  title:
    "Mirrorfolio: Kerala's Unique Tech Idea Forge - Innovating with AI and Passion",
  description:
    "Mirrorfolio, a tech idea execution lab in Calicut, Kerala, India, is more than a tech lab - it's where bold ideas meet cutting-edge AI and expert execution. From empowering startups to crafting innovative software solutions, we create technology that inspires and transforms.",
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
        <Script id="clarity-script" strategy="afterInteractive">
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "napesn24bd");
    `}
        </Script>
        <GoogleAnalytics gaId="G-3XQGN1GJCZ" />
      </body>
    </html>
  );
}
