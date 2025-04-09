import Image from "next/image";

import { Button } from "@/components/atoms/Button";

interface ProjectDetailsPrototypePreviewProps {
  imageUrl: string;
  link: string;
  label: string;
}

export function ProjectDetailsPrototypePreview(
  props: ProjectDetailsPrototypePreviewProps
) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-auto">
      <div className="flex items-center justify-center w-full h-auto">
        <Image
          className="object-contain"
          src={props.imageUrl}
          alt="Prototypes of project"
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
        label={props.label}
        link={props.link}
        type="secondary"
        target="_blank"
      />
    </div>
  );
}
