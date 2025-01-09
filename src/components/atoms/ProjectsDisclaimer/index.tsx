interface ProjectsDisclaimerProps {
  text: string;
}

function ProjectsDisclaimer({ text }: ProjectsDisclaimerProps) {
  return (
    <p className="font-semibold text-base text-center text-text-05 dark:text-text-08 leading-none">
      {text}
    </p>
  );
}

export { ProjectsDisclaimer };
