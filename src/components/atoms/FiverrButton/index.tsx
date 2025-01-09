"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

function FiverrButton() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>;

  return (
    <button className="flex items-center justify-center w-auto h-8 px-4 font-normal text-base bg-background-02 dark:bg-background-09 rounded-full">
      <Image
        src={`/logotypes/fiverr-${resolvedTheme ?? "light"}.png`}
        alt="fiverr logotype"
        width={47}
        height={14}
      />
    </button>
  );
}

export { FiverrButton };
