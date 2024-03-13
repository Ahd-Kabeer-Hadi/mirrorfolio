import Cooking from "@/components/ui/Cooking";

export default function page() {
  return (
    <section className="px-4 container max-w-[1024px]">
      {/* <div className="w-full mb-16 mt-44">
        <h1 className="break-words text-5xl font-bold leading-none text-white md:text-[80px]">
          Tech Stack
        </h1>
        <p className="mb-16 mt-4 text-base text-[#A1A1AA]  md:text-2xl">
          The dev tools, apps, and devices I use, and the games I play.
        </p>
        <div className="h-[1px] w-full bg-white/40"></div>
      </div> */}
      <Cooking from="uses"/>
    </section>
  );
}
