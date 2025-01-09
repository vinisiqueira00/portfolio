import { ProjectThumbs } from "@/components/atoms/ProjectThumbs";
import { ProjectData } from "@/components/organisms/ProjectData";

interface ProjectContentProps {
  thumbs: {
    urlKey: string;
    altKey: string;
  };
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

function ProjectContent(props: ProjectContentProps) {
  return (
    <div className="flex items-stretch justify-center gap-12">
      <ProjectThumbs
        urlKey={props.thumbs.urlKey}
        altKey={props.thumbs.altKey}
      />

      <ProjectData
        status={props.status}
        name={props.name}
        subTitle={props.subTitle}
        description={props.description}
        tags={props.tags}
        link={props.link}
      />
    </div>
  );
}

export { ProjectContent };
