import { useTranslations } from "next-intl";

import { SocialLink } from "@/components/atoms/SocialLink";
import { FooterCTA } from "@/components/atoms/FooterCTA";
import { CopyToClipboard } from "@/components/atoms/CopyToClipboard";
import { Copyright } from "@/components/atoms/Copyright";

function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="flex items-center justify-center pt-24 pb-4">
      <div className="flex flex-col items-stretch justify-between w-full max-w-5xl px-6 md:flex-row gap-6 md:gap-0">
        <div className="flex flex-col items-start justify-between gap-4 md:gap-0">
          <FooterCTA text={t("text-contact")} />

          <div className="flex items-center justify-start gap-4">
            <SocialLink
              href="https://github.com/vinisiqueira00"
              src="/icons/github.svg"
              alt="Github Icon"
            />
            <SocialLink
              href="https://www.linkedin.com/in/vinisiqueira00"
              src="/icons/linkedin.svg"
              alt="Linkedin Icon"
            />
            <SocialLink
              href="https://www.instagram.com/vinisiqueira00"
              src="/icons/instagram.svg"
              alt="Instagram Icon"
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-end gap-5 md:items-end md:gap-4">
          <div className="flex flex-col items-start justify-end gap-1 md:items-end">
            <CopyToClipboard text={t("data-phone")} />
            <CopyToClipboard text={t("data-email")} />
          </div>

          <Copyright text={t("text-copyright")} />
        </div>
      </div>
    </footer>
  );
}

export { Footer };
