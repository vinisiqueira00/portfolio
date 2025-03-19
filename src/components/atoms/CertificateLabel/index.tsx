interface CertificateLabelProps {
  label: string;
}

function CertificateLabel(props: CertificateLabelProps) {
  return (
    <span className="pt-3 pb-16 font-semibold text-xl text-center text-light-neutral-900 dark:text-dark-neutral-900">
      {props.label}
    </span>
  );
}

export { CertificateLabel };
