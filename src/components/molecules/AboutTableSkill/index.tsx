import { useTranslations } from "next-intl";

import { AboutSkill } from "@/components/atoms/AboutSkill";

interface AboutTableSkillProps {
  tableId: string;
}

function AboutTableSkill(props: AboutTableSkillProps) {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-stretch justify-start gap-4 w-full md:w-64">
      <span className="font-medium text-xl leading-normal text-left text-light-neutral-900 dark:text-dark-neutral-900">
        {t(`about-skills-table-${props.tableId}-title`)}
      </span>
      <div className="flex flex-col items-stretch justify-start gap-0 rounded-2xl border border-light-neutral-400 dark:border-dark-neutral-400">
        <AboutSkill text={t(`about-skills-table-${props.tableId}-item-01`)} />
        <AboutSkill text={t(`about-skills-table-${props.tableId}-item-02`)} />
        <AboutSkill text={t(`about-skills-table-${props.tableId}-item-03`)} />
        <AboutSkill text={t(`about-skills-table-${props.tableId}-item-04`)} />
        <AboutSkill text={t(`about-skills-table-${props.tableId}-item-05`)} />
        <AboutSkill text={t(`about-skills-table-${props.tableId}-item-06`)} />
      </div>
    </div>
  );
}

export { AboutTableSkill };
