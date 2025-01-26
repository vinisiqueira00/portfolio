import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { ErrorPageTitle } from "@/components/atoms/ErrorPageTitle";
import { ErrorPageSubtitle } from "@/components/atoms/ErrorPageSubtitle";
import { ErrorPageDescription } from "@/components/atoms/ErrorPageDescription";

function ErrorPageTexts() {
  const t = useTranslations();

  const title: string = useMemo(() => {
    return t("not-found-title");
  }, [t]);

  const subtitle: string = useMemo(() => {
    return t("not-found-subtitle");
  }, [t]);

  const descriptions: [string, string, string] = useMemo(() => {
    return [
      t("not-found-description-01"),
      t("not-found-description-02"),
      t("not-found-description-03"),
    ];
  }, [t]);

  return (
    <div className="flex flex-col items-start justify-center gap-2 w-full">
      <ErrorPageTitle text={title} />
      <ErrorPageSubtitle text={subtitle} />
      <ErrorPageDescription texts={descriptions} />
    </div>
  );
}

export { ErrorPageTexts };
