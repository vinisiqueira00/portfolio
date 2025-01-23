import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <main className="flex items-center justify-center pt-24">
      <div className="flex flex-col items-stretch justify-start gap-16 max-w-5xl">
        <div className="flex items-start justify-center w-full h-auto gap-16">
          <ProfileImage src="/images/me.png" />

          <div className="flex-1 flex flex-col items-stretch justify-start gap-16 w-auto h-auto">
            <div className="flex flex-col items-stretch justify-start gap-2">
              <span className="font-bold text-2xl text-left text-text-01 dark:text-text-08">
                {t("text-disclaimer")}
              </span>
              <h1 className="font-semibold text-2xl text-left text-text-02 dark:text-text-03">
                {t("text-title-before")}{" "}
                <span className="bg-background-gradient-01 inline font-bold text-transparent bg-clip-text">
                  {t("text-title-content")}
                </span>
              </h1>
            </div>

            <div className="flex flex-col items-stretch justify-start gap-6">
              <p className="font-medium text-base text-left leading-normal text-text-09 dark:text-text-05">
                {t("paragraphs.01-before")}{" "}
                <b className="bg-background-gradient-01 inline font-bold text-transparent bg-clip-text">
                  {t("paragraphs.01-content")}
                </b>
                {t("paragraphs.01-after")}
              </p>
              <p className="font-medium text-base text-left leading-normal text-text-09 dark:text-text-05">
                {t("paragraphs.02")}
              </p>
              <p className="font-medium text-base text-left leading-normal text-text-09 dark:text-text-05">
                {t("paragraphs.03")}
              </p>
              <p className="font-medium text-base text-left leading-normal text-text-09 dark:text-text-05">
                {t("paragraphs.04")}
              </p>
              <p className="font-medium text-base text-left leading-normal text-text-09 dark:text-text-05">
                {t("paragraphs.05")}
              </p>
              <p className="font-medium text-base text-left leading-normal text-text-09 dark:text-text-05">
                {t("paragraphs.06")}
                <br />
                {t("paragraphs.07")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-stretch justify-start gap-6">
          <h3 className="font-bold text-base text-text-02 dark:text-text-03">
            {t("title-skills-section")}
          </h3>

          <div className="flex items-start justify-start gap-2">
            <span className="min-w-24 font-medium text-base text-text-01 dark:text-text-08">
              {t("skills.first.group-title")}
            </span>

            <div className="flex flex-wrap items-start justify-start gap-x-4 gap-y-3">
              <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                <span className="bg-background-gradient-01 inline-block font-medium text-base text-transparent bg-clip-text">
                  <b>{t("skills.first.tag-01.bolder")}</b>{" "}
                  {t("skills.first.tag-01.normal")}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                <span className="bg-background-gradient-01 inline-block font-medium text-base text-transparent bg-clip-text">
                  <b>{t("skills.first.tag-02.bolder")}</b>{" "}
                  {t("skills.first.tag-02.normal")}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                <span className="bg-background-gradient-01 inline-block font-medium text-base text-transparent bg-clip-text">
                  <b>{t("skills.first.tag-03.bolder")}</b>{" "}
                  {t("skills.first.tag-03.normal")}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                <span className="bg-background-gradient-01 inline-block font-medium text-base text-transparent bg-clip-text">
                  <b>{t("skills.first.tag-04.bolder")}</b>{" "}
                  {t("skills.first.tag-04.normal")}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-start gap-2">
            <span className="min-w-24 font-medium text-base text-text-01 dark:text-text-08">
              {t("skills.second.group-title")}
            </span>

            <div className="flex flex-wrap items-start justify-start gap-x-4 gap-y-3">
              <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                  <b>{t("skills.second.tag-01.bolder")}</b>{" "}
                  {t("skills.second.tag-01.normal")}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                  <b>{t("skills.second.tag-02.bolder")}</b>{" "}
                  {t("skills.second.tag-02.normal")}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                  <b>{t("skills.second.tag-03.bolder")}</b>{" "}
                  {t("skills.second.tag-03.normal")}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                  <b>{t("skills.second.tag-04.bolder")}</b>{" "}
                  {t("skills.second.tag-04.normal")}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                  <b>{t("skills.second.tag-05.bolder")}</b>{" "}
                  {t("skills.second.tag-05.normal")}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                  <b>{t("skills.second.tag-06.bolder")}</b>{" "}
                  {t("skills.second.tag-06.normal")}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                  <b>{t("skills.second.tag-07.bolder")}</b>{" "}
                  {t("skills.second.tag-07.normal")}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
                <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
                  <b>{t("skills.second.tag-08.bolder")}</b>{" "}
                  {t("skills.second.tag-08.normal")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

interface ProfileImageProps {
  src: string;
}

function ProfileImage({ src }: ProfileImageProps) {
  return (
    <div className="relative flex items-center justify-center w-[388px] h-[708px] before:content-[''] before:absolute before:top-6 before:left-6 before:w-full before:h-full before:bg-background-01 dark:before:bg-background-08 before:rounded-2xl before:z-0">
      <Image
        className="rounded-2xl z-10"
        src={src}
        alt="Personal Picture"
        width={388}
        height={708}
      />
    </div>
  );
}
