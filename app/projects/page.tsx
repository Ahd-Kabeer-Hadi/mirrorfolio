import { ProjectCards } from "@/components/ProjectCards";

export default function Projects() {
    return (
        <section className="px-4 container max-w-[1024px]">
          <div className="w-full mb-16 mt-44">
            <h1 className="break-words text-5xl font-bold leading-none text-whitemd:text-[80px]">
              Work
            </h1>
            <p className="mb-16 mt-4 text-base text-[#A1A1AA]  md:text-2xl">
              Projects and ideas I've worked on.
            </p>
            <div className="h-[1px] w-full bg-white/40"></div>
          </div>
          <ProjectCards variant="primary" limit={3} />
        </section>
      );
}
