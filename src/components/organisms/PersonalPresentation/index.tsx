import { AvatarAnimation } from "@/components/molecules/AvatarAnimation";
import { PersonalOccupation } from "@/components/molecules/PersonalOccupation";

function PersonalPresentation() {
  return (
    <section className="flex items-center justify-center py-40">
      <div className="flex items-center justify-center max-w-5xl gap-16">
        <AvatarAnimation />
        <PersonalOccupation />
      </div>
    </section>
  );
}

export { PersonalPresentation };
