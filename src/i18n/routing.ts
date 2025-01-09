import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

import { LANGUAGES } from "@/utils/constants";

export const routing = defineRouting({
  locales: LANGUAGES.LOCALES,

  // Used when no locale matches
  defaultLocale: "pt",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
