import { useTranslations } from "next-intl";

import { ProjectDetailsPrototypeHeading } from "@/components/atoms/ProjectDetailsPrototypeHeading";
import { ProjectDetailsPrototypePreview } from "@/components/molecules/ProjectDetailsPrototypePreview";

interface ProjectDetailsPrototypeProps {
  projectSlug: string;
}

export function ProjectDetailsPrototype(props: ProjectDetailsPrototypeProps) {
  const t = useTranslations(`projects.${props.projectSlug}.details`);

  const prototype: {
    title: string;
    description: string;
    image: string;
    label: string;
    link: string;
  } = t.raw("prototype");

  if (!("link" in prototype)) return <></>;

  return (
    <section className="flex items-center justify-center w-full h-auto">
      <div className="flex flex-col items-stretch justify-start gap-8 md:gap-10 w-full h-auto p-8 md:p-16 rounded-4xl border border-light-neutral-500 dark:border-dark-neutral-500">
        <ProjectDetailsPrototypeHeading
          title={prototype.title}
          description={prototype.description}
        />

        <ProjectDetailsPrototypePreview
          imageUrl={prototype.image}
          label={prototype.label}
          link={prototype.link}
        />
      </div>
    </section>
  );
}
