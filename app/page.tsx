import Image from "next/image";
import { Button } from "@/components/ui/button";
import mirror from "@/public/mirror.png";
import Link from "next/link";
import book from "@/public/notebook.webp";
import stack from "@/public/stack.webp";
import Hero from "@/components/home/hero";
import Testimonials from "@/components/ui/testimonials";
import { Projects } from "@/components/Projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Selected Work Section */}
      <section className="px-4 container max-w-7xl mt-12 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-syne font-semibold">A Glimpse of My Work</h2>
            <Link
              href="/projects"
              className="text-[#A1A1AA] hover:underline hover:text-white font-syne"
            >
              View All
            </Link>
          </div>
          <hr className="border-[1px] border-card-border/20 w-full" />
          <Projects varient="secondary" />
        </div>
      </section>

      {/* Client Stories Section */}
      <section className="px-4 container max-w-7xl py-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-syne font-semibold">Client Stories</h2>
          <hr className="border-[1px] border-card-border/20 w-full" />
          <Testimonials />
        </div>
      </section>

      {/* About Me Section */}
      <section className="px-4 container max-w-7xl mt-12 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-syne font-semibold">Get to Know Me</h2>
          <hr className="border-[1px] border-card-border/20 w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* My Story Card */}
          <Card className="rounded-xl text-center flex flex-col gap-5 items-center justify-between bg-[#18181D]/60 border border-card-border/20 p-6 backdrop-filter backdrop-blur-md">
            <CardTitle className="text-lg font-syne font-bold">
              My Story
            </CardTitle>
            <CardDescription className="text-sm font-mono text-[#A1A1AA]">
              Discover who I am and what I do.
            </CardDescription>
            <CardContent>
              <Image
                loading="lazy"
                src={mirror}
                alt="My story"
                width={300}
                height={300}
                className="rounded-full transition-transform duration-300 hover:rotate-[-8.21deg]"
              />
            </CardContent>
            <CardFooter>
              <Link href="/about">
                <Button variant="ghost" className="text-sm">
                  Learn More
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Scribbles Card */}
          <Card className="rounded-xl text-center flex flex-col gap-5 items-center justify-between bg-[#18181D]/60 border border-card-border/20 p-6 backdrop-filter backdrop-blur-md">
            <CardTitle className="text-lg font-syne font-bold">
              Scribbles
            </CardTitle>
            <CardDescription className="text-sm font-mono text-[#A1A1AA]">
              Insights and learnings from my software journey.
            </CardDescription>
            <CardContent>
              <Image
                loading="lazy"
                src={book}
                alt="Scribbles"
                width={300}
                height={300}
                className="transition-transform duration-300 hover:rotate-[-8.21deg]"
              />
            </CardContent>
            <CardFooter>
              <Link href="/blog">
                <Button variant="ghost" className="text-sm">
                  Explore Scribbles
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Stack Card */}
          <Card className="rounded-xl text-center flex flex-col gap-5 items-center justify-between bg-[#18181D]/60 border border-card-border/20 p-6 backdrop-filter backdrop-blur-md">
            <CardTitle className="text-lg font-syne font-bold">Stack</CardTitle>
            <CardDescription className="text-sm font-mono text-[#A1A1AA]">
              Tools, frameworks, and languages I use.
            </CardDescription>
            <CardContent>
              <Image
                loading="lazy"
                src={stack}
                alt="Stack"
                width={300}
                height={300}
                className="rounded-full transition-transform duration-300 hover:rotate-[-8.21deg]"
              />
            </CardContent>
            <CardFooter>
              <Link href="/tools">
                <Button variant="ghost" className="text-sm">
                  Explore Stack
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-4 container max-w-7xl mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-[#18181D]/60 border border-card-border/20 rounded-xl backdrop-filter backdrop-blur-md">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-syne font-semibold">
              Let's Build Together
            </h2>
            <p className="text-sm font-mono text-[#A1A1AA]">
              If you're ready to take your idea to the next level, let's talk.
              Schedule a consultation, and together, we'll create something
              extraordinary.
            </p>
          </div>
          <Link
            href="https://cal.com/ahd-kabeerhadi/discovery-sessions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full md:w-auto rounded-xl" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
