import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getLocale } from "next-intl/server";

import "./globals.css";

import Providers from "@/app/providers";

import { Locale } from "@/i18n/config";

import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/molecules/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type CustomMetadata = Record<Locale, Metadata>;

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;

  const metadata: CustomMetadata = {
    pt: {
      title: "Vini Siqueira | Dev front-end sênior",
      description:
        "Meu local onde falo um pouco de mim e que eu já entreguei de resultado",
    },
    en: {
      title: "Vini Siqueira | Sr front-end developer",
      description:
        "My place where I talk a little about myself and what I have already delivered as results",
    },
  };

  return metadata[locale];
}

interface LocaleLayoutProps {
  children: React.ReactNode;
}

export default async function LocaleLayout({ children }: LocaleLayoutProps) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen flex flex-col antialiased bg-background-03 dark:bg-background-02`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPTLPL8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
