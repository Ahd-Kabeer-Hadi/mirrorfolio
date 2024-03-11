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
      quote:"Exceptional work! A testament to reliability. Ahammad took on the task of testing AppMap's plugins by creating projects using Next.js. His result-driven approach led to the development of a remarkable day planner application. As a Founding Designer at AppMap Inc., I can confidently say that Ahammad's dedication to delivering tangible outcomes is unmatched. He's a true asset to any team or project.",
    }
  ];
  
  export  default Testiments ;
  