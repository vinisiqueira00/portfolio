interface ProjectDetailsDescriptionProps {
  text: string;
}

export function ProjectDetailsDescription(
  props: ProjectDetailsDescriptionProps
) {
  return (
    <h3 className="w-full font-body font-normal text-base leading-normal text-left text-light-neutral-600 dark:text-dark-neutral-600">
      {props.text}
    </h3>
  );
}
