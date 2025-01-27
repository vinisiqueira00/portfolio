interface ProfileSkillsFlagProps {
  isHighlight?: boolean;
  text: [string, string];
}

function ProfileSkillsFlag({ isHighlight, text }: ProfileSkillsFlagProps) {
  return (
    <div className="flex items-center justify-center md:h-7 md:px-3 md:bg-background-01 md:dark:bg-background-08 rounded-full">
      {isHighlight ? (
        <span className="bg-background-gradient-01 inline-block font-medium text-base leading-none text-transparent bg-clip-text">
          <b>{text[0]}</b> {text[1]}
        </span>
      ) : (
        <span className="font-medium text-base leading-none text-text-06 dark:text-text-08">
          <b>{text[0]}</b> {text[1]}
        </span>
      )}
    </div>
  );
}

export { ProfileSkillsFlag };
