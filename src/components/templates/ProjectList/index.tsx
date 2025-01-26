import { useTranslations } from "next-intl";

import { ProjectContent } from "@/components/templates/ProjectContent";
import { ProjectsTitleSection } from "@/components/atoms/ProjectsTitleSection";

interface IProject {
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

function ProjectList() {
  const t = useTranslations();

  const projectsData: IProject[] = [
    {
      thumbs: {
        urlKey: "cryptorsa",
        altKey: "Crypto RSA",
      },
      status: "FINISHED",
      name: t("projects-project-01-title"),
      subTitle: t("projects-project-01-subtitle"),
      description: t("projects-project-01-description"),
      tags: {
        highlight: t("projects-project-01-highlight"),
        others: [
          t("projects-project-01-tag-01"),
          t("projects-project-01-tag-02"),
          t("projects-project-01-tag-03"),
        ],
      },
      link: {
        href: t("projects-project-01-link"),
        text: t("projects-project-01-button"),
      },
    },
  ];

  return (
    <div className="flex flex-col items-stretch justify-center w-full max-w-5xl gap-8 px-4">
      <ProjectsTitleSection text={t("projects-title-section")} />

      <div className="flex flex-col items-stretch justify-start gap-8">
        {projectsData.map((project) => (
          <ProjectContent
            key={project.name}
            thumbs={project.thumbs}
            status={project.status}
            name={project.name}
            subTitle={project.subTitle}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export { ProjectList };
