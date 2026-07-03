import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CaseStudyCard from "@/components/CaseStudyCard";
import { references } from "@/content/site";

export const metadata: Metadata = {
  title: "Reference",
  description:
    "Prvi projekti Decerna so v izdelavi — tukaj bodo kmalu prikazani konkretni rezultati naših strank.",
};

export default function ReferencesPage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-content px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
          <Reveal>
            <SectionHeading eyebrow={references.eyebrow} title={references.title} />
            <p className="mt-6 max-w-2xl text-lg text-muted">{references.subtext}</p>
          </Reveal>
        </div>
      </section>

      {/* [PLACEHOLDER] kartice referenc — prave podatke vpiši v content/site.ts */}
      <section className="bg-white/60">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {references.cases.map((caseStudy, i) => (
              <Reveal key={caseStudy.client} delay={i * 120}>
                <CaseStudyCard caseStudy={caseStudy} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Poziv: postanite prva referenca (zeleni poudarek = brezplačna ponudba) */}
      <section>
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <div className="rounded-3xl border border-accent/25 bg-accent-light px-7 py-12 text-center sm:px-12">
              <h2 className="mx-auto max-w-xl text-2xl font-bold text-body sm:text-3xl">
                {references.ctaBox.title}
              </h2>
              <p className="mt-3 text-base text-body/70">
                {references.ctaBox.description}
              </p>
              <Link
                href={references.ctaBox.button.href}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition-[transform,filter] hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.97]"
              >
                {references.ctaBox.button.label}
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
