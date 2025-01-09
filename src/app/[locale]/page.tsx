import { PersonalPresentation } from "@/components/organisms/PersonalPresentation";
import { ProjectList } from "@/components/templates/ProjectList";

export default function Home() {
  return (
    <main>
      <PersonalPresentation />
      <ProjectList />
    </main>
  );
}
