import { useTranslations } from "next-intl";

import { ProfileTitle } from "@/components/atoms/ProfileTitle";
import { ProfileDisclaimer } from "@/components/atoms/ProfileDisclaimer";

function ProfileHistoryHeader() {
  const t = useTranslations("About");

  return (
    <div className="flex flex-col items-stretch justify-start gap-2">
      <ProfileDisclaimer text={t("text-disclaimer")} />
      <ProfileTitle texts={[t("text-title-before"), t("text-title-content")]} />
    </div>
  );
}

export { ProfileHistoryHeader };
