"use server";

import { cookies } from "next/headers";

import { Locale, defaultLocale } from "@/i18n/config";

const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
  const cookieList = await cookies();
  return cookieList.get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  const cookieList = await cookies();
  cookieList.set(COOKIE_NAME, locale);
}
