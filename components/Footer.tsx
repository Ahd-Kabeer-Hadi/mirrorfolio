
import { Separator } from "./ui/separator";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-16  pb-32 md:pb-12">
      <Separator className="mb-12" />
      <div className="max-w-7xl mx-auto grid grid-flow-row sm:grid-cols-3">
        <div className="w-full flex flex-col p-5">
          <Link href="/">
            <div className="text-2xl font-inter font-medium">Mirrorfolio</div>
          </Link>
          <p className="text-sm font-mono mt-5 text-[#A1A1AA] ">
            Thanks for stopping by ッ
          </p>
          <p className="text-sm font-mono mt-5 text-[#A1A1AA] ">
            Mirrorfolio is a collection of my projects, scribbles and reflections as a software engineer.
          </p>
          <p className="text-sm font-mono text-[#A1A1AA]  mt-10 content-end">
            © 2024 Mirrorfolio. All Rights Reserved.
          </p>
        </div>
        <div className="w-full flex flex-col md:items-end justify-center p-5 gap-5">
          <div className="text-lg font-inter font-medium">Links</div>
          <ul className="flex flex-col gap-5 md:items-end">
            <li>
              <Link href="/about">Story</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/library">Scribbles</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col p-5 gap-5 md:items-end">
          <div className="text-lg font-inter font-medium">Elsewhere</div>
          <ul className="flex flex-col gap-5 md:items-end">
            <li>
              <Link href="https://github.com/Ahd-Kabeer-Hadi"target="_blank" rel="noreferrer noopener">GitHub</Link>
            </li>
            <li>
              <Link href="https://twitter.com/Ahd_Kabeerpi" target="_blank" rel="noreferrer noopener">Twitter</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/ahd-kabeer/" target="_blank" rel="noreferrer noopener">LinkedIn</Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/mirrorfolio/" target="_blank" rel="noreferrer noopener">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
