import { CallToPortfolioThumb } from "@/components/atoms/CallToPortfolioThumb";

interface CallToPortfolioThumbGroupProps {
  thumbs: {
    url: string;
    alt: string;
  }[];
}

function CallToPortfolioThumbGroup(props: CallToPortfolioThumbGroupProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {props.thumbs.map(({ url, alt }) => (
        <CallToPortfolioThumb key={url} imageUrl={url} imageAlt={alt} />
      ))}
    </div>
  );
}

export { CallToPortfolioThumbGroup };
