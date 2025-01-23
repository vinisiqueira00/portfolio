import { List } from "lucide-react";
import { useTranslations } from "next-intl";

import { Logotype } from "@/components/atoms/Logotype";
import { LocaleSwitcher } from "@/components/atoms/LocaleSwitcher";
import { ThemeSwitcher } from "@/components/atoms/ThemeSwitcher";
import { MenuLink } from "@/components/atoms/MenuLink";
import { ResumeButton } from "@/components/atoms/ResumeButton";

function Header() {
  const t = useTranslations("Header");

  return (
    <header className="flex items-center justify-center w-full pt-10">
      <div className="flex items-center justify-between w-full max-w-7xl gap-4 px-6">
        <List
          className="text-text-02 md:hidden dark:text-text-07"
          size={20}
          strokeWidth={2}
        />

        <Logotype />

        <div className="flex flex-1 items-center justify-end gap-10">
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>
          <div className="hidden md:block">
            <ThemeSwitcher />
          </div>
          <div className="hidden md:block">
            <MenuLink href="/" label={t("menu-item-initial")} />
          </div>
          <div className="hidden md:block">
            <MenuLink href="/about" label={t("menu-item-about")} />
          </div>
          <ResumeButton label={t("menu-item-cv")} />
        </div>
      </div>
    </header>
  );
}

export { Header };
