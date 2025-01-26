"use client";

import { X } from "lucide-react";
import { useTranslations } from "next-intl";

import { useNavbarStore } from "@/stores/NavbarStore";

import { Logotype } from "@/components/atoms/Logotype";
import { LocaleSwitcher } from "@/components/atoms/LocaleSwitcher";
import { ThemeSwitcher } from "@/components/atoms/ThemeSwitcher";
import { MenuLink } from "@/components/atoms/MenuLink";
import { CopyToClipboard } from "@/components/atoms/CopyToClipboard";
import { SocialLink } from "@/components/atoms/SocialLink";

function MobileNavbar() {
  const t = useTranslations();

  const { isOpened, close } = useNavbarStore();

  return (
    <nav
      data-opened={isOpened}
      className="group fixed top-0 left-0 block w-screen h-screen z-50 pointer-events-none data-[opened=true]:pointer-events-auto md:hidden"
    >
      <div
        onClick={() => close()}
        className="fixed top-0 left-0 w-screen h-screen bg-background-03 dark:bg-background-02 opacity-0 pointer-events-none group-data-[opened=true]:opacity-80 group-data-[opened=true]:pointer-events-auto backdrop-blur-md transition-all"
      />

      <div className="fixed top-0 -left-full flex flex-col items-stretch justify-start gap-8 w-5/6 h-screen px-6 py-10 bg-background-03 dark:bg-background-02 group-data-[opened=true]:left-0 transition-all">
        <div className="flex items-center justify-between">
          <Logotype />
          <button onClick={() => close()}>
            <X
              className="text-text-02 dark:text-text-07"
              size={20}
              strokeWidth={2}
            />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <LocaleSwitcher isMobile />
          <ThemeSwitcher />
        </div>

        <div className="flex-1 flex flex-col items-stretch justify-start gap-8">
          <div className="flex flex-col items-start justify-start gap-4">
            <MenuLink
              href={t("header-menu-item-01-link")}
              label={t("header-menu-item-01-label")}
            />
            <MenuLink
              href={t("header-menu-item-02-link")}
              label={t("header-menu-item-02-label")}
            />
          </div>
          <span className="font-normal text-base text-text-01 dark:text-text-08">
            Projetos
          </span>
          <div className="flex flex-col items-start justify-start gap-4">
            <MenuLink
              href={t("projects-project-01-link")}
              label={t("projects-project-01-title")}
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-end gap-1 md:items-end">
          <CopyToClipboard text={t("general-data-phone")} />
          <CopyToClipboard text={t("general-data-email")} />
        </div>

        <div className="flex items-center justify-start gap-4">
          <SocialLink
            href="https://github.com/vinisiqueira00"
            src="/icons/github.svg"
            alt="Github Icon"
          />
          <SocialLink
            href="https://www.linkedin.com/in/vinisiqueira00"
            src="/icons/linkedin.svg"
            alt="Linkedin Icon"
          />
          <SocialLink
            href="https://www.instagram.com/vinisiqueira00"
            src="/icons/instagram.svg"
            alt="Instagram Icon"
          />
        </div>
      </div>
    </nav>
  );
}

export { MobileNavbar };
