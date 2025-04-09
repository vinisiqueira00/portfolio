interface ProjectDetailsContentSubjectTitleProps {
  title: string;
}

export function ProjectDetailsContentSubjectTitle(
  props: ProjectDetailsContentSubjectTitleProps
) {
  return (
    <h2 className="text-left text-light-neutral-900 text-2xl font-normal font-heading leading-none dark:text-dark-neutral-900">
      {props.title}
    </h2>
  );
}
