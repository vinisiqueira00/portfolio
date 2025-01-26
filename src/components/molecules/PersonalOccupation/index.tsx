import { useTranslations } from "next-intl";

import { OccupationCurrent } from "@/components/atoms/OccupationCurrent";
import { OccupationDegree } from "@/components/atoms/OccupationDegree";
import { OccupationPrevious } from "@/components/atoms/OccupationPrevious";
import { PersonalName } from "@/components/atoms/PersonalName";
import { PersonalProfession } from "@/components/atoms/PersonalProfession";

function PersonalOccupation() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-stretch justify-center gap-6 max-w-md">
      <div className="flex flex-col items-stretch justify-center gap-2">
        <PersonalName text={t("home-presentation-name")} />
        <PersonalProfession
          textBefore={t("home-presentation-occupation-before")}
          textContent={t("home-presentation-occupation-content")}
          textAfter={t("home-presentation-occupation-after")}
        />
      </div>
      <div className="flex flex-col items-stretch justify-center gap-1">
        <OccupationCurrent
          label={t("home-presentation-occupation-current-label")}
          value={t("home-presentation-occupation-current-value")}
        />

        <OccupationPrevious
          texts={[
            {
              label: t("home-presentation-occupation-previous-label-01"),
              value: t("home-presentation-occupation-previous-value-01"),
              href: t("home-presentation-occupation-previous-link-01"),
            },
            {
              label: t("home-presentation-occupation-previous-label-02"),
              value: t("home-presentation-occupation-previous-value-02"),
              href: t("home-presentation-occupation-previous-link-02"),
            },
          ]}
        />
        <OccupationDegree
          label={t("home-presentation-occupation-study-label")}
          value={t("home-presentation-occupation-study-value")}
        />
      </div>
    </div>
  );
}

export { PersonalOccupation };
