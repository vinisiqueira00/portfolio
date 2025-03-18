"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useNavbarStore } from "@/stores/NavbarStore";

type DynamicLink = {
  href: string;
  label: string;
};

type DynamicButton = {
  onClick: () => void;
  label: string;
};

type MenuLinkProps = DynamicLink | DynamicButton;

function MenuLink({ label, ...props }: MenuLinkProps) {
  const pathname = usePathname();

  const { close } = useNavbarStore();

  if ("href" in props) {
    return (
      <Link
        href={props.href}
        data-active={pathname === props.href}
        className="text-left leading-none font-normal text-xl w-full py-4 border-b last:border-0 border-light-neutral-400 dark:border-dark-neutral-400 text-light-neutral-600 dark:text-dark-neutral-600 data-[active=true]:font-bold data-[active=true]:text-light-neutral-900 dark:data-[active=true]:text-dark-neutral-900 md:w-auto md:py-0 md:border-0 md:text-base md:hover:text-light-neutral-900 md:dark:hover:text-dark-neutral-900"
        onClick={close}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        props.onClick();
        close();
      }}
      className="border-none bg-transparent text-left leading-none font-normal text-xl w-full py-4 border-b last:border-0 border-light-neutral-400 dark:border-dark-neutral-400 text-light-neutral-600 dark:text-dark-neutral-600 md:w-auto md:py-0 md:border-0 md:text-base md:hover:text-light-neutral-900 md:dark:hover:text-dark-neutral-900"
    >
      {label}
    </button>
  );
}

export { MenuLink };
