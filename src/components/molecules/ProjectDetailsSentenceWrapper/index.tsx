import { useTranslations } from "next-intl";

import { ProjectDetailsSentence } from "@/components/atoms/ProjectDetailsSentence";

interface ProjectDetailsSentenceWrapperProps {
  projectSlug: string;
}

export function ProjectDetailsSentenceWrapper(
  props: ProjectDetailsSentenceWrapperProps
) {
  const t = useTranslations(`projects.${props.projectSlug}.details`);

  const sentence = t(`emphasized-sentence`).trim();

  if (!sentence) return <></>;

  return (
    <section className="flex items-center justify-center w-full h-auto">
      <div className="flex items-center justify-center w-full h-auto">
        <ProjectDetailsSentence text={sentence} />
      </div>
    </section>
  );
}
