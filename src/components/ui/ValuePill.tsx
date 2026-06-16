import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ValuePillProps {
  icon: IconDefinition;
  label: string;
}

export default function ValuePill({ icon, label }: ValuePillProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-elevated border border-border text-text-primary text-caption font-medium">
      <FontAwesomeIcon icon={icon} className="w-4 h-4 text-accent" aria-hidden />
      <span>{label}</span>
    </div>
  );
}
