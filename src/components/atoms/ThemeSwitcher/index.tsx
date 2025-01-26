"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      className="flex items-center justify-center gap-1 py-2 md:p-0 rounded-lg border border-background-01 dark:border-background-13 md:border-0"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      <Sun
        className="text-text-02 dark:text-text-08"
        size={16}
        strokeWidth={2}
      />

      <div className="flex items-center w-10 p-1 rounded-2xl bg-background-01 dark:bg-background-08 justify-start dark:justify-end">
        <i className="w-4 rounded-full aspect-square bg-background-02 dark:bg-background-09" />
      </div>

      <Moon
        className="text-text-01 dark:text-text-07"
        size={16}
        strokeWidth={2}
      />
    </button>
  );
}

export { ThemeSwitcher };
