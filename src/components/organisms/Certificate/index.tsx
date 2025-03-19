import { CertificateImage } from "@/components/atoms/CertificateImage";
import { CertificateLabel } from "@/components/atoms/CertificateLabel";
import { CertificateTimeline } from "@/components/molecules/CertificateTimeline";

interface CertificateProps {
  timeline: {
    label: string;
    beforeLine: boolean;
    afterLine: boolean;
  };
  imageUrl: string;
  imageAlt: string;
}

function Certificate(props: CertificateProps) {
  return (
    <div className="flex flex-col items-stretch justify-between w-auto h-auto pt-2">
      <CertificateTimeline
        hasLabel={props.timeline.label !== ""}
        hasBeforeLine={props.timeline.beforeLine}
        hasAfterLine={props.timeline.afterLine}
      />

      <CertificateLabel label={props.timeline.label} />
      <CertificateImage imageUrl={props.imageUrl} imageAlt={props.imageAlt} />
    </div>
  );
}

export { Certificate };
