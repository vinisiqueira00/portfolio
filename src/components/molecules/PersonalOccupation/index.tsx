import { useTranslations } from "next-intl";

import { OccupationCurrent } from "@/components/atoms/OccupationCurrent";
import { OccupationDegree } from "@/components/atoms/OccupationDegree";
import { OccupationPrevious } from "@/components/atoms/OccupationPrevious";
import { PersonalName } from "@/components/atoms/PersonalName";
import { PersonalProfession } from "@/components/atoms/PersonalProfession";

function PersonalOccupation() {
  const t = useTranslations("Home.Presentation");

  return (
    <div className="flex flex-col items-stretch justify-center gap-6 max-w-md">
      <div className="flex flex-col items-stretch justify-center gap-2">
        <PersonalName text={t("name")} />
        <PersonalProfession
          textBefore={t("occupation-before")}
          textContent={t("occupation-content")}
          textAfter={t("occupation-after")}
        />
      </div>
      <div className="flex flex-col items-stretch justify-center gap-1">
        <OccupationCurrent
          label={t("occupation-current-label")}
          value={t("occupation-current-value")}
        />

        <OccupationPrevious
          texts={[
            {
              label: t("occupation-previous-label-01"),
              value: t("occupation-previous-value-01"),
            },
            {
              label: t("occupation-previous-label-02"),
              value: t("occupation-previous-value-02"),
            },
          ]}
        />
        <OccupationDegree
          label={t("occupation-study-label")}
          value={t("occupation-study-value")}
        />
      </div>
    </div>
  );
}

export { PersonalOccupation };
