"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import { Link, usePathname } from "@/i18n/routing";

interface MenuLinkProps {
  href: string;
  label: string;
}

function MenuLink({ href, label }: MenuLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      data-active={pathname === href}
      className="flex items-center justify-center font-normal text-base text-text-01 dark:text-text-08 data-[active=true]:text-text-02 dark:data-[active=true]:text-text-07"
    >
      {label}
    </Link>
  );
}

export { MenuLink };
