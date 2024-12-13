import Image from "next/image";
import { Copy } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="flex items-center justify-center pt-24 pb-4">
      <div className="flex items-stretch justify-between w-full max-w-5xl">
        <div className="flex flex-col items-start justify-between">
          <h5 className="bg-background-gradient-01 inline-block font-bold text-3xl text-transparent bg-clip-text">
            {t("text-contact")}
          </h5>
          <div className="flex items-center justify-start gap-4">
            <button>
              <Image
                src="/icons/github.svg"
                alt="Github Icon"
                width={24}
                height={24}
              />
            </button>
            <button>
              <Image
                src="/icons/linkedin.svg"
                alt="Linkedin Icon"
                width={24}
                height={24}
              />
            </button>
            <button>
              <Image
                src="/icons/instagram.svg"
                alt="Instagram Icon"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end gap-4">
          <div className="flex flex-col items-end justify-end gap-1">
            <button className="flex items-center justify-end gap-2">
              <span className="font-medium text-base text-text-02 dark:text-text-07 text-right">
                +55 22 99274-3135
              </span>
              <Copy
                className="text-text-02 dark:text-text-07"
                size={16}
                strokeWidth={2}
              />
            </button>
            <button className="flex items-center justify-end gap-2">
              <span className="font-medium text-base text-text-02 dark:text-text-07 text-right">
                vinicius.siqueira642@gmail.com
              </span>
              <Copy
                className="text-text-02 dark:text-text-07"
                size={16}
                strokeWidth={2}
              />
            </button>
          </div>
          <p className="font-medium text-base text-text-05 dark:text-text-08 text-right">
            {t("text-copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
