interface ProjectDetailsContentSubjectDescriptionProps {
  description: string;
}

export function ProjectDetailsContentSubjectDescription(
  props: ProjectDetailsContentSubjectDescriptionProps
) {
  return (
    <p className="text-left text-light-neutral-600 text-base font-normal font-body leading-normal dark:text-dark-neutral-600">
      {props.description}
    </p>
  );
}
