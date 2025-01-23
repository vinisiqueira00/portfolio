import { ProfileHistoryTexts } from "@/components/molecules/ProfileHistoryTexts";
import { ProfileHistoryHeader } from "@/components/molecules/ProfileHistoryHeader";

function ProfileHistory() {
  return (
    <div className="flex-1 flex flex-col items-stretch justify-start gap-16 w-auto h-auto">
      <ProfileHistoryHeader />
      <ProfileHistoryTexts />
    </div>
  );
}

export { ProfileHistory };
