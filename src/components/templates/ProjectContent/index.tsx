import Link from "next/link";

import { ProjectThumbs } from "@/components/atoms/ProjectThumbs";
import { ProjectData } from "@/components/organisms/ProjectData";

interface ProjectContentProps {
  thumbUrl: string;
  thumbAlt: string;
  thumbType: string;
  name: string;
  area: string;
  type: string;
  link: string;
}

function ProjectContent(props: ProjectContentProps) {
  return (
    <Link
      href={props.link}
      className="flex flex-col items-stretch justify-start gap-4 w-full h-auto"
    >
      <ProjectThumbs
        url={props.thumbUrl}
        alt={props.thumbAlt}
        type={props.thumbType}
      />

      <ProjectData
        name={props.name}
        area={props.area}
        type={props.type}
        link={props.link}
      />
    </Link>
  );
}

export { ProjectContent };
