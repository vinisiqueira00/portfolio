interface ProjectStatusNormalProps {
  smaller?: false;
  status: "FINISHED" | "IN_EXECUTION";
  text: string;
}

interface ProjectStatusSmallerProps {
  smaller: true;
  status: "FINISHED" | "IN_EXECUTION";
}

type ProjectStatusProps = ProjectStatusNormalProps | ProjectStatusSmallerProps;

function ProjectStatus(props: ProjectStatusProps) {
  if (props.smaller) {
    return (
      <i
        data-status={props.status}
        className="w-2 h-2 rounded-full data-[status=FINISHED]:bg-background-04 data-[status=IN_EXECUTION]:bg-background-06"
      />
    );
  }

  return (
    <div
      data-status={props.status}
      className="flex items-center justify-center gap-2 h-6 px-2 dark:bg-background-11 rounded-full data-[status=FINISHED]:bg-background-05 data-[status=IN_EXECUTION]:bg-background-07 dark:data-[status=IN_EXECUTION]:bg-background-12 md:h-7 md:px-3"
    >
      <i
        data-status={props.status}
        className="w-2 h-2 rounded-full data-[status=FINISHED]:bg-background-04 data-[status=IN_EXECUTION]:bg-background-06"
      />
      <span
        data-status={props.status}
        className="font-semibold text-xs text-text-02 leading-none data-[status=FINISHED]:dark:text-text-03 md:font-medium md:text-base"
      >
        {props.text}
      </span>
    </div>
  );
}

export { ProjectStatus };
