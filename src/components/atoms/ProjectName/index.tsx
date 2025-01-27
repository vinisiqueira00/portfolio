interface ProjectNameProps {
  text: string;
}

function ProjectName({ text }: ProjectNameProps) {
  return (
    <h4 className="font-semibold text-lg text-text-02 dark:text-text-07 md:text-2xl md:font-bold !leading-none">
      {text}
    </h4>
  );
}

export { ProjectName };
