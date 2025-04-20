import { useTranslations } from "next-intl";

import { getProjectInformation } from "@/utils/getProjectInformation";

import { Button } from "@/components/atoms/Button";
import { ProjectContent } from "@/components/templates/ProjectContent";

interface ProjectListProps {
  count: number | "all";
}

function ProjectList({ count }: ProjectListProps) {
  const t = useTranslations();

  const projects = [
    getProjectInformation(t, "crypto-rsa"),
    getProjectInformation(t, "gshop-integration"),
    getProjectInformation(t, "redesign-rave"),
  ];

  return (
    <div className="flex flex-col items-stretch justify-center w-full gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {(count === "all" ? projects : projects.slice(0, count)).map(
          (project) => (
            <ProjectContent key={project.title} {...project} />
          )
        )}
      </div>

      {count !== "all" && (
        <div className="flex items-center justify-center w-full h-auto">
          <Button
            label={t("home-page.portfolio-button.label")}
            link={t("home-page.portfolio-button.link")}
            type="secondary"
          />
        </div>
      )}
    </div>
  );
}

export { ProjectList };
