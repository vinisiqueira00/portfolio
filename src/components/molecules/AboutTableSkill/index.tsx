import { AboutSkill } from "@/components/atoms/AboutSkill";

interface AboutTableSkillProps {
  title: string;
  items: string[];
}

function AboutTableSkill(props: AboutTableSkillProps) {
  return (
    <div className="flex flex-col items-stretch justify-start gap-4 w-full md:w-64">
      <span className="font-medium text-xl leading-normal text-left text-light-neutral-900 dark:text-dark-neutral-900">
        {props.title}
      </span>
      <div className="flex flex-col items-stretch justify-start gap-0 rounded-2xl border border-light-neutral-400 dark:border-dark-neutral-400">
        {props.items.map((item) => (
          <AboutSkill key={item} text={item} />
        ))}
      </div>
    </div>
  );
}

export { AboutTableSkill };
