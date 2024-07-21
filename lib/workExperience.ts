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
    title: "Teacher and Freelancer",
    company: "YES India foundation",
    tenure: "2024 Jan - Present",
    responsibilities: [
      "Served as a teacher while I'm on my break for underprivileged children, fulfilling a long-time aspiration and refreshing my perspective.",
      "Worked as a freelance web developer to stay connected with the industry, undertaking various projects for clients.",
      "Engaged in personal projects to further hone my skills and keep up with industry trends.",
      "Provided on-demand mentorship for aspiring developers to maintain my enthusiasm for knowledge transfer.",
    ],
  },
  // {
  //   title: "Lead Software Engineer",
  //   company: "Menteor",
  //   tenure: "2024 - Present",
  //   responsibilities: [
  //     "Ideated and launched Menteor, a one-on-one mentorship platform designed to prioritise skill-based mentorship and knowledge transfer through a collaborative and community-driven approach using Next.js, React, Hono,TailwindCSS, and Cloudflare Workers",
  //     "Leading the ongoing software development with a focus on creating innovative features driven by a curated waiting list exceeding 100 members",
  //     "Offering complimentary hands-on training for aspiring developers by sharing self-learning resources through personal blogs, thereby fostering skill development and growth within the tech community.",
  //   ],
  //   links: [{ title: "Menteor", url: "https://www.menteor.space/" }],
  // },
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
  // {
  //   title: "Web Developer",
  //   company: "Self Employed",
  //   tenure: "2019 - 2021",
  //   responsibilities: [
  //     "Leveraged web development expertise to assist small businesses and agencies in achieving their online goals.",
  //     "Built and maintained websites tailored to client needs and industry standards.",
  //     "Implemented a variety of technologies to ensure project success, including JavaScript, Angular, and WordPress.",
  //   ],
  // },
];

export default workExperience;
