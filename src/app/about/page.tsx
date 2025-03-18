import Image from "next/image";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Button } from "@/components/atoms/Button";

export default function About() {
  const t = useTranslations();

  return (
    <div className="flex-1 bg-light-gradient-003 dark:bg-dark-gradient-003 pt-20">
      <section className="flex flex-col items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4 py-32 md:flex-row">
        <div className="relative block w-80 h-64 rounded-[32px] overflow-hidden translate-y-4 md:translate-y-0 md:translate-x-3 md:h-72">
          <Image
            className="object-cover"
            src={t("about-presentation-image")}
            alt="Picture of Vini Siqueira"
            fill
          />
        </div>

        <div className="flex items-center justify-center p-4 rounded-[32px] border border-light-neutral-400 dark:border-dark-neutral-400 bg-light-neutral-000/30 dark:bg-dark-neutral-000/30 -translate-y-4 md:translate-y-0 md:-translate-x-3">
          <div className="flex items-center justify-center p-4 rounded-3xl bg-light-neutral-000 dark:bg-dark-neutral-000 md:p-6">
            <SectionHeader
              title={t("about-presentation-texts-title")}
              subTitle={t("about-presentation-texts-subtitle")}
              titleTag="h3"
            />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center justify-start gap-16 w-full h-auto p-8 rounded-[40px] border border-light-neutral-400 dark:border-dark-neutral-400 bg-light-gradient-002 dark:bg-dark-gradient-002 md:p-20">
          <SectionHeader
            title={t("about-certificates-texts-title")}
            subTitle={t("about-certificates-texts-subtitle")}
            titleTag="h3"
          />

          <div className="relative flex flex-row items-stretch justify-start gap-2 w-full overflow-x-scroll rounded-3xl">
            <div className="flex flex-col items-stretch justify-between w-auto h-auto pt-2">
              <div
                data-has-mark={t("about-certificates.01.label") !== ""}
                className="group relative flex items-center justify-center w-full h-4"
              >
                <div className="block w-full h-1 bg-light-primary-main dark:bg-dark-primary-main group-data-[has-mark=true]:hidden" />

                <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center w-full h-auto group-data-[has-mark=false]:hidden">
                  <div
                    data-is-active={false}
                    className="block min-w-[calc(50%+1rem)] h-1 bg-light-primary-main rounded-e-lg dark:bg-dark-primary-main data-[is-active=false]:opacity-0"
                  />
                  <div
                    data-is-active={true}
                    className="block min-w-[calc(50%+1rem)] h-1 bg-light-primary-main rounded-s-lg dark:bg-dark-primary-main data-[is-active=false]:opacity-0"
                  />
                </div>

                <div className="relative flex items-center justify-center w-full h-4 group-data-[has-mark=false]:hidden">
                  <div className="w-4 h-4 rounded-full bg-light-primary-main dark:bg-dark-primary-main border-0" />
                  <motion.div
                    className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-light-primary-main dark:bg-dark-primary-main"
                    animate={{
                      translateX: ["-50%", "-50%", "-50%", "-50%"],
                      scale: [1, 2, 1, 1],
                      opacity: [1, 0, 0, 1],
                    }}
                    transition={{
                      duration: 0.75,
                      ease: "easeInOut",
                      times: [0, 1, 1, 1],
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </div>
              </div>

              <span className="pt-3 pb-16 font-semibold text-xl text-center text-light-neutral-900 dark:text-dark-neutral-900">
                {t("about-certificates.01.label")}
              </span>

              <div className="relative w-[22rem] h-60 rounded-3xl overflow-hidden">
                <Image
                  className="object-cover"
                  src={t("about-certificates.01.image")}
                  alt=""
                  fill
                />
              </div>
            </div>

            <div className="flex flex-col items-stretch justify-between w-auto h-auto pt-2">
              <div
                data-has-mark={t("about-certificates.02.label") !== ""}
                className="group relative flex items-center justify-center w-full h-4"
              >
                <div className="block w-full h-1 bg-light-primary-main dark:bg-dark-primary-main group-data-[has-mark=true]:hidden" />

                <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center w-full h-auto group-data-[has-mark=false]:hidden">
                  <div
                    data-is-active={true}
                    className="block min-w-[calc(50%+1rem)] h-1 bg-light-primary-main rounded-e-lg dark:bg-dark-primary-main data-[is-active=false]:opacity-0"
                  />
                  <div
                    data-is-active={true}
                    className="block min-w-[calc(50%+1rem)] h-1 bg-light-primary-main rounded-s-lg dark:bg-dark-primary-main data-[is-active=false]:opacity-0"
                  />
                </div>

                <div className="relative flex items-center justify-center w-full h-4 group-data-[has-mark=false]:hidden">
                  <div className="w-4 h-4 rounded-full bg-light-primary-main dark:bg-dark-primary-main border-0" />
                  <motion.div
                    className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-light-primary-main dark:bg-dark-primary-main"
                    animate={{
                      translateX: ["-50%", "-50%", "-50%", "-50%"],
                      scale: [1, 2, 1, 1],
                      opacity: [1, 0, 0, 1],
                    }}
                    transition={{
                      duration: 0.75,
                      ease: "easeInOut",
                      times: [0, 1, 1, 1],
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </div>
              </div>

              <span className="pt-3 pb-16 font-semibold text-xl text-center text-light-neutral-900 dark:text-dark-neutral-900">
                {t("about-certificates.02.label")}
              </span>

              <div className="relative w-[22rem] h-60 rounded-3xl overflow-hidden">
                <Image
                  className="object-cover"
                  src={t("about-certificates.02.image")}
                  alt=""
                  fill
                />
              </div>
            </div>

            <div className="flex flex-col items-stretch justify-between w-auto h-auto pt-2">
              <div
                data-has-mark={t("about-certificates.03.label") !== ""}
                className="group relative flex items-center justify-center w-full h-4"
              >
                <div className="block w-full h-1 bg-light-primary-main dark:bg-dark-primary-main group-data-[has-mark=true]:hidden" />

                <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center w-full h-auto group-data-[has-mark=false]:hidden">
                  <div
                    data-is-active={true}
                    className="block min-w-[calc(50%+1rem)] h-1 bg-light-primary-main rounded-e-lg dark:bg-dark-primary-main data-[is-active=false]:opacity-0"
                  />
                  <div
                    data-is-active={true}
                    className="block min-w-[calc(50%+1rem)] h-1 bg-light-primary-main rounded-s-lg dark:bg-dark-primary-main data-[is-active=false]:opacity-0"
                  />
                </div>

                <div className="relative flex items-center justify-center w-full h-4 group-data-[has-mark=false]:hidden">
                  <div className="w-4 h-4 rounded-full bg-light-primary-main dark:bg-dark-primary-main border-0" />
                  <motion.div
                    className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-light-primary-main dark:bg-dark-primary-main"
                    animate={{
                      translateX: ["-50%", "-50%", "-50%", "-50%"],
                      scale: [1, 2, 1, 1],
                      opacity: [1, 0, 0, 1],
                    }}
                    transition={{
                      duration: 0.75,
                      ease: "easeInOut",
                      times: [0, 1, 1, 1],
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </div>
              </div>

              <span className="pt-3 pb-16 font-semibold text-xl text-center text-light-neutral-900 dark:text-dark-neutral-900">
                {t("about-certificates.03.label")}
              </span>

              <div className="relative w-[22rem] h-60 rounded-3xl overflow-hidden">
                <Image
                  className="object-cover"
                  src={t("about-certificates.03.image")}
                  alt=""
                  fill
                />
              </div>
            </div>

            <div className="flex flex-col items-stretch justify-between w-auto h-auto pt-2">
              <div
                data-has-mark={t("about-certificates.04.label") !== ""}
                className="group relative flex items-center justify-center w-full h-4"
              >
                <div className="block w-full h-1 bg-light-primary-main dark:bg-dark-primary-main group-data-[has-mark=true]:hidden" />

                <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center w-full h-auto group-data-[has-mark=false]:hidden">
                  <div
                    data-is-active={true}
                    className="block min-w-[calc(50%+1rem)] h-1 bg-light-primary-main rounded-e-lg dark:bg-dark-primary-main data-[is-active=false]:opacity-0"
                  />
                  <div
                    data-is-active={true}
                    className="block min-w-[calc(50%+1rem)] h-1 bg-light-primary-main rounded-s-lg dark:bg-dark-primary-main data-[is-active=false]:opacity-0"
                  />
                </div>

                <div className="relative flex items-center justify-center w-full h-4 group-data-[has-mark=false]:hidden">
                  <div className="w-4 h-4 rounded-full bg-light-primary-main dark:bg-dark-primary-main border-0" />
                  <motion.div
                    className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-light-primary-main dark:bg-dark-primary-main"
                    animate={{
                      translateX: ["-50%", "-50%", "-50%", "-50%"],
                      scale: [1, 2, 1, 1],
                      opacity: [1, 0, 0, 1],
                    }}
                    transition={{
                      duration: 0.75,
                      ease: "easeInOut",
                      times: [0, 1, 1, 1],
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </div>
              </div>

              <span className="pt-3 pb-16 font-semibold text-xl text-center text-light-neutral-900 dark:text-dark-neutral-900">
                {t("about-certificates.04.label")}
              </span>

              <div className="relative w-[22rem] h-60 rounded-3xl overflow-hidden">
                <Image
                  className="object-cover"
                  src={t("about-certificates.04.image")}
                  alt=""
                  fill
                />
              </div>
            </div>

            <div className="flex flex-col items-stretch justify-between w-auto h-auto pt-2">
              <div
                data-has-mark={t("about-certificates.05.label") !== ""}
                className="group relative flex items-center justify-center w-full h-4"
              >
                <div className="block w-full h-1 bg-light-primary-main dark:bg-dark-primary-main group-data-[has-mark=true]:hidden" />

                <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center w-full h-auto group-data-[has-mark=false]:hidden">
                  <div
                    data-is-active={true}
                    className="block min-w-[calc(50%+1rem)] h-1 bg-light-primary-main rounded-e-lg dark:bg-dark-primary-main data-[is-active=false]:opacity-0"
                  />
                  <div
                    data-is-active={false}
                    className="block min-w-[calc(50%+1rem)] h-1 bg-light-primary-main rounded-s-lg dark:bg-dark-primary-main data-[is-active=false]:opacity-0"
                  />
                </div>

                <div className="relative flex items-center justify-center w-full h-4 group-data-[has-mark=false]:hidden">
                  <div className="w-4 h-4 rounded-full bg-light-primary-main dark:bg-dark-primary-main border-0" />
                  <motion.div
                    className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-light-primary-main dark:bg-dark-primary-main"
                    animate={{
                      translateX: ["-50%", "-50%", "-50%", "-50%"],
                      scale: [1, 2, 1, 1],
                      opacity: [1, 0, 0, 1],
                    }}
                    transition={{
                      duration: 0.75,
                      ease: "easeInOut",
                      times: [0, 1, 1, 1],
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </div>
              </div>

              <span className="pt-3 pb-16 font-semibold text-xl text-center text-light-neutral-900 dark:text-dark-neutral-900">
                {t("about-certificates.05.label")}
              </span>

              <div className="relative w-[22rem] h-60 rounded-3xl overflow-hidden">
                <Image
                  className="object-cover"
                  src={t("about-certificates.05.image")}
                  alt=""
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center justify-start gap-16 w-full h-auto py-24 md:py-32">
          <SectionHeader
            title={t("about-skills-texts-title")}
            subTitle={t("about-skills-texts-subtitle")}
            titleTag="h3"
          />

          <div className="flex flex-col items-center justify-center gap-8 px-8 w-full md:flex-row md:px-0">
            <div className="flex flex-col items-stretch justify-start gap-4 w-full md:w-64">
              <span className="font-medium text-xl leading-normal text-left text-light-neutral-900 dark:text-dark-neutral-900">
                {t("about-skills-table-01.title")}
              </span>
              <div className="flex flex-col items-stretch justify-start gap-0 rounded-2xl border border-light-neutral-400 dark:border-dark-neutral-400">
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-01.item-01")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-01.item-02")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-01.item-03")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-01.item-04")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-01.item-05")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left text-light-neutral-600 dark:text-dark-neutral-600">
                  {t("about-skills-table-01.item-06")}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-stretch justify-start gap-4 w-full md:w-64">
              <span className="font-medium text-xl leading-normal text-left text-light-neutral-900 dark:text-dark-neutral-900">
                {t("about-skills-table-02.title")}
              </span>
              <div className="flex flex-col items-stretch justify-start gap-0 rounded-2xl border border-light-neutral-400 dark:border-dark-neutral-400">
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-02.item-01")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-02.item-02")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-02.item-03")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-02.item-04")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-02.item-05")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left text-light-neutral-600 dark:text-dark-neutral-600">
                  {t("about-skills-table-02.item-06")}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-stretch justify-start gap-4 w-full md:w-64">
              <span className="font-medium text-xl leading-normal text-left text-light-neutral-900 dark:text-dark-neutral-900">
                {t("about-skills-table-03.title")}
              </span>
              <div className="flex flex-col items-stretch justify-start gap-0 rounded-2xl border border-light-neutral-400 dark:border-dark-neutral-400">
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-03.item-01")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-03.item-02")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-03.item-03")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-03.item-04")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600">
                  {t("about-skills-table-03.item-05")}
                </span>
                <span className="px-4 py-2 font-normal text-base leading-normal text-left text-light-neutral-600 dark:text-dark-neutral-600">
                  {t("about-skills-table-03.item-06")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-12 w-full h-auto max-w-screen-xl mx-auto px-4 md:flex-row">
        <div className="relative w-full md:w-96 h-auto rounded-3xl overflow-hidden aspect-square">
          <Image
            className="object-cover"
            src={t("about-personal-facts-image")}
            alt="Picture of Vini Siqueira"
            fill
          />
        </div>

        <div className="flex-1 flex flex-col items-center justify-start gap-8 w-auto h-auto">
          <h3 className="w-full font-heading leading-none font-normal text-2xl text-center md:text-left text-light-neutral-900 dark:text-dark-neutral-900 md:text-3xl">
            {t("about-personal-facts-texts-title")}
          </h3>

          <p className="font-normal text-sm md:text-base leading-normal text-left text-light-neutral-600 dark:text-dark-neutral-600">
            {t("about-personal-facts-texts-body")}
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4 overflow-hidden">
        <div className="flex flex-col items-center justify-start gap-12 w-full h-auto py-24 md:py-32">
          <div className="flex items-center justify-center gap-2">
            <div className="relative w-40 h-40 rounded-3xl overflow-hidden aspect-square bg-light-gradient-001 dark:bg-dark-gradient-001">
              <Image
                className="object-contain"
                src={t("about-portfolio-thumb-01-url")}
                alt="First project thumbnail"
                fill
              />
            </div>

            <div className="relative w-40 h-40 rounded-3xl overflow-hidden aspect-square bg-light-gradient-001 dark:bg-dark-gradient-001">
              <Image
                className="object-contain"
                src={t("about-portfolio-thumb-02-url")}
                alt="First project thumbnail"
                fill
              />
            </div>

            <div className="relative w-40 h-40 rounded-3xl overflow-hidden aspect-square bg-light-gradient-001 dark:bg-dark-gradient-001">
              <Image
                className="object-cover"
                src={t("about-portfolio-thumb-03-url")}
                alt="First project thumbnail"
                fill
              />
            </div>
          </div>

          <SectionHeader
            title={t("about-portfolio-texts-title")}
            subTitle={t("about-portfolio-texts-subtitle")}
            titleTag="h3"
          />

          <Button
            type="secondary"
            label={t("about-portfolio-texts-button")}
            link={t("about-portfolio-texts-button-link")}
          />
        </div>
      </section>
    </div>
  );
}
