interface ProfileDisclaimerProps {
  text: string;
}

function ProfileDisclaimer({ text }: ProfileDisclaimerProps) {
  return (
    <span className="font-bold text-2xl text-left text-text-01 dark:text-text-08">
      {text}
    </span>
  );
}

export { ProfileDisclaimer };
