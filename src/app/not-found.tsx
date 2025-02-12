import { ErrorPageCode } from "@/components/atoms/ErrorPageCode";
import { ErrorPageButton } from "@/components/atoms/ErrorPageButton";
import { ErrorPageTexts } from "@/components/molecules/ErrorPageTexts";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function NotFoundPage() {
  const t = useTranslations();

  const buttonText = useMemo(() => t("not-found-button-text"), [t]);

  return (
    <section className="flex-1 flex items-center justify-center">
      <div className="flex flex-col items-start justify-center w-full max-w-5xl gap-8 px-4">
        <ErrorPageCode />
        <ErrorPageTexts />
        <ErrorPageButton href="/" text={buttonText} />
      </div>
    </section>
  );
}
