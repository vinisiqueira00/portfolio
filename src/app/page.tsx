import { PersonalPresentation } from "@/components/organisms/PersonalPresentation";
import { ProjectList } from "@/components/templates/ProjectList";

export default function Home() {
  return (
    <main>
      <section className="flex items-center justify-center py-40">
        <div className="flex items-center justify-center max-w-5xl gap-16">
          <PersonalPresentation />
        </div>
      </section>

      <section className="flex items-center justify-center">
        <div className="flex flex-col items-stretch justify-center w-full max-w-5xl gap-8">
          <ProjectList />
        </div>
      </section>
    </main>
  );
}
