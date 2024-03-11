// workExperience.ts

import { StaticImageData } from "next/image";

interface JobExperience {
  title: string;
  company: string;
  tenure: string;
  responsibilities: string[];
  links?: { title: string; url: string }[];
}

const workExperience: JobExperience[] = [
  {
    title: "Lead Software Engineer",
    company: "Menteor",
    tenure: "2024 - Present",
    responsibilities: [
      "Created Menteor, a one-to-one mentorship platform prioritising skill-based knowledge transfer",
      "Utilised Next.js 14, Tailwind, Hono and Serverless Platforms like Cloudflare workers to create a dynamic and efficient platform",
      "Spearheading the development of innovative features for seamless user experience",
    ],
    links: [{ title: "Menteor", url: "https://www.menteor.space/" }],
  },
  {
    title: "Frontend Developer",
    company: "Aufait UX",
    tenure: "2023 - 2024",
    responsibilities: [
      "Played a significant role in developing Aufait UX's In-house React UI library, ensuring consistency and efficiency",
      "Demonstrated adaptability by crafting a website for a renowned Indian tea vendor - ClubSulaimani, aligning with client needs and branding.",
      "Gained valuable insights into user experiences and UI practices before successfully transitioning into independent freelance work.",
    ],
    links: [{ title: "ClubSulaimani", url: "https://clubsulaimani.com/" }],
  },
  {
    title: "Software Engineer",
    company: "CyberSquare",
    tenure: "2021 - 2023",
    responsibilities: [
      "Elevated team performance by spearheading the development and maintenance of multiple applications utilising Angular and React, resulting in enhanced system efficiency and performance",
      "Achieved seamless integration of RESTful services using Python with Angular and React applications, bolstering functionality and user experience",
      "As an integral component of CyberSquare's School-based training programmes, I fostered knowledge dissemination by educating both students and teachers in programming fundamentals. This initiative culminated in an exceptional 90% pass rate for the end-of-semester exam.",
    ],
  },
];

export default workExperience;
