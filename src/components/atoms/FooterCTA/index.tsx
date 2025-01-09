interface FooterCTAProps {
  text: string;
}

function FooterCTA({ text }: FooterCTAProps) {
  return (
    <h5 className="bg-background-gradient-01 inline-block font-bold text-3xl text-transparent bg-clip-text">
      {text}
    </h5>
  );
}

export { FooterCTA };
