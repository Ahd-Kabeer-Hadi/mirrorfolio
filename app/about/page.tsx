import Image from "next/image";
import me from "@/public/portrait.jpg";
import sign from "@/public/sign.svg";

import Link from "next/link";
import CareerTimeLine from "@/components/careerTimeLine";
import workExperience from "@/lib/workExperience";
import GetInTouchButton from "@/components/home/getInTouchButton";

export default function About() {
  return (
    <section className="px-4 container max-w-[1024px]">
      <div className="w-full mb-16 mt-44">
        <h1 className="break-words text-5xl font-bold leading-none text-onyx dark:text-white md:text-[80px]">
          A little bit about me
        </h1>
        <p className="mb-16 mt-4 text-base text-[#A1A1AA]  md:text-2xl">
          Who I am and what I do.
        </p>
        <div className="h-[1px] w-full bg-white/40"></div>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-12 mx-auto mt-8 min-h-screen p-1 justify-between top-5 max-w-7xl">
        <div className="col-span-12 flex flex-col gap-12 md:col-span-8 md:pr-12">
          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase font-syne text-white ">
              Who I am
            </p>
            <p className="text-[18px] leading-[160%] text-[#A1A1AA] font-inter">
              I'm <span className="text-white">Ahammad Kabeer Hadi</span>, a
              multidisciplinary self-taught software engineer with over half a
              decade of experience in the tech industry. Hailing from Kozhikode,
              Kerala, IND, I'm committed to crafting cutting-edge digital
              solutions that make a lasting impact. My journey in the tech realm
              is defined by innovation, expertise, and a relentless pursuit of
              excellence.
            </p>
          </div>
          <div className="h-[1px] w-full bg-white/40"></div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase font-syne text-white ">
              WHAT I DO
            </p>
            <p className="text-[18px] leading-[160%] text-[#A1A1AA] font-inter">
              Presently, I am deeply immersed in the development of
              <Link
                href="https://www.menteor.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter font-semibold text-white underline"
              >
                Menteor
              </Link>
              , a one-to-one mentorship platform, where I serve as the founder
              and lead software engineer. <br /> Menteor seeks to alleviate the
              challenges faced by self-learners by connecting them directly with
              industry professionals and experts for guidance. As an advocate
              for knowledge sharing, I also provide complimentary hands-on
              training for aspiring developers.
            </p>
          </div>
          <div className="h-[1px] w-full bg-white/40"></div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase font-syne text-white ">
              The Journey Thus Far
            </p>
            <div>
              <p className="text-[18px] leading-[160%] text-[#A1A1AA] font-inter">
                Throughout my professional journey, I have demonstrated
                proficiency across various programming languages and frameworks,
                excelling as a self-taught software engineer in diverse
                environments. By saying that, here's a glimpse of my work
                experience so far:
              </p>
              {workExperience.map((job, index) => (
                <CareerTimeLine
                  key={index}
                  Post={job.title}
                  Company={job.company}
                  Tenure={job.tenure}
                  Description={job.responsibilities.map((responsibility, i) => (
                    <p key={i}>
                      {responsibility}
                      {job.links && job.links[i] && (
                        <a
                          href={job.links[i].url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {job.links[i].title}
                        </a>
                      )}
                    </p>
                  ))}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[18px] leading-[160%] text-[#A1A1AA] font-inter">
              I'm always eager to foster new connections and collaborations.
              Whether you prefer dropping a line via
              <Link
                href="mailto:ahd.kabeerpi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter font-semibold mx-2 text-white underline"
              >
                email
              </Link>
              or scheduling a coffee chat on
              <Link
                href="https://cal.com/ahd-kabeerhadi/quick-call"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter font-semibold  mx-2 text-white underline"
              >
                Cal.com
              </Link>
              to discuss your ideas, I'm all ears. You can also connect with me
              on
              <Link
                href="https://www.linkedin.com/in/ahd-kabeer/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter font-semibold  mx-2 text-white underline"
              >
                LinkedIn
              </Link>
              or
              <Link
                href="https://twitter.com/Ahd_Kabeerpi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter font-semibold  mx-2 text-white underline"
              >
                Twitter
              </Link>
              to explore exciting opportunities together.
            </p>

            <br />
            <p className="text-[18px] leading-[160%] text-[#A1A1AA] font-inter">
              Let us embark on this journey of innovation together,
            </p>
            <div className="group relative mt-6">
              <Image
                loading="lazy"
                alt="sign of Ahammad Kabeer"
                src={sign}
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="relative z-10 w-full px-4 block md:hidden">
            <GetInTouchButton />
          </div>
        </div>
        <div className="-order-1 col-span-12 md:order-2 md:col-span-4">
          <div className="group relative mb-20 flex flex-col gap-5 items-center justify-center">
            <picture className="relative z-20 block w-fit overflow-hidden rounded-2xl border-[1px] border-card-border">
              <Image
                loading="lazy"
                alt="Portrait of Ahammad Kabeer"
                src={me}
                width={300}
                height={300}
              />
            </picture>
            <div className="relative z-10 w-full px-4 hidden md:block">
              <GetInTouchButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
