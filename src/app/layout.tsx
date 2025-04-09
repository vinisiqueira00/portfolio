import { getLocale } from "next-intl/server";
import { Bricolage_Grotesque, Lato } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

import { keys } from "@/config/keys";
import { generateMetadata } from "@/config/metadata";

import Providers from "@/app/providers";

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

export { generateMetadata };

interface LocaleLayoutProps {
  children: React.ReactNode;
}

export default async function LocaleLayout({ children }: LocaleLayoutProps) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <GoogleTagManager gtmId={keys.GOOGLE_TAG_MANAGER} />

      <body
        className={`${lato.variable} ${bricolageGrotesque.variable} flex flex-col antialiased min-h-screen bg-light-neutral-000 dark:bg-dark-neutral-000 text-light-neutral-900 dark:text-dark-neutral-900`}
      >
        <Providers>
          <div className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none z-0 w-full h-auto bg-light-gradient-003 dark:bg-dark-gradient-003" />

          <Header />

          <main className="z-0 pt-20 flex-1">{children}</main>

          <Footer />

          <FollowPointer />
        </Providers>
      </body>
    </html>
  );
}
