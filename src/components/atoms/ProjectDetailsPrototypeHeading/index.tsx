interface ProjectDetailsPrototypeHeadingProps {
  title: string;
  description: string;
}

export function ProjectDetailsPrototypeHeading(
  props: ProjectDetailsPrototypeHeadingProps
) {
  return (
    <div className="flex flex-col items-stretch justify-start gap-4 w-full h-auto">
      <h2 className="text-left text-light-neutral-900 text-2xl font-normal font-heading leading-none dark:text-dark-neutral-900">
        {props.title}
      </h2>
      <p className="text-left text-light-neutral-600 text-base font-normal font-body leading-normal dark:text-dark-neutral-600">
        {props.description}
      </p>
    </div>
  );
}
