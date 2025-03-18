interface PresentationTitleProps {
  text: string;
}

function PresentationTitle({ text }: PresentationTitleProps) {
  return (
    <h2 className="font-heading text-center font-normal text-2xl text-light-neutral-900 dark:text-dark-neutral-900 md:text-3xl md:text-left !leading-normal">
      {text}
    </h2>
  );
}

export { PresentationTitle };
