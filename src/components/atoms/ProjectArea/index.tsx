interface ProjectAreaProps {
  text: string;
}

function ProjectArea({ text }: ProjectAreaProps) {
  return (
    <span className="leading-none font-normal text-sm text-light-neutral-600 dark:text-dark-neutral-600 ">
      {text}
    </span>
  );
}

export { ProjectArea };
