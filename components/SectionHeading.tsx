/**
 * Standardna glava sekcije: majhen "eyebrow" nadnaslov + velik naslov.
 * `dark` uporabi svetlo besedilo za temne sekcije.
 */
export default function SectionHeading({
  eyebrow,
  title,
  dark = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <p
        className={`mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] ${
          dark ? "text-primary-glow" : "text-primary"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`max-w-2xl text-3xl font-bold sm:text-4xl md:text-[2.75rem] ${
          dark ? "text-bodylight" : "text-body"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
