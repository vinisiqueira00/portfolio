import { useTranslations } from "next-intl";

function Catchphrase() {
  const t = useTranslations("home-page");

  return (
    <div className="flex items-center justify-center w-full max-w-screen-xl px-4">
      <p className="w-full whitespace-normal font-heading text-center text-3xl font-medium text-light-neutral-900 dark:text-dark-neutral-900 md:text-5xl md:whitespace-pre-line !leading-normal">
        {t("catchphrase")}
      </p>
    </div>
  );
}

export { Catchphrase };
