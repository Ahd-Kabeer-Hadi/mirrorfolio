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

export default function Home() {
  return (
    <>
      <section className=" mt-8 grid px-5 md:px-0  sm:max-w-7xl  mx-auto gap-10  md:grid-flow-row grid-cols-1 sm:grid-cols-3 md:grid-cols-4 ">
        <div className=" rounded-xl  col-auto flex items-center justify-between border-[1px] border-card-border/20 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
          <div className="w-full  flex flex-col gap-4 justify-center px-5">
            <p className="text-md font-mono text-[#A1A1AA] ">Greetings!</p>
            <h2 className="text-4xl font-syne font-semibold">I'm Kabeer</h2>
            <div className="w-full ">
              <Image
                loading="lazy"
                alt="Kabeer"
                src={me}
                width={600}
                height={600}
                className="max-w-3/4 rounded-full border-[1px] border-card-border/20 bg-[#18181D]/60  bg-opacity-60 backdrop-filter backdrop-blur-md "
              />
            </div>
          </div>
        </div>
        <div className=" rounded-xl sm:col-span-2 flex items-center justify-between border-[1px] border-card-border/20 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
          <div className="w-full  flex flex-col gap-4 justify-center px-8">
            <h1 className="text-4xl font-syne font-semibold break-words">
              I'm a full-stack engineer. <br /> Helping startups turn their
              ideas into digital realities.
            </h1>
            <p className="text-md font-mono text-[#A1A1AA]">
              I specialize in designing and building modern mobile and web
              solutions.
            </p>
            <div className="flex w-full gap-4 sm:max-w-md sm:pt-9 content-end">
              <Button className="w-full rounded-xl ">Get in touch</Button>
              <Button variant="ghost" className="w-full rounded-xl">
                View Resume
              </Button>
            </div>
          </div>
        </div>
        <div className="px-5 w-full rounded-xl  flex justify-between border-[1px] border-card-border/20 bg-[#18181D]/60 py-5 bg-opacity-60 backdrop-filter backdrop-blur-md ">
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-md font-mono text-[#A1A1AA] ">
              Now Building.....
            </h3>
            <ProjectCards
              name="Menteor"
              description="A platform for one-to-one mentorship caters to skill-based knowledge transfer"
              url="https://www.menteor.space/"
              image={MenteorMockup}
            />
          </div>
        </div>
      </section>
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
              url="https://www.menteor.space/"
              image={CSLab}
              varient="detailed"
              buttonText="View Project"
            />
            <ProjectCards
              name="Release Note Module for 99LMS"
              description="This initiative aims to simplify version update management through two integral components: a newsletter module and an actual release note module. The newsletter module seamlessly integrates with the existing email management module, utilizing backend cronjobs to automate the creation of release note templates for efficient communication. The release note module, powered by technical content writers and cutting-edge GPT models, tracks and publishes version updates at regular intervals, ensuring engaging content."
              url="https://www.menteor.space/"
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
          <Link href="/about">
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
          <Link href="/library">
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
          <Link href="/library">
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
            <Link href="/contact">
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
