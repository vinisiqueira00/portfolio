import { useTranslations } from "next-intl";

import { PortfolioTitle } from "@/components/atoms/PortfolioTitle";
import { PortfolioSubTitle } from "@/components/atoms/PortfolioSubTitle";

function PortfolioTexts() {
  const t = useTranslations("");

  return (
    <div className="flex flex-col items-stretch justify-end w-full max-w-screen-xl px-4 gap-4">
      <PortfolioTitle text={t("portfolio-texts-title")} />
      <PortfolioSubTitle text={t("portfolio-texts-subtitle")} />
    </div>
  );
}

export { PortfolioTexts };
