import { ProjectDetailsBoardItem } from "@/components/atoms/ProjectDetailsBoardItem";

interface ProjectDetailsBoardProps {
  items: { label: string; value: string }[];
}

export function ProjectDetailsBoard(props: ProjectDetailsBoardProps) {
  return (
    <div className="flex items-center justify-center p-4 min-w-96 rounded-[32px] border border-light-neutral-400 dark:border-dark-neutral-400 bg-light-neutral-000/30 dark:bg-dark-neutral-000/30">
      <div className="flex flex-col items-stretch justify-center gap-4 w-full p-4 rounded-3xl bg-light-neutral-000 dark:bg-dark-neutral-000 md:p-6">
        {props.items.map((item) => (
          <ProjectDetailsBoardItem
            key={item.label}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
}
