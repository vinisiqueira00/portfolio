"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function Welcome() {
  const t = useTranslations("Home.Presentation");

  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);
  const [clickAnimationId, setClickAnimationId] = useState<number>(0);

  function handleClickText() {
    if (clickAnimationId === 2) {
      setClickAnimationId(0);
    } else {
      setClickAnimationId(clickAnimationId + 1);
    }
  }

  useEffect(() => setMounted(true), []);

  return (
    <section className="flex items-center justify-center py-40">
      <div className="flex items-center justify-center max-w-5xl gap-16">
        <div className="flex flex-col items-center justify-center gap-3 w-60 h-60 bg-background-03 dark:bg-background-08 rounded-2xl shadow-shadow-01">
          <button
            className="relative flex items-center justify-center px-4 py-1 mb-1 bg-background-01 dark:bg-background-10 rounded-2xl after:content-[''] after:bg-background-01 dark:after:bg-background-10 after:w-4 after:h-4 after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:rotate-45 after:z-0"
            onClick={handleClickText}
          >
            <span className="relative font-medium text-xs text-center text-text-04 dark:text-text-07 z-10">
              {/* before:content-[''] before:absolute before:top-full before:left-1/2 before:w-0 before:border before:border-b-0 before:border-t-[6px] before:border-t-bg-background-01 before:border-l-[6px] before:border-l-transparent before:border-r-[6px] before:border-r-transparent before:-translate-x-1/2 */}
              {clickAnimationId === 0 && t("text-animated-01")}
              {clickAnimationId === 1 && t("text-animated-02")}
              {clickAnimationId === 2 && t("text-animated-03")}
            </span>
          </button>

          {mounted && (
            <Image
              src={
                resolvedTheme === "light"
                  ? clickAnimationId > 0
                    ? "/images/avatar-01b.png"
                    : "/images/avatar-01a.png"
                  : clickAnimationId > 0
                  ? "/images/avatar-02b.png"
                  : "/images/avatar-02a.png"
              }
              alt="My avatar image"
              width={100}
              height={162}
            />
          )}
        </div>

        <div className="flex flex-col items-stretch justify-center gap-6 max-w-md">
          <div className="flex flex-col items-stretch justify-center gap-2">
            <span className="font-bold text-2xl text-text-01 dark:text-text-08">
              {t("name")}
            </span>
            <h2 className="font-semibold text-2xl text-text-02 dark:text-text-07">
              {t("occupation-before")}{" "}
              <span className="bg-background-gradient-01 inline-block font-bold text-transparent bg-clip-text">
                {t("occupation-content")}
              </span>{" "}
              {t("occupation-after")}
            </h2>
          </div>
          <div className="flex flex-col items-stretch justify-center gap-1">
            <p className="inline font-normal text-base text-text-01 dark:text-text-08">
              {t("occupation-current-label")}{" "}
              <Link
                href="https://cadastra.com/pt-br"
                target="_blank"
                className="inline-flex items-center justify-center text-text-02 dark:text-text-07 font-medium"
              >
                {t("occupation-current-value")}{" "}
                <ArrowUpRight size={16} strokeWidth={2} />
              </Link>
            </p>
            <p className="inline font-normal text-base text-text-01 dark:text-text-08">
              {t("occupation-previous-label-01")}{" "}
              <Link
                href="https://www.friweb.com.br/"
                target="_blank"
                className="inline-flex items-center justify-center text-text-02 dark:text-text-07 font-medium"
              >
                {t("occupation-previous-value-01")}{" "}
                <ArrowUpRight size={16} strokeWidth={2} />
              </Link>{" "}
              {t("occupation-previous-label-02")}{" "}
              <Link
                href={"#"}
                target="_blank"
                className="inline-flex items-center justify-center text-text-02 dark:text-text-07 font-medium"
              >
                {t("occupation-previous-value-02")}{" "}
                <ArrowUpRight size={16} strokeWidth={2} />
              </Link>
            </p>
            <p className="inline font-normal text-base text-text-01 dark:text-text-08">
              {t("occupation-study-label")}{" "}
              <Link
                href="https://www.cefet-rj.br/"
                target="_blank"
                className="inline-flex items-center justify-center text-text-02 dark:text-text-07 font-medium"
              >
                {t("occupation-study-value")}{" "}
                <ArrowUpRight size={16} strokeWidth={2} />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
