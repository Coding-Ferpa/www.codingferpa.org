import Image from "next/image";
import {
  faGraduationCap,
  faHandshake,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "@/components/ui/SectionHeading";
import ValuePill from "@/components/ui/ValuePill";
import ScrollReveal from "@/components/ui/ScrollReveal";
import communityPhoto from "@/app/assets/evento.jpeg";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          <ScrollReveal>
            <div>
              <SectionHeading label="Sobre" title="Quem Somos" />

              <p className="text-body text-text-secondary mb-4">
                Nossa missão é criar um ambiente onde profissionais e estudantes da
                região possam se conectar com a tecnologia de maneira inovadora.
              </p>
              <p className="text-body text-text-secondary mb-4">
                Valorizamos o poder das comunidades e acreditamos que, juntos,
                podemos ir mais longe.
                <span className="font-bold text-accent-muted">
                  {" "}
                  Cada pessoa tem algo a oferecer e a ganhar, e essa troca é o que
                  nos move.
                </span>
              </p>
              <p className="text-body text-text-secondary mb-6">
                Trabalhamos para democratizar o conhecimento, abrindo portas para
                quem busca aprender e crescer.
              </p>

              <div className="flex flex-wrap gap-2">
                <ValuePill icon={faGraduationCap} label="Democratizar" />
                <ValuePill icon={faHandshake} label="Conectar" />
                <ValuePill icon={faSeedling} label="Crescer" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative rounded-lg overflow-hidden shadow-lg aspect-[3/4] max-h-[560px] w-full max-w-md mx-auto md:mx-0 md:ml-auto">
              <Image
                src={communityPhoto}
                alt="Membros da comunidade Coding Ferpa reunidos em um encontro"
                width={1200}
                height={1600}
                sizes="(max-width: 768px) 100vw, 40vw"
                quality={90}
                className="w-full h-full object-cover object-center"
                placeholder="blur"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
