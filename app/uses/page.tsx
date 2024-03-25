import Cooking from "@/components/ui/Cooking";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StackCard from "@/components/uses/stackCard";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section className="px-4 container max-w-[1024px]">
      <div className="w-full mb-16 mt-44">
        <h1 className="break-words text-5xl font-bold leading-none text-white md:text-[80px]">
          Tech Stack
        </h1>
        <p className="mb-16 mt-4 text-base text-[#A1A1AA]  md:text-2xl">
          The languages, frameworks, dev tools, and apps I use the most.
        </p>
        <div className="h-[1px] w-full bg-white/40"></div>
      </div>
      <div className="top-5 max-w-7xl">
        {categories.map((category) => (
          <Accordion
            type="single"
            collapsible
            className="w-full"
            key={category.category}
          >
            <AccordionItem value={category.category as string}>
              <AccordionTrigger className="font-sans font-bold text-2xl text-neutral-200 mb-2 mt-2">
                {category.category}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="my-5 flex flex-col gap-4">
                  {/* grid grid-cols-1 gap-4 md:my-8 md:grid-cols-3 lg:grid-cols-4 */}
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <StackCard
                        name={item.name}
                        description={item.description}
                        icon={"/logo.png"}
                      />
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}

const categories = [
  {
    category: "Languages",
    items: [
      { name: "Python", description: "Scripting" },
      { name: "JavaScript", description: "Fullstack" },
      { name: "TypeScript", description: "Type Safety" },
      { name: "SQL", description: "Databases" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React.js", description: "Frontend" },
      { name: "Next.js", description: "Fullstack" },
      { name: "Angular", description: "Frontend" },
      { name: "Express", description: "Backend" },
      { name: "Django", description: "Backend" },
      { name: "Hono", description: "Edge Backend" },
      { name: "Docker", description: "Containerization" },
    ],
  },
  {
    category: "Libraries",
    items: [
      { name: "Prisma", description: "ORM" },
      { name: "Mongoose", description: "ODM" },
      { name: "TailwindCSS", description: "Styling" },
      { name: "React Query", description: "Data" },
      { name: "GraphQL", description: "API" },
      { name: "Material UI", description: "Styling" },
      { name: "Redux", description: "State Management" },
      { name: "Recoil", description: "State Management" },
      { name: "Turborepo", description: "Build Orchestrator" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", description: "Version Control" },
      { name: "MongoDB", description: "NoSQL" },
      { name: "Postgres", description: "SQL" },
      { name: "AWS", description: "Cloud" },
      { name: "Cloudflare", description: "CDN" },
      { name: "Vercel", description: "Hosting" },
      { name: "Hashnode", description: "Headless CMS" },
      { name: "Figma", description: "Design" },
      { name: "Jira", description: "Project Management" },
      { name: "Monorepo", description: "Code Organization" },
      { name: "Vite", description: "Build Tool" },
    ],
  },
  {
    category: "Apps",
    items: [
      { name: "cal.com", description: "Scheduling" },
      { name: "Discord", description: "Communication" },
      { name: "Notion", description: "Organization" },
      { name: "Github", description: "Code Management" },
      { name: "Google Drive", description: "Storage" },
      { name: "Spotify", description: "Music" },
      { name: "Slack", description: "Communication" },
      { name: "Twitter", description: "Social Media" },
      { name: "LinkedIn", description: "Networking" },
    ],
  },
  // {
  //   category: "Runtime",
  //   items: [{ name: "Node.js", description: "Backend" }],
  // },
];
