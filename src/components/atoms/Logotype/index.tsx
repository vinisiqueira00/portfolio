import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { useNavbarStore } from "@/stores/NavbarStore";

function Logotype() {
  const t = useTranslations();

  const { close } = useNavbarStore();

  return (
    <Link
      href="/"
      className="flex items-center justify-start gap-4"
      onClick={close}
    >
      <Image
        src="/logotypes/me.png"
        alt="Little picture for Vini Siqueira"
        width={24}
        height={24}
      />

      <h2 className="font-semibold text-base text-light-neutral-900 dark:text-dark-neutral-900">
        {`${t("header-logotype-firstname")} `}
        <span className="text-light-neutral-600 dark:text-dark-neutral-600">
          {t("header-logotype-lastname")}
        </span>
      </h2>
    </Link>
  );
}

export { Logotype };
