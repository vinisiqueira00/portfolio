import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ErrorPageButtonProps {
  href: string;
  text: string;
}

function ErrorPageButton({ text, href }: ErrorPageButtonProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-start gap-1 text-text-02 dark:text-text-07 font-medium"
    >
      <ArrowLeft size={16} strokeWidth={2} /> {text}
    </Link>
  );
}

export { ErrorPageButton };
