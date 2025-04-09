interface ProjectDetailsSentenceProps {
  text: string;
}

export function ProjectDetailsSentence(props: ProjectDetailsSentenceProps) {
  return (
    <p className="text-center text-light-neutral-900 text-3xl font-medium font-heading leading-normal dark:text-dark-neutral-900 md:text-4.5xl">
      {props.text}
    </p>
  );
}
