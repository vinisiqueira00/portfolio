import { useTranslations } from "next-intl";

import { Certificate } from "@/components/organisms/Certificate";
import { SectionHeader } from "@/components/molecules/SectionHeader";

function CertificatesSection() {
  const t = useTranslations("about-page.certifications");

  return (
    <div className="flex flex-col items-center justify-start gap-16 w-full h-auto p-8 rounded-[40px] border border-light-neutral-400 dark:border-dark-neutral-400 bg-light-gradient-002 dark:bg-dark-gradient-002 md:p-20">
      <SectionHeader
        title={t("title")}
        subTitle={t("subtitle")}
        titleTag="h3"
      />

      <div className="relative flex flex-row items-stretch justify-start gap-2 w-full overflow-x-scroll rounded-3xl">
        <Certificate
          imageUrl={t("certificates.sebrae-2021.image.source")}
          imageAlt={t("certificates.sebrae-2021.image.alt")}
          timeline={{
            label: t("certificates.sebrae-2021.label"),
            beforeLine: false,
            afterLine: true,
          }}
        />

        <Certificate
          imageUrl={t("certificates.sebrae-2022.image.source")}
          imageAlt={t("certificates.sebrae-2022.image.alt")}
          timeline={{
            label: t("certificates.sebrae-2022.label"),
            beforeLine: true,
            afterLine: true,
          }}
        />

        <Certificate
          imageUrl={t("certificates.vtex-2022.image.source")}
          imageAlt={t("certificates.vtex-2022.image.alt")}
          timeline={{
            label: t("certificates.vtex-2022.label"),
            beforeLine: true,
            afterLine: true,
          }}
        />

        <Certificate
          imageUrl={t("certificates.bradesco-2023.image.source")}
          imageAlt={t("certificates.bradesco-2023.image.alt")}
          timeline={{
            label: t("certificates.bradesco-2023.label"),
            beforeLine: true,
            afterLine: true,
          }}
        />

        <Certificate
          imageUrl={t("certificates.vtex-2024.image.source")}
          imageAlt={t("certificates.vtex-2024.image.alt")}
          timeline={{
            label: t("certificates.vtex-2024.label"),
            beforeLine: true,
            afterLine: false,
          }}
        />
      </div>
    </div>
  );
}

export { CertificatesSection };
