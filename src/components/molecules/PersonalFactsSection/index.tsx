import { useTranslations } from "next-intl";

import { PersonalFactsImage } from "@/components/atoms/PersonalFactsImage";
import { PersonalFactsText } from "@/components/atoms/PersonalFactsText";

function PersonalFactsSection() {
  const t = useTranslations("about-page.personal-facts");

  return (
    <div className="flex flex-col items-stretch justify-center gap-12 w-full h-auto md:flex-row">
      <PersonalFactsImage src={t("image.source")} alt={t("image.alt")} />
      <PersonalFactsText title={t("title")} body={t("text")} />
    </div>
  );
}

export { PersonalFactsSection };
