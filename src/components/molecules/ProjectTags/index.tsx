import { ProjectTag } from "@/components/atoms/ProjectTag";
import { ProjectStatus } from "@/components/atoms/ProjectStatus";

interface ProjectTagsProps {
  highlight: { text: string; status: "FINISHED" | "IN_EXECUTION" };
  tags: string[];
}

function ProjectTags({ highlight, tags }: ProjectTagsProps) {
  return (
    <div className="flex items-center justify-start gap-2">
      <ProjectStatus text={highlight.text} status={highlight.status} />

      {tags.map((tag) => (
        <ProjectTag key={tag} text={tag} />
      ))}
    </div>
  );
}

export { ProjectTags };
