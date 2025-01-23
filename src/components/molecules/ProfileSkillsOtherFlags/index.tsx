import { useTranslations } from "next-intl";

import { ProfileSkillsFlag } from "@/components/atoms/ProfileSkillsFlag";

function ProfileSkillsOtherFlags() {
  const t = useTranslations("About");

  return (
    <div className="flex flex-wrap items-start justify-start gap-x-4 gap-y-3">
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("skills.second.tag-01.bolder"),
          t("skills.second.tag-01.normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("skills.second.tag-02.bolder"),
          t("skills.second.tag-02.normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("skills.second.tag-03.bolder"),
          t("skills.second.tag-03.normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("skills.second.tag-04.bolder"),
          t("skills.second.tag-04.normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("skills.second.tag-05.bolder"),
          t("skills.second.tag-05.normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("skills.second.tag-06.bolder"),
          t("skills.second.tag-06.normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("skills.second.tag-07.bolder"),
          t("skills.second.tag-07.normal"),
        ]}
      />
      <ProfileSkillsFlag
        isHighlight={false}
        text={[
          t("skills.second.tag-08.bolder"),
          t("skills.second.tag-08.normal"),
        ]}
      />
    </div>
  );
}

export { ProfileSkillsOtherFlags };
