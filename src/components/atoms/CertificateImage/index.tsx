import Image from "next/image";

interface CertificateImageProps {
  imageUrl: string;
  imageAlt: string;
}

function CertificateImage(props: CertificateImageProps) {
  return (
    <div className="relative w-[22rem] h-60 rounded-3xl overflow-hidden">
      <Image
        className="object-cover"
        src={props.imageUrl}
        alt={props.imageAlt}
        fill
      />
    </div>
  );
}

export { CertificateImage };
