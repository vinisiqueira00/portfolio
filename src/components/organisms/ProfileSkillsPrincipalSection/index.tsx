import { useTranslations } from "next-intl";

import { ProfileSkillsSubtitle } from "@/components/atoms/ProfileSkillsSubtitle";
import { ProfileSkillsPrincipalFlags } from "@/components/molecules/ProfileSkillsPrincipalFlags";

function ProfileSkillsPrincipalSection() {
  const t = useTranslations("About");

  return (
    <div className="flex flex-col items-start justify-start gap-2 md:flex-row">
      <ProfileSkillsSubtitle text={t("skills.first.group-title")} />
      <ProfileSkillsPrincipalFlags />
    </div>
  );
}

export { ProfileSkillsPrincipalSection };
