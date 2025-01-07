import Link from "next/link";
import Image from "next/image";
import { Separator } from "./ui/separator";
import fullLogo from "@/public/full-logo.svg";
import { SocialIcons } from "@/lib/SocialIcons";
import { DesktopNav } from "./DesktopNav";
import { BottomNav } from "./BottomNav";

export default function Header() {
  return (
    <>
      <header className="relative z-[999] px-4">
        {/* Mobile Header */}
        <div className="px-2 md:hidden mx-auto mt-8 flex h-16 w-full justify-between m-auto sticky top-5 max-w-7xl">
          <div className="flex w-full items-center p-0 m-0">
            <Link href="/">
              <Image
                height={30}
                width={150}
                alt="logo"
                src={fullLogo}
                className="hover:scale-105"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-end gap-2">
            <SocialIcons />
          </div>
        </div>

        {/* Desktop Header */}
        <div className="container hidden mx-auto mt-8 md:flex h-16 w-full m-auto sticky top-5 max-w-7xl items-center justify-between rounded-xl border-[1px] border-card-border/20 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md">
          <div className="flex w-full items-center justify-between gap-2">
            <Link href="/">
              <div className="text-2xl font-inter font-medium">
                <Image height={30} width={150} alt="logo" src={fullLogo} />
              </div>
            </Link>

            <div className="flex items-center justify-end gap-2 md:gap-4">
              <DesktopNav />
              <Separator
                orientation="vertical"
                className="h-6 w-[1px] bg-[#18181D]/60 hidden md:block"
              />
              <div className="flex items-center justify-end gap-2 md:gap-4">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <BottomNav />
    </>
  );
}