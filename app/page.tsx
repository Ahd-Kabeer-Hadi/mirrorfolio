import Image from "next/image";
import { Button } from "@/components/ui/button";
import mirror from "@/public/mirror.png";
import Link from "next/link";
import book from "@/public/notebook.webp";
import stack from "@/public/stack.webp";
import Hero from "@/components/home/hero";
import Testimonials from "@/components/ui/testimonials";
import { ProjectCards } from "@/components/ProjectCards";
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
      <Hero></Hero>

      <section className="px-4 container max-w-[1024px] gap-10 mt-12  flex flex-col ">
        <div className="col-span-2 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-syne font-semibold"> Selected Work</h2>
            <hr className="border-[1px] border-card-border/20 w-full" />
          </div>
          <ProjectCards variant="secondary" />
          <div className="flex flex-col gap-4 w-full"></div>
        </div>
      </section>
      <section className="px-4 container max-w-[1024px] py-10 ">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-syne font-semibold"> Client Stories</h2>
          <hr className="border-[1px] border-card-border/20 w-full" />
        </div>
        <Testimonials />
      </section>
      <section className="px-4 container max-w-[1024px] gap-10 mt-12   flex flex-col ">
        <div className="col-span-1 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-syne font-semibold">Get to know me</h2>
            <hr className="border-[1px] border-card-border/20 w-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4  md:grid-cols-3 ">
          <Card className="rounded-xl text-center flex flex-col gap-5 items-stretch justify-between border-[1px] border-card-border/20 bg-[#18181D]/60 p-5 bg-opacity-60 backdrop-filter backdrop-blur-md">
            <CardTitle className="text-lg font-syne font-bold">
              My Story
            </CardTitle>
            <CardDescription className="text-md font-mono text-[#A1A1AA]">
              Who I am and what I do
            </CardDescription>
            <CardContent className="w-full">
              <Image
                loading="lazy"
                src={mirror}
                alt="me"
                width={300}
                height={300}
                className=" transition duration-300 ease-out hover:rotate-[-8.21deg] rounded-full"
              />
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-translate-x-2 translate-y-2 rotate-45  transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 "
                >
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path>
                </svg>
              </Link>
            </CardFooter>
          </Card>
          <Card className="rounded-xl text-center flex flex-col gap-5 items-stretch justify-between  border-[1px] border-card-border/20 bg-[#18181D]/60 p-5 bg-opacity-60 backdrop-filter backdrop-blur-md">
            <CardTitle className="text-lg font-syne font-bold">
              Scribbles
            </CardTitle>
            <CardDescription className="text-md font-mono text-[#A1A1AA]">
              My thoughts and learnings on software development, and my journey.
            </CardDescription>
            <CardContent className="w-full">
              <Image
                loading="lazy"
                src={book}
                alt="me"
                width={300}
                height={300}
                className=" transition duration-300 ease-out hover:rotate-[-8.21deg] "
              />
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/blog">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-translate-x-2 translate-y-2 rotate-45  transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 "
                >
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path>
                </svg>
              </Link>
            </CardFooter>
          </Card>
          <Card className="rounded-xl text-center flex flex-col gap-5 items-stretch justify-between  border-[1px] border-card-border/20 bg-[#18181D]/60 p-5 bg-opacity-60 backdrop-filter backdrop-blur-md">
            <CardTitle className="text-lg font-syne font-bold">Stack</CardTitle>
            <CardDescription className="text-md font-mono text-[#A1A1AA]">
              Languages frameworks and tools I use in my projects
            </CardDescription>
            <CardContent className="w-full">
              <Image
                loading="lazy"
                src={stack}
                alt="me"
                width={330}
                height={330}
                className=" transition duration-300 ease-out hover:rotate-[-8.21deg] rounded-full"
              />
            </CardContent>
            <CardFooter className="flex justify-center items-baseline">
              <Link href="/uses">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-translate-x-2 translate-y-2 rotate-45  transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 "
                >
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path>
                </svg>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="px-4 container max-w-[1024px] gap-10 mt-12  grid">
        <div className="rounded-xl flex flex-col md:flex-row gap-5 items-center  justify-around border-[1px] border-card-border/20 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
          <div className="flex flex-col gap-4 px-5">
            <h2 className="text-4xl font-syne font-semibold">
              Let's work together
            </h2>
            <p className="text-md font-mono text-[#A1A1AA] ">
              Want to discuss an opportunity to create something great? I am
              ready when you are.
            </p>
          </div>
          <div className="flex flex-col gap-4 px-5">
            <Link
              href="https://cal.com/ahd-kabeerhadi/quick-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full rounded-xl " size={"lg"}>
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
