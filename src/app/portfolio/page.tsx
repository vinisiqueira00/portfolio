import { PortfolioTexts } from "@/components/molecules/PortfolioTexts";
import { ProjectList } from "@/components/templates/ProjectList";

export default function Portfolio() {
  return (
    <main className="flex-1 bg-light-gradient-003 dark:bg-dark-gradient-003">
      <section className="flex items-center justify-center pt-44">
        <PortfolioTexts />
      </section>

      <section className="flex items-center justify-center pb-32 pt-24">
        <ProjectList count="all" />
      </section>
    </main>
  );
}
