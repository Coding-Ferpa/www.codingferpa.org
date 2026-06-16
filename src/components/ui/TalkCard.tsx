export interface Talk {
  id: number;
  title: string;
  speaker: string;
  description: string;
  date?: string;
  time?: string;
}

interface TalkCardProps {
  talk: Talk;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function TalkCard({ talk }: TalkCardProps) {
  return (
    <article className="group flex flex-col h-full rounded-lg border border-border bg-bg-elevated overflow-hidden transition-all duration-base hover:border-accent hover:shadow-glow">
      {(talk.date || talk.time) && (
        <div className="px-4 py-2 bg-bg-surface border-b border-border">
          <span className="text-caption font-semibold text-accent-muted">
            {[talk.date, talk.time].filter(Boolean).join(" · ")}
          </span>
        </div>
      )}

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-heading-3 font-bold text-text-primary mb-4 group-hover:text-accent-muted transition-colors duration-base">
          {talk.title}
        </h3>

        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-muted flex items-center justify-center text-sm font-bold text-white shrink-0"
            aria-hidden
          >
            {getInitials(talk.speaker)}
          </div>
          <p className="text-text-secondary text-body">
            <span className="text-text-muted text-caption block">Palestrante</span>
            <span className="font-medium text-text-primary">{talk.speaker}</span>
          </p>
        </div>

        <hr className="border-border mb-4" />

        <p className="text-text-secondary text-body flex-grow">{talk.description}</p>
      </div>
    </article>
  );
}
