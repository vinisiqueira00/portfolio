import { ProjectName } from "@/components/atoms/ProjectName";
import { ProjectHeader } from "@/components/molecules/ProjectHeader";

interface ProjectDataProps {
  name: string;
  area: string;
  type: string;
  link: string;
}

function ProjectData(props: ProjectDataProps) {
  return (
    <div className="flex-1 flex flex-col items-stretch justify-start gap-2">
      <ProjectHeader area={props.area} type={props.type} />
      <ProjectName text={props.name} />
    </div>
  );
}

export { ProjectData };
