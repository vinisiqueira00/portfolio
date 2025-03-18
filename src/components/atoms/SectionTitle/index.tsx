interface SectionSubTitleProps {
  text: string;
}

function SectionSubTitle({ text }: SectionSubTitleProps) {
  return (
    <p className="whitespace-normal leading-normal font-normal text-sm text-center text-light-neutral-600 dark:text-dark-neutral-600 md:text-base md:whitespace-pre-line">
      {text}
    </p>
  );
}

export { SectionSubTitle };
