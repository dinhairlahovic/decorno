import type { Metadata } from "next";
import { Mail, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { contact, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Povejte nam, s čim se ukvarjate — v 24 urah se vam oglasimo. Prvi pogovor je brezplačen.",
};

export default function ContactPage() {
  return (
    <section>
      <div className="mx-auto max-w-content px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <SectionHeading eyebrow={contact.eyebrow} title={contact.title} />
          <p className="mt-4 max-w-xl text-lg text-muted">{contact.intro}</p>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal delay={100}>
            <div className="rounded-3xl border border-body/5 bg-white p-7 shadow-card sm:p-10">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <aside className="rounded-3xl border border-body/5 bg-white/60 p-7 sm:p-8">
              <h2 className="text-lg font-bold text-body">{contact.info.title}</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <Mail size={18} strokeWidth={1.8} />
                  </span>
                  <div>
                    {/* PLACEHOLDER: e-naslov se ureja v content/site.ts */}
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm font-semibold text-body underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <Clock size={18} strokeWidth={1.8} />
                  </span>
                  <p className="text-sm text-muted">{contact.info.responseNote}</p>
                </li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
