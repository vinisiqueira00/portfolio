import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { Locale } from "@/i18n/config";

type CustomMetadata = Record<Locale, Metadata>;

async function generateMetadata() {
  const locale = (await getLocale()) as Locale;

  const metadata: CustomMetadata = {
    pt: {
      title: "Vini Siqueira - Front-end sênior",
      description:
        "Meu local onde falo um pouco de mim e que eu já entreguei de resultado",
      icons: [
        {
          rel: "icon",
          type: "image/ico",
          sizes: "16x16",
          url: "/favicon/favicon-16x16.ico",
        },
        {
          rel: "icon",
          type: "image/ico",
          sizes: "32x32",
          url: "/favicon/favicon-32x32.ico",
        },
        {
          rel: "icon",
          type: "image/ico",
          sizes: "96x96",
          url: "/favicon/favicon-96x96.ico",
        },
        {
          rel: "icon",
          type: "image/ico",
          sizes: "128x128",
          url: "/favicon/favicon-128x128.ico",
        },
        {
          rel: "icon",
          type: "image/ico",
          sizes: "196x196",
          url: "/favicon/favicon-196x196.ico",
        },
      ],
    },
    en: {
      title: "Vini Siqueira - Sr front-end developer",
      description:
        "My place where I talk a little about myself and what I have already delivered as results",
      icons: [
        {
          rel: "icon",
          type: "image/ico",
          sizes: "16x16",
          url: "/favicon/favicon-16x16.ico",
        },
        {
          rel: "icon",
          type: "image/ico",
          sizes: "32x32",
          url: "/favicon/favicon-32x32.ico",
        },
        {
          rel: "icon",
          type: "image/ico",
          sizes: "96x96",
          url: "/favicon/favicon-96x96.ico",
        },
        {
          rel: "icon",
          type: "image/ico",
          sizes: "128x128",
          url: "/favicon/favicon-128x128.ico",
        },
        {
          rel: "icon",
          type: "image/ico",
          sizes: "196x196",
          url: "/favicon/favicon-196x196.ico",
        },
      ],
    },
  };

  return metadata[locale];
}
export { generateMetadata };
