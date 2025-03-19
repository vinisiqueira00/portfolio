interface AboutSkillProps {
  text: string;
}

function AboutSkill(props: AboutSkillProps) {
  return (
    <span className="px-4 py-2 font-normal text-base leading-normal text-left border-b border-b-light-neutral-400 text-light-neutral-600 dark:border-b-dark-neutral-400 dark:text-dark-neutral-600 last:border-b-0">
      {props.text}
    </span>
  );
}

export { AboutSkill };
