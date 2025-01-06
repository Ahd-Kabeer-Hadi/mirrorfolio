"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/project-cards-carousel";

interface ContentProps {
  title: string;
  description: string | React.ReactNode;
  url?: string;
  altText?: string;
}

export function Projects({ varient }: { varient: "primary" | "secondary" }) {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full">
      {varient === "primary" && (
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-[#A1A1AA]  font-sans">
          Get to know your iSad.
        </h2>
      )}
      <Carousel items={cards} />
    </div>
  );
}

const ContentCard = ({ title, description, url, altText }: ContentProps) => {
  return (
    <>
      <div className="p-8 md:p-14 rounded-3xl mb-4 bg-[#18181D]/60">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-white">{title}</span> {description}
        </p>
        {url && (
          <div className="w-full mt-4">
            <Image
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-3xl border-[1px] border-neutral-600"
              src={url}
              width={100}
              height={100}
              alt={altText ? altText : title}
            />
          </div>
        )}
      </div>
    </>
  );
};

const data = [
  {
    category: "Idea Execution ",
    title: "Talentify - Connecting Talent with Opportunity",
    src: "/mockups/talentify/talentify-main-card.png",
    content: (
      <>
        <ContentCard
          title="Empowering Talent, Enabling Opportunity:"
          description="Talentify connects developers with career opportunities while providing companies with vetted, high-quality talent."
          url="/mockups/talentify/talentify-laptop-card.svg"
          altText="talentify landing page"
        />
        <ContentCard
          title="Built for Flexibility and Career Growth:"
          description="Designed to adapt to the needs of individuals and organizations, Talentify makes hiring seamless and career transitions smoother than ever."
          url="/mockups/talentify/talentify-laptop-card-dark.svg"
          altText="talentify landing page"
        />
        <ContentCard
          title="Innovating the Job Market:"
          description="Talentify is more than a platform—it's a community where potential and opportunity come together for mutual success."
          url="/mockups/talentify/talentify-secondary-card.svg"
          altText="talentify landing page"
        />
      </>
    ),
  },
  {
    category: "Software Development",
    title: "CS Lab Editor - Engaging IDE for Students",
    src: "/mockups/IDE/ide-cover.svg",
    content: (
      <>
        <ContentCard
          title="A Beginner-Friendly IDE for the Next Generation:"
          description="CS Lab Editor redefines learning with an engaging and user-friendly platform, perfect for inspiring young talents to explore coding and IT skills."
          url="/mockups/IDE/ide-cover.svg"
          altText="IDE App UI mockup"
        />
        <ContentCard
          title="Innovative Design Meets Usability:"
          description="Boasting a sleek glassmorphism design, CS Lab Editor creates an immersive experience that blends aesthetic appeal with seamless usability."
          url="/mockups/IDE/ide-primary.svg"
          altText="IDE App UI page"
        />
        <ContentCard
          title="Empowering Creativity and Education:"
          description="From flawless Python turtle graphics execution to integrated educational games, CS Lab Editor offers tools to cultivate programming skills and spark innovation."
          url="/mockups/IDE/ide-secondary.svg"
          altText="IDE App UI language page"
        />
      </>
    ),
  },
  {
    category: "App Development & Hobby Project",
    title: "Pouch - Modular Digital Wallet System",
    src: "/mockups/pouch/pouch-cover.svg",
    content: (
      <>
        <ContentCard
          title="Seamless Financial Management Made Easy:"
          description="Pouch redefines the digital wallet experience by integrating robust rewards management and modular wallet functionality."
          url="/mockups/pouch/pouch-cover.svg"
          altText="pouch digital wallet UI mockup"
        />
        <ContentCard
          title="Future-Ready and Scalable:"
          description="Built with flexibility in mind, Pouch empowers businesses and users with features that adapt to changing needs."
          url="/mockups/pouch/pouch-main.svg"
          altText="pouch digital wallet UI mockup"
        />
        <ContentCard
          title="A Vision for Versatile Finances:"
          description="Pouch is more than a wallet—it's a tool for innovation and seamless financial experiences in an evolving digital landscape."
          url="/mockups/pouch/pouch-secondary.svg"
          altText="pouch digital wallet UI mockup"
        />
      </>
    ),
  },
  {
    category: "Technical Strategy",
    title: "Digital Fest - Science and Technology Event Management for Schools",
    src: "/mockups/digitalfest/digital-fest-cover.svg",
    content: (
      <>
        <ContentCard
          title="Streamline Technology and Science Event Management:"
          description="Digital Fest revolutionizes the organization of school science events by replacing offline processes with a centralized, user-friendly platform. From event announcements to evaluating and declaring winners, every step is automated for maximum efficiency."
          url="/mockups/digitalfest/digital-fest-cover.svg"
          altText="digital fest dashboard UI mockup"
        />
        <ContentCard
          title="Enhancing Engagement and Reducing Effort:"
          description="Designed to inspire and simplify, Digital Fest boosts participation while reducing manual effort. Its intuitive interface ensures administrators, teachers, and students can easily navigate the system and focus on creating memorable experiences."
          url="/mockups/digitalfest/digital-fest-1.svg"
          altText="digital fest dashboard UI mockup"
        />
        <ContentCard
          title="A Modern Solution for Schools:"
          description="Tailored to replicate and enhance the familiar offline processes, Digital Fest offers optimized responsiveness and seamless event management on any device, empowering students and educators alike."
        />
      </>
    ),
  },
  {
    category: "UX & UI development & Web Development",
    title: "CodingForKid - Revamped Website for Aspiring Coders",
    src: "/mockups/codingforkid/codingforkid-cover.svg",
    content: (
      <>
        <ContentCard
          title="Empowering Young Minds Through Coding:"
          description="CodingForKid provides an engaging platform for students to explore and excel in programming, offering carefully designed courses to inspire the next generation of coders."
          url="/mockups/codingforkid/codingforkid-cover.svg"
          altText="digital fest dashboard UI mockup"
        />
        <ContentCard
          title="Revamped for a User-Centric Experience:"
          description="The website redesign prioritizes a seamless and enjoyable experience for students and parents, enhancing usability and ensuring a smooth browsing journey."
          url="/mockups/codingforkid/codingforkid-1.svg"
          altText="digital fest dashboard UI mockup"
        />
        <ContentCard
          title="Optimized Performance and Lead Generation:"
          description="By addressing design and performance issues and implementing effective SEO strategies, the revamped website attracts relevant traffic and boosts lead generation."
          url="/mockups/codingforkid/codingforkid-2.svg"
          altText="digital fest dashboard UI mockup"
        />
        <ContentCard
          title="Collaborative SEO Strategy:"
          description="Close collaboration with an expert SEO team ensured a holistic approach, integrating design improvements with search engine optimization to achieve measurable results."
          url="/mockups/codingforkid/codingforkid-3.svg"
          altText="digital fest dashboard UI mockup"
        />
      </>
    ),
  },
  {
    category: "Mentorship and Empowerment",
    title: "Menteor - Skill-Based Mentorship Platform",
    src: "/mockups/menteor/menteor-main.svg",
    content: (
      <>
        <ContentCard
          title="Personalized Mentorship, Simplified:"
          description="Menteor bridges the gap between ambitious learners and expert mentors, creating a space for skill development tailored to individual goals. Experience mentorship that's personal, impactful, and geared toward your success."
          url="/mockups/menteor/menteor-main.svg"
          altText="menteor UI mockup"
        />
        <ContentCard
          title="Guidance from Experts Across Domains:"
          description="With a focus on accessibility and ease, Menteor connects you with professionals, creatives, and craftsmen ready to help you grow."
          url="/mockups/menteor/menteor-1.svg"
          altText="menteor UI mockup"
        />
        <ContentCard
          title="User-Friendly and Scalable:"
          description="Built with modern simplicity, Menteor ensures that learners and mentors alike enjoy an intuitive, efficient, and rewarding experience."
          url="/mockups/menteor/menteor-2.svg"
          altText="menteor UI mockup"
        />
      </>
    ),
  },

  {
    category: "Software & AI agent Development ",
    title: "Release Note Module - Streamlined Updates for LMS",
    src: "/mockups/releasenote/release-note-cover.svg",
    content: (
      <>
        <ContentCard
          title="Simplifying Updates with GPT Technology:"
          description="The Release Note Module leverages GPT models and technical expertise to automate version updates, combining engaging content with newsletter templates for efficient communication."
          url="/mockups/releasenote/release-note-cover.svg"
          altText="release-note docs center UI mockup"
        />
        <ContentCard
          title="Keep Stakeholders Informed and Engaged:"
          description="With intuitive UI/UX design, this module transforms complex technical updates into accessible insights, ensuring stakeholders stay informed and connected."
          url="/mockups/releasenote/release-note-primary.svg"
          altText="release-note newsletter UI mockup"
        />
        <ContentCard
          title="Designed for Admins and Users Alike:"
          description="Built for seamless integration, the module simplifies release management, offering features like Swagger-based API documentation and responsive design for a user-friendly experience."
          url="/mockups/releasenote/release-note-secondary.svg"
          altText="drelease-note email template UI mockup"
        />
      </>
    ),
  },
  {
    category: "Idea Execution",
    title: "State-Wide Distribution Network from NTouch",
    src: "/mockups/ntouch/ntouch.jpg",
    content: (
      <>
        <ContentCard
          title="Revolutionizing State-Wide Distribution Networks:"
          description="Imagine a system that seamlessly integrates inventory management, billing, and role operations, empowering stakeholders across the state to work together in perfect harmony. Welcome to NTouch, a game-changing solution designed to transform the distribution landscape."
        />
        <ContentCard
          title="Unlock Efficiency, Transparency, and Collaboration:"
          description="This innovative platform streamlines workflows, fosters transparency, and facilitates seamless collaboration between Syndicate Admins, Panchayat Representatives, and Retail Markets."
        />
        <ContentCard
          title="Scalable Solutions for Growing Needs:"
          description="NTouch is built for scalability, ensuring that as the distribution network grows, the platform continues to deliver exceptional performance and value."
        />
      </>
    ),
  },
];
