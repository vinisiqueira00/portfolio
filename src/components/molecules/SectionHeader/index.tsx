import { SectionTitle } from "@/components/atoms/SectionSubTitle";
import { SectionSubTitle } from "@/components/atoms/SectionTitle";

interface SectionHeaderProps {
  title: string;
  titleTag: "h1" | "h2" | "h3";
  subTitle: string;
}

function SectionHeader({ title, titleTag, subTitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-stretch justify-end gap-4">
      <SectionTitle text={title} tag={titleTag} />
      <SectionSubTitle text={subTitle} />
    </div>
  );
}

export { SectionHeader };
