interface ErrorPageDescriptionProps {
  texts: [string, string, string];
}

function ErrorPageDescription({ texts }: ErrorPageDescriptionProps) {
  return (
    <div>
      <p className="font-medium text-base text-text-09 dark:text-text-05 text-left">
        {/* Isso pode ter ocorrido por 2 motivos principais: */}
        {texts[0]}
      </p>
      <ul className="pl-6">
        <ul className="list-item list-inside list-decimal font-medium text-base text-text-09 dark:text-text-05 text-left">
          {/* A URL foi removida; */}
          {texts[1]}
        </ul>
        <ul className="list-item list-inside list-decimal font-medium text-base text-text-09 dark:text-text-05 text-left">
          {/* Ou a URL nunca existiu. */}
          {texts[2]}
        </ul>
      </ul>
    </div>
  );
}

export { ErrorPageDescription };
