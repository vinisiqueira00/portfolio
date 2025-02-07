interface SectionTitleProps {
  text: string;
  tag: "h1" | "h2" | "h3";
}

function SectionTitle({ text, tag }: SectionTitleProps) {
  if (tag === "h1") {
    return (
      <h1 className="font-heading leading-normal font-normal text-2xl text-center text-light-neutral-900 dark:text-dark-neutral-900 md:text-3xl">
        {text}
      </h1>
    );
  }

  if (tag === "h2") {
    return (
      <h2 className="font-heading leading-none font-normal text-2xl text-center text-light-neutral-900 dark:text-dark-neutral-900 md:text-3xl">
        {text}
      </h2>
    );
  }

  return (
    <h3 className="font-heading leading-none font-normal text-2xl text-center text-light-neutral-900 dark:text-dark-neutral-900 md:text-3xl">
      {text}
    </h3>
  );
}

export { SectionTitle };
