interface ProfileSkillsFlagProps {
  isHighlight?: boolean;
  text: [string, string];
}

function ProfileSkillsFlag({ isHighlight, text }: ProfileSkillsFlagProps) {
  if (isHighlight) {
    return (
      <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
        <span className="bg-background-gradient-01 inline-block font-medium text-base text-transparent bg-clip-text">
          <b>{text[0]}</b> {text[1]}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 h-7 px-3 bg-background-01 dark:bg-background-08 rounded-full">
      <span className="font-medium text-base text-text-06 dark:text-text-08 leading-none">
        <b>{text[0]}</b> {text[1]}
      </span>
    </div>
  );
}

export { ProfileSkillsFlag };
