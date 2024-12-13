import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export default async function Providers({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  const messages = await getMessages();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
