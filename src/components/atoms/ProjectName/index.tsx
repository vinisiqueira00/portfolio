interface ProjectNameProps {
  text: string;
}

function ProjectName({ text }: ProjectNameProps) {
  return (
    <h3 className="font-heading leading-none font-bold text-xl text-light-neutral-900 dark:text-dark-neutral-900 md:text-2xl">
      {text}
    </h3>
  );
}

export { ProjectName };
