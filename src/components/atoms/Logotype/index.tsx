import React from "react";
import Link from "next/link";

// import { Link } from "@/i18n/routing";

function Logotype() {
  return (
    <Link href="/" className="flex items-center justify-start">
      <h2 className="font-semibold text-xl text-text-02 dark:text-text-07 md:text-2xl">
        Vini Siqueira
      </h2>
    </Link>
  );
}

export { Logotype };
