"use client";

import Image from "next/image";
import me from "@/public/portrait.jpg";
import sign from "@/public/sign.svg";
import Link from "next/link";
import {
  ChevronRight,
  Calendar,
  MapPin,
  Mail,
  ExternalLink,
  CheckCircle2,
  Github,
  ArrowUpRight,
  Twitter,
  Linkedin,
  Instagram,
  MapPinned,
} from "lucide-react";
import CareerTimeLine from "@/components/careerTimeLine";
import workExperience from "@/lib/workExperience";
import GetInTouchButton from "@/components/home/getInTouchButton";
import { Separator } from "@/components/ui/separator";
import { Timeline } from "@/components/ui/career-timeline";

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative px-4 container max-w-7xl mx-auto pt-32 md:pt-44">
        <div className="w-full mb-16">
          <h1 className="break-words text-5xl font-bold leading-tight text-white md:text-[80px]">
            About Me
          </h1>
          <p className="mb-16 mt-4 text-base text-muted-foreground md:text-2xl">
            Turning ambitious ideas into impactful realities
          </p>
          <div className="h-[1px] w-full bg-white/10"></div>
        </div>

        <div className="grid w-full grid-cols-1 md:grid-cols-12 gap-12 mx-auto">
          <div className="col-span-12 md:col-span-8 space-y-16">
            {/* Who Am I Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Who Am I?</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi, I'm{" "}
                  <span className="text-white font-semibold">
                    Ahammad Kabeer Hadi
                  </span>
                  , a self-taught software engineer, entrepreneur, and mentor
                  with a passion for turning ambitious ideas into impactful
                  realities. My journey began in rural Kerala, fueled by
                  relentless curiosity and a drive to make technology
                  approachable and transformative for everyone.
                </p>
              </div>
            </section>

            {/* What I Do Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">What I Do</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in helping startups and innovators bring their
                  ideas to life by simplifying complex technical processes and
                  creating clear, actionable roadmaps. Through hands-on
                  mentorship, I guide my clients in building Minimum Viable
                  Products (MVPs) that not only work but also lay the foundation
                  for long-term success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-[#18181D]/60 border border-card-border/20 p-6 rounded-xl backdrop-filter backdrop-blur-md">
                    <h3 className="text-white font-semibold mb-3">
                      Idea Execution
                    </h3>
                    <p className="text-muted-foreground">
                      Transforming abstract ideas into practical, scalable MVPs.
                    </p>
                  </div>
                  <div className="bg-[#18181D]/60 border border-card-border/20 p-6 rounded-xl backdrop-filter backdrop-blur-md">
                    <h3 className="text-white font-semibold mb-3">
                      Mentorship
                    </h3>
                    <p className="text-muted-foreground">
                      Offering empathetic, personalized guidance for technical
                      and business challenges.
                    </p>
                  </div>
                  <div className="bg-[#18181D]/60 border border-card-border/20 p-6 rounded-xl backdrop-filter backdrop-blur-md">
                    <h3 className="text-white font-semibold mb-3">
                      Simplicity & Clarity
                    </h3>
                    <p className="text-muted-foreground">
                      Demystifying tech jargon and making the process
                      approachable.
                    </p>
                  </div>
                  <div className="bg-[#18181D]/60 border border-card-border/20 p-6 rounded-xl backdrop-filter backdrop-blur-md">
                    <h3 className="text-white font-semibold mb-3">
                      Scalable Solutions
                    </h3>
                    <p className="text-muted-foreground">
                      Designing products that grow with your vision.
                    </p>
                  </div>
                  <div className="bg-[#18181D]/60 border border-card-border/20 p-6 rounded-xl backdrop-filter backdrop-blur-md">
                    <h3 className="text-white font-semibold mb-3">
                      AI Research & Innovation
                    </h3>
                    <p className="text-muted-foreground">
                      Leading research in autonomous AI and LLMs, with active
                      contributions to open-source projects like oTToDev to help
                      businesses innovate.
                    </p>
                  </div>

                  <div className="bg-[#18181D]/60 border border-card-border/20 p-6 rounded-xl backdrop-filter backdrop-blur-md">
                    <h3 className="text-white font-semibold mb-3">
                      Full-Stack Development
                    </h3>
                    <p className="text-muted-foreground">
                      Building modern, scalable applications with focus on user
                      experience and AI integration for sustainable business
                      growth.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* My Journey Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">My Journey</h2>
              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl text-white">
                  From Curiosity to Expertise
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My story isn't the conventional one. As a self-taught
                  developer, I've experienced the struggles of learning without
                  formal resources or mentorship. From dismantling old phones to
                  building over 30 websites and leading projects for startups
                  like Ntouch, Menteor, Fozato, and Talentify, my path has been
                  one of resilience, creativity, and constant growth.
                </p>

                <h3 className="text-xl text-white mt-8">
                  A Relatable Perspective
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I know what it feels like to doubt yourself, to face judgment,
                  and to start from scratch. My background as a Muslim priest
                  and my non-traditional entry into the tech world have taught
                  me the importance of staying true to your vision. These
                  experiences shape the way I work with clients—empathetically,
                  transparently, and with a deep commitment to their success.
                </p>

                <h3 className="text-xl text-white mt-8">Proven Expertise</h3>
                <div className="mt-6">
                  {/* {workExperience.map((job, index) => (
                    <Timeline key={index} data={job} />
                  ))}
                  it's here to improve later
                  */}
                  {workExperience.map((job, index) => (
                    <CareerTimeLine
                      key={index}
                      Post={job.title}
                      Company={job.company}
                      Tenure={job.tenure}
                      Description={job.responsibilities}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Why Work With Me Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Why Work With Me?
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When you partner with me, you're not just hiring a developer
                  or consultant—you're gaining a trusted ally who's invested in
                  your vision. I blend technical expertise with a human touch,
                  ensuring you feel confident and supported every step of the
                  way.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">
                        Proven Track Record
                      </h4>
                      <p className="text-muted-foreground">
                        Successfully guided startups and delivered scalable
                        solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">
                        Empathy-Driven Approach
                      </h4>
                      <p className="text-muted-foreground">
                        I've been where you are, and I understand the challenges
                        you face.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">
                        Results That Inspire
                      </h4>
                      <p className="text-muted-foreground">
                        My clients walk away with more than just a product—they
                        gain clarity, confidence, and a renewed belief in their
                        ideas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Let's Connect Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Let's Build Together
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you're ready to take your idea to the next level, let's
                  talk. Schedule a consultation, and together, we'll create
                  something extraordinary.
                </p>
                <div className="flex flex-col space-y-4 mt-6">
                  <Link
                    href="mailto:ahd.kabeerpi@gmail.com"
                    className="flex items-center text-white hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    ahd.kabeerpi@gmail.com
                  </Link>
                  <Link
                    href="https://cal.com/ahd-kabeerhadi/discovery-sessions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-primary transition-colors"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule a Call
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href="https://maps.app.goo.gl/FzSZrW6MfnhHc44e7"
                    className="flex items-center text-white hover:text-primary transition-colors"
                  >
                    <MapPinned className="w-5 h-5 mr-2" />
                    Find Me Locally @ Omasseri, Kozhikode, Kerala, India
                  </Link>
                </div>
              </div>
              <div className="mt-12">
                <p className="text-lg text-muted-foreground">
                  Let us embark on this journey of innovation together,
                </p>
                <div className="mt-6">
                  <Image
                    loading="lazy"
                    alt="sign of Ahammad Kabeer"
                    src={sign}
                    width={300}
                    height={300}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="col-span-12 md:col-span-4 md:sticky md:top-24 h-fit">
            <div className="space-y-8">
              {/*  CTA */}
              <div className="space-y-6">
                <GetInTouchButton />
              </div>
              {/* Profile Image */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-30 blur rounded-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={me}
                    alt="Portrait of Ahammad Kabeer"
                    width={400}
                    height={400}
                    className="w-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-8">
                <h3 className="text-lg font-medium text-white space-y-4">Follow Me</h3>
                <Separator className="bg-white/10" />
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="https://github.com/Ahd-Kabeer-Hadi"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center gap-2 text-muted-foreground hover:text-white transition-colors duration-150"
                    >
                     
                      <span>GitHub</span>
                      <ArrowUpRight className="w-4 h-4 -translate-x-2 translate-y-2 rotate-45 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:rotate-[405deg]" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/Ahd_Kabeerpi"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center gap-2 text-muted-foreground hover:text-white transition-colors duration-150"
                    >
                      
                      <span>Twitter</span>
                      <ArrowUpRight className="w-4 h-4 -translate-x-2 translate-y-2 rotate-45 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:rotate-[405deg]" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/ahd-kabeer/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center gap-2 text-muted-foreground hover:text-white transition-colors duration-150"
                    >
                     
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-4 h-4 -translate-x-2 translate-y-2 rotate-45 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:rotate-[405deg]" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/mirrorfolio/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center gap-2 text-muted-foreground hover:text-white transition-colors duration-150"
                    >
                     
                      <span>Instagram</span>
                      <ArrowUpRight className="w-4 h-4 -translate-x-2 translate-y-2 rotate-45 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:rotate-[405deg]" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
