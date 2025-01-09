interface PersonalNameProps {
  text: string;
}

function PersonalName({ text }: PersonalNameProps) {
  return (
    <span className="font-bold text-2xl text-text-01 dark:text-text-08">
      {text}
    </span>
  );
}

export { PersonalName };
