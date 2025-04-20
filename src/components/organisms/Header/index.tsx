"use client";

import { useTranslations } from "next-intl";

import { Logotype } from "@/components/atoms/Logotype";
import { MenuLink } from "@/components/atoms/MenuLink";
import { ThemeSwitcher } from "@/components/atoms/ThemeSwitcher";
import { LocaleSwitcher } from "@/components/atoms/LocaleSwitcher";
import { MobileNavbar } from "@/components/molecules/MobileNavbar";
import { MobileNavbarTrigger } from "@/components/atoms/MobileNavbarTrigger";
import { MobileNavbarOverlay } from "@/components/atoms/MobileNavbarOverlay";

function Header() {
  const t = useTranslations("header");

  function handleResumeClick() {
    const link = document.createElement("a");
    link.href = t("navbar.resume.link");
    link.download = "vini-siqueira-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <header className="fixed top-0 left-0 right-0 flex flex-col items-center justify-start w-full z-10">
      <div className="absolute flex items-center justify-center w-screen h-auto p-3 z-20">
        <div className="flex flex-col items-stretch justify-start gap-8 w-full px-6 py-4 md:py-6 rounded-2xl bg-light-neutral-000 dark:bg-dark-neutral-000">
          <div className="flex items-center justify-center w-full gap-4">
            <div className="flex flex-1 items-center justify-start">
              <Logotype
                source={t("logotype.source")}
                alt={t("logotype.alt")}
                firstName={t("first-name")}
                lastName={t("last-name")}
              />
            </div>

            <div className="hidden flex-1 items-center justify-center gap-10 md:flex">
              <MenuLink
                href={t("navbar.home.link")}
                label={t("navbar.home.label")}
              />
              <MenuLink
                href={t("navbar.portfolio.link")}
                label={t("navbar.portfolio.label")}
              />
              <MenuLink
                href={t("navbar.about.link")}
                label={t("navbar.about.label")}
              />
              <MenuLink
                onClick={handleResumeClick}
                label={t("navbar.resume.label")}
              />
            </div>

            <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
              <LocaleSwitcher />
              <ThemeSwitcher />
            </div>

            <MobileNavbarTrigger />
          </div>

          <MobileNavbar />
        </div>
      </div>

      <MobileNavbarOverlay />
    </header>
  );
}

export { Header };
