interface SectionHeadingProps {
  label?: string;
  title: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-6 ${alignClass} ${className}`}>
      {label && (
        <span className="inline-block text-caption font-semibold uppercase tracking-widest text-accent mb-2">
          {label}
        </span>
      )}
      <h2 className="text-heading-2 font-bold text-text-primary">{title}</h2>
    </div>
  );
}
