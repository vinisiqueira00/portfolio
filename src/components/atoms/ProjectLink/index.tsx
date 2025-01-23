import Link from "next/link";
import { ArrowRight } from "lucide-react";

// import { Link } from "@/i18n/routing";

interface ProjectLinkProps {
  href: string;
  text: string;
}

function ProjectLink({ href, text }: ProjectLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-start gap-1 font-semibold text-base text-text-02 dark:text-text-07 leading-none"
    >
      {text} <ArrowRight size={16} strokeWidth={2} />
    </Link>
  );
}

export { ProjectLink };
