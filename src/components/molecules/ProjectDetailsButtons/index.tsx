import { Button } from "@/components/atoms/Button";
import { ProjectDetailsMessage } from "@/components/atoms/ProjectDetailsMessage";

interface ProjectDetailsButtonsProps {
  buttons:
    | [
        {
          label: string;
          link: string;
        },
        {
          label: string;
          link: string;
        }
      ]
    | [
        {
          label: string;
          link: string;
        }
      ]
    | [];
  messageEmptyButton?: string;
}

export function ProjectDetailsButtons(props: ProjectDetailsButtonsProps) {
  return (
    <div className="flex items-center justify-start w-auto h-full gap-4">
      {props.buttons.length > 0 ? (
        <>
          {props.buttons.map((button, idx) => (
            <Button
              key={button.label}
              target="_blank"
              type={idx === 0 ? "primary" : "secondary"}
              link={button.link}
              label={button.label}
            />
          ))}
        </>
      ) : props.messageEmptyButton ? (
        <ProjectDetailsMessage message={props.messageEmptyButton} />
      ) : (
        <></>
      )}
    </div>
  );
}
