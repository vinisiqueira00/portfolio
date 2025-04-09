interface ProjectDetailsNameProps {
  name: string;
}

export function ProjectDetailsName(props: ProjectDetailsNameProps) {
  return (
    <h1 className="w-full font-heading font-normal text-3xl leading-none text-left text-light-neutral-900 dark:text-dark-neutral-900">
      {props.name}
    </h1>
  );
}
