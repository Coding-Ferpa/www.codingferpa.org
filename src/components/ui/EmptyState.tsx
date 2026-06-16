import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";

interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({
  message = "Nenhuma palestra cadastrada no momento. Fique ligado nos nossos canais!",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 rounded-lg border border-dashed border-border bg-bg-elevated text-center max-w-md mx-auto">
      <div className="w-14 h-14 rounded-full bg-bg-surface flex items-center justify-center mb-4">
        <FontAwesomeIcon
          icon={faMicrophoneSlash}
          className="w-6 h-6 text-text-muted"
          aria-hidden
        />
      </div>
      <p className="text-text-secondary text-body">{message}</p>
    </div>
  );
}
