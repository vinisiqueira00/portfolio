interface CertificateTimelineLineProps {
  hasBefore: boolean;
  hasAfter: boolean;
}

function CertificateTimelineLine(props: CertificateTimelineLineProps) {
  return (
    <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center w-full h-auto">
      <div
        data-is-active={props.hasBefore}
        className="block min-w-[calc(50%+1rem)] h-1 bg-light-primary-main dark:bg-dark-primary-main data-[is-active=false]:opacity-0"
      />
      <div
        data-is-active={props.hasAfter}
        className="block min-w-[calc(50%+1rem)] h-1 bg-light-primary-main dark:bg-dark-primary-main data-[is-active=false]:opacity-0"
      />
    </div>
  );
}

export { CertificateTimelineLine };
