import Image from "next/image";

interface ProjectThumbsProps {
  urlKey: string;
  altKey: string;
}

function ProjectThumbs({ urlKey, altKey }: ProjectThumbsProps) {
  return (
    <div className="flex-1 flex items-center justify-center gap-2 h-64 bg-background-01 dark:bg-background-08 rounded-2xl">
      <Image
        className="rounded shadow-shadow-02"
        src={`/images/${urlKey}-01.png`}
        alt={`${altKey} 01 Image`}
        width={90}
        height={195}
      />

      <Image
        className="rounded shadow-shadow-02"
        src={`/images/${urlKey}-02.png`}
        alt={`${altKey} 02 Image`}
        width={90}
        height={195}
      />

      <Image
        className="rounded shadow-shadow-02"
        src={`/images/${urlKey}-03.png`}
        alt={`${altKey} 03 Image`}
        width={90}
        height={195}
      />

      <Image
        className="rounded shadow-shadow-02"
        src={`/images/${urlKey}-04.png`}
        alt={`${altKey} 04 Image`}
        width={90}
        height={195}
      />
    </div>
  );
}

export { ProjectThumbs };
