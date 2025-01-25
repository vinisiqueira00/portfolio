import Image from "next/image";

interface ProjectThumbsProps {
  urlKey: string;
  altKey: string;
}

function ProjectThumbs({ urlKey, altKey }: ProjectThumbsProps) {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-2 bg-transparent p-0 md:rounded-2xl md:p-8 md:bg-background-01 md:dark:bg-background-08">
      <div className="relative flex items-center justify-center w-full h-auto aspect-[1/2.15] m-auto">
        <Image
          className="rounded shadow-shadow-02 aspect-auto object-cover"
          src={`/images/${urlKey}-01.png`}
          alt={`${altKey} 01 Image`}
          fill
        />
      </div>

      <div className="relative flex items-center justify-center w-full h-auto aspect-[1/2.15] m-auto">
        <Image
          className="rounded shadow-shadow-02 aspect-auto object-cover"
          src={`/images/${urlKey}-02.png`}
          alt={`${altKey} 02 Image`}
          fill
        />
      </div>

      <div className="relative flex items-center justify-center w-full h-auto aspect-[1/2.15] m-auto">
        <Image
          className="rounded shadow-shadow-02 aspect-auto object-cover"
          src={`/images/${urlKey}-03.png`}
          alt={`${altKey} 03 Image`}
          fill
        />
      </div>

      <div className="relative flex items-center justify-center w-full h-auto aspect-[1/2.15] m-auto">
        <Image
          className="rounded shadow-shadow-02 aspect-auto object-cover"
          src={`/images/${urlKey}-04.png`}
          alt={`${altKey} 04 Image`}
          fill
        />
      </div>
    </div>
  );
}

export { ProjectThumbs };
