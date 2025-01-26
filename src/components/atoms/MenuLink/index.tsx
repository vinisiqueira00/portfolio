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

  function handleLinkClick() {
    close();
  }

  return (
    <Link
      href={href}
      data-active={pathname === href}
      className="flex items-center justify-center leading-none font-normal text-base text-text-02 dark:text-text-07 data-[active=true]:font-bold md:text-text-01 md:dark:text-text-08 md:data-[active=true]:text-text-02 md:data-[active=true]:dark:text-text-07 md:data-[active=true]:font-normal"
      onClick={handleLinkClick}
    >
      {label}
    </Link>
  );
}

export { MenuLink };
