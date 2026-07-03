/**
 * Kartica ustanovitelja. Namesto fotografije uporablja monogram —
 * PLACEHOLDER: ko bodo na voljo prave fotografije, jih dodaj v /public
 * in tukaj zamenjaj monogram z <Image>.
 */
export default function FounderCard({
  name,
  role,
  focus,
  initials,
}: {
  name: string;
  role: string;
  focus: string;
  initials: string;
}) {
  return (
    <article className="flex h-full flex-col items-start rounded-2xl border border-white/10 bg-ink-soft p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary-glow/40">
      <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow font-display text-2xl font-bold text-white">
        {initials}
      </span>
      <h3 className="text-lg font-bold text-bodylight">{name}</h3>
      <p className="mt-1 text-sm font-medium text-primary-glow">{role}</p>
      <p className="mt-2.5 text-sm text-mutedark">{focus}</p>
    </article>
  );
}
