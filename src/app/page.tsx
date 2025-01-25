import { PersonalPresentation } from "@/components/organisms/PersonalPresentation";
import { ProjectList } from "@/components/templates/ProjectList";

export default function Home() {
  return (
    <main>
      <section className="flex items-center justify-center py-20 md:py-40">
        <PersonalPresentation />
      </section>

      <section className="flex items-center justify-center">
        <ProjectList />
      </section>
    </main>
  );
}
