interface ProjectTagProps {
  text: string;
}

function ProjectTag({ text }: ProjectTagProps) {
  return (
    <div className="flex items-center justify-center gap-2 h-6 px-2 bg-background-01 dark:bg-background-08 rounded-full md:h-7 md:px-3">
      <span className="font-medium text-xs text-text-06 dark:text-text-08 leading-none md:text-base">
        {text}
      </span>
    </div>
  );
}

export { ProjectTag };
