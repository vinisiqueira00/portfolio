interface ProjectDetailsMessageProps {
  message: string;
}

export function ProjectDetailsMessage(props: ProjectDetailsMessageProps) {
  return (
    <p className="w-full font-body font-bold text-xs px-4 py-2 rounded-xl leading-normal text-left text-light-status-alert dark:text-dark-status-alert bg-light-status-alert/20 dark:bg-dark-status-alert/20">
      {props.message}
    </p>
  );
}
