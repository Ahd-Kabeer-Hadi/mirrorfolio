import Image from "next/image";
import me from "@/public/portrait.jpg";
import sign from "@/public/sign.svg";

import Link from "next/link";
import CareerTimeLine from "@/components/careerTimeLine";
import workExperience from "@/lib/workExperience";
import GetInTouchButton from "@/components/home/getInTouchButton";

export default function About() {
  return (
    <section className="px-4 container max-w-7xl">
      <div className="w-full mb-16 mt-44">
        <h1 className="break-words text-5xl font-bold leading-none text-whitemd:text-[80px]">
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
              I'm <span className="text-white">Ahammad Kabeer Hadi</span>, the
              founder of Mirrorfolio, a tech entrepreneur, consultant, and AI
              researcher. My journey began as a self-taught software engineer,
              proving that with passion, dedication, and relentless curiosity,
              anyone can carve their path in the tech industry. With over 5
              years of experience, I've grown from humble beginnings to
              spearheading innovative projects and helping businesses thrive.
            </p>
            <p className="text-[18px] leading-[160%] text-[#A1A1AA] font-inter">
              Based in Kozhikode, Kerala, India, I am committed to creating
              digital solutions and AI-driven applications that empower
              startups, solve complex problems, and inspire others to pursue
              their goals.
            </p>
          </div>
          <div className="h-[1px] w-full bg-white/40"></div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold uppercase font-syne text-white text-[20px]">
              WHAT I DO
            </p>
            <div className="text-[18px] leading-[160%] text-[#A1A1AA] font-inter space-y-4">
              <p>
                As the Founder, Tech Consultant, and Lead Developer at{" "}
                <span className="text-white font-bold">Mirrorfolio</span>, I
                specialize in:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="text-white font-semibold">
                    Startup Enablement:
                  </span>{" "}
                  Guiding ventures like Ntouch, Menteor, Fozato, and Talentify
                  in building development teams, establishing technical
                  foundations, and launching impactful products.
                </li>
                <li>
                  <span className="text-white font-semibold">
                    AI Application Development:
                  </span>{" "}
                  Bridging the gap between AI and business, through cutting-edge
                  research, practical LLM implementations, and active
                  contributions to emerging open-source projects like oTToDev.
                </li>
                <li>
                  <span className="text-white font-semibold">
                    Frontend and Full-Stack Development:
                  </span>{" "}
                  Delivering intuitive, scalable applications with user
                  experience at their core.
                </li>
                <li>
                  <span className="text-white font-semibold">Mentorship:</span>{" "}
                  Sharing insights with aspiring developers, fostering a culture
                  of learning and self-improvement.
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[1px] w-full bg-white/40"></div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase font-syne text-white ">
              The Journey Thus Far
            </p>
            <div>
              <p className="text-[18px] leading-[160%] text-[#A1A1AA] font-inter">
                My career is a testament to the power of self-learning and
                determination, proving that with passion and perseverance, any
                challenge can be overcome. As a self-taught software engineer, I
                have honed my expertise across diverse programming languages and
                frameworks, delivering impactful solutions in a variety of
                professional settings. Here's a glimpse of my journey so far:
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
                      {/* {job.links && job.links[i] && (
                        <a
                          href={job.links[i].url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {job.links[i].title}
                        </a>
                      )} */}
                    </p>
                  ))}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase font-syne text-white ">
              What Drives Me
            </p>
            <p className="text-[18px] leading-[160%] text-[#A1A1AA] font-inter">
              I believe that determination, curiosity, and a commitment to
              continuous learning are the keys to success. My journey from a
              self-taught developer to founder and AI researcher is proof that
              passion can transform potential into impact. While I'm proud of
              how far I've come, I remain humble, eager to learn, and excited to
              tackle new challenges that make a difference.
            </p>
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
              or scheduling a quick chat on
              <Link
                href="https://cal.com/ahd-kabeerhadi/discovery-sessions"
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
