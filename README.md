# Decerno — spletna stran

Marketinška stran agencije Decerno. Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Zagon lokalno

```bash
npm install
npm run dev
```

Stran je nato na voljo na [http://localhost:3000](http://localhost:3000).

## Kontaktni obrazec (pošiljanje e-pošte)

Obrazec pošlje povpraševanje na `decernoai@gmail.com` prek [Resend](https://resend.com). Za delovanje potrebuješ API ključ:

1. Registriraj se na [resend.com](https://resend.com) z naslovom **decernoai@gmail.com**.
2. **API Keys → Create API Key**, kopiraj ključ (`re_…`).
3. **Lokalno:** skopiraj `.env.example` v `.env.local` in vpiši ključ:
   ```bash
   cp .env.example .env.local
   # nato v .env.local: RESEND_API_KEY=re_...
   ```
4. **Na Vercel:** projekt → **Settings → Environment Variables** → dodaj `RESEND_API_KEY` (za Production) in ponovno deployaj.

Brez verificirane domene Resend dostavlja samo na e-naslov, s katerim je registriran račun — zato mora to biti `decernoai@gmail.com`. Za pošiljanje z lastne domene (npr. `kontakt@decerno.si`) verificiraj domeno v Resend in posodobi polje `from` v `app/api/contact/route.ts`.

> Če `RESEND_API_KEY` ni nastavljen, obrazec še vedno deluje, a e-pošta se ne pošlje — povpraševanje se le zabeleži v strežniški dnevnik.

## Objava na Vercel

1. Potisni repozitorij na GitHub.
2. Na [vercel.com](https://vercel.com) izberi **Add New → Project** in poveži repozitorij.
3. Vercel samodejno zazna Next.js — brez dodatnih nastavitev klikni **Deploy**.

Za lastno domeno: v Vercelu **Settings → Domains** in po registraciji domene posodobi `site.url` v `content/site.ts`.

## Kje se kaj ureja

| Kaj | Kje |
| --- | --- |
| **Vsa besedila (slovenska)** | `content/site.ts` — vse strani berejo besedilo od tu |
| **Barve** | `tailwind.config.ts` (`theme.extend.colors`) |
| **Pisave** | `app/layout.tsx` (`next/font` — Space Grotesk + Inter) |
| **Logo** | `components/Navbar.tsx` in `components/Footer.tsx` (trenutno besedilni logo) |
| **E-naslov, družbena omrežja** | `content/site.ts` (`site.email`, `site.socials`) — označeno s `PLACEHOLDER` |
| **Reference / študije primerov** | `content/site.ts` (`references.cases`) — zamenjaj placeholder kartice |
| **Kontaktni obrazec → e-pošta** | `app/api/contact/route.ts` (pošiljanje prek Resend) + `RESEND_API_KEY` — glej razdelek zgoraj |

## Struktura

```
app/            strani (App Router) + API ruta za kontakt + sitemap/robots
components/     Navbar, Footer, Hero, ServiceCard, ContactForm …
content/site.ts centralizirana vsebina — besedilo urejaj tukaj
```

## Iskanje placeholderjev

Vse, kar potrebuje prave podatke, je označeno v kodi:

```bash
grep -rn "PLACEHOLDER" app components content
```
