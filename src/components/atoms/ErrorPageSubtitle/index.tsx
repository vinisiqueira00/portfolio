interface ErrorPageSubtitleProps {
  text: string;
}

function ErrorPageSubtitle({ text }: ErrorPageSubtitleProps) {
  return (
    <p className="font-medium text-base text-text-09 dark:text-text-05 text-left">
      {/* Oops! A página que você está buscando não foi encontrada. */}
      {text}
    </p>
  );
}

export { ErrorPageSubtitle };
