// "use client";
import menteor_mockup from "@/public/menteor-preview.png";

import React from "react";
import CSLab from "@/public/CSLab.png";
import LmsDoc from "@/public/doc.png";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
interface ProjectCardProps {
  variant: "primary" | "secondary";
}
export function ProjectCards(variant: ProjectCardProps) {
  return (
    <>
      <BentoGrid className=" w-full md:auto-rows-[20rem] mx-0">
        {items.map((item, index) => (
          <BentoGridItem key={index} {...item} />
        ))}
      </BentoGrid>
      {variant.variant === "primary" && (
        <div className=" py-5">
          <Button
            variant={"ghost"}
            className="w-full rounded-xl inline-flex text-[#A1A1AA] h-12 bg-transparent hover:bg-slate-200/25 items-center justify-center px-6 font-mediumtransition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            See More
          </Button>
        </div>
      )}
    </>
  );
}

const items = [
  {
    title: (
      <Link
        href="https://menteor.space"
        rel="noopener noreferrer"
        target="_blank"
        className="text-white hover:underline text-2xl font-syne font-semibold"
      >
        Menteor- A platform for skill based one-to-one mentorship
      </Link>
    ),
    description: (
      <div className="w-full">
        <p className="font-inter text-xl line-clamp-3 w-full my-3">
          Menteor is a one-of-a-kind platform for personalised mentorship,
          combining the simplicity of a dating app with a focus on skill-based
          knowledge transfer. Ideal for self-motivated individuals seeking
          professional guidance or expertise in a specific field, Menteor
          connects you with a variety of skilled professionals, creatives, and
          craftsmen to support you on your journey.
        </p>
        <Button
          variant={"link"}
          className="text-[#A1A1AA] hover:underline hover:text-white text-lg pt4 font-syne px-0 "
        >
          View Project
        </Button>
      </div>
    ),
    header: (
      <div className="flex overflow-hidden">
        <Image
          src={menteor_mockup}
          alt="Menteor"
          className="rounded-xl w-fit aspect-auto  transition duration-300 ease-out md:hover:rotate-[-5.21deg] md:hover:scale-90"
        />
      </div>
    ),
    className: "md:col-span-2 row-span-2",
  },
  {
    title: (
      <Link
        href="#"
        rel="noopener noreferrer"
        target="_blank"
        className="text-white hover:underline text-2xl font-syne font-semibold"
      >
        CS Lab - An on the go code editor
      </Link>
    ),
    description: (
      <div className="w-full">
        <p className="font-inter text-xl line-clamp-3 w-full my-3">
          CS Lab Editor, a condensed version of the renowned Replit app designed
          to spark a passion for coding and IT skills. Our innovative
          React-based editor features a captivating glassmorphism design,
          offering a user-friendly platform to explore the fascinating world of
          coding. Notably, CS Lab Editor stands out as one of only two online
          editors flawlessly running Python turtle graphics code and includes
          integrated educational games to engage students in technical skills.
        </p>
        <Button
          variant={"link"}
          className="text-[#A1A1AA] hover:underline hover:text-white text-lg pt4 font-syne px-0 "
        >
          View Project
        </Button>
      </div>
    ),
    header: (
      <div className="overflow-hidden ">
        <Image
          src={CSLab}
          alt="CS Lab Editor"
          className="rounded-xl w-fit   transition duration-300 md:scale-10 md:hover:scale-90 md:rotate-[5.21deg] ease-out md:hover:rotate-0"
        />
      </div>
    ),
    className: "md:col-span-1 row-span-2 ",
  },
  {
    title: (
      <Link
        href="#"
        rel="noopener noreferrer"
        target="_blank"
        className="text-white hover:underline text-2xl font-syne font-semibold"
      >
        Release Note Module for 99LMS
      </Link>
    ),
    description: (
      <div className="w-full">
        <p className="font-inter text-xl line-clamp-3 w-full my-3">
          This initiative aims to simplify version update management through two
          integral components: a newsletter module and an actual release note
          module. The newsletter module seamlessly integrates with the existing
          email management module, utilizing backend cronjobs to automate the
          creation of release note templates for efficient communication. The
          release note module, powered by technical content writers and
          cutting-edge GPT models, tracks and publishes version updates at
          regular intervals, ensuring engaging content.
        </p>
        <Button
          variant={"link"}
          className="text-[#A1A1AA] hover:underline hover:text-white text-lg pt4 font-syne px-0 "
        >
          View Project
        </Button>
      </div>
    ),
    header: (
      <div className="flex overflow-hidden aspect-video">
        <Image
          src={LmsDoc}
          alt="LMS Release Notes"
          className="rounded-xl w-fit  aspect-auto  transition duration-300 md:scale-90 md:hover:scale-100 md:rotate-[-5.21deg] ease-out hover:rotate-0"
        />
      </div>
    ),
    className: "md:col-span-3 row-span-2",
  },
];

