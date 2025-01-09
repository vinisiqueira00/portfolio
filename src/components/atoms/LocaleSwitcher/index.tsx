"use client";

import React from "react";

import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";

function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-1">
      <Link
        href={pathname}
        locale="en"
        data-active={locale === "en"}
        className="flex items-center justify-center font-normal text-base text-text-01 dark:text-text-08 data-[active=true]:text-text-02 data-[active=true]:dark:text-text-07"
      >
        EN
      </Link>

      <span className="flex items-center justify-center font-normal text-base text-text-01 dark:text-text-08">
        /
      </span>

      <Link
        href={pathname}
        locale="pt"
        data-active={locale === "pt"}
        className="flex items-center justify-center font-normal text-base text-text-01 dark:text-text-08 data-[active=true]:text-text-02 data-[active=true]:dark:text-text-07"
      >
        PT
      </Link>
    </div>
  );
}

export { LocaleSwitcher };
