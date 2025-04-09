import { ProjectDetailsFlag } from "@/components/atoms/ProjectDetailsFlag";

interface ProjectDetailsFlagsProps {
  flags: string[];
}

export function ProjectDetailsFlags(props: ProjectDetailsFlagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {props.flags.map((flag) => (
        <ProjectDetailsFlag key={flag} flag={flag} />
      ))}
    </div>
  );
}
