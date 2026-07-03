import Link from "next/link";
import { ArrowRight, ShieldCheck, Timer, Puzzle, BadgeCheck } from "lucide-react";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import AutomationDiagram from "@/components/AutomationDiagram";
import FounderCard from "@/components/FounderCard";
import CTASection from "@/components/CTASection";
import {
  statsStrip,
  trustStrip,
  howItWorks,
  homeProcess,
  servicesPreview,
  services,
  objections,
  about,
  teamSection,
} from "@/content/site";

const objectionIcons = [ShieldCheck, Timer, Puzzle, BadgeCheck];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trak z dejstvi */}
      <section>
        <div className="mx-auto max-w-content px-5 pt-6 sm:px-8">
          <Reveal>
            <dl className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
              {statsStrip.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-bold tracking-tight text-body">
                    {stat.value}
                  </dd>
                  <p className="mt-1.5 max-w-[13rem] font-display text-[11px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Kako deluje: besedilo / diagram / koraki */}
      <section id={howItWorks.id} className="scroll-mt-24 bg-white/60">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="text-center">
              <SectionHeading
                eyebrow={howItWorks.eyebrow}
                title={howItWorks.title}
                className="[&>h2]:mx-auto"
              />
            </div>
          </Reveal>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.15fr_1fr]">
            <Reveal>
              <div>
                <p className="text-base text-muted">{homeProcess.intro}</p>
                <Link
                  href={homeProcess.button.href}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-[transform,background-color] hover:bg-ink-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.97]"
                >
                  {homeProcess.button.label}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <AutomationDiagram vertical />
            </Reveal>

            <Reveal delay={250}>
              <ol className="space-y-7">
                {howItWorks.steps.map((step, i) => (
                  <li key={step.name} className="group">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm font-bold text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-bold text-body transition-colors group-hover:text-primary">
                        {step.name}
                      </h3>
                    </div>
                    <p className="mt-1.5 border-l border-body/10 pl-[2.3rem] text-sm text-muted">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          {/* Trak zaupanja — PLACEHOLDER: logotipi strank pridejo v content/site.ts */}
          <Reveal>
            <p className="mt-16 border-t border-body/5 pt-8 text-center text-sm font-medium text-muted">
              {trustStrip.text}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Storitve — temna sekcija */}
      <section className="bg-ink">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <SectionHeading
                  eyebrow={servicesPreview.eyebrow}
                  title={servicesPreview.title}
                  dark
                />
                <p className="mt-4 max-w-xl text-base text-mutedark">
                  {servicesPreview.intro}
                </p>
              </div>
              <Link
                href={servicesPreview.linkHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-bodylight transition-[transform,background-color,border-color] hover:border-primary-glow hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-glow active:scale-[0.97]"
              >
                {servicesPreview.linkLabel}
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 100}>
                <ServiceCard service={service} dark />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Zakaj Decerno — svetla sekcija s štirimi karticami */}
      <section>
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading eyebrow={objections.eyebrow} title={objections.title} />
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {objections.items.map((item, i) => {
              const Icon = objectionIcons[i % objectionIcons.length];
              return (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="h-full rounded-2xl border border-body/5 bg-white p-7 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>
                    <h3 className="text-base font-bold text-body">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ekipa — temna sekcija */}
      <section className="bg-ink">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <SectionHeading
                  eyebrow={teamSection.eyebrow}
                  title={teamSection.title}
                  dark
                />
                <p className="mt-4 max-w-xl text-base text-mutedark">
                  {teamSection.text}
                </p>
              </div>
              <Link
                href={teamSection.button.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-bodylight transition-[transform,background-color,border-color] hover:border-primary-glow hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-glow active:scale-[0.97]"
              >
                {teamSection.button.label}
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.founders.map((founder, i) => (
              <Reveal key={founder.name} delay={i * 120}>
                <FounderCard {...founder} />
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
