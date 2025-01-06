import { Button } from "@/components/ui/button";
import pilot from "@/public/Pilot.png";
import Image from "next/image";
import Link from "next/link";
export default function Cooking({ from }: { from: string }) {
  return (
    <section className="px-4 container max-w-7xl">
      <div className="w-full mb-22 mt-44">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <Image src={pilot} alt="pilot" />
          <div className="flex flex-col justify-center content-center">
            <p className="break-words text-5xl font-bold leading-none text-white md:text-[80px]">
              Bro, I'm still cooking it!
            </p>
            <p className="mt-8 italic text-[18px] text-[#A1A1AA]">
              this is one of the things that I keep working on my free time.
            </p>
            <p className="mt-2  text-[#A1A1AA] text-xl md:text-2xl">
              I't'll be ready soon, I promise.
            </p>
            <p className="mb-16 mt-6 text-[#A1A1AA] text-xl md:text-2xl">
              Meanwhile you can check out some of my{" "}
              {from !== "project" ? "projects or" : ""} articles.
            </p>
            <div className=" flex w-full  gap-10">
              {from !== "project" && (
                <Link href="/projects">
                  <Button variant="outline" className="w-full rounded-xl h-12">
                    See My Projects
                  </Button>
                </Link>
              )}

              <Link href="/blogs">
                <Button variant="outline" className="w-full rounded-xl h-12">
                  Read the articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
