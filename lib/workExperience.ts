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
    title: "Founder & Consultant",
    company: "Mirrorfolio",
    tenure: "2023 - Present",
    responsibilities: [
      "Collaborating with startups such as Ntouch, Menteor, Fozato, and Talentify to bootstrap businesses and build development teams.",
      "Establishing technical foundations and delivering scalable solutions as a Lead Developer and Consultant.",
      "Providing mentorship to aspiring developers, fostering growth and knowledge-sharing within the community.",
    ],
  },
  {
    title: "Teacher for Underprivileged Children",
    company: "YES India Foundation (non-profit)",
    tenure: "2024 Jan - 2024 Mar",
    responsibilities: [
      "Fulfilled a personal aspiration by teaching programming fundamentals to underprivileged children.",
      "Developed a simple Exam Management System (EMS) project for the foundation as part of Mirrorfolio.",
      "Engaged in personal initiatives to refine skills and maintain industry relevance during a meaningful career break.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Aufait UX",
    tenure: "2023 Sep - 2024",
    responsibilities: [
      "Developed an in-house React UI library, enhancing development efficiency and consistency.",
      "Designed and implemented a website for ClubSulaimani, aligning with client branding and user experience goals.",
      "Gained valuable insights into modern UI/UX practices, preparing for independent entrepreneurial work.",
    ],
    links: [{ title: "ClubSulaimani", url: "https://clubsulaimani.com/" }],
  },
  {
    title: "Software Engineer",
    company: "CyberSquare",
    tenure: "2021 - 2023",
    responsibilities: [
      "Led the development of applications using Python, Angular and React, driving system efficiency and performance.",
      "Integrated RESTful services with Python, enhancing functionality and user experience.",
      "Educated students and teachers in programming fundamentals, achieving a remarkable 90% pass rate in training programs.",
    ],
  },
  {
    title: "Web Developer",
    company: "Self-Employed",
    tenure: "2018 - 2021",
    responsibilities: [
      "Collaborated with small businesses to design and develop tailored websites that met industry standards.",
      "Implemented web solutions using JavaScript, Angular, and WordPress, ensuring project success.",
      "Built a foundation in web development, preparing for advanced roles and independent ventures.",
    ],
  },
];

// const workExperience: JobExperience[] = [
//   {
//     title: "Tech Consultant, Founder and Lead Developer ",
//     company: "Mirrorfolio ",
//     tenure: "2023 Sep - Present",
//     responsibilities: [
//       "Currently working as a tech consultant and developer for startups with non-tech backgrounds under Mirrorfolio, such as Sozial,menteor, Fozato, and Talentify.",
//       "Assisting these startups in bootstrapping, building development teams, and establishing technical foundations to kickstart their businesses.",
//       "Working as a Founder and Lead web developer, undertaking various projects for clients to achieve their goals.",
     
//       "Providing on-demand mentorship for aspiring developers to maintain my enthusiasm for knowledge transfer.",
//     ],
//   },
//   {
//     title: "Teacher for underprivileged children",
//     company: "YES India foundation",
//     tenure: "2024 Jan - 2024 Mar",
//     responsibilities: [
//       "Served as a teacher while I took a break from corporate life for underprivileged children, fulfilling a long-time aspiration and refreshing my perspective.",
//       "Worked as a Founder and Lead web developer to stay connected with the industry, undertaking various projects for clients.",
//       "Engaged in personal projects to further hone my skills and keep up with industry trends.",
//       "Provided on-demand mentorship for aspiring developers to maintain my enthusiasm for knowledge transfer.",
//     ],
//   },
  
//   {
//     title: "Frontend Developer",
//     company: "Aufait UX",
//     tenure: "2023 - 2024",
//     responsibilities: [
//       "Played a significant role in developing Aufait UX's In-house React UI library, ensuring consistency and efficiency",
//       "Demonstrated adaptability by crafting a website for a renowned Indian tea vendor - ClubSulaimani, aligning with client needs and branding.",
//       "Gained valuable insights into user experiences and UI practices before successfully transitioning into independent Founder and Lead work.",
//     ],
//     links: [{ title: "ClubSulaimani", url: "https://clubsulaimani.com/" }],
//   },
//   {
//     title: "Software Engineer",
//     company: "CyberSquare",
//     tenure: "2021 - 2023",
//     responsibilities: [
//       "Elevated team performance by spearheading the development and maintenance of multiple applications utilising Angular and React, resulting in enhanced system efficiency and performance",
//       "Achieved seamless integration of RESTful services using Python with Angular and React applications, bolstering functionality and user experience",
//       "As an integral component of CyberSquare's School-based training programmes, I fostered knowledge dissemination by educating both students and teachers in programming fundamentals. This initiative culminated in an exceptional 90% pass rate for the end-of-semester exam.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company: "Self Employed",
//     tenure: "2018 - 2021",
//     responsibilities: [
//       "Leveraged web development expertise to assist small businesses and agencies in achieving their online goals.",
//       "Built and maintained websites tailored to client needs and industry standards.",
//       "Implemented a variety of technologies to ensure project success, including JavaScript, Angular, and WordPress.",
//     ],
//   },
// ];

export default workExperience;
