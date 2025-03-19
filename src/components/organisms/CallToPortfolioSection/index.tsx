import { useTranslations } from "next-intl";

import { Button } from "@/components/atoms/Button";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { CallToPortfolioThumbGroup } from "@/components/molecules/CallToPortfolioThumbGroup";

function CallToPortfolioSection() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-start gap-12 w-full h-auto py-24 md:py-32">
      <CallToPortfolioThumbGroup
        firstThumb={{
          imageUrl: t("about-portfolio-thumb-01-url"),
          imageAlt: t("about-portfolio-thumb-01-alt"),
        }}
        secondThumb={{
          imageUrl: t("about-portfolio-thumb-02-url"),
          imageAlt: t("about-portfolio-thumb-01-alt"),
        }}
        thirdThumb={{
          imageUrl: t("about-portfolio-thumb-03-url"),
          imageAlt: t("about-portfolio-thumb-01-alt"),
        }}
      />

      <SectionHeader
        title={t("about-portfolio-texts-title")}
        subTitle={t("about-portfolio-texts-subtitle")}
        titleTag="h3"
      />

      <Button
        type="secondary"
        label={t("about-portfolio-texts-button")}
        link={t("about-portfolio-texts-button-link")}
      />
    </div>
  );
}

export { CallToPortfolioSection };
