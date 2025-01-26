import { useTranslations } from "next-intl";

import { ProfileSkillsSubtitle } from "@/components/atoms/ProfileSkillsSubtitle";
import { ProfileSkillsOtherFlags } from "@/components/molecules/ProfileSkillsOtherFlags";

function ProfileSkillsOtherSection() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-start justify-start gap-2 md:flex-row">
      <ProfileSkillsSubtitle text={t("about-skills-second-group-title")} />
      <ProfileSkillsOtherFlags />
    </div>
  );
}

export { ProfileSkillsOtherSection };
