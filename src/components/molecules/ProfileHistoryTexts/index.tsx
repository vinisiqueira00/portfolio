import { useTranslations } from "next-intl";

import { ProfileParagraph } from "@/components/atoms/ProfileParagraph";

function ProfileHistoryTexts() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-stretch justify-start gap-6">
      <ProfileParagraph
        isFirst={true}
        text={[
          t("about-paragraphs-01-before"),
          t("about-paragraphs-01-content"),
          t("about-paragraphs-01-after"),
        ]}
      />
      <ProfileParagraph isFirst={false} text={t("about-paragraphs-02")} />
      <ProfileParagraph isFirst={false} text={t("about-paragraphs-03")} />
      <ProfileParagraph isFirst={false} text={t("about-paragraphs-04")} />
      <ProfileParagraph isFirst={false} text={t("about-paragraphs-05")} />
      <ProfileParagraph isFirst={false} text={t("about-paragraphs-06")} />
      <ProfileParagraph isFirst={false} text={t("about-paragraphs-07")} />
    </div>
  );
}

export { ProfileHistoryTexts };
