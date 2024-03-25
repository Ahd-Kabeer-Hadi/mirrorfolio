import Link from "next/link";
import Image from "next/image";
import React from "react";
import arrow from "@/public/arrow.svg";
import { Button } from "../ui/button";

const GetInTouchButton = () => {
  return (
    <Link href="/contact">
      <Button
        variant={"outline"}
        className="w-full rounded-xl inline-flexflex h-12 bg-transparent  hover:bg-slate-200/25 items-center justify-center px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <p className="mb-1"> Get in touch</p>
        <Image
          alt="get in touch icon"
          src={arrow}
          loading="lazy"
          width={18}
          height={18}
          className="ml-2"
        />
      </Button>
    </Link>
  );
};

export default GetInTouchButton;
