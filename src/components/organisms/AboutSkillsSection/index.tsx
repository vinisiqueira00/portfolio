import { useTranslations } from "next-intl";

import { SectionHeader } from "@/components/molecules/SectionHeader";
import { AboutTableSkill } from "@/components/molecules/AboutTableSkill";

function AboutSkillsSection() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-start gap-16 w-full h-auto py-24 md:py-32">
      <SectionHeader
        title={t("about-skills-texts-title")}
        subTitle={t("about-skills-texts-subtitle")}
        titleTag="h3"
      />

      <div className="flex flex-col items-center justify-center gap-8 px-8 w-full md:flex-row md:px-0">
        <AboutTableSkill tableId="01" />
        <AboutTableSkill tableId="02" />
        <AboutTableSkill tableId="03" />
      </div>
    </div>
  );
}

export { AboutSkillsSection };
