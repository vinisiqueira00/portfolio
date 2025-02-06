interface FooterTitleProps {
  text: string;
}

function FooterTitle({ text }: FooterTitleProps) {
  return (
    <h3 className="font-heading leading-none font-normal text-2xl text-center text-light-neutral-900 dark:text-dark-neutral-900 md:text-3xl">
      {text}
    </h3>
  );
}

export { FooterTitle };
