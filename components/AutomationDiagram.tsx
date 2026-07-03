import { Inbox, Sparkles, MailCheck, CalendarCheck } from "lucide-react";
import { hero } from "@/content/site";

const icons = [Inbox, Sparkles, MailCheck, CalendarCheck];

/**
 * Signature element strani: diagram resnične avtomatizacije,
 * po katerem potuje utrip (glej .connector-dot v globals.css).
 */
export default function AutomationDiagram({
  vertical = false,
}: {
  /** Prisili navpično postavitev (npr. v ozkem stolpcu) */
  vertical?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-body/5 bg-white/70 p-6 shadow-card backdrop-blur-sm transition-shadow duration-300 hover:shadow-card-hover sm:p-8">
      <p className="mb-8 font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        Primer: avtomatska rezervacija
      </p>

      {/* Desktop: vodoravna veriga */}
      <ol className={vertical ? "hidden" : "hidden items-stretch gap-0 md:flex"}>
        {hero.pipeline.map((step, i) => {
          const Icon = icons[i % icons.length];
          const last = i === hero.pipeline.length - 1;
          return (
            <li key={step} className="flex flex-1 items-center">
              <div className="group flex w-full max-w-[11rem] flex-col items-center gap-3 text-center">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ring-0 transition-[transform,box-shadow] duration-300 group-hover:-translate-y-1 ${
                    last
                      ? "bg-accent-light text-accent group-hover:shadow-offer"
                      : "bg-primary-light text-primary group-hover:shadow-card-hover"
                  }`}
                >
                  <Icon size={24} strokeWidth={1.8} />
                </span>
                <span className="text-sm font-medium leading-snug text-body/80 transition-colors group-hover:text-body">
                  {step}
                </span>
              </div>
              {!last && (
                <div className="connector relative mx-1 mb-8 h-px flex-1 self-center bg-body/10">
                  <span
                    className="connector-dot absolute -top-[2.5px] left-0 h-1.5 w-1.5 rounded-full bg-primary"
                    style={{ animationDelay: `${i * 1.4}s`, animationDuration: "4.2s" }}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Mobilni ali prisiljeno navpičen seznam */}
      <ol className={vertical ? "flex flex-col gap-0" : "flex flex-col gap-0 md:hidden"}>
        {hero.pipeline.map((step, i) => {
          const Icon = icons[i % icons.length];
          const last = i === hero.pipeline.length - 1;
          return (
            <li key={step}>
              <div className="flex items-center gap-3.5">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    last
                      ? "bg-accent-light text-accent"
                      : "bg-primary-light text-primary"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <span className="text-sm font-medium text-body/80">{step}</span>
              </div>
              {!last && <div className="ml-5 h-6 w-px bg-body/10" />}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
