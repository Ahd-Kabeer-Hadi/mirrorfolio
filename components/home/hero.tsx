"use client";
import React from "react";
import me from "@/public/me2.png";
import Image from "next/image";
import Link from "next/link";
import GetInTouchButton from "./getInTouchButton";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="px-4 container max-w-[1024px] ">
      <div className="  mx-auto mt-8 flex  min-h-screen sm:min-h-screen items-center w-full p-1 justify-between  top-5">
        <div className="w-full lg:w-2/3">
          <p className=" text-[#A1A1AA]  font-inter font-extralight mb-3">
            Hi there, myself
          </p>
          <h2 className="text-4xl md:text-6xl font-syne font-bold  mb-2 md:mb-5">
            Ahammad Kabeer
          </h2>

          <h3 className="text-3xl md:text-4xl text-gray-300 font-syne font-bold  mb-2 md:mb-5">
            I help turn your ideas into digital realities.
          </h3>

          <p className="font-inter text-[#A1A1AA] space-y-2 text-xl w-full lg:max-w-lg">
            I'm a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences.
          </p>

          <div className="flex w-full gap-4 sm:max-w-md pt-9 content-end">
          <GetInTouchButton/>

            <Link
              href="https://shorturl.at/C7lbj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={"ghost"}
                className="w-full rounded-xl inline-flex h-12  items-center justify-center  border border-slate-800 bg-transparent hover:bg-black px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                View Resume
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            alt="Kabeer"
            loading="lazy"
            src={me}
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
