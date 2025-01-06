import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Lost from "@/public/lost.png";

export default function NotFound() {
  return (
    <section className="px-4 container max-w-7xl">
      <div className="w-full mb-16 mt-44">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image src={Lost} alt="pilot" />
          <div className="flex flex-col justify-center content-center">
            <p className="break-words text-5xl font-bold leading-none text-white md:text-[80px]">
              Oh, My! <br />
              You look lost!
            </p>
            <p className="mb-16 mt-4 text-[#A1A1AA] text-xl md:text-2xl">
              It's okay, I'm here to help.
            </p>
            <Link href="/">
              <Button variant="outline" className=" rounded-xl h-12">
                Let's go back to home.
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
