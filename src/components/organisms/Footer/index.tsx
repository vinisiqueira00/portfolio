import { useTranslations } from "next-intl";

import { Copyright } from "@/components/atoms/Copyright";
import { SocialGroup } from "@/components/atoms/SocialGroup";
import { ContactForm } from "@/components/molecules/ContactForm";
import { SectionHeader } from "@/components/molecules/SectionHeader";

function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="flex flex-col items-center justify-center rounded-t-[64px] pt-20 pb-4 border border-light-neutral-400 dark:border-dark-neutral-400 bg-light-gradient-002 dark:bg-dark-gradient-002 z-0">
      <div className="flex flex-col items-stretch justify-end gap-16 w-full max-w-5xl px-4 md:gap-24">
        <div className="flex flex-col items-center justify-end gap-12">
          <SectionHeader
            title={t("contact.title")}
            subTitle={t("contact.subtitle")}
            titleTag="h3"
          />

          <ContactForm />
        </div>

        <div className="flex flex-col items-stretch justify-between gap-16 w-full h-auto md:flex-row md:items-center">
          <SocialGroup
            title={t("social.title")}
            linkedin={{
              label: t("social.links.linkedin.label"),
              link: t("social.links.linkedin.link"),
            }}
            github={{
              label: t("social.links.github.label"),
              link: t("social.links.github.link"),
            }}
            instagram={{
              label: t("social.links.instagram.label"),
              link: t("social.links.instagram.link"),
            }}
          />

          <Copyright text={t("copyright")} />
        </div>
      </div>
    </footer>
  );
}

export { Footer };
