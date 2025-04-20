import { ProjectDetailsBanner } from "@/components/atoms/ProjectDetailsBanner";
import { useTranslations } from "next-intl";

interface ProjectDetailsBannersProps {
  projectSlug: string;
  sectionId: "first" | "second" | "third";
}

export function ProjectDetailsBanners(props: ProjectDetailsBannersProps) {
  const t = useTranslations(`projects.${props.projectSlug}`);

  const banners: { source: string; alt: string }[] = t.raw(
    `${props.sectionId}-banner-area`
  );

  if (banners.length === 0) return <></>;

  return (
    <section className="flex items-center justify-center w-full h-auto">
      <div className="flex flex-col items-center justify-center gap-8 w-full h-auto md:flex-row">
        {banners.map((banner) => (
          <ProjectDetailsBanner
            key={banner.source}
            bannerUrl={banner.source}
            bannerAlt={banner.alt}
            isFull={banners.length === 1}
          />
        ))}
      </div>
    </section>
  );
}
