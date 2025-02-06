import Image from "next/image";

interface ImagePresentationLocationProps {
  text: string;
}

function ImagePresentationLocation({ text }: ImagePresentationLocationProps) {
  return (
    <span className="flex items-center justify-center gap-2 w-full h-8 py-2 px-3 rounded-2xl border border-light-neutral-400 dark:border-dark-neutral-400 text-xs font-normal leading-none text-light-neutral-900 dark:text-dark-neutral-900">
      <Image
        src="/icons/brazil-flag.png"
        alt="A icon of Brazil flag"
        width={16}
        height={16}
      />

      {text}
    </span>
  );
}

export { ImagePresentationLocation };
