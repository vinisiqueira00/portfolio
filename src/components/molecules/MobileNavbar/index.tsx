"use client";

import { useTranslations } from "next-intl";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

import { LocaleSwitcher } from "@/components/atoms/LocaleSwitcher";
import { ThemeSwitcher } from "@/components/atoms/ThemeSwitcher";
import { MenuLink } from "@/components/atoms/MenuLink";
import { useNavbarStore } from "@/stores/NavbarStore";

function MobileNavbar() {
  const t = useTranslations();

  const { isOpened } = useNavbarStore();

  return (
    <AnimatePresence>
      {isOpened ? (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col items-stretch justify-start gap-8 w-full h-auto overflow-hidden md:!hidden"
        >
          <div className="grid grid-cols-2 gap-8">
            <LocaleSwitcher isMobile />
            <ThemeSwitcher />
          </div>

          <div className="flex flex-col items-stretch justify-start">
            <MenuLink
              href={t("navbar-item-01-link")}
              label={t("navbar-item-01-label")}
            />
            <MenuLink
              href={t("navbar-item-02-link")}
              label={t("navbar-item-02-label")}
            />
            <MenuLink
              href={t("navbar-item-03-link")}
              label={t("navbar-item-03-label")}
            />
            <MenuLink
              href={t("navbar-item-04-link")}
              label={t("navbar-item-04-label")}
            />
          </div>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}

export { MobileNavbar };
