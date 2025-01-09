import { ProjectTags } from "@/components/molecules/ProjectTags";
import { ProjectFooter } from "@/components/molecules/ProjectFooter";
import { ProjectHeader } from "@/components/molecules/ProjectHeader";
import { ProjectDescription } from "@/components/atoms/ProjectDescription";

interface ProjectDataProps {
  status: "FINISHED" | "IN_EXECUTION";
  name: string;
  subTitle: string;
  description: string;
  tags: {
    highlight: string;
    others: string[];
  };
  link: { href: string; text: string };
}

function ProjectData(props: ProjectDataProps) {
  return (
    <div className="flex-1 flex flex-col items-stretch justify-start gap-4 py-4">
      <ProjectHeader
        status={props.status}
        name={props.name}
        subTitle={props.subTitle}
      />

      <ProjectDescription text={props.description} />

      <ProjectTags
        highlight={{
          text: props.tags.highlight,
          status: props.status,
        }}
        tags={props.tags.others}
      />

      <ProjectFooter href={props.link.href} text={props.link.text} />
    </div>
  );
}

export { ProjectData };
