import Image from "next/image";

/**
 * Kartica ustanovitelja. Uporabi fotografijo, če je na voljo (`photo`),
 * sicer prikaže monogram — PLACEHOLDER: manjkajoče fotografije dodaj v
 * public/team/ in vpiši pot v content/site.ts (about.founders).
 */
export default function FounderCard({
  name,
  role,
  focus,
  initials,
  photo,
}: {
  name: string;
  role: string;
  focus: string;
  initials: string;
  photo?: string | null;
}) {
  return (
    <article className="flex h-full flex-col items-start rounded-2xl border border-white/10 bg-ink-soft p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary-glow/40">
      {photo ? (
        <span className="mb-5 block h-16 w-16 overflow-hidden rounded-2xl ring-1 ring-white/10">
          <Image
            src={photo}
            alt={name}
            width={128}
            height={128}
            className="h-full w-full object-cover"
          />
        </span>
      ) : (
        <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow font-display text-2xl font-bold text-white">
          {initials}
        </span>
      )}
      <h3 className="text-lg font-bold text-bodylight">{name}</h3>
      <p className="mt-1 text-sm font-medium text-primary-glow">{role}</p>
      <p className="mt-2.5 text-sm text-mutedark">{focus}</p>
    </article>
  );
}
