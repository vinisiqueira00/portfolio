interface PersonalNameProps {
  text: string;
}

function PersonalName({ text }: PersonalNameProps) {
  return (
    <span className="font-bold text-xl text-text-01 dark:text-text-08 md:text-2xl">
      {text}
    </span>
  );
}

export { PersonalName };
