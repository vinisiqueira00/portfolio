import Image from "next/image";

interface ProjectDetailsBannerProps {
  bannerUrl: string;
  bannerAlt: string;
  isFull?: boolean;
}

export function ProjectDetailsBanner(props: ProjectDetailsBannerProps) {
  return (
    <div
      data-is-full={props.isFull}
      className="relative w-full h-auto rounded-4xl overflow-hidden data-[is-full=true]:aspect-square data-[is-full=false]:aspect-square bg-light-gradient-002 dark:bg-dark-gradient-002 border border-light-neutral-400 dark:border-dark-neutral-400 md:data-[is-full=true]:aspect-video"
    >
      <Image
        className="object-cover"
        src={props.bannerUrl}
        alt={props.bannerAlt}
        fill
      />
    </div>
  );
}
