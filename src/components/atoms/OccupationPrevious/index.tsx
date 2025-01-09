import { ArrowUpRight } from "lucide-react";

import { Link } from "@/i18n/routing";

interface OccupationPreviousProps {
  texts: {
    label: string;
    value: string;
  }[];
}

function OccupationPrevious({ texts }: OccupationPreviousProps) {
  return (
    <p className="inline font-normal text-base text-text-01 dark:text-text-08">
      {texts.map((text) => (
        <span key={text.value}>
          {text.label}{" "}
          <Link
            href="https://www.friweb.com.br/"
            target="_blank"
            className="inline-flex items-center justify-center text-text-02 dark:text-text-07 font-medium"
          >
            {text.value} <ArrowUpRight size={16} strokeWidth={2} />
          </Link>{" "}
        </span>
      ))}
    </p>
  );
}

export { OccupationPrevious };
