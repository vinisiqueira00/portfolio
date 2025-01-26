import { useTranslations } from "next-intl";

import { ProfileTitle } from "@/components/atoms/ProfileTitle";
import { ProfileDisclaimer } from "@/components/atoms/ProfileDisclaimer";

function ProfileHistoryHeader() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-stretch justify-start gap-2">
      <ProfileDisclaimer text={t("about-text-disclaimer")} />
      <ProfileTitle
        texts={[t("about-text-title-before"), t("about-text-title-content")]}
      />
    </div>
  );
}

export { ProfileHistoryHeader };
