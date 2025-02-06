import { Catchphrase } from "@/components/atoms/Catchphrase";
import { ProjectList } from "@/components/templates/ProjectList";
import { PersonalPresentation } from "@/components/organisms/PersonalPresentation";

export default function Home() {
  return (
    <main className="flex-1 bg-light-gradient-003 dark:bg-dark-gradient-003">
      <section className="flex items-center justify-center w-full h-auto pt-32 pb-12 box-border md:h-[675px] md:pt-20 md:pb-0">
        <PersonalPresentation />
      </section>

      <section className="flex items-center justify-center">
        <ProjectList count={4} />
      </section>

      <section className="flex items-center justify-center py-28">
        <Catchphrase />
      </section>
    </main>
  );
}
