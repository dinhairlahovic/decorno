import Image from "next/image";

/** lucide-react ne vsebuje več blagovnih/logo ikon — LinkedIn mark je zato inline SVG. */
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

/**
 * Kartica ustanovitelja. Uporabi fotografijo, če je na voljo (`photo`),
 * sicer prikaže monogram — PLACEHOLDER: manjkajoče fotografije dodaj v
 * public/team/ in vpiši pot v content/site.ts (about.founders).
 * LinkedIn povezava je izključno opisna predstavitev osebe — ni povezana
 * s kontaktnim obrazcem ali kakršnokoli telefonsko številko.
 */
export default function FounderCard({
  name,
  role,
  focus,
  initials,
  photo,
  linkedin,
}: {
  name: string;
  role: string;
  focus: string;
  initials: string;
  photo?: string | null;
  linkedin?: string | null;
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
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} na LinkedInu`}
          className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mutedark transition-colors hover:border-primary-glow/40 hover:text-primary-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-glow"
        >
          <LinkedinIcon size={16} />
        </a>
      )}
    </article>
  );
}
