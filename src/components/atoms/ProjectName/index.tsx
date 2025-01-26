interface ProjectNameProps {
  text: string;
}

function ProjectName({ text }: ProjectNameProps) {
  return (
    <h4 className="font-semibold text-lg text-text-02 dark:text-text-07 leading-none md:text-2xl md:font-bold">
      {text}
    </h4>
  );
}

export { ProjectName };
