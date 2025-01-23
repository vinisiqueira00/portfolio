import Image from "next/image";

interface ProfileImageProps {
  src: string;
}

function ProfileImage({ src }: ProfileImageProps) {
  return (
    <div className="relative flex items-center justify-center w-[388px] h-[708px] before:content-[''] before:absolute before:top-6 before:left-6 before:w-full before:h-full before:bg-background-01 dark:before:bg-background-08 before:rounded-2xl before:z-0">
      <Image
        className="rounded-2xl z-10"
        src={src}
        alt="Personal Picture"
        width={388}
        height={708}
      />
    </div>
  );
}

export { ProfileImage };
