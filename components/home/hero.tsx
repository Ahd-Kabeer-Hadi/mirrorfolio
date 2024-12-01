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
          <p className=" text-[#A1A1AA]  font-inter font-semibold mb-2">
            Hi there, I'm
          </p>
          <h2 className="text-3xl md:text-6xl text-balance font-syne font-bold  mb-2 md:mb-5">
            Ahammad Kabeer Hadi
          </h2>
{/* 
          <h3 className="text-2xl md:text-3xl text-gray-300 text-balance font-syne font-bold  mb-2 md:mb-5">
          I turn bold ideas into impactful digital realities.
          </h3> */}
          <h3 className="text-xl md:text-2xl text-gray-300 text-balance font-syne  mb-2 md:mb-3">
          I turn bold ideas into impactful digital realities.
          </h3>

          <p className="font-inter text-[#A1A1AA] space-y-2 text-balance md:text-lg w-full lg:max-w-lg">
          I'm a software engineer and founder of Mirrorfolio, where we specialize in crafting innovative apps and exceptional digital experiences. 


          </p>
          {/* <p className="font-inter text-[#A1A1AA] space-y-2 text-balance md:text-lg w-full lg:max-w-lg">
          Let's bring your vision to life.
          </p> */}

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
