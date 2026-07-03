import { Calendar, Bot, ClipboardList, Plug, type LucideIcon } from "lucide-react";
import type { Service } from "@/content/site";

const iconMap: Record<Service["icon"], LucideIcon> = {
  calendar: Calendar,
  bot: Bot,
  clipboard: ClipboardList,
  plug: Plug,
};

/**
 * Kartica storitve — `detailed` doda "primerno za" in primer uporabe (stran
 * Storitve), `dark` je različica za temne sekcije.
 */
export default function ServiceCard({
  service,
  detailed = false,
  dark = false,
  labels,
}: {
  service: Service;
  detailed?: boolean;
  dark?: boolean;
  labels?: { bestFor: string; example: string };
}) {
  const Icon = iconMap[service.icon];

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 ${
        dark
          ? "border border-white/10 bg-ink-soft hover:border-primary-glow/40"
          : "border border-body/5 bg-white shadow-card hover:shadow-card-hover"
      }`}
    >
      <span
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
          dark
            ? "bg-primary/20 text-primary-glow group-hover:bg-primary group-hover:text-white"
            : "bg-primary-light text-primary group-hover:bg-primary group-hover:text-white"
        }`}
      >
        <Icon size={22} strokeWidth={1.8} />
      </span>
      <h3 className={`text-lg font-bold ${dark ? "text-bodylight" : "text-body"}`}>
        {detailed ? service.title : service.short}
      </h3>
      <p className={`mt-2.5 text-sm ${dark ? "text-mutedark" : "text-muted"}`}>
        {service.description}
      </p>

      {detailed && labels && (
        <dl className="mt-6 space-y-4 border-t border-body/5 pt-6">
          <div>
            <dt className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {labels.bestFor}
            </dt>
            <dd className="mt-1 text-sm text-muted">{service.bestFor}</dd>
          </div>
          <div>
            <dt className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {labels.example}
            </dt>
            <dd className="mt-1 text-sm text-muted">{service.example}</dd>
          </div>
        </dl>
      )}
    </article>
  );
}
