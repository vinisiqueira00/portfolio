interface ProjectTagProps {
  text: string;
}

function ProjectTag({ text }: ProjectTagProps) {
  return (
    <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
      <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
        {text}
      </span>
    </div>
  );
}

export { ProjectTag };
