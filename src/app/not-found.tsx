import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// import { Link } from "@/i18n/routing";

export default function NotFoundPage() {
  return (
    <section className="flex-1 flex items-center justify-center">
      <div className="flex flex-col items-start justify-center w-full max-w-5xl gap-8">
        <h2 className="font-bold text-9xl text-text-01 dark:text-text-08 text-left">
          404
        </h2>
        <div className="flex flex-col items-start justify-center gap-2 w-full">
          <h1 className="inline-block font-bold text-base text-text-01 text-left bg-background-gradient-01 text-transparent bg-clip-text">
            Página não encontrada
          </h1>
          <p className="font-medium text-base text-text-09 dark:text-text-05 text-left">
            Oops! A página que você está buscando não foi encontrada.
          </p>
          <div>
            <p className="font-medium text-base text-text-09 dark:text-text-05 text-left">
              Isso pode ter ocorrido por 2 motivos principais:
            </p>
            <ul className="pl-6">
              <ul className="list-item list-inside list-decimal font-medium text-base text-text-09 dark:text-text-05 text-left">
                A URL foi removida;
              </ul>
              <ul className="list-item list-inside list-decimal font-medium text-base text-text-09 dark:text-text-05 text-left">
                Ou a URL nunca existiu.
              </ul>
            </ul>
          </div>
        </div>
        <Link
          href="/"
          className="flex items-center justify-start gap-1 justify-center text-text-02 dark:text-text-07 font-medium"
        >
          <ArrowLeft size={16} strokeWidth={2} /> Voltar para o início
        </Link>
      </div>
    </section>
  );
}
