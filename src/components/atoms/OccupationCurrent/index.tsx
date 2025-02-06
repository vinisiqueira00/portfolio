import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface OccupationCurrentProps {
  label: string;
  value: string;
  link: string;
}

function OccupationCurrent({ label, value, link }: OccupationCurrentProps) {
  return (
    <p className="flex item-center justify-start gap-1 text-center font-normal text-base text-light-neutral-600 dark:text-dark-neutral-600 md:text-left">
      {label}
      <Link
        href={link}
        target="_blank"
        className="flex items-center justify-center font-medium text-light-neutral-900 dark:text-dark-neutral-900"
      >
        {value} <ArrowUpRight size={16} strokeWidth={2} />
      </Link>
    </p>
  );
}

export { OccupationCurrent };
