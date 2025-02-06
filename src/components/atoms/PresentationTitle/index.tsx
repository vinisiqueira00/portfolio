interface PresentationTitleProps {
  text: string;
}

function PresentationTitle({ text }: PresentationTitleProps) {
  return (
    <span className="font-heading leading-normal text-center font-normal text-2xl text-light-neutral-900 dark:text-dark-neutral-900 md:text-3xl md:text-left">
      {text}
    </span>
  );
}

export { PresentationTitle };
