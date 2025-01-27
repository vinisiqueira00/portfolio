interface ProfileSkillsTitleProps {
  text: string;
}

function ProfileSkillsTitle({ text }: ProfileSkillsTitleProps) {
  return (
    <h3 className="font-bold text-base leading-none text-text-02 dark:text-text-03">
      {text}
    </h3>
  );
}

export { ProfileSkillsTitle };
