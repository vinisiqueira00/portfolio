import { Catchphrase } from "@/components/atoms/Catchphrase";
import { ProjectList } from "@/components/templates/ProjectList";
import { PersonalPresentation } from "@/components/organisms/PersonalPresentation";

export default function Home() {
  return (
    <main className="flex-1 bg-light-gradient-003 dark:bg-dark-gradient-003 pt-20">
      <section className="flex items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4 py-20 md:py-40">
        <PersonalPresentation />
      </section>

      <section className="flex items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4">
        <ProjectList count={4} />
      </section>

      <section className="flex items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4 py-28">
        <Catchphrase />
      </section>
    </main>
  );
}
