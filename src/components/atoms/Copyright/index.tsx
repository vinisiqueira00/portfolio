interface CopyrightProps {
  text: string;
}

function Copyright({ text }: CopyrightProps) {
  return (
    <p className="w-auto h-auto font-normal text-sm text-center text-light-neutral-600 dark:text-dark-neutral-600">
      {text}
    </p>
  );
}

export { Copyright };
