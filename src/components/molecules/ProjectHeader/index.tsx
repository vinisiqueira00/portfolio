import { ProjectName } from "@/components/atoms/ProjectName";
import { ProjectSubTitle } from "@/components/atoms/ProjectSubTitle";

interface ProjectHeaderProps {
  status: "FINISHED" | "IN_EXECUTION";
  name: string;
  subTitle: string;
}

function ProjectHeader({ name, subTitle }: ProjectHeaderProps) {
  return (
    <div className="flex items-center justify-start gap-2">
      <ProjectName text={name} />
      <ProjectSubTitle text={subTitle} />
    </div>
  );
}

export { ProjectHeader };
