import Image from "next/image";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/ui/SocialLinks";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CommunityTerminal from "@/components/ui/CommunityTerminal";
import { WHATSAPP_URL } from "@/lib/constants";
import logo from "@/app/assets/logo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-var(--header-height))] flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(139,92,246,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="page-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <ScrollReveal className="min-w-0">
            <div className="flex flex-col gap-6">
              <h1 className="sr-only">Coding Ferpa — Além do código</h1>
              <Image
                src={logo}
                alt="Coding Ferpa — Além do código"
                width={500}
                height={200}
                className="w-full max-w-xl h-auto"
                priority
              />

              <p className="text-text-secondary text-body">
                Comunidade para profissionais, estudantes e entusiastas de tecnologia em Fernandópolis
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  href={WHATSAPP_URL}
                  external
                  variant="primary"
                  ariaLabel="Participe — entrar no grupo do WhatsApp"
                >
                  Participe
                </Button>
                <SocialLinks size="md" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex justify-center lg:justify-end">
              <CommunityTerminal className="w-full max-w-sm" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
