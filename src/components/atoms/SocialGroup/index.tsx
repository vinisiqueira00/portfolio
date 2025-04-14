import Link from "next/link";
import { useTranslations } from "next-intl";

function SocialGroup() {
  const t = useTranslations("");

  return (
    <div className="flex items-center justify-center gap-4 md:justify-start">
      <span className="font-heading text-left text-base leading-normal font-medium text-light-neutral-900 dark:text-dark-neutral-900">
        {t("social-title")}
      </span>
      <Link
        className="font-body text-left text-base leading-normal font-normal text-light-neutral-600 dark:text-dark-neutral-600"
        href={t("social-01-link")}
        target="_blank"
      >
        {t("social-01-label")}
      </Link>
      <Link
        className="font-body text-left text-base leading-normal font-normal text-light-neutral-600 dark:text-dark-neutral-600"
        href={t("social-02-link")}
        target="_blank"
      >
        {t("social-02-label")}
      </Link>
      <Link
        className="font-body text-left text-base leading-normal font-normal text-light-neutral-600 dark:text-dark-neutral-600"
        href={t("social-03-link")}
        target="_blank"
      >
        {t("social-03-label")}
      </Link>
    </div>
  );
}

export { SocialGroup };
