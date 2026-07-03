import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

/** Temna zaključna sekcija s pozivom k dejanju — uporabljena na dnu strani. */
export default function CTASection({
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section>
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-soft px-7 py-14 text-center sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(36rem 18rem at 50% 120%, rgba(79, 70, 229, 0.25), transparent 65%)",
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-bodylight sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-mutedark">
                {description}
              </p>
              <Link
                href={buttonHref}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-cta transition-[transform,background-color] hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-glow active:scale-[0.97]"
              >
                {buttonLabel}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
