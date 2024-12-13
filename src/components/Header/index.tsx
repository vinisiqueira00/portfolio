"use client";

// import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations("Header");
  const pathname = usePathname();

  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="flex items-center justify-center w-full pt-10">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center justify-center">
            <h2 className="font-semibold text-2xl text-text-02 dark:text-text-07">
              Vini Siqueira
            </h2>
          </Link>
        </div>

        <div className="flex items-center justify-end gap-10">
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

          <button
            className="flex items-center justify-center gap-1"
            onClick={() => {
              setTheme(resolvedTheme === "dark" ? "light" : "dark");
            }}
          >
            <Sun
              className="text-text-02 dark:text-text-08"
              size={16}
              strokeWidth={2}
            />

            <div className="flex items-center w-10 p-1 rounded-2xl bg-background-01 dark:bg-background-08 justify-start dark:justify-end">
              <i className="w-4 rounded-full aspect-square bg-background-02 dark:bg-background-09" />
            </div>

            <Moon
              className="text-text-01 dark:text-text-07"
              size={16}
              strokeWidth={2}
            />
          </button>

          <Link
            href="/"
            data-active={pathname === "/"}
            className="flex items-center justify-center font-normal text-base text-text-01 dark:text-text-08 data-[active=true]:text-text-02 dark:data-[active=true]:text-text-07"
          >
            {t("menu-item-initial")}
          </Link>

          <Link
            href="/about"
            data-active={pathname === "/about"}
            className="flex items-center justify-center font-normal text-base text-text-01 dark:text-text-08 data-[active=true]:text-text-02 dark:data-[active=true]:text-text-07"
          >
            {t("menu-item-about")}
          </Link>

          {mounted && (
            <button className="flex items-center justify-center w-auto h-8 px-4 font-normal text-base bg-background-02 dark:bg-background-09 rounded-full">
              <Image
                src={
                  resolvedTheme === "light"
                    ? "/logotypes/fiverr-light.png"
                    : "/logotypes/fiverr-dark.png"
                }
                alt="fiverr logotype"
                width={47}
                height={14}
              />
            </button>
          )}

          <button className="flex items-center justify-center w-auto h-8 px-4 font-semibold text-base text-text-03 bg-background-gradient-01 rounded-full">
            {t("menu-item-cv")}
          </button>
        </div>
      </div>
    </header>
  );
}
