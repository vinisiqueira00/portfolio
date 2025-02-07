"use client";

import { useTranslations } from "next-intl";

import { ImagePresentationImage } from "@/components/atoms/ImagePresentationImage";
import { ImagePresentationContact } from "@/components/atoms/ImagePresentationContact";
import { ImagePresentationLocation } from "@/components/atoms/ImagePresentationLocation";

function ImagePresentation() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-60 h-auto p-3 mr-4 rounded-2xl bg-light-neutral-000/30 dark:bg-dark-neutral-000/30 border border-light-neutral-400 dark:border-dark-neutral-400 origin-bottom-right rotate-3 transition-transform duration-500 ease-out delay-200 hover:rotate-6 hover:delay-0">
      <ImagePresentationImage />

      <div className="flex flex-col items-center justify-center gap-1 w-full h-auto">
        <ImagePresentationContact text={t("presentation-texts-contact")} />
        <ImagePresentationLocation text={t("presentation-texts-location")} />
      </div>
    </div>
  );
}

export { ImagePresentation };
