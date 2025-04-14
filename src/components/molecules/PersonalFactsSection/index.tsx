import { useTranslations } from "next-intl";

import { PersonalFactsImage } from "@/components/atoms/PersonalFactsImage";
import { PersonalFactsText } from "@/components/atoms/PersonalFactsText";

function PersonalFactsSection() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-stretch justify-center gap-12 w-full h-auto md:flex-row">
      <PersonalFactsImage
        imageUrl={t("about-personal-facts-image-url")}
        imageAlt={t("about-personal-facts-image-alt")}
      />

      <PersonalFactsText
        title={t("about-personal-facts-texts-title")}
        body={t("about-personal-facts-texts-body")}
      />
    </div>
  );
}

export { PersonalFactsSection };
