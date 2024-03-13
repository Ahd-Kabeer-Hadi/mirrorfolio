import Cooking from '@/components/ui/Cooking'

export default function ProjectDetails({
    params,
  }: {
    params: { slug: string };
  }) {
    return (
        <div><Cooking from="project" /></div>
      )
}
