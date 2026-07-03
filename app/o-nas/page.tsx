import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FounderCard from "@/components/FounderCard";
import CTASection from "@/components/CTASection";
import { about } from "@/content/site";

export const metadata: Metadata = {
  title: "O nas",
  description:
    "Din, Ažbe in Pero — mlada slovenska ekipa, ki prinaša praktične AI avtomatizacije lokalnim podjetjem.",
};

export default function AboutPage() {
  return (
    <>
      {/* Zgodba */}
      <section>
        <div className="mx-auto max-w-content px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
          <Reveal>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          </Reveal>
          <div className="mt-8 max-w-2xl space-y-5">
            {about.story.map((paragraph, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="text-base text-muted sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ekipa — temna sekcija */}
      <section className="bg-ink">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading eyebrow={about.eyebrow} title={about.foundersTitle} dark />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.founders.map((founder, i) => (
              <Reveal key={founder.name} delay={i * 120}>
                <FounderCard {...founder} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Filozofija */}
      <section>
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading
              eyebrow={about.philosophy.eyebrow}
              title={about.philosophy.title}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {about.philosophy.principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 120}>
                <div className="h-full rounded-2xl border border-body/5 bg-white p-7 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <h3 className="text-lg font-bold text-body">{principle.title}</h3>
                  <p className="mt-2.5 text-sm text-muted">{principle.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={about.cta.title}
        description={about.cta.description}
        buttonLabel={about.cta.button.label}
        buttonHref={about.cta.button.href}
      />
    </>
  );
}
