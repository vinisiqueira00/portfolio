"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useNavbarStore } from "@/stores/NavbarStore";

interface MenuLinkProps {
  href: string;
  label: string;
}

function MenuLink({ href, label }: MenuLinkProps) {
  const pathname = usePathname();

  const { close } = useNavbarStore();

  return (
    <Link
      href={href}
      data-active={pathname === href}
      className="text-left leading-none font-normal text-xl w-full py-4 border-b last:border-0 border-light-neutral-400 dark:border-dark-neutral-400 text-light-neutral-600 dark:text-dark-neutral-600 data-[active=true]:font-bold data-[active=true]:text-light-neutral-900 dark:data-[active=true]:text-dark-neutral-900 md:w-auto md:py-0 md:border-0 md:text-base md:hover:text-light-neutral-900 md:dark:hover:text-dark-neutral-900"
      onClick={close}
    >
      {label}
    </Link>
  );
}

export { MenuLink };
