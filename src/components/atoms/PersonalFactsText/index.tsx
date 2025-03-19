interface PersonalFactsTextProps {
  title: string;
  body: string;
}

function PersonalFactsText(props: PersonalFactsTextProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-8 w-auto h-auto">
      <h3 className="w-full font-heading leading-none font-normal text-2xl text-center md:text-left text-light-neutral-900 dark:text-dark-neutral-900 md:text-3xl">
        {props.title}
      </h3>

      <p className="font-normal text-sm md:text-base leading-normal text-left text-light-neutral-600 dark:text-dark-neutral-600">
        {props.body}
      </p>
    </div>
  );
}

export { PersonalFactsText };
