import Cooking from &apos;@/components/ui/Cooking&apos;

export default function ProjectDetails({
    params,
  }: {
    params: { slug: string };
  }) {
    return (
        <div><Cooking from="project" /></div>
      )
}
