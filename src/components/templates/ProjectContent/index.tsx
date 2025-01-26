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
    <div className="grid grid-cols-1 grid-rows-[auto] gap-4 box-border md:gap-12 md:grid-cols-2 md:grid-rows-1">
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
