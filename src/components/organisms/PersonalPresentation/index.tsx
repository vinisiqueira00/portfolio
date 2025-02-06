import { ImagePresentation } from "@/components/molecules/ImagePresentation";
import { ContentPresentation } from "@/components/molecules/ContentPresentation";

function PersonalPresentation() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full max-w-screen-xl px-4 md:flex-row-reverse md:gap-16">
      <ImagePresentation />
      <ContentPresentation />
    </div>
  );
}

export { PersonalPresentation };
