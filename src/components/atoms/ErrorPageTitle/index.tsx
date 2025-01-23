interface ErrorPageTitleProps {
  text: string;
}

function ErrorPageTitle({ text }: ErrorPageTitleProps) {
  return (
    <h1 className="inline-block font-bold text-base text-text-01 text-left bg-background-gradient-01 text-transparent bg-clip-text">
      {/* Página não encontrada */}
      {text}
    </h1>
  );
}

export { ErrorPageTitle };
