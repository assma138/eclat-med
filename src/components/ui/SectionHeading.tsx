type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleClassName,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c59a4a]">
        {eyebrow}
      </p>
      <h2
        className={`font-display text-4xl leading-none text-[#121a27] sm:text-5xl ${titleClassName ?? ""}`.trim()}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-[#4f5b6d]">{description}</p>
      ) : null}
    </div>
  );
}
