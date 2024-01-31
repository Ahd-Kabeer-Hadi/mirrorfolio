import Image from "next/image";

import gradient from "../public/gradients/gradient.webp"

export default function Footer() {
  return (
    <footer className="relative mt-16  pb-32 md:pb-12">
     hello
    </footer>
  );
}
// <div className="h-[1px] w-full bg-black/10 dark:bg-white/10">
// <div className="absolute inset-x-0 top-0 select-none">
//   <div className="relative h-[250px] w-full overflow-hidden">
//     <picture className="absolute left-1/2 top-0 z-[2] block h-[250px] w-[1440px] -translate-x-1/2 select-none">
//       <Image
//         alt="gradient"
//         draggable="false"
//         fetchPriority="high"
//         decoding="async"
//         data-nimg="fill"
//         className="select-none"
//         sizes="100vw"
//         style={{
//           position: "absolute",
//           height: "100%",
//           width: "100%",
//           left: "0",
//           top: "0",
//           right: "0",
//           bottom: "0",
//           color: "transparent",
//           rotate: "180deg",
//         }}
//         src={gradient}
//       />
//     </picture>
//   </div>
// </div>
// </div>