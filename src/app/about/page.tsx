import { PersonalFactsSection } from "@/components/molecules/PersonalFactsSection";
import { AboutPresentation } from "@/components/organisms/AboutPresentation";
import { AboutSkillsSection } from "@/components/organisms/AboutSkillsSection";
import { CallToPortfolioSection } from "@/components/organisms/CallToPortfolioSection";
import { CertificatesSection } from "@/components/templates/CertificatesSection";

export default function About() {
  return (
    <div className="flex-1 bg-light-gradient-003 dark:bg-dark-gradient-003 pt-20">
      <section className="flex flex-col items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4 py-32 md:flex-row">
        <AboutPresentation />
      </section>

      <section className="flex items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4">
        <CertificatesSection />
      </section>

      <section className="flex items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4">
        <AboutSkillsSection />
      </section>

      <section className="flex items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4">
        <PersonalFactsSection />
      </section>

      <section className="flex items-center justify-center w-full h-auto max-w-screen-xl mx-auto px-4 overflow-hidden">
        <CallToPortfolioSection />
      </section>
    </div>
  );
}
