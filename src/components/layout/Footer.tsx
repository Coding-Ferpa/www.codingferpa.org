import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SocialLinks from "@/components/ui/SocialLinks";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-bg-elevated border-t border-border mt-6">
      <div className="max-w-container mx-auto px-6 lg:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-bold text-text-primary text-body mb-1">Coding Ferpa</p>
            <p className="text-text-secondary text-caption whitespace-nowrap">
              Comunidade de tecnologia em Fernandópolis — SP
            </p>
            <p className="gradient-text font-semibold text-caption mt-2">
              Além do código
            </p>
          </div>

          <div>
            <p className="font-semibold text-text-primary text-caption uppercase tracking-widest mb-3">
              Navegação
            </p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-text-secondary text-caption hover:text-accent transition-colors duration-fast"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-text-secondary text-caption hover:text-accent transition-colors duration-fast"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/apresentacao"
                  className="text-text-secondary text-caption hover:text-accent transition-colors duration-fast"
                >
                  Apresentação Institucional
                </Link>
              </li>
              <li>
                <Link
                  href="/CODE_OF_CONDUCT"
                  className="text-text-secondary text-caption hover:text-accent transition-colors duration-fast"
                >
                  Código de conduta
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-text-primary text-caption uppercase tracking-widest mb-3">
              Redes sociais
            </p>
            <SocialLinks size="sm" />
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-text-muted text-caption">
            &copy; 2026 Coding Ferpa. Todos os direitos reservados.
          </p>
          <p className="text-text-secondary text-caption">
            Desenvolvido com{" "}
            <FontAwesomeIcon icon={faHeart} className="text-accent mx-1" aria-hidden />
            da comunidade para a comunidade.
          </p>
        </div>
      </div>
    </footer>
  );
}
