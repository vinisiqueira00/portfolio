import Image from "next/image";

interface PersonalFactsImageProps {
  src: string;
  alt: string;
}

function PersonalFactsImage(props: PersonalFactsImageProps) {
  return (
    <div className="relative w-full md:w-96 h-auto rounded-3xl overflow-hidden aspect-square">
      <Image className="object-cover" src={props.src} alt={props.alt} fill />
    </div>
  );
}

export { PersonalFactsImage };
