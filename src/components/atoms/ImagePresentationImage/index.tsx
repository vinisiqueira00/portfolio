import Image from "next/image";

interface ImagePresentationImageProps {
  src: string;
  alt: string;
}

function ImagePresentationImage(props: ImagePresentationImageProps) {
  return (
    <Image
      className="block aspect-square rounded-2xl"
      src={props.src}
      alt={props.alt}
      width={210}
      height={210}
    />
  );
}

export { ImagePresentationImage };
