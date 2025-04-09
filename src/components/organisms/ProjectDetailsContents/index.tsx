import { useTranslations } from "next-intl";

import { ProjectDetailsContentSubject } from "@/components/molecules/ProjectDetailsContentSubject";

import { IProjectDetailsContent } from "@/types/global";

interface ProjectDetailsContentProps {
  projectSlug: string;
}

export function ProjectDetailsContents(props: ProjectDetailsContentProps) {
  const t = useTranslations(`projects.${props.projectSlug}.details`);

  const contentSubjects: IProjectDetailsContent[][] = t.raw("content");

  if (contentSubjects.length === 0) return <></>;

  return (
    <section className="flex items-center justify-center w-full h-auto">
      <div className="flex flex-col items-stretch gap-16 justify-start w-full h-auto">
        {contentSubjects.map((contentSubject, idx) => (
          <ProjectDetailsContentSubject key={idx} content={contentSubject} />
        ))}
      </div>
    </section>
  );
}
