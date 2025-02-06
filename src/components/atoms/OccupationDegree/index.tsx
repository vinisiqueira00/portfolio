import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface OccupationDegreeProps {
  label: string;
  value: string;
  link: string;
}

function OccupationDegree({ label, value, link }: OccupationDegreeProps) {
  return (
    <p className="flex item-center justify-start gap-1 text-center font-normal text-base text-light-neutral-600 dark:text-dark-neutral-600 md:text-left">
      {label}
      <Link
        target="_blank"
        href={link}
        className="flex items-center justify-center font-medium text-light-neutral-900 dark:text-dark-neutral-900"
      >
        {value} <ArrowUpRight size={16} strokeWidth={2} />
      </Link>
    </p>
  );
}

export { OccupationDegree };
