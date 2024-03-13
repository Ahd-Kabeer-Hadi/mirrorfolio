import Cooking from "@/components/ui/Cooking";

export default function page({params}: {params: {projectId: string}}) {
  return (
    <div><Cooking from="project" /></div>
  )
}
