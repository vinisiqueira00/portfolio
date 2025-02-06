interface PortfolioTitleProps {
  text: string;
}

function PortfolioTitle({ text }: PortfolioTitleProps) {
  return (
    <h1 className="font-heading leading-none font-normal text-2xl text-center text-light-neutral-900 dark:text-dark-neutral-900 md:text-3xl">
      {text}
    </h1>
  );
}

export { PortfolioTitle };
