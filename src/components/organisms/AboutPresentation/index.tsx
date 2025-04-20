import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionHeader } from "@/components/molecules/SectionHeader";

function AboutPresentation() {
  const t = useTranslations("about-page.presentation");

  return (
    <>
      <div className="relative block w-80 h-64 rounded-[32px] overflow-hidden translate-y-4 md:translate-y-0 md:translate-x-3 md:h-72">
        <Image
          className="object-cover"
          src={t("image.source")}
          alt={t("image.alt")}
          fill
        />
      </div>

      <div className="flex items-center justify-center p-4 rounded-[32px] border border-light-neutral-400 dark:border-dark-neutral-400 bg-light-neutral-000/30 dark:bg-dark-neutral-000/30 -translate-y-4 md:translate-y-0 md:-translate-x-3">
        <div className="flex items-center justify-center p-4 rounded-3xl bg-light-neutral-000 dark:bg-dark-neutral-000 md:p-6">
          <SectionHeader
            title={t("title")}
            subTitle={t("subtitle")}
            titleTag="h3"
          />
        </div>
      </div>
    </>
  );
}

export { AboutPresentation };
