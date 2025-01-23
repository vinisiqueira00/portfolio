interface ProfileParagraphFirstProps {
  isFirst: true;
  text: [string, string, string];
}

interface ProfileParagraphOthersProps {
  isFirst?: false;
  text: string;
}

type ProfileParagraphProps =
  | ProfileParagraphFirstProps
  | ProfileParagraphOthersProps;

function ProfileParagraph({ text, isFirst }: ProfileParagraphProps) {
  if (isFirst) {
    return (
      <p className="font-medium text-base text-left leading-normal text-text-09 dark:text-text-05">
        {text[0]}{" "}
        <b className="bg-background-gradient-01 inline font-bold text-transparent bg-clip-text">
          {text[1]}
        </b>
        {text[2]}
      </p>
    );
  }

  return (
    <p className="font-medium text-base text-left leading-normal text-text-09 dark:text-text-05">
      {text}
    </p>
  );
}

export { ProfileParagraph };
