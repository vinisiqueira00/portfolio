import Image from "next/image";

function ImagePresentationImage() {
  return (
    <Image
      className="block aspect-square rounded-2xl"
      src="/images/presentation.png"
      alt="A picture of Vini Siqueira"
      width={210}
      height={210}
    />
  );
}

export { ImagePresentationImage };
