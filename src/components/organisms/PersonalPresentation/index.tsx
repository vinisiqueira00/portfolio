import { AvatarAnimation } from "@/components/molecules/AvatarAnimation";
import { PersonalOccupation } from "@/components/molecules/PersonalOccupation";

function PersonalPresentation() {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl gap-16 px-6 md:flex-row">
      <AvatarAnimation />
      <PersonalOccupation />
    </div>
  );
}

export { PersonalPresentation };
