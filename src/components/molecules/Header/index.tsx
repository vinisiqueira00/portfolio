import { useTranslations } from "next-intl";

import { Logotype } from "@/components/atoms/Logotype";
import { LocaleSwitcher } from "@/components/atoms/LocaleSwitcher";
import { ThemeSwitcher } from "@/components/atoms/ThemeSwitcher";
import { MenuLink } from "@/components/atoms/MenuLink";
import { FiverrButton } from "@/components/atoms/FiverrButton";
import { ResumeButton } from "@/components/atoms/ResumeButton";

function Header() {
  const t = useTranslations("Header");

  return (
    <header className="flex items-center justify-center w-full pt-10">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <Logotype />

        <div className="flex items-center justify-end gap-10">
          <LocaleSwitcher />
          <ThemeSwitcher />
          <MenuLink href="/" label={t("menu-item-initial")} />
          <MenuLink href="/about" label={t("menu-item-about")} />
          <FiverrButton />
          <ResumeButton label={t("menu-item-cv")} />
        </div>
      </div>
    </header>
  );
}

export { Header };
