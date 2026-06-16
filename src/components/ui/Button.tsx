import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "whatsapp";
  icon?: IconDefinition;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  className = "",
  external = false,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-body transition-all duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent to-accent-muted text-white hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-bg-elevated text-text-primary border border-border hover:border-accent hover:text-accent-muted",
    whatsapp:
      "bg-success text-white hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && <FontAwesomeIcon icon={icon} className="w-4 h-4" aria-hidden />}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
