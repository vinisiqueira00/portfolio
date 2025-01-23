import { useTranslations } from "next-intl";

import { ProfileParagraph } from "@/components/atoms/ProfileParagraph";

function ProfileHistoryTexts() {
  const t = useTranslations("About");

  return (
    <div className="flex flex-col items-stretch justify-start gap-6">
      <ProfileParagraph
        isFirst={true}
        text={[
          t("paragraphs.01-before"),
          t("paragraphs.01-content"),
          t("paragraphs.01-after"),
        ]}
      />
      <ProfileParagraph isFirst={false} text={t("paragraphs.02")} />
      <ProfileParagraph isFirst={false} text={t("paragraphs.03")} />
      <ProfileParagraph isFirst={false} text={t("paragraphs.04")} />
      <ProfileParagraph isFirst={false} text={t("paragraphs.05")} />
      <ProfileParagraph isFirst={false} text={t("paragraphs.06")} />
      <ProfileParagraph isFirst={false} text={t("paragraphs.07")} />
    </div>
  );
}

export { ProfileHistoryTexts };
