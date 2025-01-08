interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src?: string;
}

const Testiments: Testimonial[] = [
  {
    quote:
      "I am delighted to recommend Ahd. Kabeer for his outstanding contributions as a UI/UX designer and web developer on our team. Throughout our collaboration, he consistently demonstrated a remarkable ability to blend creativity with technical expertise, resulting in exceptional design solutions and user-friendly web applications.",
    name: "Muhammed Sidan",
    designation:
      "Head of Engineering at Cyber Square - AI & Coding for Schools",
    src: "/people/sidan.svg",
  },
  {
    quote:
      "Exceptional work! A testament to reliability. Ahammad took on the task of testing AppMap&apos;s plugins by creating projects using Next.js. His result-driven approach led to the development of a remarkable day planner application. As a Founding Designer at AppMap Inc., I can confidently say that Ahammad&apos;s dedication to delivering tangible outcomes is unmatched. He&apos;s a true asset to any team or project.",
    name: "Dan Warner",
    designation: "Founding Designer at AppMap Inc.",
    src: "/people/dan.svg",
  },
  {
    quote:
      "I am delighted to recommend Ahd. Kabeer for his exceptional skills and dedication. As a developer, Kabeer consistently delivers high-quality code and innovative solutions. His ability to tackle complex problems and his deep understanding of technology make him an invaluable asset to any team.\n\nKabeer is also one of the hardest workers I&apos;ve encountered. His commitment to his projects and his proactive approach ensure that he always goes the extra mile to achieve success. Additionally, Kabeer is an excellent collaborator, communicating effectively and supporting his colleagues generously.\n\nI highly recommend Ahd. Kabeer P for any opportunity. His technical expertise, strong work ethic, and positive attitude will undoubtedly make a significant impact.",
    name: "Jasir TP",
    designation: "Software Engineer - Collegue at Aufait UX",
    src: "/people/jasir.svg",
  },
  // {
  //   quote:
  //     "Kabeer and team provided a positive experience while working on my website. They were responsive and professional, delivering satisfactory results. I would recommend Kabeer for their reliability and dedication",
  //   name: "Muhammad Azhar",
  //   designation: "Founder - Go Ahead Consulting LLP, UAE",
  //   src: "/people/sidan.svg",
  // },
  {
    quote:
      "Kabeer transformed our tech landscape with his expertise in developing and managing our procurement and distribution system, significantly enhancing operational efficiency. His strategic approach and technical acumen have been vital to our growth and digital transformation.",
    name: "Nishad Ali",
    designation: "Managing Director - Ntouch Syndicates LLP",
    src: "/people/nishad.svg",
  },
];

export default Testiments;
