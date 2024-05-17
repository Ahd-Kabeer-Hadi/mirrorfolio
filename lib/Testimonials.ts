import { StaticImageData } from "next/image";

interface Testimonial {
  name: string;
  title: string;
  quote: string;

  image?: StaticImageData;
}

const Testiments: Testimonial[] = [
  {
    name: "Muhammed Sidan",
    title: "Head of Engineering at Cyber Square - AI & Coding for Schools",
    quote:
      "I am delighted to recommend Ahammad Kabeer for his outstanding contributions as a UI/UX designer and web developer on our team. Throughout our collaboration, he consistently demonstrated a remarkable ability to blend creativity with technical expertise, resulting in exceptional design solutions and user-friendly web applications.",
  },
  {
    name: "Dan Warner",
    title: "Founding Designer at AppMap Inc.",
    quote:
      "Exceptional work! A testament to reliability. Ahammad took on the task of testing AppMap's plugins by creating projects using Next.js. His result-driven approach led to the development of a remarkable day planner application. As a Founding Designer at AppMap Inc., I can confidently say that Ahammad's dedication to delivering tangible outcomes is unmatched. He's a true asset to any team or project.",
  },
  {
    name: "Jasir TP",
    title: "Software Engineer - Collegue at Aufait UX",
    quote: `I am delighted to recommend Ahammad Kabeer P for his exceptional skills and dedication. As a developer, Kabeer consistently delivers high-quality code and innovative solutions. His ability to tackle complex problems and his deep understanding of technology make him an invaluable asset to any team.

Kabeer is also one of the hardest workers I've encountered. His commitment to his projects and his proactive approach ensure that he always goes the extra mile to achieve success. Additionally, Kabeer is an excellent collaborator, communicating effectively and supporting his colleagues generously.

I highly recommend Ahammad Kabeer P for any opportunity. His technical expertise, strong work ethic, and positive attitude will undoubtedly make a significant impact.`,
  },
  {
    name: "Muhammad Azhar",
    title: "Founder - Go Ahead Consulting LLP, UAE ",
    quote:
      "Kabeer and team provided a positive experience while working on my website. They were responsive and professional, delivering satisfactory results. I would recommend Kabeer for their reliability and dedication",
  },
];

export default Testiments;
