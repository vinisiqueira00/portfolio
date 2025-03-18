"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import * as motion from "motion/react-client";

function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      className="flex items-center justify-center gap-1 py-4 md:p-0 rounded-2xl md:rounded-none border border-light-neutral-400 dark:border-dark-neutral-400 md:border-0"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun
        className="text-light-neutral-900 dark:text-dark-neutral-600"
        size={16}
        strokeWidth={2}
      />

      <div className="flex items-center justify-start dark:justify-end w-10 h-auto p-1 rounded-2xl bg-light-neutral-400 dark:bg-dark-neutral-400">
        <motion.div
          className="w-4 h-4 rounded-full aspect-square bg-light-neutral-900 dark:bg-dark-neutral-900"
          layout
          transition={{
            type: "spring",
            visualDuration: 0.2,
            bounce: 0.2,
          }}
        />
      </div>

      <Moon
        className="text-light-neutral-600 dark:text-dark-neutral-900"
        size={16}
        strokeWidth={2}
      />
    </button>
  );
}

export { ThemeSwitcher };
