"use client";

import { useLocale } from "next-intl";
import React, { useTransition } from "react";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/service";

function LocaleSwitcher() {
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  function handleSelectLocale(newLocale: Locale) {
    startTransition(() => setUserLocale(newLocale));
  }

  return (
    <div
      data-pending={isPending}
      className="flex items-center justify-center gap-1 opacity-100 pointer-events-auto data-[pending=true]:opacity-50 data-[pending=true]:pointer-events-none"
    >
      <button
        onClick={() => handleSelectLocale("pt")}
        data-active={locale === "pt"}
        className="flex items-center justify-center font-normal text-base text-text-01 dark:text-text-08 data-[active=true]:text-text-02 data-[active=true]:dark:text-text-07"
      >
        PT
      </button>

      <span className="flex items-center justify-center font-normal text-base text-text-01 dark:text-text-08">
        /
      </span>

      <button
        onClick={() => handleSelectLocale("en")}
        data-active={locale === "en"}
        className="flex items-center justify-center font-normal text-base text-text-01 dark:text-text-08 data-[active=true]:text-text-02 data-[active=true]:dark:text-text-07"
      >
        EN
      </button>
    </div>
  );
}

export { LocaleSwitcher };
