import { Catchphrase } from "@/components/atoms/Catchphrase";
import { ProjectList } from "@/components/templates/ProjectList";
import { PersonalPresentation } from "@/components/organisms/PersonalPresentation";

export default function Home() {
  return (
    <div>
      <section className="flex items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4 py-20 md:py-40">
        <PersonalPresentation />
      </section>

      <section className="flex items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4">
        <ProjectList count={4} />
      </section>

      <section className="flex items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4 py-28">
        <Catchphrase />
      </section>
    </div>
  );
}
