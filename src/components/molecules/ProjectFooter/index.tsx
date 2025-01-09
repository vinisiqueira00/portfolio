import { ProjectLink } from "@/components/atoms/ProjectLink";

interface ProjectFooterProps {
  href: string;
  text: string;
}

function ProjectFooter({ href, text }: ProjectFooterProps) {
  return (
    <div className="flex items-center justify-start h-full">
      <ProjectLink href={href} text={text} />
    </div>
  );
}

export { ProjectFooter };
