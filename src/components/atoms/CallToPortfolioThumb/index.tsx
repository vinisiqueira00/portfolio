import Image from "next/image";

interface CallToPortfolioThumbProps {
  imageUrl: string;
  imageAlt: string;
}

function CallToPortfolioThumb(props: CallToPortfolioThumbProps) {
  return (
    <div className="relative w-40 h-40 rounded-3xl overflow-hidden aspect-square bg-light-gradient-001 dark:bg-dark-gradient-001">
      <Image
        className="object-contain"
        src={props.imageUrl}
        alt={props.imageAlt}
        fill
      />
    </div>
  );
}

export { CallToPortfolioThumb };
