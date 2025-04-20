import { useTranslations } from "next-intl";

import { SectionHeader } from "@/components/molecules/SectionHeader";
import { AboutTableSkill } from "@/components/molecules/AboutTableSkill";

function AboutSkillsSection() {
  const t = useTranslations("about-page.skills");

  return (
    <div className="flex flex-col items-center justify-start gap-16 w-full h-auto py-24 md:py-32">
      <SectionHeader
        title={t("title")}
        subTitle={t("subtitle")}
        titleTag="h3"
      />

      <div className="flex flex-col items-center justify-center gap-8 px-8 w-full md:flex-row md:px-0">
        <AboutTableSkill
          title={t("areas.front-end.title")}
          items={t.raw("areas.front-end.list")}
        />
        <AboutTableSkill
          title={t("areas.back-end.title")}
          items={t.raw("areas.back-end.list")}
        />
        <AboutTableSkill
          title={t("areas.behavioral.title")}
          items={t.raw("areas.behavioral.list")}
        />
      </div>
    </div>
  );
}

export { AboutSkillsSection };
