interface ProfileTitleProps {
  texts: [string, string];
}

function ProfileTitle({ texts }: ProfileTitleProps) {
  return (
    <h1 className="font-semibold text-2xl text-left text-text-02 dark:text-text-03">
      {texts[0]}{" "}
      <span className="bg-background-gradient-01 inline font-bold text-transparent bg-clip-text">
        {texts[1]}
      </span>
    </h1>
  );
}

export { ProfileTitle };
