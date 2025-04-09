import Image from "next/image";

interface ProjectDetailsContentSubjectImagesProps {
  images: {
    title: string;
    url: string;
    alt: string;
  }[];
}

export function ProjectDetailsContentSubjectImages(
  props: ProjectDetailsContentSubjectImagesProps
) {
  return (
    <div className="flex flex-col items-start justify-center gap-8 w-full h-auto md:flex-row">
      {props.images.map((image) => (
        <div
          key={image.url}
          className="flex flex-col items-stretch justify-start gap-0 w-full h-auto rounded-4xl border border-light-neutral-400 dark:border-dark-neutral-400 bg-light-gradient-002 dark:bg-dark-gradient-002"
        >
          {image.title && (
            <span className="px-8 pt-4 font-body font-normal text-base leading-normal text-left text-light-neutral-600 dark:text-dark-neutral-600">
              {image.title}
            </span>
          )}

          <div
            key={image.url}
            className="flex items-center justify-center w-full h-auto p-6 md:p-16"
          >
            <Image
              className="object-contain"
              src={image.url}
              alt={image.alt}
              width={768}
              height={768}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
}
