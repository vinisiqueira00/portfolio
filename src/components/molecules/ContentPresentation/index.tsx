import { useTranslations } from "next-intl";

import { OccupationDegree } from "@/components/atoms/OccupationDegree";
import { PresentationTitle } from "@/components/atoms/PresentationTitle";
import { OccupationCurrent } from "@/components/atoms/OccupationCurrent";
import { Button } from "@/components/atoms/Button";

function ContentPresentation() {
  const t = useTranslations("home-page.presentation");

  return (
    <div className="flex flex-col items-stretch justify-center gap-6 w-full md:w-auto md:flex-1 md:max-w-[28rem]">
      <div className="flex flex-col items-stretch justify-center">
        <PresentationTitle text={t("title")} />
      </div>

      <div className="flex flex-col items-stretch justify-center gap-1">
        <OccupationCurrent
          label={t("occupation.text")}
          value={t("occupation.link.label")}
          link={t("occupation.link.link")}
        />
        <OccupationDegree
          label={t("academy.text")}
          value={t("academy.link.label")}
          link={t("academy.link.link")}
        />
      </div>

      <div className="flex flex-col items-stretch justify-start gap-2 md:flex-row md:items-center md:gap-6">
        <Button
          label={t("buttons.contact.label")}
          link={t("buttons.contact.link")}
          type="primary"
        />
        <Button
          label={t("buttons.portfolio.label")}
          link={t("buttons.portfolio.label")}
          type="secondary"
        />
      </div>
    </div>
  );
}

export { ContentPresentation };
