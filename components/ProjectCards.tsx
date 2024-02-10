import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { ProjectCardsProps } from "@/Interfaces/ProjectCard";
export default function ProjectCards({
  name,
  description,
  url,
  image,
  varient = "card",
  buttonText = "View Project",
  width = 300,
  height = 300,
}: ProjectCardsProps) {
  return (
    <>
      {varient === "card" ? (
        <div className="flex w-full h-full gap-4 justify-around py-5 rounded-xl border border-card-border/20 bg-[#18181D]/60 bg-opacity-60 backdrop-filter backdrop-blur-md">
          <div className="flex flex-col gap-4 ">
            {image ? (
              <Image
                loading="lazy"
                src={image}
                alt={name}
                width={300}
                height={300}
                className="rounded-xl px-5"
              />
            ) : (
              <></>
            )}
            <h1 className="text-2xl font-syne font-semibold px-5">{name}</h1>
            <p className="text-xs font-mono w-full text-[#A1A1AA] px-5 ">
              {description}
            </p>
            <Link
              href={url}
              className="px-5"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant="outline" className="w-full rounded-xl">
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 w-full relative overflow-hidden lg:min-h-[265px] lg:p-16 lg:pe-0 gap-4 justify-around items-center py-5 rounded-xl border border-card-border/20 bg-[#18181D]/60 bg-opacity-60 backdrop-filter backdrop-blur-md">
          <div className="col-span-3 md:col-span-2 flex flex-col gap-4 px-5">
            <p className="text-3xl font-syne font-semibold">{name}</p>
            <p className="text-md font-mono text-[#A1A1AA]">{description}</p>

            <Link
              href={url}
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <Button variant="link" className="flex gap-2 rounded-xl pl-0">
                {buttonText}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  className="duration-300 transition hover:translate-x-3 p-0  ease-out"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.17 5a30.23 30.23 0 0 1 5.62 5.406c.14.174.21.384.21.594m-5.83 6a30.232 30.232 0 0 0 5.62-5.406A.949.949 0 0 0 21 11m0 0H3"
                  ></path>
                </svg>
              </Button>
            </Link>
          </div>
          <div className="hidden md:flex align-middle items-center">
            {image ? (
              <Link href={url} rel="noopener noreferrer" target="_blank">
                <div className="col-span-1 absolute bottom-0 inset-y-0 right-0 transition duration-300 ease-out hover:rotate-[-5.21deg] hover:scale-110 ">
                  <Image
                    loading="lazy"
                    src={image}
                    decoding="async"
                    alt={name}
                    width={width}
                    height={height}
                    className="rounded-xl p-5  "
                  />
                </div>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
}
