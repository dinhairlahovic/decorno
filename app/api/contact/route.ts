import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";

/**
 * Sprejme povpraševanje iz kontaktnega obrazca in ga pošlje po e-pošti
 * na naslov podjetja (site.email = decernoai@gmail.com) prek Resend.
 *
 * Nastavitev: v okoljsko spremenljivko RESEND_API_KEY vpiši API ključ iz
 * resend.com (lokalno v .env.local, na produkciji v Vercel → Settings →
 * Environment Variables). Brez verificirane domene Resend dostavlja samo
 * na e-naslov, s katerim je registriran Resend račun — zato mora biti to
 * decernoai@gmail.com.
 */

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

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

  const name = (data.name as string).trim();
  const company = (data.company as string).trim();
  const email = (data.email as string).trim();
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const industry = (data.industry as string).trim();
  const message = (data.message as string).trim();

  const apiKey = process.env.RESEND_API_KEY;

  // Brez ključa (npr. lokalni razvoj) obrazca ne blokiramo — zabeležimo in
  // vrnemo uspeh, a opozorimo, da e-pošta ni bila poslana.
  if (!apiKey) {
    console.warn(
      "[kontakt] RESEND_API_KEY ni nastavljen — e-pošta NI bila poslana. Povpraševanje:",
      { name, company, email, phone, industry, message },
    );
    return NextResponse.json({ ok: true });
  }

  const rows: [string, string][] = [
    ["Ime", name],
    ["Podjetje", company],
    ["E-pošta", email],
    ["Telefon", phone || "—"],
    ["Panoga", industry],
  ];

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #111114; max-width: 560px;">
      <h2 style="margin: 0 0 16px; font-size: 18px;">Novo povpraševanje z decerno.si</h2>
      <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr>
                 <td style="padding: 6px 12px 6px 0; color: #5C5C66; white-space: nowrap; vertical-align: top;">${label}</td>
                 <td style="padding: 6px 0;">${escapeHtml(value)}</td>
               </tr>`,
          )
          .join("")}
      </table>
      <p style="margin: 16px 0 6px; color: #5C5C66; font-size: 13px;">Sporočilo:</p>
      <p style="margin: 0; white-space: pre-wrap; font-size: 14px;">${escapeHtml(message)}</p>
    </div>
  `;

  const text = [
    "Novo povpraševanje z decerno.si",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Sporočilo:",
    message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      // Sandbox pošiljatelj deluje brez lastne domene. Ko bo domena
      // verificirana na Resend, zamenjaj z npr. "kontakt@decerno.si".
      from: "Decerno kontakt <onboarding@resend.dev>",
      to: site.email,
      replyTo: email,
      subject: `Novo povpraševanje — ${name}${company ? ` (${company})` : ""}`,
      html,
      text,
    });

    if (error) {
      console.error("[kontakt] Napaka pri pošiljanju prek Resend:", error);
      return NextResponse.json(
        { ok: false, error: "Pošiljanje ni uspelo." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[kontakt] Nepričakovana napaka pri pošiljanju:", err);
    return NextResponse.json(
      { ok: false, error: "Pošiljanje ni uspelo." },
      { status: 500 },
    );
  }
}
