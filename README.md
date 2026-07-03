# Decerno — spletna stran

Marketinška stran agencije Decerno. Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Zagon lokalno

```bash
npm install
npm run dev
```

Stran je nato na voljo na [http://localhost:3000](http://localhost:3000).

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
| **Kontaktni obrazec → e-pošta/CRM** | `app/api/contact/route.ts` — glej `TODO` komentar (Resend, EmailJS …) |

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
