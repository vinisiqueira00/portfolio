import { useTranslations } from "next-intl";

import { FooterTitle } from "@/components/atoms/FooterTitle";
import { FooterSubTitle } from "@/components/atoms/FooterSubTitle";

function FooterTexts() {
  const t = useTranslations("");

  return (
    <div className="flex flex-col items-stretch justify-end gap-4">
      <FooterTitle text={t("footer-texts-title")} />
      <FooterSubTitle text={t("footer-texts-subtitle")} />
    </div>
  );
}

export { FooterTexts };
