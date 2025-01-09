interface ProjectDescriptionProps {
  text: string;
}

function ProjectDescription({ text }: ProjectDescriptionProps) {
  return (
    <p className="font-medium text-base text-text-05 dark:text-text-08 leading-6">
      {text}
    </p>
  );
}

export { ProjectDescription };
