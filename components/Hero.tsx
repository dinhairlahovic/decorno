import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { topStrip, heroSplit } from "@/content/site";
import RobotFactory from "./RobotFactory";
import Reveal from "./Reveal";

/**
 * Hero: temna zaobljena kartica — besedilo levo, animirana "tovarna
 * robotkov" (tekoči trak) desno.
 */
export default function Hero() {
  return (
    <section className="px-4 sm:px-6">
      {/* Mikro-vrstica */}
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 py-4">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          {topStrip.left}
        </p>
        <p className="hidden font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-muted sm:block">
          {topStrip.right}
        </p>
      </div>

      {/* Hero kartica */}
      <Reveal className="mx-auto max-w-content">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 sm:px-10 sm:py-16">
          {/* Tehnično ozadje: sij + mreža */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(44rem 26rem at 82% 88%, rgba(79, 70, 229, 0.32), transparent 62%), radial-gradient(34rem 20rem at 10% -10%, rgba(129, 140, 248, 0.16), transparent 60%), radial-gradient(24rem 14rem at 96% 20%, rgba(16, 185, 129, 0.1), transparent 60%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(245,245,244,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,244,0.05) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(70rem 40rem at 80% 100%, black, transparent)",
            }}
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            {/* Besedilo */}
            <div>
              <Reveal>
                <h1 className="max-w-xl text-4xl font-bold text-bodylight sm:text-5xl">
                  {heroSplit.pre}
                  <span className="text-primary-glow">{heroSplit.accent}</span>
                  {heroSplit.post}
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 max-w-md text-base text-mutedark">
                  {heroSplit.paragraph}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    href={heroSplit.primary.href}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-cta transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-glow active:scale-[0.97]"
                  >
                    {heroSplit.primary.label}
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href={heroSplit.secondary.href}
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-body transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.97]"
                  >
                    {heroSplit.secondary.label}
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Tovarna robotkov */}
            <Reveal delay={200}>
              <RobotFactory />
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
