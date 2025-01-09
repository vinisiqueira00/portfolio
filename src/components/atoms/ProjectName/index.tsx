interface ProjectNameProps {
  text: string;
}

function ProjectName({ text }: ProjectNameProps) {
  return (
    <h4 className="font-bold text-3xl text-text-02 dark:text-text-07 leading-none">
      {text}
    </h4>
  );
}

export { ProjectName };
