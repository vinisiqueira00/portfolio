interface ProjectDetailsBoardItemProps {
  label: string;
  value: string;
}

export function ProjectDetailsBoardItem(props: ProjectDetailsBoardItemProps) {
  return (
    <div className="flex items-center justify-center w-full h-auto gap-1">
      <span className="w-full min-w-24 max-w-24 h-auto font-semibold font-heading text-lg leading-normal text-left text-light-neutral-900 dark:text-dark-neutral-900">
        {props.label}
      </span>
      <span className="w-full font-normal font-body text-base leading-normal text-left text-light-neutral-600 dark:text-dark-neutral-600">
        {props.value}
      </span>
    </div>
  );
}
