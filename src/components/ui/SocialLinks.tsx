import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { SOCIAL_LINKS } from "@/lib/constants";

const ICON_MAP = {
  Instagram: faInstagram,
  Discord: faDiscord,
  GitHub: faGithub,
} as const;

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function SocialLinks({
  size = "md",
  className = "",
}: SocialLinksProps) {
  const sizeClasses = {
    sm: "w-9 h-9 text-base",
    md: "w-11 h-11 text-lg",
    lg: "w-14 h-14 text-xl",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform.label}
          className={`${sizeClasses[size]} flex items-center justify-center rounded-full bg-bg-elevated border border-border text-text-secondary transition-all duration-base hover:text-accent hover:border-accent hover:shadow-glow hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
        >
          <FontAwesomeIcon icon={ICON_MAP[platform.name]} aria-hidden />
        </a>
      ))}
    </div>
  );
}
