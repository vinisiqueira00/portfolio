import { useTranslations } from "next-intl";

import { Button } from "@/components/atoms/Button";

function SocialGroup() {
  const t = useTranslations("");

  return (
    <div className="flex flex-col items-stretch justify-end gap-4">
      <span className="font-heading text-center text-base leading-normal font-normal text-light-neutral-900 dark:text-dark-neutral-900">
        {t("social-title")}
      </span>
      <div className="flex items-center justify-center flex-wrap gap-4">
        <Button
          label={t("social-01-label")}
          link={t("social-01-link")}
          type="secondary"
          target="_blank"
        />
        <Button
          label={t("social-02-label")}
          link={t("social-02-link")}
          type="secondary"
          target="_blank"
        />
        <Button
          label={t("social-03-label")}
          link={t("social-03-link")}
          type="secondary"
          target="_blank"
        />
      </div>
    </div>
  );
}

export { SocialGroup };
