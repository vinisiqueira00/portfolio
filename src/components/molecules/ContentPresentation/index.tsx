import { useTranslations } from "next-intl";

import { OccupationDegree } from "@/components/atoms/OccupationDegree";
import { PresentationTitle } from "@/components/atoms/PresentationTitle";
import { OccupationCurrent } from "@/components/atoms/OccupationCurrent";
import { Button } from "@/components/atoms/Button";

function ContentPresentation() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-stretch justify-center gap-6 w-full md:w-auto md:flex-1 md:max-w-[28rem]">
      <div className="flex flex-col items-stretch justify-center">
        <PresentationTitle text={t("presentation-texts-title")} />
      </div>

      <div className="flex flex-col items-stretch justify-center gap-1">
        <OccupationCurrent
          label={t("presentation-texts-occupation-before")}
          value={t("presentation-texts-occupation-after")}
          link={t("presentation-texts-occupation-after-link")}
        />
        <OccupationDegree
          label={t("presentation-texts-academy-before")}
          value={t("presentation-texts-academy-after")}
          link={t("presentation-texts-academy-after-link")}
        />
      </div>

      <div className="flex flex-col items-stretch justify-start gap-2 md:flex-row md:items-center md:gap-6">
        <Button
          label={t("presentation-buttons-01-label")}
          link={t("presentation-buttons-01-link")}
          type="primary"
        />
        <Button
          label={t("presentation-buttons-02-label")}
          link={t("presentation-buttons-02-link")}
          type="secondary"
        />
      </div>
    </div>
  );
}

export { ContentPresentation };
