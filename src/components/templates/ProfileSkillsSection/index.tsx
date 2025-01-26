import { useTranslations } from "next-intl";

import { ProfileSkillsTitle } from "@/components/atoms/ProfileSkillsTitle";
import { ProfileSkillsOtherSection } from "@/components/organisms/ProfileSkillsOtherSection";
import { ProfileSkillsPrincipalSection } from "@/components/organisms/ProfileSkillsPrincipalSection";

function ProfileSkillsSection() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-stretch justify-start gap-6">
      <ProfileSkillsTitle text={t("about-title-skills-section")} />
      <ProfileSkillsPrincipalSection />
      <ProfileSkillsOtherSection />
    </div>
  );
}

export { ProfileSkillsSection };
