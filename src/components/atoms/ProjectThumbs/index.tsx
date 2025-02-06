import Image from "next/image";

interface ProjectThumbsProps {
  url: string;
  alt: string;
  type: string;
}

function ProjectThumbs({ url, alt, type }: ProjectThumbsProps) {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-light-gradient-001 dark:bg-dark-gradient-001 overflow-hidden">
      <div className="relative w-full aspect-square md:aspect-video">
        {url ? (
          <Image
            data-fit={type}
            className="w-full object-contain data-[fit=cover]:object-cover"
            src={url}
            alt={alt}
            fill
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export { ProjectThumbs };
