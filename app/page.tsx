import Image from "next/image";
import me from "@/public/me.png";
import { Button } from "@/components/ui/button";
import ProjectCards from "@/components/ProjectCards";
import MenteorMockup from "@/public/menteor.png";
import menteor_mockup from "@/public/menteor-preview.png";
import CSLab from "@/public/CSLab.png";
import LmsDoc from "@/public/doc.png";
import mirror from "@/public/mirror.png";
import Link from "next/link";
import book from "@/public/notebook.webp";
import stack from "@/public/stack.webp";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <>
    <Hero></Hero>
    
      <section className="px-5 md:px-0  md:max-w-7xl mx-auto gap-10 mt-12  flex flex-col ">
        <div className="col-span-2 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-syne font-semibold"> Selected Work</h2>
            <hr className="border-[1px] border-card-border/20 w-full" />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <ProjectCards
              name="Menteor - A platform for skill based one-to-one mentorship"
              description="Menteor is a one-of-a-kind platform for personalised mentorship, combining the simplicity of a dating app with a focus on skill-based knowledge transfer. Ideal for self-motivated individuals seeking professional guidance or expertise in a specific field, Menteor connects you with a variety of skilled professionals, creatives, and craftsmen to support you on your journey."
              url="https://www.menteor.space/"
              image={menteor_mockup}
              varient="detailed"
              buttonText="View Project"
              width={457}
              height={565}
            />
            <ProjectCards
              name="CS Lab - An on the go code editor"
              description="CS Lab Editor, a condensed version of the renowned Replit app designed to spark a passion for coding and IT skills. Our innovative React-based editor features a captivating glassmorphism design, offering a user-friendly platform to explore the fascinating world of coding. Notably, CS Lab Editor stands out as one of only two online editors flawlessly running Python turtle graphics code and includes integrated educational games to engage students in technical skills."
              url="/"
              image={CSLab}
              varient="detailed"
              buttonText="View Project"
            />
            <ProjectCards
              name="Release Note Module for 99LMS"
              description="This initiative aims to simplify version update management through two integral components: a newsletter module and an actual release note module. The newsletter module seamlessly integrates with the existing email management module, utilizing backend cronjobs to automate the creation of release note templates for efficient communication. The release note module, powered by technical content writers and cutting-edge GPT models, tracks and publishes version updates at regular intervals, ensuring engaging content."
              url="/"
              image={LmsDoc}
              varient="detailed"
              buttonText="View Project"
              width={457}
              height={565}
            />
          </div>
        </div>
      </section>
      <section className="px-5 md:px-0  md:max-w-7xl mx-auto gap-10 mt-12 flex flex-col justify-stretch items-stretch">
        <div className="col-span-1 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-syne font-semibold">Get to know me</h2>
            <hr className="border-[1px] border-card-border/20 w-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
          <Link href="https://read.cv/ahd.kabeerhadi" rel="noopener noreferrer" target="_blank">
            <div className=" rounded-xl text-center flex flex-col gap-5 items-center justify-between border-[1px] border-card-border/20 bg-[#18181D]/60 p-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
              <p className="text-lg font-syne font-bold">My Story</p>
              <p className="text-md font-mono text-[#A1A1AA]">
                Who I am and what I do
              </p>
              <Image
                loading="lazy"
                src={mirror}
                alt="me"
                width={240}
                height={240}
                className=" transition duration-300 ease-out hover:rotate-[-8.21deg] rounded-full"
              />
            </div>
          </Link>
          <Link href="https://kabeerhadi.hashnode.dev/" rel="noopener noreferrer" target="_blank">
            <div className=" rounded-xl text-center flex flex-col gap-5 items-center justify-between border-[1px] border-card-border/20 bg-[#18181D]/60 p-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
              <p className="text-lg font-syne font-bold">Library</p>
              <p className="text-md font-mono text-[#A1A1AA]">
                My thougts, insights, reflections and some wierd and creative
                stuff from me
              </p>
              <Image
                loading="lazy"
                src={book}
                alt="me"
                width={300}
                height={300}
                className=" transition duration-300 ease-out hover:rotate-[-8.21deg] "
              />
            </div>
          </Link>
          <Link href="https://read.cv/ahd.kabeerhadi" rel="noopener noreferrer" target="_blank">
            <div className=" rounded-xl text-center flex flex-col gap-5 items-center justify-between border-[1px] border-card-border/20 bg-[#18181D]/60 p-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
              <p className="text-lg font-syne font-bold">Stack</p>
              <p className="text-md font-mono text-[#A1A1AA]">
                Languages frameworks and tools I use
              </p>
              <Image
                loading="lazy"
                src={stack}
                alt="me"
                width={330}
                height={330}
                className=" transition duration-300 ease-out hover:rotate-[-8.21deg] rounded-full"
              />
            </div>
          </Link>
        </div>
      </section>
      <section className="px-5 md:px-0  md:max-w-7xl mx-auto gap-10 mt-12 grid">
        <div className="rounded-xl flex flex-col md:flex-row gap-5 items-center  justify-around border-[1px] border-card-border/20 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
          <div className="flex flex-col gap-4 px-5">
            <h2 className="text-4xl font-syne font-semibold">
              Let's work together
            </h2>
            <p className="text-md font-mono text-[#A1A1AA] ">
              Want to discuss an opportunity to create something great? I am
              ready when you are.
            </p>
          </div>
          <div className="flex flex-col gap-4 px-5">
            <Link
              href="https://cal.com/ahd-kabeerhadi/quick-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full rounded-xl " size={"lg"}>
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
