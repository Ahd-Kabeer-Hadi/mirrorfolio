import Image from "next/image";

import gradient from "../public/gradients/gradient.webp"

export default function Home() {
  return (
    <div className="h-screen overflow-auto bg-light-bg p-0 transition duration-700 dark:bg-black">
      <div className="absolute inset-x-0 top-0 select-none">
        <div className="relative h-[550px] w-full overflow-hidden">
          <picture className="absolute left-1/2 top-0 z-[2] block h-[550px] w-[1440px] -translate-x-1/2 select-none">
            <Image
              alt="gradient"
              draggable="false"
              fetchPriority="high"
              decoding="async"
              data-nimg="fill"
              className="select-none"
              sizes="100vw"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: "0",
                top: "0",
                right: "0",
                bottom: "0",
                color: "transparent",
              }}
              src={gradient}
            />
          </picture>
        </div>
      </div>
      <div className="h-screen flex justify-center content-center">Its on the progress</div>
    </div>
  );
}
{/* <img
  alt="gradient"
  draggable="false"
  fetchpriority="high"
  decoding="async"
  data-nimg="fill"
  class="select-none"
  style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
  srcset="/_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&amp;w=3840&amp;q=75 3840w"
  src="/_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&amp;w=3840&amp;q=75"
></img>; */}
