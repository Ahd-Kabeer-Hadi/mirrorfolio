"use client";
import React from "react";
import me from "@/public/me2.png";
import Image from "next/image";
import Link from "next/link";
import GetInTouchButton from "./getInTouchButton";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="px-4 container max-w-7xl">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between min-h-screen w-full py-8">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-[#A1A1AA] font-inter font-semibold mb-2 text-xl md:text-2xl">
            Hi, I'm
          </p>
          <h2 className="text-4xl md:text-6xl font-syne font-bold mb-4">
            Ahammad Kabeer Hadi
          </h2>
          <h3 className="text-lg md:text-2xl text-gray-300 font-syne mb-4">
            I transform bold ideas into impactful digital realities.
          </h3>
          <p className="font-inter text-[#A1A1AA] text-base md:text-lg mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
            As a self-taught software engineer and founder of Mirrorfolio, I
            specialize in helping non-technical founders and young entrepreneurs
            bring their visions to life through innovative apps and exceptional
            digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <GetInTouchButton />
            {/* <Link
              href="https://shorturl.at/C7lbj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={"ghost"}
                className="w-full rounded-xl inline-flex h-12 items-center justify-center border border-slate-800 bg-transparent hover:bg-black px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                View Resume
              </Button>
            </Link> */}
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <Image
            alt="Kabeer"
            loading="lazy"
            src={me}
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
