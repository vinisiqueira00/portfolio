interface ProjectDetailsFlagProps {
  flag: string;
}

export function ProjectDetailsFlag(props: ProjectDetailsFlagProps) {
  return (
    <span className="w-auto h-auto px-2 py-1 rounded-full bg-light-neutral-400 dark:bg-dark-neutral-400 font-body font-normal text-sm leading-none text-center text-light-neutral-600 dark:text-dark-neutral-600">
      {props.flag}
    </span>
  );
}
