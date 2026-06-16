import type { Metadata } from "next";
import Link from "next/link";
import { PRESENTATION_PDF_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Apresentação Institucional | Coding Ferpa",
  description: "Apresentação institucional da comunidade Coding Ferpa",
};

export default function ApresentacaoPage() {
  return (
    <div className="max-w-container mx-auto px-6 lg:px-10 py-8 flex flex-col gap-6 min-h-[calc(100vh-var(--header-height))]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-heading-2 font-bold text-text-primary">
            Apresentação Institucional
          </h1>
          <p className="text-text-secondary text-body mt-1">
            Conheça o Coding Ferpa
          </p>
        </div>

        <a
          href={PRESENTATION_PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-caption bg-bg-elevated text-text-primary border border-border hover:border-accent hover:text-accent-muted transition-all duration-base"
        >
          Abrir em nova aba
        </a>
      </div>

      <div className="flex-1 rounded-lg border border-border overflow-hidden bg-bg-elevated shadow-md min-h-[70vh]">
        <iframe
          src={`${PRESENTATION_PDF_URL}#toolbar=1&navpanes=0`}
          title="Apresentação Institucional Coding Ferpa"
          className="w-full h-full min-h-[70vh]"
        />
      </div>

      <p className="text-text-muted text-caption text-center">
        O PDF não carregou?{" "}
        <a
          href={PRESENTATION_PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-muted hover:text-accent underline underline-offset-2"
        >
          Clique aqui para visualizar ou baixar
        </a>
        {" · "}
        <Link href="/" className="text-accent-muted hover:text-accent underline underline-offset-2">
          Voltar ao início
        </Link>
      </p>
    </div>
  );
}
