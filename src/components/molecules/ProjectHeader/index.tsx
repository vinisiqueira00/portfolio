import { ProjectName } from "@/components/atoms/ProjectName";
// import { ProjectStatus } from "@/components/atoms/ProjectStatus";
import { ProjectSubTitle } from "@/components/atoms/ProjectSubTitle";

interface ProjectHeaderProps {
  status: "FINISHED" | "IN_EXECUTION";
  name: string;
  subTitle: string;
}

function ProjectHeader({ name, subTitle }: ProjectHeaderProps) {
  return (
    <div className="flex items-center justify-start gap-2">
      {/* <ProjectStatus smaller status={status} /> */}
      <ProjectName text={name} />
      <ProjectSubTitle text={subTitle} />
    </div>
  );
}

export { ProjectHeader };
