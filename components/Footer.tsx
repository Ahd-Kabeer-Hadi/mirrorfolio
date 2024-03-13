import { Separator } from "./ui/separator";
import Link from "next/link";
import Image from "next/image";
import fullLogo from "@/public/full-logo.svg";
import sign from "@/public/sign.svg";

export default function Footer() {
  return (
    <footer className="relative mt-16  pb-28 md:pb-12">
      <Separator className="mb-12" />
      <div className="max-w-7xl mx-auto flex px-4 items-start flex-col md:flex-row">
        <div className="w-full flex flex-col p-5">
          <Link href="/">
            <Image height={30} width={150} alt="logo" src={fullLogo}></Image>
          </Link>
          <p className="text-sm font-mono mt-5 text-[#A1A1AA] ">
            Thanks for stopping by ッ
          </p>
          <p className="text-sm font-mono mt-5 text-[#A1A1AA] ">With hearts,</p>
          <Image
            height={30}
            width={150}
            alt="logo"
            src={sign}
            className="mt-6"
          ></Image>
        </div>
        <div className="w-full flex ">
          <div className="w-full flex flex-col   p-5 gap-5">
            <div className="text-lg font-inter font-medium">Links</div>
            <Separator className="mb-2 px-2" />
            <ul className="flex flex-col gap-5 ">
              <li>
                <Link href="/about">Story</Link>
              </li>
              <li>
                <Link href="/work">Projects</Link>
              </li>
              <li>
                <Link href="/blog">Scribbles</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col p-5 gap-5">
            <div className="text-lg font-inter font-medium mr-5">Elsewhere</div>
            <Separator className="mb-2 px-2" />
            <ul className="flex flex-col gap-5 ">
              <li>
                <Link
                  href="https://github.com/Ahd-Kabeer-Hadi"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="group flex items-center gap-2 text-onyx/60 hover:text-onyx dark:text-light-gray dark:hover:text-white transition-colors duration-150">
                    GitHub
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
                      className="-translate-x-2 translate-y-2 rotate-45 opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 "
                    >
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/Ahd_Kabeerpi"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="group flex items-center gap-2 text-onyx/60 hover:text-onyx dark:text-light-gray dark:hover:text-white transition-colors duration-150">
                    Twitter
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
                      className="-translate-x-2 translate-y-2 rotate-45 opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 "
                    >
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/ahd-kabeer/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="group flex items-center gap-2 text-onyx/60 hover:text-onyx dark:text-light-gray dark:hover:text-white transition-colors duration-150">
                    LinkedIn
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
                      className="-translate-x-2 translate-y-2 rotate-45 opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 "
                    >
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/mirrorfolio/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="group flex items-center gap-2 text-onyx/60 hover:text-onyx dark:text-light-gray dark:hover:text-white transition-colors duration-150">
                    Instagram
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
                      className="-translate-x-2 translate-y-2 rotate-45 opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 "
                    >
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="px-4 container max-w-7xl ">
        <Separator className="mb-12 mt-10" />
        <div className="w-full flex   items-center justify-between">
          <p className="text-sm font-mono text-[#A1A1AA]  ">
            © 2024 Mirrorfolio.
          </p>
          <p className="text-sm font-mono text-[#A1A1AA] ">
            All Rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
