interface CopyrightProps {
  text: string;
}

function Copyright({ text }: CopyrightProps) {
  return (
    <p className="font-medium text-base text-text-05 dark:text-text-08 text-right">
      {text}
    </p>
  );
}

export { Copyright };
