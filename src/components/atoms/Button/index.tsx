"use client";

import Link from "next/link";

interface SubmitButtonProps {
  label: string;
  type: "primary" | "secondary";
  onClick: () => void;
}

interface LinkButtonProps {
  label: string;
  type: "primary" | "secondary";
  link: string;
  target?: "_self" | "_blank";
}

function Button(props: SubmitButtonProps | LinkButtonProps) {
  if ("link" in props && !("onClick" in props)) {
    return (
      <Link
        href={props.link}
        data-type={props.type}
        target={props.target ?? "_self"}
        className="group flex items-center justify-center w-auto h-14 px-6 rounded-2xl leading-normal text-base font-normal data-[type=primary]:text-light-neutral-000 data-[type=primary]:dark:text-dark-neutral-000 data-[type=secondary]:text-light-neutral-900 data-[type=secondary]:dark:text-dark-neutral-900 data-[type=primary]:bg-light-gradient-004 dark:data-[type=primary]:bg-dark-gradient-004 data-[type=secondary]:bg-transparent data-[type=secondary]:border data-[type=secondary]:border-light-neutral-400 dark:data-[type=secondary]:border-dark-neutral-400"
      >
        <div className="relative w-auto h-auto p-0 m-0 overflow-hidden">
          <span className="opacity-0 pointer-events-none select-none overflow-hidden">
            {props.label}
          </span>
          <span className="absolute 0 left-1/2 -translate-x-1/2 translate-y-0 w-full h-auto group-hover:-translate-y-full transition-transform">
            {props.label}
          </span>
          <span className="absolute 0 left-1/2 -translate-x-1/2 translate-y-full w-full h-auto group-hover:translate-y-0 transition-transform">
            {props.label}
          </span>
        </div>
      </Link>
    );
  }

  if ("onClick" in props && !("link" in props)) {
    return (
      <button
        onClick={() => props.onClick()}
        data-type={props.type}
        className="group flex items-center justify-center w-auto h-14 px-6 rounded-2xl leading-normal text-base font-normal data-[type=primary]:text-light-neutral-000 data-[type=primary]:dark:text-dark-neutral-000 data-[type=secondary]:text-light-neutral-900 data-[type=secondary]:dark:text-dark-neutral-900 data-[type=primary]:bg-light-gradient-004 dark:data-[type=primary]:bg-dark-gradient-004 data-[type=secondary]:bg-transparent data-[type=secondary]:border data-[type=secondary]:border-light-neutral-400 dark:data-[type=secondary]:border-dark-neutral-400"
      >
        <div className="relative w-auto h-auto p-0 m-0 overflow-hidden">
          <span className="opacity-0 pointer-events-none select-none overflow-hidden">
            {props.label}
          </span>
          <span className="absolute 0 left-1/2 -translate-x-1/2 translate-y-0 w-full h-auto group-hover:-translate-y-full transition-transform">
            {props.label}
          </span>
          <span className="absolute 0 left-1/2 -translate-x-1/2 translate-y-full w-full h-auto group-hover:translate-y-0 transition-transform">
            {props.label}
          </span>
        </div>
      </button>
    );
  }

  return <></>;
}

export { Button };
