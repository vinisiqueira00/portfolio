import { ProfileImage } from "@/components/atoms/ProfileImage";
import { ProfileHistory } from "@/components/organisms/ProfileHistory";
import { useTranslations } from "next-intl";

function ProfilePresentation() {
  const t = useTranslations("About");

  return (
    <div className="flex items-start justify-center w-full h-auto gap-16">
      <ProfileImage src={t("image-url")} />
      <ProfileHistory />
    </div>
  );
}

export { ProfilePresentation };
