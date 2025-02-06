import type { Metadata } from "next";
import { Bricolage_Grotesque, Lato } from "next/font/google";
import { getLocale } from "next-intl/server";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

import Providers from "@/app/providers";

import { Locale } from "@/i18n/config";

import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { FollowPointer } from "@/components/atoms/FollowPointer";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage-grotesque",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

type CustomMetadata = Record<Locale, Metadata>;

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;

  const metadata: CustomMetadata = {
    pt: {
      title: "Vini Siqueira - Front-end sênior",
      description:
        "Meu local onde falo um pouco de mim e que eu já entreguei de resultado",
    },
    en: {
      title: "Vini Siqueira - Sr front-end developer",
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
      <GoogleTagManager gtmId="GTM-KPTLPL8" />

      <body
        className={`${lato.variable} ${bricolageGrotesque.variable} flex flex-col antialiased min-h-screen bg-light-neutral-000 dark:bg-dark-neutral-000 text-light-neutral-900 dark:text-dark-neutral-900`}
      >
        <Providers>
          {children}

          <FollowPointer />
          <Header />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
