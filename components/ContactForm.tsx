"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { contact } from "@/content/site";

type Errors = Partial<Record<"name" | "company" | "email" | "industry" | "message", string>>;
type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-body/10 bg-white px-4 py-3 text-sm text-body placeholder:text-muted/60 transition-[border-color,box-shadow] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function ContactForm() {
  const { form } = contact;
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const el = e.currentTarget;
    const data = Object.fromEntries(new FormData(el)) as Record<string, string>;

    const nextErrors: Errors = {};
    if (!data.name?.trim()) nextErrors.name = form.validation.name;
    if (!data.company?.trim()) nextErrors.company = form.validation.company;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email ?? "")) {
      nextErrors.email = form.validation.email;
    }
    if (!data.industry) nextErrors.industry = form.validation.industry;
    if (!data.message?.trim()) nextErrors.message = form.validation.message;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Napaka strežnika (${res.status})`);
      setStatus("success");
      el.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-3 rounded-2xl border border-accent/20 bg-accent-light p-8 shadow-offer"
      >
        <CheckCircle2 className="text-accent" size={28} />
        <h3 className="text-xl font-bold text-body">{form.success.title}</h3>
        <p className="text-sm text-muted">{form.success.description}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={form.name.label} error={errors.name} htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            placeholder={form.name.placeholder}
            aria-invalid={!!errors.name}
            className={inputClasses}
          />
        </Field>
        <Field label={form.company.label} error={errors.company} htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            placeholder={form.company.placeholder}
            aria-invalid={!!errors.company}
            className={inputClasses}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={form.email.label} error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            placeholder={form.email.placeholder}
            aria-invalid={!!errors.email}
            className={inputClasses}
          />
        </Field>
        <Field label={form.phone.label} htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder={form.phone.placeholder}
            className={inputClasses}
          />
        </Field>
      </div>

      <Field label={form.industry.label} error={errors.industry} htmlFor="industry">
        <select
          id="industry"
          name="industry"
          defaultValue=""
          aria-invalid={!!errors.industry}
          className={inputClasses}
        >
          <option value="" disabled>
            {form.industry.placeholder}
          </option>
          {form.industry.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label={form.message.label} error={errors.message} htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={form.message.placeholder}
          aria-invalid={!!errors.message}
          className={`${inputClasses} resize-y`}
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="flex items-start gap-2 text-sm text-red-600">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          {form.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-cta transition-[transform,background-color,opacity] hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? form.sending : form.submit}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-body"
      >
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
