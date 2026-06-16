import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MAPS_URL, VENUE } from "@/lib/constants";

export default function Events() {
  return (
    <section id="events" className="py-16 md:py-24 bg-bg-elevated/50">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          <ScrollReveal>
            <div>
              <SectionHeading label="Eventos" title="Nossos Encontros" />

              <p className="text-body text-text-secondary mb-4">
                Participe dos nossos encontros e faça parte da nossa comunidade!
                Venha trocar experiências, aprender e evoluir junto a outros
                apaixonados por tecnologia.
              </p>
              <p className="text-body text-text-secondary mb-6">
                Os encontros acontecem no{" "}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-muted font-semibold hover:text-accent transition-colors duration-fast underline underline-offset-2"
                >
                  Dog King
                </a>
                . Fique ligado nos nossos eventos mensais e venha construir o futuro
                com a gente!
              </p>
              <p className="text-body text-text-secondary mb-6">
                Para se manter informado sobre os eventos,{" "}
                <span className="font-bold text-accent-muted">
                  entre no nosso grupo do WhatsApp!
                </span>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="rounded-lg border border-border bg-bg-elevated p-6 md:p-8 shadow-lg h-full flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-accent-muted text-caption font-semibold">
                  <FontAwesomeIcon icon={faCalendarDays} className="w-3 h-3" aria-hidden />
                  Encontros mensais
                </span>
              </div>

              <h3 className="text-heading-2 font-bold text-text-primary mb-2">
                {VENUE.name}
              </h3>
              <address className="not-italic text-text-secondary text-body mb-6 leading-relaxed">
                {VENUE.address}
                <br />
                {VENUE.neighborhood}
                <br />
                {VENUE.city} — {VENUE.zip}
              </address>

              <Button
                href={MAPS_URL}
                external
                variant="secondary"
                icon={faMapLocationDot}
                className="w-full sm:w-auto"
                ariaLabel="Como chegar ao Dog King no Google Maps"
              >
                Como chegar
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
