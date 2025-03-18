import { useTranslations } from "next-intl";

import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Button } from "@/components/atoms/Button";

export default function NotFoundPage() {
  const t = useTranslations();

  return (
    <div className="flex-1 bg-light-gradient-003 dark:bg-dark-gradient-003 pt-20">
      <section className="flex flex-col items-center justify-center gap-10 w-full h-auto max-w-screen-xl mx-auto px-4 py-40">
        <div className="flex items-center justify-center w-auto h-auto p-4 rounded-[2rem] border border-light-neutral-400 dark:border-dark-neutral-400 bg-light-neutral-000/30 dark:bg-dark-neutral-000/30">
          <div className="flex items-center justify-center w-auto h-auto py-12 px-10 rounded-3xl bg-light-neutral-000 dark:bg-dark-neutral-000">
            <span className="font-heading leading-none font-semibold text-8xl text-center text-light-neutral-600 dark:text-dark-neutral-600">
              404
            </span>
          </div>
        </div>

        <SectionHeader
          title={t("error-texts-title")}
          subTitle={t("error-texts-subtitle")}
          titleTag="h3"
        />

        <div className="flex flex-col items-stretch justify-start gap-2 w-full md:w-auto md:flex-row md:justify-center md:gap-6">
          <Button
            label={t("error-buttons-01-label")}
            link={t("error-buttons-01-link")}
            type="primary"
          />
          <Button
            label={t("error-buttons-02-label")}
            link={t("error-buttons-02-link")}
            type="secondary"
          />
        </div>
      </section>
    </div>
  );
}