// import Link from "next/link";
// import { Button } from "./ui/button";
// import Image from "next/image";
// import { ProjectCardsProps } from "@/Interfaces/ProjectCard";
// export default function ProjectCards({
//   name,
//   description,
//   url,
//   image,
//   varient = "card",
//   buttonText = "View Project",
//   width = 300,
//   height = 300,
// }: ProjectCardsProps) {
//   return (
//     <>
//       {varient === "card" ? (
//         <div className="flex w-full h-full gap-4 justify-around py-5 rounded-xl border border-card-border/20 bg-[#18181D]/60 bg-opacity-60 backdrop-filter backdrop-blur-md">
//           <div className="flex flex-col gap-4 ">
//             {image ? (
//               <Image
//                 loading="lazy"
//                 src={image}
//                 alt={name}
//                 width={300}
//                 height={300}
//                 className="rounded-xl px-5"
//               />
//             ) : (
//               <></>
//             )}
//             <h1 className="text-2xl font-syne font-semibold px-5">{name}</h1>
//             <p className="text-xs font-mono w-full text-[#A1A1AA] px-5 ">
//               {description}
//             </p>
//             <Link
//               href={url}
//               className="px-5"
//               rel="noopener noreferrer"
//               target="_blank"
//             >
//               <Button variant="outline" className="w-full rounded-xl">
//                 {buttonText}
//               </Button>
//             </Link>
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-3 w-full relative overflow-hidden lg:min-h-[265px] lg:p-16 lg:pe-0 gap-4 justify-around items-center py-5 rounded-xl border border-card-border/20 bg-[#18181D]/60 bg-opacity-60 backdrop-filter backdrop-blur-md">
//           <div className="col-span-3 md:col-span-2 flex flex-col gap-4 px-5">
//             <p className="text-3xl font-syne font-semibold">{name}</p>
//             <p className="text-md font-mono text-[#A1A1AA]">{description}</p>

//             <Link
//               href={url}
//               rel="noopener noreferrer"
//               target="_blank"
//               className=""
//             >
//               <Button variant="link" className="flex gap-2 rounded-xl pl-0">
//                 {buttonText}{" "}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   fill="none"
//                   className="duration-300 transition hover:translate-x-3 p-0  ease-out"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M15.17 5a30.23 30.23 0 0 1 5.62 5.406c.14.174.21.384.21.594m-5.83 6a30.232 30.232 0 0 0 5.62-5.406A.949.949 0 0 0 21 11m0 0H3"
//                   ></path>
//                 </svg>
//               </Button>
//             </Link>
//           </div>
//           <div className="hidden md:flex align-middle items-center">
//             {image ? (
//               <Link href={url} rel="noopener noreferrer" target="_blank">
//                 <div className="col-span-1 absolute bottom-0 inset-y-0 right-0 transition duration-300 ease-out hover:rotate-[-5.21deg] hover:scale-110 ">
//                   <Image
//                     loading="lazy"
//                     src={image}
//                     decoding="async"
//                     alt={name}
//                     width={width}
//                     height={height}
//                     className="rounded-xl p-5  "
//                   />
//                 </div>
//               </Link>
//             ) : (
//               <></>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
