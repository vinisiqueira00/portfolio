import Image from "next/image";

import { Button } from "@/components/atoms/Button";
import { ProjectDetailsPrototypeHeading } from "@/components/atoms/ProjectDetailsPrototypeHeading";

interface ProjectDetailsContentSubjectPrototypeProps {
  data: {
    title: string;
    description: string;
    image: {
      source: string;
      alt: string;
    };
    button: {
      label: string;
      link: string;
      isPrimary: boolean;
      target: "_blank" | "_self";
    };
  };
}

export function ProjectDetailsContentSubjectPrototype(
  props: ProjectDetailsContentSubjectPrototypeProps
) {
  return (
    <section className="flex items-center justify-center w-full h-auto">
      <div className="flex flex-col items-stretch justify-start gap-8 md:gap-10 w-full h-auto p-8 md:p-16 rounded-4xl border border-light-neutral-500 dark:border-dark-neutral-500">
        <ProjectDetailsPrototypeHeading
          title={props.data.title}
          description={props.data.description}
        />

        <div className="flex flex-col items-center justify-center gap-4 w-full h-auto">
          <div className="flex items-center justify-center w-full h-auto">
            <Image
              className="object-contain"
              src={props.data.image.source}
              alt={props.data.image.alt}
              width={768}
              height={1000}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <Button
            label={props.data.button.label}
            link={props.data.button.link}
            type={props.data.button.isPrimary ? "primary" : "secondary"}
            target={props.data.button.target}
          />
        </div>
      </div>
    </section>
  );
}
