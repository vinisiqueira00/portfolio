interface ProjectsTitleSectionProps {
  text: string;
}

function ProjectsTitleSection({ text }: ProjectsTitleSectionProps) {
  return (
    <h2 className="font-bold text-2xl text-text-01 dark:text-text-08">
      {text}
    </h2>
  );
}

export { ProjectsTitleSection };
