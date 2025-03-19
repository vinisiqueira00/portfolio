import Image from "next/image";

interface PersonalFactsImageProps {
  imageUrl: string;
  imageAlt: string;
}

function PersonalFactsImage(props: PersonalFactsImageProps) {
  return (
    <div className="relative w-full md:w-96 h-auto rounded-3xl overflow-hidden aspect-square">
      <Image
        className="object-cover"
        src={props.imageUrl}
        alt={props.imageAlt}
        fill
      />
    </div>
  );
}

export { PersonalFactsImage };
