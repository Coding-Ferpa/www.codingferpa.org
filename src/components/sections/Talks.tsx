import SectionHeading from "@/components/ui/SectionHeading";
import TalkCard from "@/components/ui/TalkCard";
import EmptyState from "@/components/ui/EmptyState";
import ScrollReveal from "@/components/ui/ScrollReveal";
import data from "@/app/assets/cards.json";
import type { Talk } from "@/components/ui/TalkCard";

export default function Talks() {
  const talks: Talk[] = data.talks;
  const title = data.title;

  if (!title && talks.length === 0) return null;

  return (
    <section id="talk" className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        {title && (
          <ScrollReveal>
            <SectionHeading
              label="Agenda"
              title={title}
              align="center"
              className="mb-10"
            />
          </ScrollReveal>
        )}

        {talks.length === 0 ? (
          <ScrollReveal>
            <EmptyState />
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {talks.map((talk, index) => (
              <ScrollReveal key={talk.id} delay={index * 100}>
                <TalkCard talk={talk} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
