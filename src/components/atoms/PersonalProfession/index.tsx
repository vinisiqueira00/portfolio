interface PersonalProfessionProps {
  textBefore: string;
  textContent: string;
  textAfter: string;
}

function PersonalProfession(props: PersonalProfessionProps) {
  return (
    <h2 className="font-semibold text-xl text-text-02 dark:text-text-07 md:text-2xl">
      {props.textBefore}{" "}
      <span className="bg-background-gradient-01 inline-block font-bold text-transparent bg-clip-text">
        {props.textContent}
      </span>{" "}
      {props.textAfter}
    </h2>
  );
}

export { PersonalProfession };
