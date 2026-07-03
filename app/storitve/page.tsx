import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import {
  servicesPage,
  services,
  pricing,
  objections,
  about,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Storitve",
  description:
    "Avtomatizacije po meri: komunikacija s strankami, AI asistenti, notranje operative in integracije med orodji.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Uvod */}
      <section>
        <div className="mx-auto max-w-content px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
          <Reveal>
            <SectionHeading eyebrow={servicesPage.eyebrow} title={servicesPage.title} />
            <p className="mt-6 max-w-2xl text-lg text-muted">{servicesPage.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Kategorije storitev */}
      <section className="bg-white/60">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 100}>
                <ServiceCard
                  service={service}
                  detailed
                  labels={{
                    bestFor: servicesPage.bestForLabel,
                    example: servicesPage.exampleLabel,
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cenovni model + ponudba za prvih 5 strank */}
      <section>
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <div>
                <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} />
                <p className="mt-6 max-w-xl text-base text-muted">
                  {pricing.description}
                </p>
                <ul className="mt-8 space-y-3.5">
                  {pricing.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                        <Check size={13} strokeWidth={2.5} />
                      </span>
                      <span className="text-sm text-body/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Poudarjena ponudba — edino mesto, kjer zeleni poudarek nosi glavno vlogo */}
            <Reveal delay={150}>
              <div className="rounded-3xl border border-accent/25 bg-accent-light p-8 shadow-offer">
                <span className="inline-block rounded-full bg-accent px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
                  {pricing.offer.badge}
                </span>
                <h3 className="mt-5 text-2xl font-bold text-body">
                  {pricing.offer.title}
                </h3>
                <p className="mt-3 text-sm text-body/70">
                  {pricing.offer.description}
                </p>
                <Link
                  href={pricing.offer.cta.href}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-[transform,filter] hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.97]"
                >
                  {pricing.offer.cta.label}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Odgovori na pomisleke */}
      <section className="bg-white/60">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading eyebrow={objections.eyebrow} title={objections.title} />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {objections.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-body/5 bg-white p-7 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <h3 className="text-base font-bold text-body">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
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
