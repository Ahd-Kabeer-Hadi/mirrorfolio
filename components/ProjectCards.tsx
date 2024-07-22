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
  limit?: number;
}

export function ProjectCards({ variant, limit }: ProjectCardProps) {
  const displayedItems = limit ? items.slice(0, limit) : items;

  return (
    <>
      <BentoGrid className=" w-full md:auto-rows-[20rem] mx-0">
        {displayedItems.map((item, index) => (
          <BentoGridItem key={index} {...item} />
        ))}
      </BentoGrid>
      {variant === "primary" && (
        <div className=" py-5">
          <Button
            variant={"ghost"}
            className="w-full rounded-xl inline-flex text-[#A1A1AA] h-12 bg-transparent hover:bg-slate-200/25 items-center justify-center px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
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
        Menteor - A Platform for Skill-Based One-to-One Mentorship
      </Link>
    ),
    description: (
      <div className="w-full">
        <p className="font-inter text-xl line-clamp-3 w-full my-3">
          Menteor is a one-of-a-kind platform for personalized mentorship,
          combining the simplicity of a dating app with a focus on skill-based
          knowledge transfer. Ideal for self-motivated individuals seeking
          professional guidance or expertise in a specific field, Menteor
          connects you with a variety of skilled professionals, creatives, and
          craftsmen to support you on your journey.
        </p>
        <Link href="https://github.com/mirrorfolio/menteor">
          <Button
            variant={"link"}
            className="text-[#A1A1AA] hover:underline hover:text-white text-lg pt4 font-syne px-0 "
          >
            View Project
          </Button>
        </Link>
      </div>
    ),
  },
  {
    title: (
      <Link
        href="https://github.com/Ahd-Kabeer-Hadi/Pouch"
        rel="noopener noreferrer"
        target="_blank"
        className="text-white hover:underline text-2xl font-syne font-semibold"
      >
        Pouch - A Headless Digital Wallet & Rewarding System
      </Link>
    ),
    description: (
      <div className="w-full">
        <p className="font-inter text-xl line-clamp-3 w-full my-3">
          Pouch is a minimalist MVP project designed to emulate the
          functionality of a digital wallet app. Pouch isn't just any wallet
          app—it's a versatile platform that can be seamlessly integrated with
          other services to serve as their wallet and reward management system.
          I originally developed Pouch to complement my passion project,
          Menteor, which I'm currently working on. Right now, Pouch is in its
          MVP stage, featuring two main modules: wallet, handling all things
          wallet-related, and treasury, designed for managing rewards by admin
          users.
        </p>
        <Link href="https://github.com/Ahd-Kabeer-Hadi/Pouch">
          <Button
            variant={"link"}
            className="text-[#A1A1AA] hover:underline hover:text-white text-lg pt4 font-syne px-0 "
          >
            View Project
          </Button>
        </Link>
      </div>
    ),
  },
  {
    title: (
      <Link
        href="https://clubsulaimani.com/"
        rel="noopener noreferrer"
        target="_blank"
        className="text-white hover:underline text-2xl font-syne font-semibold"
      >
        Club Sulaimani Website Redesign and Development
      </Link>
    ),
    description: (
      <div className="w-full">
        <p className="font-inter text-xl line-clamp-3 w-full my-3">
          During my tenure at Aufait, I played a pivotal role as the frontend
          developer for the Club Sulaimani project, aimed at revitalizing their
          online presence. Collaborating closely with the team, I spearheaded
          the rebranding and development efforts to craft a dynamic website
          tailored precisely to Club Sulaimani's unique brand identity and
          specific requirements.
        </p>
        <Link href="https://clubsulaimani.com">
          <Button
            variant={"link"}
            className="text-[#A1A1AA] hover:underline hover:text-white text-lg pt4 font-syne px-0 "
          >
            View Project
          </Button>
        </Link>
      </div>
    ),
  },
  {
    title: (
      <Link
        href="https://www.figma.com/community/file/1269984523674917695/digital-fest"
        rel="noopener noreferrer"
        target="_blank"
        className="text-white hover:underline text-2xl font-syne font-semibold"
      >
        Digital Fest Module - Streamlining Science Event Management for Schools
      </Link>
    ),
    description: (
      <div className="w-full">
        <p className="font-inter text-xl line-clamp-3 w-full my-3">
          The Digital Fest module is a pivotal addition to our learning
          management system, facilitating technical and programming competitions
          among students from subscribing schools. This module streamlines event
          management, replacing the previously offline process with a
          centralized and user-friendly system. From event announcements to
          evaluating and announcing winners, the entire workflow is now
          efficiently handled within the application.
        </p>
        <Link href="https://www.figma.com/community/file/1269984523674917695/digital-fest">
          <Button
            variant={"link"}
            className="text-[#A1A1AA] hover:underline hover:text-white text-lg pt4 font-syne px-0 "
          >
            View Project
          </Button>
        </Link>
      </div>
    ),
  },
  {
    title: (
      <Link
        href="https://www.figma.com/community/file/1269984707660820289/release-note-module"
        rel="noopener noreferrer"
        target="_blank"
        className="text-white hover:underline text-2xl font-syne font-semibold"
      >
        Release Note Module for Learning Management System
      </Link>
    ),
    description: (
      <div className="w-full">
        <p className="font-inter text-xl line-clamp-3 w-full my-3">
          The Release Note Module was designed to simplify version update
          management for a learning management system. This project consisted of
          two key components: a newsletter module and a release note module. The
          newsletter module was configured with several settings and a backend
          cronjob, seamlessly integrated with the existing email management
          system. It automated the creation of release note templates for
          efficient communication. The release note module tracked and published
          version updates at regular intervals, combining the expertise of
          technical content writers and cutting-edge GPT models to produce
          engaging content.
        </p>
        <Link href="https://www.figma.com/community/file/1269984707660820289/release-note-module">
          <Button
            variant={"link"}
            className="text-[#A1A1AA] hover:underline hover:text-white text-lg pt4 font-syne px-0 "
          >
            View Project
          </Button>
        </Link>
      </div>
    ),
  },
  {
    title: (
      <Link
        href="https://www.figma.com/community/file/1269984078143781693/cs-lab-editor-an-integrated-web-based-ide-for-beginners-and-students"
        rel="noopener noreferrer"
        target="_blank"
        className="text-white hover:underline text-2xl font-syne font-semibold"
      >
        CS Lab Editor - An Integrated Web-Based IDE for Beginners and Students
      </Link>
    ),
    description: (
      <div className="w-full">
        <p className="font-inter text-xl line-clamp-3 w-full my-3">
          Welcome to CS Lab Editor, a streamlined and engaging version of the
          renowned Replit app, designed to inspire a passion for coding and IT
          skills among young talents. This innovative React-based editor,
          featuring a sleek glassmorphism design, provides a user-friendly
          platform for exploring the world of coding. CS Lab Editor is one of
          only two online editors capable of flawlessly running Python turtle
          graphics code, along with integrated educational games to engage
          students and enhance their technical skills.
        </p>
        <Link href="https://www.figma.com/community/file/1269984078143781693/cs-lab-editor-an-integrated-web-based-ide-for-beginners-and-students">
          <Button
            variant={"link"}
            className="text-[#A1A1AA] hover:underline hover:text-white text-lg pt4 font-syne px-0 "
          >
            View Project
          </Button>
        </Link>
      </div>
    ),
  },
  {
    title: (
      <Link
        href="https://talentify-pi.vercel.app/"
        rel="noopener noreferrer"
        target="_blank"
        className="text-white hover:underline text-2xl font-syne font-semibold"
      >
        Talentify: Bridging Talent and Opportunity
      </Link>
    ),
    description: (
      <div className="w-full">
        <p className="font-inter text-xl line-clamp-3 w-full my-3">
          Talentify bridges the gap between talented developers and companies,
          offering skill enhancement, career growth, and rewarding work
          experiences. For companies, we provide vetted, experienced talent
          ready to work from day one, simplifying the hiring process. Enjoy the
          flexibility to choose talent based on potential, not just resumes. My
          co-founder and I decided to make this pivot to address the challenges
          faced by developers returning to the job market after a career break.
        </p>
        <Link href="https://talentify-pi.vercel.app/">
          <Button
            variant={"link"}
            className="text-[#A1A1AA] hover:underline hover:text-white text-lg pt4 font-syne px-0 "
          >
            View Project
          </Button>
        </Link>
      </div>
    ),
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
