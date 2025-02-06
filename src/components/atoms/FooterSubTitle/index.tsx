interface FooterSubTitleProps {
  text: string;
}

function FooterSubTitle({ text }: FooterSubTitleProps) {
  return (
    <p className="leading-normal font-normal text-sm text-center text-light-neutral-600 dark:text-dark-neutral-600 md:text-base">
      {text}
    </p>
  );
}

export { FooterSubTitle };
