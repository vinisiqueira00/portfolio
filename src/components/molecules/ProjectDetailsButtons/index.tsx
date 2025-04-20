import { Button } from "@/components/atoms/Button";
import { ProjectDetailsMessage } from "@/components/atoms/ProjectDetailsMessage";

interface ProjectDetailsButtonsProps {
  buttons: {
    label: string;
    link: string;
    isPrimary: boolean;
    target: "_blank" | "_self";
  }[];
  warning?: string;
}

export function ProjectDetailsButtons(props: ProjectDetailsButtonsProps) {
  return (
    <div className="flex items-center justify-start w-auto h-full gap-4">
      {props.buttons.length > 0 ? (
        props.buttons.map((button) => (
          <Button
            key={button.label}
            target={button.target}
            type={button.isPrimary ? "primary" : "secondary"}
            link={button.link}
            label={button.label}
          />
        ))
      ) : props.warning ? (
        <ProjectDetailsMessage message={props.warning} />
      ) : (
        <></>
      )}
    </div>
  );
}
