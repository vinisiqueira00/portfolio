import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Home.Projects");

  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col items-stretch justify-center max-w-5xl gap-8">
        <h2 className="font-bold text-2xl text-text-01 dark:text-text-08">
          {t("title-section")}
        </h2>

        <div className="flex flex-col items-stretch justify-start gap-8">
          <div className="flex items-stretch justify-center gap-12">
            <div className="flex-1 flex items-center justify-center gap-2 h-64 bg-background-01 dark:bg-background-08 rounded-2xl">
              <Image
                className="rounded shadow-shadow-02"
                src="/images/cryptorsa-01.png"
                alt="Crypto RSA 01 Image"
                width={90}
                height={195}
              />

              <Image
                className="rounded shadow-shadow-02"
                src="/images/cryptorsa-02.png"
                alt="Crypto RSA 02 Image"
                width={90}
                height={195}
              />

              <Image
                className="rounded shadow-shadow-02"
                src="/images/cryptorsa-03.png"
                alt="Crypto RSA 03 Image"
                width={90}
                height={195}
              />

              <Image
                className="rounded shadow-shadow-02"
                src="/images/cryptorsa-04.png"
                alt="Crypto RSA 04 Image"
                width={90}
                height={195}
              />
            </div>
            <div className="flex-1 flex flex-col items-stretch justify-start gap-4 py-4">
              <div className="flex items-center justify-start gap-2">
                <i className="w-2 h-2 rounded-full bg-background-04" />
                <h4 className="font-bold text-3xl text-text-02 dark:text-text-07 leading-none">
                  {t("project-01.title")}
                </h4>
                <span className="font-semibold text-base text-text-05 dark:text-text-08 leading-none">
                  ({t("project-01.subtitle")})
                </span>
              </div>
              <p className="font-medium text-base text-text-05 dark:text-text-08 leading-6">
                {t("project-01.description")}
              </p>
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-05 dark:bg-background-11 rounded-full">
                  <i className="w-2 h-2 rounded-full bg-background-04" />
                  <span className="font-medium text-base text-text-02 dark:text-text-03 leading-none">
                    {t("project-01.highlight")}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                  <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                    {t("project-01.tag-01")}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                  <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                    {t("project-01.tag-02")}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                  <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                    {t("project-01.tag-03")}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-start h-full">
                <Link
                  href="https://cryptorsa.vinisiqueira.com.br"
                  className="flex items-center justify-start gap-1 font-semibold text-base text-text-02 dark:text-text-07 leading-none"
                >
                  {t("project-01.button")}{" "}
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
          <p className="font-semibold text-base text-center text-text-05 dark:text-text-08 leading-none">
            {t("text-ending")}
          </p>
          {/* <div className="flex items-stretch justify-center gap-12">
            <div className="flex-1 flex items-center justify-center gap-2 h-64 bg-background-01 dark:bg-background-08 rounded-2xl">
              <Image
                className="rounded shadow-shadow-02"
                src="/images/plantae-01.png"
                alt="Plantae 01 Image"
                width={90}
                height={195}
              />

              <Image
                className="rounded shadow-shadow-02"
                src="/images/plantae-02.png"
                alt="Plantae 02 Image"
                width={90}
                height={195}
              />

              <Image
                className="rounded shadow-shadow-02"
                src="/images/plantae-03.png"
                alt="Plantae 03 Image"
                width={90}
                height={195}
              />

              <Image
                className="rounded shadow-shadow-02"
                src="/images/plantae-04.png"
                alt="Plantae 04 Image"
                width={90}
                height={195}
              />
            </div>
            <div className="flex-1 flex flex-col items-stretch justify-start gap-4 py-4">
              <div className="flex items-center justify-start gap-2">
                <i className="w-2 h-2 rounded-full bg-background-04" />
                <h4 className="font-bold text-3xl text-text-02 dark:text-text-07 leading-none">
                  Plantae
                </h4>
                <span className="font-semibold text-base text-text-05 dark:text-text-08 leading-none">
                  (undergraduate thesis)
                </span>
              </div>
              <p className="font-medium text-base text-text-05 dark:text-text-08 leading-6">
                A web platform for managing small rural properties, focused on
                accessibility. College completion work that there will still be
                developments in the future.
              </p>
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-05 dark:bg-background-11 rounded-full">
                  <i className="w-2 h-2 rounded-full bg-background-04" />
                  <span className="font-medium text-base text-text-02 dark:text-text-03 leading-none">
                    Done
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                  <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                    Mobile
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                  <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                    Development
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                  <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                    Front-end
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-start h-full">
                <Link
                  href="/"
                  className="flex items-center justify-start gap-1 font-semibold text-base text-text-02 dark:text-text-07 leading-none"
                >
                  Read more <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div> */}
          {/* <div className="flex items-stretch justify-center gap-12">
            <div className="flex-1 flex items-center justify-center gap-2 h-64 bg-background-01 dark:bg-background-08 rounded-2xl">
              <Image
                className="rounded shadow-shadow-02"
                src="/images/rave-01.png"
                alt="Rave 01 Image"
                width={90}
                height={195}
              />

              <Image
                className="rounded shadow-shadow-02"
                src="/images/rave-02.png"
                alt="Rave 02 Image"
                width={90}
                height={195}
              />

              <Image
                className="rounded shadow-shadow-02"
                src="/images/rave-03.png"
                alt="Rave 03 Image"
                width={90}
                height={195}
              />

              <Image
                className="rounded shadow-shadow-02"
                src="/images/rave-04.png"
                alt="Rave 04 Image"
                width={90}
                height={195}
              />
            </div>
            <div className="flex-1 flex flex-col items-stretch justify-start gap-4 py-4">
              <div className="flex items-center justify-start gap-2">
                <i className="w-2 h-2 rounded-full bg-background-04" />
                <h4 className="font-bold text-3xl text-text-02 dark:text-text-07 leading-none">
                  Rave
                </h4>
                <span className="font-semibold text-base text-text-05 dark:text-text-08 leading-none">
                  (redesign)
                </span>
              </div>
              <p className="font-medium text-base text-text-05 dark:text-text-08 leading-6">
                A redesign of a watch party app. Aiming to improve usability and
                planning new features, this redesign was designed from the
                beginning to the end of the user&apos;s navigation.
              </p>
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-05 dark:bg-background-11 rounded-full">
                  <i className="w-2 h-2 rounded-full bg-background-04" />
                  <span className="font-medium text-base text-text-02 dark:text-text-03 leading-none">
                    Done
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                  <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                    UI Design
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                  <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                    Figma
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                  <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                    App
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-start h-full">
                <Link
                  href="/"
                  className="flex items-center justify-start gap-1 font-semibold text-base text-text-02 dark:text-text-07 leading-none"
                >
                  Read more <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div> */}
          {/* <div className="flex items-stretch justify-center gap-12">
            <div className="flex-1 flex items-center justify-center gap-2 h-64 bg-background-01 dark:bg-background-08 rounded-2xl">
              <Image
                className="rounded shadow-shadow-02"
                src="/images/wisefy-01.png"
                alt="Wisefy 01 Image"
                width={90}
                height={195}
              />

              <Image
                className="rounded shadow-shadow-02"
                src="/images/wisefy-02.png"
                alt="Wisefy 02 Image"
                width={90}
                height={195}
              />

              <Image
                className="rounded shadow-shadow-02"
                src="/images/wisefy-03.png"
                alt="Wisefy 03 Image"
                width={90}
                height={195}
              />

              <Image
                className="rounded shadow-shadow-02"
                src="/images/wisefy-04.png"
                alt="Wisefy 04 Image"
                width={90}
                height={195}
              />
            </div>
            <div className="flex-1 flex flex-col items-stretch justify-start gap-4 py-4">
              <div className="flex items-center justify-start gap-2">
                <i className="w-2 h-2 rounded-full bg-background-06" />
                <h4 className="font-bold text-3xl text-text-02 dark:text-text-07 leading-none">
                  Wisefy
                </h4>
                <span className="font-semibold text-base text-text-05 dark:text-text-08 leading-none">
                  (mobile app & API in production)
                </span>
              </div>
              <p className="font-medium text-base text-text-05 dark:text-text-08 leading-6">
                This project arose from a personal need, a need that ended but
                the interest in interface design remained. It is an application
                for managing expenses on shared credit cards.
              </p>
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-07 dark:bg-background-12 rounded-full">
                  <i className="w-2 h-2 rounded-full bg-background-06" />
                  <span className="font-medium text-base text-text-02 dark:text-text-03 leading-none">
                    In progress
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                  <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                    UI Design
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                  <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                    Dart
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                  <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                    Full-stack
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-start h-full">
                <Link
                  href="/"
                  className="flex items-center justify-start gap-1 font-semibold text-base text-text-02 dark:text-text-07 leading-none"
                >
                  Read more <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
