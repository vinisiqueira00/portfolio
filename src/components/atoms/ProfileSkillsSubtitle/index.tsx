interface ProfileSkillsSubtitleProps {
  text: string;
}

function ProfileSkillsSubtitle({ text }: ProfileSkillsSubtitleProps) {
  return (
    <span className="min-w-24 font-medium text-base text-text-01 dark:text-text-08">
      {text}
    </span>
  );
}

export { ProfileSkillsSubtitle };
