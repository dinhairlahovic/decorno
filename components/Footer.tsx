import Link from "next/link";
import { footer, nav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-bodylight">
      <div className="mx-auto grid max-w-content gap-12 px-5 py-16 sm:px-8 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">
            {site.name}
            <span className="text-primary-glow">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-mutedark">{footer.tagline}</p>
        </div>

        <nav aria-label="Navigacija v nogi">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-mutedark">
            {footer.navTitle}
          </p>
          <ul className="mt-4 space-y-2.5">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-bodylight/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-glow"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-mutedark">
            {footer.contactTitle}
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              {/* PLACEHOLDER: e-naslov se ureja v content/site.ts */}
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-bodylight/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-glow"
              >
                {site.email}
              </a>
            </li>
            {/* PLACEHOLDER: prave povezave do družbenih omrežij v content/site.ts */}
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="text-sm text-bodylight/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-glow"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-content px-5 py-6 text-xs text-mutedark sm:px-8">
          {footer.legal}
        </p>
      </div>
    </footer>
  );
}
