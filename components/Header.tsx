import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import logo from "@/public/logo.svg";
import {
  FolderGit2,
  Mail,
  NotebookPen,
  PackageOpen,
  SquareUser,
  Twitter,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="relative  z-[999]  px-4">
        <div className="container md:hidden  mx-auto mt-8 flex h-16 w-full justify-center m-auto sticky top-5 max-w-7xl">
          <Link href="/">
            <div className="text-2xl font-inter font-medium">
              <Image height={30} width={30} alt="logo" src={logo}></Image>
            </div>
          </Link>
        </div>
        <div className="container hidden  mx-auto mt-8 md:flex h-16 w-full m-auto sticky top-5 max-w-7xl items-center justify-between rounded-xl border-[1px] border-card-border/20 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
          <div className="flex w-full items-center justify-between gap-2">
            <Link href="/">
              <div className="text-2xl font-inter font-medium">
                <Image height={30} width={30} alt="logo" src={logo}></Image>
              </div>
            </Link>

            <div className="flex items-center justify-end gap-2 md:gap-4">
              {/* this is a temp change due to pages are not yet designed */}

              <Link
                href="/about"
                className="font-syne font-medium transition-transform transform hover:scale-105"
              >
                <div className="hidden md:flex">Story</div>
              </Link>

              <Link
                href="/projects"
                className="font-syne font-medium transition-transform transform hover:scale-105"
              >
                <div className="hidden md:flex">Projects</div>
              </Link>
              <Link
                href="/library"
                className="font-syne font-medium transition-transform transform hover:scale-105 hidden md:flex"
              >
                <div>Scribbles</div>
              </Link>
              <Link
                href="/contact"
                className="font-syne font-medium transition-transform transform hover:scale-105"
              >
                <div className="hidden md:flex">Contact</div>
              </Link>

              <Separator
                orientation="vertical"
                className="h-6 w-[1px] bg-[#18181D]/60 hidden md:block"
              />
              <div className="flex items-center justify-end gap-2 md:gap-4">
                <Link
                  href="https://www.linkedin.com/in/ahd-kabeer/"
                  className="font-syne font-medium transition-transform transform hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <g clipPath="url(#LinkedIn_svg__a)">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M21.335 24H2.67a2.667 2.667 0 0 1-2.667-2.667V2.667A2.667 2.667 0 0 1 2.669 0h18.666a2.667 2.667 0 0 1 2.667 2.667v18.666A2.667 2.667 0 0 1 21.335 24Zm-4.23-3.333h3.562V13.35c0-3.095-1.755-4.592-4.206-4.592-2.452 0-3.484 1.91-3.484 1.91V9.11H9.545v11.556h3.432V14.6c0-1.626.748-2.593 2.18-2.593 1.317 0 1.949.93 1.949 2.593v6.066ZM3.335 5.466c0 1.177.947 2.132 2.116 2.132 1.17 0 2.116-.955 2.116-2.132A2.124 2.124 0 0 0 5.45 3.333c-1.169 0-2.116.955-2.116 2.133Zm3.923 15.2H3.678V9.112h3.58v11.556Z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="LinkedIn_svg__a">
                        <path fill="#fff" d="M0 0h24v24H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  href="https://github.com/Ahd-Kabeer-Hadi"
                  className="font-syne font-medium transition-transform transform hover:scale-105"
                >
                  <svg
                    className="group  flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <g clipPath="url(#a)">
                      <path
                        fill="currentColor"
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="transparent" d="M0 0h24v24H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com/Ahd_Kabeerpi"
                  className="font-syne font-medium transition-transform transform hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <g clipPath="url(#a)">
                      <g clipPath="url(#b)">
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M11.964 0C5.348 0 0 5.388 0 12.053c0 5.328 3.427 9.838 8.18 11.434.595.12.813-.259.813-.578 0-.28-.02-1.237-.02-2.235-3.328.718-4.02-1.437-4.02-1.437-.536-1.397-1.328-1.756-1.328-1.756-1.09-.738.08-.738.08-.738 1.207.08 1.841 1.237 1.841 1.237 1.07 1.836 2.793 1.317 3.487.998.099-.779.416-1.317.752-1.617-2.654-.28-5.447-1.317-5.447-5.947 0-1.317.475-2.394 1.228-3.232-.119-.3-.535-1.537.12-3.193 0 0 1.01-.32 3.287 1.237.975-.264 1.981-.398 2.991-.4 1.01 0 2.04.14 2.991.4 2.278-1.557 3.288-1.237 3.288-1.237.654 1.656.238 2.894.12 3.193.772.838 1.227 1.915 1.227 3.232 0 4.63-2.792 5.648-5.467 5.947.436.38.812 1.098.812 2.235 0 1.617-.02 2.914-.02 3.313 0 .32.219.698.813.579a12.044 12.044 0 0 0 8.18-11.435C23.929 5.388 18.56 0 11.965 0Z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h24v24H0z"></path>
                      </clipPath>
                      <clipPath id="b">
                        <path fill="#fff" d="M0 0h24v23.51H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header
        className="fixed inset-x-0 bottom-0 z-[99999] block px-4 pb-6 md:hidden"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="flex h-16 w-full items-center justify-between rounded-2xl border-onyx/30 bg-onyx/30 px-4 border-[1px] border-card-border/20 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
          <div className="flex w-full items-center justify-between gap-2">
            <Link href="/">
              <div className="text-2xl font-inter font-medium">
                <Image height={30} width={30} alt="logo" src={logo}></Image>
              </div>
            </Link>

            <div className="flex items-center justify-end gap-2 md:gap-4">
              <Link
                href="/about"
                className="font-syne font-medium transition-transform transform hover:scale-105"
              >
                <div className="hidden md:flex">Story</div>
                <Button
                  variant="link"
                  size="icon"
                  className="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray hover:bg-black/30 dark:hover:bg-white/10"
                >
                  <User size={22} />
                </Button>
              </Link>

              <Link
                href="/projects"
                className="font-syne font-medium transition-transform transform hover:scale-105"
              >
                <div className="hidden md:flex">Projects</div>
                <Button
                  variant="link"
                  size="icon"
                  className="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray hover:bg-black/30 dark:hover:bg-white/10"
                >
                  <FolderGit2 size={22} />
                </Button>
              </Link>
              <Link
                href="/library"
                className="font-syne font-medium transition-transform transform hover:scale-105"
              >
                <div className="hidden md:flex">Scribbles</div>

                <Button
                  variant="link"
                  size="icon"
                  className="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray hover:bg-black/30 dark:hover:bg-white/10"
                >
                  <NotebookPen size={22} />
                </Button>
              </Link>
              <Link
                href="/contact"
                className="font-syne font-medium transition-transform transform hover:scale-105"
              >
                <div className="hidden md:flex">Contact</div>

                <Button
                  variant="link"
                  size="icon"
                  className="group flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray hover:bg-black/30 dark:hover:bg-white/10"
                >
                  <Mail size={22} />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ahd-kabeer/"
                className="font-syne font-medium transition-transform transform hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <g clipPath="url(#LinkedIn_svg__a)">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M21.335 24H2.67a2.667 2.667 0 0 1-2.667-2.667V2.667A2.667 2.667 0 0 1 2.669 0h18.666a2.667 2.667 0 0 1 2.667 2.667v18.666A2.667 2.667 0 0 1 21.335 24Zm-4.23-3.333h3.562V13.35c0-3.095-1.755-4.592-4.206-4.592-2.452 0-3.484 1.91-3.484 1.91V9.11H9.545v11.556h3.432V14.6c0-1.626.748-2.593 2.18-2.593 1.317 0 1.949.93 1.949 2.593v6.066ZM3.335 5.466c0 1.177.947 2.132 2.116 2.132 1.17 0 2.116-.955 2.116-2.132A2.124 2.124 0 0 0 5.45 3.333c-1.169 0-2.116.955-2.116 2.133Zm3.923 15.2H3.678V9.112h3.58v11.556Z"
                      clipRule="evenodd"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="LinkedIn_svg__a">
                      <path fill="#fff" d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                href="https://github.com/Ahd-Kabeer-Hadi"
                className="font-syne font-medium transition-transform transform hover:scale-105"
              >
                <svg
                  className="group  flex flex-1 items-center justify-center rounded-lg bg-transparent text-light-gray"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="currentColor"
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="transparent" d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                href="https://twitter.com/Ahd_Kabeerpi"
                className="font-syne font-medium transition-transform transform hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <g clipPath="url(#b)">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M11.964 0C5.348 0 0 5.388 0 12.053c0 5.328 3.427 9.838 8.18 11.434.595.12.813-.259.813-.578 0-.28-.02-1.237-.02-2.235-3.328.718-4.02-1.437-4.02-1.437-.536-1.397-1.328-1.756-1.328-1.756-1.09-.738.08-.738.08-.738 1.207.08 1.841 1.237 1.841 1.237 1.07 1.836 2.793 1.317 3.487.998.099-.779.416-1.317.752-1.617-2.654-.28-5.447-1.317-5.447-5.947 0-1.317.475-2.394 1.228-3.232-.119-.3-.535-1.537.12-3.193 0 0 1.01-.32 3.287 1.237.975-.264 1.981-.398 2.991-.4 1.01 0 2.04.14 2.991.4 2.278-1.557 3.288-1.237 3.288-1.237.654 1.656.238 2.894.12 3.193.772.838 1.227 1.915 1.227 3.232 0 4.63-2.792 5.648-5.467 5.947.436.38.812 1.098.812 2.235 0 1.617-.02 2.914-.02 3.313 0 .32.219.698.813.579a12.044 12.044 0 0 0 8.18-11.435C23.929 5.388 18.56 0 11.965 0Z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h24v24H0z"></path>
                    </clipPath>
                    <clipPath id="b">
                      <path fill="#fff" d="M0 0h24v23.51H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              {/* this is a temp change due to pages are not yet designed */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
