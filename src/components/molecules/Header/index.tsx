"use client";

import { List } from "lucide-react";
import { useTranslations } from "next-intl";

import { useNavbarStore } from "@/stores/NavbarStore";

import { Logotype } from "@/components/atoms/Logotype";
import { LocaleSwitcher } from "@/components/atoms/LocaleSwitcher";
import { ThemeSwitcher } from "@/components/atoms/ThemeSwitcher";
import { MenuLink } from "@/components/atoms/MenuLink";
import { ResumeButton } from "@/components/atoms/ResumeButton";
import { MobileNavbar } from "@/components/molecules/MobileNavbar";

function Header() {
  const t = useTranslations();

  const { open } = useNavbarStore();

  return (
    <header className="flex items-center justify-center w-full pt-10">
      <div className="flex items-center justify-between w-full max-w-7xl gap-4 px-6">
        <button onClick={open}>
          <List
            className="text-text-02 md:hidden dark:text-text-07"
            size={20}
            strokeWidth={2}
          />
        </button>

        <Logotype />

        <div className="flex flex-1 items-center justify-end gap-10">
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>
          <div className="hidden md:block">
            <ThemeSwitcher />
          </div>
          <div className="hidden md:block">
            <MenuLink
              href={t("header-menu-item-01-link")}
              label={t("header-menu-item-01-label")}
            />
          </div>
          <div className="hidden md:block">
            <MenuLink
              href={t("header-menu-item-02-link")}
              label={t("header-menu-item-02-label")}
            />
          </div>
          <ResumeButton label={t("header-menu-item-cv")} />
        </div>
      </div>

      <MobileNavbar />
    </header>
  );
}

export { Header };
