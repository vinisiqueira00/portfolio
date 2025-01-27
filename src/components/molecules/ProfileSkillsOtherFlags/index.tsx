import { useTranslations } from "next-intl";

import { ProfileSkillsFlag } from "@/components/atoms/ProfileSkillsFlag";

function ProfileSkillsOtherFlags() {
  const t = useTranslations();

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap items-start justify-start gap-4 md:gap-x-4 md:gap-y-3">
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("about-skills-second-tag-01-bolder"),
          t("about-skills-second-tag-01-normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("about-skills-second-tag-02-bolder"),
          t("about-skills-second-tag-02-normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("about-skills-second-tag-03-bolder"),
          t("about-skills-second-tag-03-normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("about-skills-second-tag-04-bolder"),
          t("about-skills-second-tag-04-normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("about-skills-second-tag-05-bolder"),
          t("about-skills-second-tag-05-normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("about-skills-second-tag-06-bolder"),
          t("about-skills-second-tag-06-normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("about-skills-second-tag-07-bolder"),
          t("about-skills-second-tag-07-normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("about-skills-second-tag-08-bolder"),
          t("about-skills-second-tag-08-normal"),
        ]}
      />
    </div>
  );
}

export { ProfileSkillsOtherFlags };
