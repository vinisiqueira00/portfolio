import Link from "next/link";

interface SocialGroupProps {
  title: string;
  linkedin: {
    label: string;
    link: string;
  };
  github: {
    label: string;
    link: string;
  };
  instagram: {
    label: string;
    link: string;
  };
}

function SocialGroup(props: SocialGroupProps) {
  return (
    <div className="flex items-center justify-center gap-4 md:justify-start">
      <span className="font-heading text-left text-base leading-normal font-medium text-light-neutral-900 dark:text-dark-neutral-900">
        {props.title}
      </span>
      <Link
        className="font-body text-left text-base leading-normal font-normal text-light-neutral-600 dark:text-dark-neutral-600"
        href={props.linkedin.link}
        target="_blank"
      >
        {props.linkedin.label}
      </Link>
      <Link
        className="font-body text-left text-base leading-normal font-normal text-light-neutral-600 dark:text-dark-neutral-600"
        href={props.github.link}
        target="_blank"
      >
        {props.github.label}
      </Link>
      <Link
        className="font-body text-left text-base leading-normal font-normal text-light-neutral-600 dark:text-dark-neutral-600"
        href={props.instagram.link}
        target="_blank"
      >
        {props.instagram.label}
      </Link>
    </div>
  );
}

export { SocialGroup };
