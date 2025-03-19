import { CallToPortfolioThumb } from "@/components/atoms/CallToPortfolioThumb";

interface CallToPortfolioThumbGroupProps {
  firstThumb: {
    imageUrl: string;
    imageAlt: string;
  };
  secondThumb: {
    imageUrl: string;
    imageAlt: string;
  };
  thirdThumb: {
    imageUrl: string;
    imageAlt: string;
  };
}

function CallToPortfolioThumbGroup(props: CallToPortfolioThumbGroupProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <CallToPortfolioThumb
        imageUrl={props.firstThumb.imageUrl}
        imageAlt={props.firstThumb.imageAlt}
      />
      <CallToPortfolioThumb
        imageUrl={props.secondThumb.imageUrl}
        imageAlt={props.secondThumb.imageAlt}
      />
      <CallToPortfolioThumb
        imageUrl={props.thirdThumb.imageUrl}
        imageAlt={props.thirdThumb.imageAlt}
      />
    </div>
  );
}

export { CallToPortfolioThumbGroup };
