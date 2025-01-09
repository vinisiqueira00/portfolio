import { ArrowUpRight } from "lucide-react";

import { Link } from "@/i18n/routing";

interface OccupationCurrentProps {
  label: string;
  value: string;
}

function OccupationCurrent(props: OccupationCurrentProps) {
  return (
    <p className="inline font-normal text-base text-text-01 dark:text-text-08">
      {props.label}{" "}
      <Link
        href="https://cadastra.com/pt-br"
        target="_blank"
        className="inline-flex items-center justify-center text-text-02 dark:text-text-07 font-medium"
      >
        {props.value} <ArrowUpRight size={16} strokeWidth={2} />
      </Link>
    </p>
  );
}

export { OccupationCurrent };
