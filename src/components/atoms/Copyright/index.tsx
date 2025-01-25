interface CopyrightProps {
  text: string;
}

function Copyright({ text }: CopyrightProps) {
  return (
    <p className="font-medium text-sm text-text-05 dark:text-text-08 text-left md:text-base md:text-right">
      {text}
    </p>
  );
}

export { Copyright };
