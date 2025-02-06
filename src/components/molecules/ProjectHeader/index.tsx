import { ProjectArea } from "@/components/atoms/ProjectArea";
import { ProjectType } from "@/components/atoms/ProjectType";

interface ProjectHeaderProps {
  area: string;
  type: string;
}

function ProjectHeader({ area, type }: ProjectHeaderProps) {
  return (
    <div className="flex items-center justify-start gap-2">
      <ProjectArea text={area} />
      <span className="block w-0.5 h-0.5 rounded bg-light-neutral-600 dark:bg-dark-neutral-600" />
      <ProjectType text={type} />
    </div>
  );
}

export { ProjectHeader };
