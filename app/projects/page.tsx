import { ProjectCards } from "@/components/ProjectCards";

export default function Projects() {
  return (
    <section className="px-4 container max-w-7xl">
      <div className="w-full mt-16 mb-16">
        <h1 className="text-5xl font-bold leading-tight text-white md:text-[80px]">
          Projects
        </h1>
        <p className="mt-4 mb-8 text-lg text-[#A1A1AA] md:text-2xl">
          A glimpse into the projects and ideas I've brought to life.
        </p>
        <hr className="h-[1px] w-full bg-white/40" />
      </div>
      <ProjectCards variant="primary" limit={3} />
    </section>
  );
}
