import { ProjectDetailsDescription } from "@/components/atoms/ProjectDetailsDescription";
import { ProjectDetailsName } from "@/components/atoms/ProjectDetailsName";
import { ProjectDetailsBoard } from "@/components/molecules/ProjectDetailsBoard";
import { ProjectDetailsButtons } from "@/components/molecules/ProjectDetailsButtons";
import { ProjectDetailsFlags } from "@/components/molecules/ProjectDetailsFlags";
import { useTranslations } from "next-intl";

interface ProjectDetailsHeadingProps {
  projectSlug: string;
}

export function ProjectDetailsHeading(props: ProjectDetailsHeadingProps) {
  const t = useTranslations(`projects.${props.projectSlug}.details`);

  return (
    <section className="flex items-center justify-center w-full h-auto">
      <div className="flex flex-col items-stretch justify-center w-full h-auto gap-12 md:flex-row">
        <div className="flex-1 flex flex-col w-auto h-auto gap-4">
          <ProjectDetailsName name={t("name")} />
          <ProjectDetailsDescription text={t("description")} />
          <ProjectDetailsFlags flags={t.raw("flags")} />
          <ProjectDetailsButtons
            buttons={t.raw("buttons")}
            messageEmptyButton={t("empty-buttons-message")}
          />
        </div>

        <ProjectDetailsBoard items={t.raw("board")} />
      </div>
    </section>
  );
}
