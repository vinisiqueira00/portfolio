interface ProjectTypeProps {
  text: string;
}

function ProjectType({ text }: ProjectTypeProps) {
  return (
    <span className="leading-none font-normal text-sm text-light-neutral-600 dark:text-dark-neutral-600 ">
      {text}
    </span>
  );
}

export { ProjectType };
