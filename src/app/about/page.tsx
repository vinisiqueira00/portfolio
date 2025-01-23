import { ProfilePresentation } from "@/components/templates/ProfilePresentation";
import { ProfileSkillsSection } from "@/components/templates/ProfileSkillsSection";

export default function About() {
  return (
    <main className="flex items-center justify-center pt-16 md:pt-24">
      <div className="flex flex-col items-stretch justify-start gap-16 max-w-5xl px-6">
        <ProfilePresentation />
        <ProfileSkillsSection />
      </div>
    </main>
  );
}
