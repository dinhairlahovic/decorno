import { references } from "@/content/site";

type CaseStudy = (typeof references.cases)[number];

/**
 * [PLACEHOLDER] Kartica reference s strukturo Izziv / Rešitev / Rezultat.
 * Din: prave podatke vpiši v content/site.ts (references.cases) —
 * ta komponenta se bo posodobila sama.
 */
export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const { labels, comingSoon } = references;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-body/5 bg-white p-7 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          {/* PLACEHOLDER: logotip stranke — trenutno monogram panoge */}
          <p className="font-display text-base font-bold text-body">
            {caseStudy.client}
          </p>
          <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.12em] text-muted">
            {caseStudy.industry}
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
          {comingSoon}
        </span>
      </div>

      <dl className="space-y-4 border-t border-body/5 pt-6">
        {(
          [
            [labels.challenge, caseStudy.challenge],
            [labels.solution, caseStudy.solution],
            [labels.result, caseStudy.result],
          ] as const
        ).map(([label, value]) => (
          <div key={label}>
            <dt className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {label}
            </dt>
            <dd className="mt-1 text-sm text-muted">{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
