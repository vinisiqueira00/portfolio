import { useTranslations } from "next-intl";

import { Certificate } from "@/components/organisms/Certificate";
import { SectionHeader } from "@/components/molecules/SectionHeader";

function CertificatesSection() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-start gap-16 w-full h-auto p-8 rounded-[40px] border border-light-neutral-400 dark:border-dark-neutral-400 bg-light-gradient-002 dark:bg-dark-gradient-002 md:p-20">
      <SectionHeader
        title={t("about-certificates-texts-title")}
        subTitle={t("about-certificates-texts-subtitle")}
        titleTag="h3"
      />

      <div className="relative flex flex-row items-stretch justify-start gap-2 w-full overflow-x-scroll rounded-3xl">
        <Certificate
          imageUrl={t("about-certificates-01-image")}
          imageAlt={t("about-certificates-01-alt")}
          timeline={{
            label: t("about-certificates-01-label"),
            beforeLine: false,
            afterLine: true,
          }}
        />

        <Certificate
          imageUrl={t("about-certificates-02-image")}
          imageAlt={t("about-certificates-02-alt")}
          timeline={{
            label: t("about-certificates-02-label"),
            beforeLine: true,
            afterLine: true,
          }}
        />

        <Certificate
          imageUrl={t("about-certificates-03-image")}
          imageAlt={t("about-certificates-03-alt")}
          timeline={{
            label: t("about-certificates-03-label"),
            beforeLine: true,
            afterLine: true,
          }}
        />

        <Certificate
          imageUrl={t("about-certificates-04-image")}
          imageAlt={t("about-certificates-04-alt")}
          timeline={{
            label: t("about-certificates-04-label"),
            beforeLine: true,
            afterLine: true,
          }}
        />

        <Certificate
          imageUrl={t("about-certificates-05-image")}
          imageAlt={t("about-certificates-05-alt")}
          timeline={{
            label: t("about-certificates-05-label"),
            beforeLine: true,
            afterLine: false,
          }}
        />
      </div>
    </div>
  );
}

export { CertificatesSection };
