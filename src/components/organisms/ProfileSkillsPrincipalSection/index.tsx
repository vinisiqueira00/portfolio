import { useTranslations } from "next-intl";

import { ProfileSkillsSubtitle } from "@/components/atoms/ProfileSkillsSubtitle";
import { ProfileSkillsPrincipalFlags } from "@/components/molecules/ProfileSkillsPrincipalFlags";

function ProfileSkillsPrincipalSection() {
  const t = useTranslations("About");

  return (
    <div className="flex items-start justify-start gap-2">
      <ProfileSkillsSubtitle text={t("skills.first.group-title")} />
      <ProfileSkillsPrincipalFlags />
    </div>
  );
}

export { ProfileSkillsPrincipalSection };
