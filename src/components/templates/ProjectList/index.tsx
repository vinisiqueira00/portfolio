import { useTranslations } from "next-intl";

import { ProjectContent } from "@/components/templates/ProjectContent";
import { ProjectsDisclaimer } from "@/components/atoms/ProjectsDisclaimer";
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
  const t = useTranslations("Home.Projects");

  const projectsData: IProject[] = [
    {
      thumbs: {
        urlKey: "cryptorsa",
        altKey: "Crypto RSA",
      },
      status: "FINISHED",
      name: t("project-01.title"),
      subTitle: t("project-01.subtitle"),
      description: t("project-01.description"),
      tags: {
        highlight: t("project-01.highlight"),
        others: [
          t("project-01.tag-01"),
          t("project-01.tag-02"),
          t("project-01.tag-03"),
        ],
      },
      link: {
        href: "https://cryptorsa.vinisiqueira.com.br",
        text: t("project-01.button"),
      },
    },
  ];

  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col items-stretch justify-center w-full max-w-5xl gap-8">
        <ProjectsTitleSection text={t("title-section")} />

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

          <ProjectsDisclaimer text={t("text-ending")} />
        </div>
      </div>
    </section>
  );
}

export { ProjectList };
