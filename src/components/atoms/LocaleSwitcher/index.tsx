"use client";

import { useLocale } from "next-intl";
import React, { useTransition } from "react";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/service";

interface LocaleSwitcherProps {
  isMobile?: boolean;
}

function LocaleSwitcher({ isMobile }: LocaleSwitcherProps) {
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  function handleSelectLocale(newLocale: Locale) {
    startTransition(() => setUserLocale(newLocale));
  }

  if (isMobile) {
    return (
      <button
        onClick={() => handleSelectLocale(locale === "pt" ? "en" : "pt")}
        data-pending={isPending}
        className="flex items-center justify-center gap-1 opacity-100 pointer-events-auto data-[pending=true]:opacity-50 data-[pending=true]:pointer-events-none py-2 md:p-0 rounded-2xl border border-background-01 dark:border-background-13 md:border-0"
      >
        <div
          data-active={locale === "pt"}
          className="flex items-center justify-center font-normal text-base text-text-01 dark:text-text-08 data-[active=true]:text-text-02 data-[active=true]:dark:text-text-07"
        >
          PT
        </div>

        <span className="flex items-center justify-center font-normal text-base text-text-01 dark:text-text-08">
          /
        </span>

        <div
          data-active={locale === "en"}
          className="flex items-center justify-center font-normal text-base text-text-01 dark:text-text-08 data-[active=true]:text-text-02 data-[active=true]:dark:text-text-07"
        >
          EN
        </div>
      </button>
    );
  }

  return (
    <div
      data-pending={isPending}
      className="flex items-center justify-center gap-1 py-4 md:p-0 rounded-2xl md:rounded-none border border-light-neutral-400 dark:border-dark-neutral-400 md:border-0 data-[pending=true]:opacity-50 data-[pending=true]:pointer-events-none"
    >
      <button
        onClick={() => handleSelectLocale("pt")}
        data-active={locale === "pt"}
        className="flex items-center justify-center font-normal text-base text-light-neutral-600 dark:text-dark-neutral-600 data-[active=true]:text-light-neutral-900 data-[active=true]:dark:text-dark-neutral-900"
      >
        PT
      </button>

      <span className="flex items-center justify-center font-normal text-base text-light-neutral-600 dark:text-dark-neutral-600">
        /
      </span>

      <button
        onClick={() => handleSelectLocale("en")}
        data-active={locale === "en"}
        className="flex items-center justify-center font-normal text-base text-light-neutral-600 dark:text-dark-neutral-600 data-[active=true]:text-light-neutral-900 data-[active=true]:dark:text-dark-neutral-900"
      >
        EN
      </button>
    </div>
  );
}

export { LocaleSwitcher };
