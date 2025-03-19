import { CertificateTimelineLine } from "@/components/atoms/CertificateTimelineLine";
import { CertificateTimelineCircle } from "@/components/atoms/CertificateTimelineCircle";

interface CertificateTimelineProps {
  hasLabel: boolean;
  hasBeforeLine: boolean;
  hasAfterLine: boolean;
}

function CertificateTimeline(props: CertificateTimelineProps) {
  return (
    <div className="relative flex items-center justify-center w-full h-4">
      <CertificateTimelineLine
        hasBefore={props.hasBeforeLine}
        hasAfter={props.hasAfterLine}
      />

      <CertificateTimelineCircle isVisible={props.hasLabel} />
    </div>
  );
}

export { CertificateTimeline };
