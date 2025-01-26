import { ProfileImage } from "@/components/atoms/ProfileImage";
import { ProfileHistory } from "@/components/organisms/ProfileHistory";
import { useTranslations } from "next-intl";

function ProfilePresentation() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto gap-16 lg:flex-row lg:items-start">
      <ProfileImage src={t("about-image-url")} />
      <ProfileHistory />
    </div>
  );
}

export { ProfilePresentation };
