import { useTranslations } from "next-intl";

import { Button } from "@/components/atoms/Button";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { CallToPortfolioThumbGroup } from "@/components/molecules/CallToPortfolioThumbGroup";

function CallToPortfolioSection() {
  const t = useTranslations("portfolio-section");

  return (
    <div className="flex flex-col items-center justify-start gap-12 w-full h-auto">
      <CallToPortfolioThumbGroup
        thumbs={[
          {
            url: t("thumbnails.crypto-rsa.source"),
            alt: t("thumbnails.crypto-rsa.alt"),
          },
          {
            url: t("thumbnails.gshop-integration.source"),
            alt: t("thumbnails.gshop-integration.alt"),
          },
          {
            url: t("thumbnails.redesign-rave.source"),
            alt: t("thumbnails.redesign-rave.alt"),
          },
        ]}
      />

      <SectionHeader
        title={t("title")}
        subTitle={t("subtitle")}
        titleTag="h3"
      />

      <Button
        label={t("button.label")}
        link={t("button.link")}
        type="secondary"
      />
    </div>
  );
}

export { CallToPortfolioSection };
