import { NextResponse } from "next/server";

/**
 * Sprejme povpraševanje iz kontaktnega obrazca.
 *
 * TODO: tukaj priklopi pošiljanje e-pošte ali CRM —
 * npr. Resend (https://resend.com), EmailJS ali webhook v CRM.
 * Ciljni naslov za povpraševanja je decernoai@gmail.com.
 * Podatki so validirani in na voljo v spremenljivki `data` spodaj.
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Neveljavna zahteva." },
      { status: 400 },
    );
  }

  const required = ["name", "company", "email", "industry", "message"] as const;
  const missing = required.filter(
    (field) => typeof data[field] !== "string" || !(data[field] as string).trim(),
  );
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Manjkajoča polja: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  // Trenutno samo zabeležimo povpraševanje v strežniški dnevnik.
  console.log("[kontakt] Novo povpraševanje:", data);

  return NextResponse.json({ ok: true });
}
