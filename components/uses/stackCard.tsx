import Link from "next/link";
import Image from "next/image";
import {
  Dot,
  DotIcon,
  HandIcon,
  HandMetal,
  SquareDashedBottomCodeIcon,
} from "lucide-react";

interface stackCardProps {
  name: string;
  icon: string;
  description: string;
  url?: string;
  varient?: "card" | "list";
}
export default function StackCard({
  name,
  icon,
  description,
  varient = "list",
  url,
}: stackCardProps) {
  if (varient == "list") {
    return (
      <div className="flex items-center w-full">
        <Dot size={64} />
        <div className="flex items-center gap-4 justify-between w-full">
          <p className="text-base font-semibold text-white md:text-xl">
            {name}
          </p>
          <p className="inline-block rounded-full border-[1px] border-light-card-border px-3 py-[6px] text-xs text-dark-gray border-[#272525] bg-transparent md:text-sm">
            {description}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <Link
        href="https://www.w3.org/WAI/"
        className="group relative flex items-center justify-center rounded-xl gap-4 overflow-hidden border-[1px] border-card-border/20 bg-[#18181D]/60 py-5 backdrop-filter backdrop-blur-md transition duration-300 md:h-[300px] md:p-6"
      >
        <p className="text-base font-semibold text-white md:text-xl">{name}</p>
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
          className="absolute right-6 top-6 hidden -translate-x-2 translate-y-2 rotate-45 text-dark-gray opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white md:inline-block"
        >
          <path d="m5 12 7-7 7 7"></path>
          <path d="M12 19V5"></path>
        </svg>
        <div className="relative flex flex-1 items-center justify-center md:absolute md:inset-x-6 md:bottom-6">
          <span className="inline-block rounded-full border-[1px] border-light-card-border px-3 py-[6px] text-xs text-dark-gray border-[#272525] bg-transparent md:text-sm">
            {description}
          </span>
        </div>
      </Link>
    );
  }
}
