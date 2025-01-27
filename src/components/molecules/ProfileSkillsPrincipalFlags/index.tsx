import { useTranslations } from "next-intl";

import { ProfileSkillsFlag } from "@/components/atoms/ProfileSkillsFlag";

function ProfileSkillsPrincipalFlags() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-start justify-start gap-4 md:flex-row md:flex-wrap md:gap-x-4 md:gap-y-3">
      <ProfileSkillsFlag
        isHighlight={true}
        text={[
          t("about-skills-first-tag-01-bolder"),
          t("about-skills-first-tag-01-normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={true}
        text={[
          t("about-skills-first-tag-02-bolder"),
          t("about-skills-first-tag-02-normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={true}
        text={[
          t("about-skills-first-tag-03-bolder"),
          t("about-skills-first-tag-03-normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={true}
        text={[
          t("about-skills-first-tag-04-bolder"),
          t("about-skills-first-tag-04-normal"),
        ]}
      />
    </div>
  );
}

export { ProfileSkillsPrincipalFlags };
