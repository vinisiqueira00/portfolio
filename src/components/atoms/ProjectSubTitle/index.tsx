interface ProjectSubTitleProps {
  text: string;
}

function ProjectSubTitle({ text }: ProjectSubTitleProps) {
  return (
    <span className="font-semibold text-sm md:text-base text-text-05 dark:text-text-08 leading-none">
      ({text})
    </span>
  );
}

export { ProjectSubTitle };
