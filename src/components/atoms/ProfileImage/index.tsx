import Image from "next/image";

interface ProfileImageProps {
  src: string;
}

function ProfileImage({ src }: ProfileImageProps) {
  return (
    <div className="relative flex items-center justify-center w-72 h-72 before:content-[''] before:absolute before:top-6 before:left-6 before:w-full before:h-full before:bg-background-01 dark:before:bg-background-08 before:rounded-2xl before:z-0 lg:w-[388px] lg:h-[708px]">
      <Image
        fill
        src={src}
        alt="Personal Picture"
        className="w-72 h-72 rounded-2xl z-10 object-cover lg:w-[388px] lg:h-[708px]"
      />
    </div>
  );
}

export { ProfileImage };
