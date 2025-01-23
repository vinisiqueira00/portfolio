import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// import { Link } from "@/i18n/routing";

interface OccupationDegreeProps {
  label: string;
  value: string;
}

function OccupationDegree(props: OccupationDegreeProps) {
  return (
    <p className="inline font-normal text-base text-text-01 dark:text-text-08">
      {props.label}{" "}
      <Link
        target="_blank"
        href="https://www.cefet-rj.br/"
        className="inline-flex items-center justify-center text-text-02 dark:text-text-07 font-medium"
      >
        {props.value} <ArrowUpRight size={16} strokeWidth={2} />
      </Link>
    </p>
  );
}

export { OccupationDegree };
