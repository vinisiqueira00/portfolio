import { useTranslations } from "next-intl";

import { SectionHeader } from "@/components/molecules/SectionHeader";
import { ProjectList } from "@/components/templates/ProjectList";

export default function Portfolio() {
  const t = useTranslations();

  return (
    <main className="flex-1 bg-light-gradient-003 dark:bg-dark-gradient-003 pt-20">
      <section className="flex flex-col items-center justify-center gap-24 w-full max-w-screen-xl mx-auto px-4 py-24 md:gap-32 md:py-32">
        <SectionHeader
          title={t("portfolio-texts-title")}
          subTitle={t("portfolio-texts-subtitle")}
          titleTag="h3"
        />

        <ProjectList count="all" />
      </section>
    </main>
  );
}
