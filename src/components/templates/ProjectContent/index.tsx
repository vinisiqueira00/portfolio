import Link from "next/link";

import { ProjectThumbs } from "@/components/atoms/ProjectThumbs";
import { ProjectData } from "@/components/organisms/ProjectData";

interface ProjectContentProps {
  thumbnail: {
    source: string;
    alt: string;
  };
  title: string;
  area: string;
  type: string;
  slug: string;
}

function ProjectContent(props: ProjectContentProps) {
  return (
    <Link
      href={`/project/${props.slug}`}
      className="flex flex-col items-stretch justify-start gap-4 w-full h-auto"
    >
      <ProjectThumbs url={props.thumbnail.source} alt={props.thumbnail.alt} />

      <ProjectData name={props.title} area={props.area} type={props.type} />
    </Link>
  );
}

export { ProjectContent };
