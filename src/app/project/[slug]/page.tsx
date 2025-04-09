import { CallToPortfolioSection } from "@/components/organisms/CallToPortfolioSection";
import { ProjectDetailsHeading } from "@/components/organisms/ProjectDetailsHeading";
import { ProjectDetailsBanners } from "@/components/molecules/ProjectDetailsBanners";
import { ProjectDetailsSentenceWrapper } from "@/components/molecules/ProjectDetailsSentenceWrapper";
import { ProjectDetailsContents } from "@/components/organisms/ProjectDetailsContents";
import { ProjectDetailsPrototype } from "@/components/organisms/ProjectDetailsPrototype";

interface ProjectProps {
  params: Promise<{ slug: string }>;
}

export default async function Project(props: ProjectProps) {
  const { slug } = await props.params;

  return (
    <div className="flex flex-col items-center justify-center gap-32 w-full h-auto max-w-4xl mx-auto py-32">
      <div className="flex flex-col items-center justify-center gap-32 w-full h-auto px-4">
        <ProjectDetailsHeading projectSlug={slug} />

        <ProjectDetailsBanners projectSlug={slug} sectionId="first" />

        <ProjectDetailsSentenceWrapper projectSlug={slug} />

        <ProjectDetailsBanners projectSlug={slug} sectionId="second" />

        <ProjectDetailsContents projectSlug={slug} />

        <ProjectDetailsPrototype projectSlug={slug} />

        <ProjectDetailsBanners projectSlug={slug} sectionId="third" />
      </div>

      <section className="flex items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4 overflow-hidden">
        <CallToPortfolioSection />
      </section>
    </div>
  );
}
