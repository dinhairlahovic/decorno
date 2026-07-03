/**
 * Centralizirana vsebina strani.
 * Vse slovensko besedilo urejaj tukaj — komponente same ne vsebujejo besedila.
 * Elementi, označeni s "PLACEHOLDER", potrebujejo prave podatke.
 */

export const site = {
  name: "Decerno",
  tagline: "AI avtomatizacije po meri za slovenska podjetja.",
  // PLACEHOLDER: zamenjaj s pravim e-naslovom podjetja
  email: "info@decerno.si",
  // PLACEHOLDER: dodaj prave povezave do družbenih omrežij
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  url: "https://decerno.si", // PLACEHOLDER: prava domena po registraciji
};

export const nav = {
  links: [
    { label: "Domov", href: "/" },
    { label: "Storitve", href: "/storitve" },
    { label: "O nas", href: "/o-nas" },
    { label: "Reference", href: "/reference" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  cta: { label: "Brezplačna konzultacija", href: "/kontakt" },
};

export const hero = {
  headline: "Avtomatizacije, ki vašemu podjetju prihranijo ure vsak teden.",
  subheadline:
    "Decerno gradi AI avtomatizacije po meri za podjetja. Manj ročnega dela, več časa za stranke.",
  primaryCta: { label: "Rezerviraj brezplačen klic", href: "/kontakt" },
  secondaryCta: { label: "Poglej, kako deluje ↓", href: "#kako-deluje" },
  // Koraki v animiranem diagramu avtomatizacije (signature element)
  pipeline: ["Novo povpraševanje", "AI obdelava", "Potrditev stranki", "Vpis v koledar"],
};

export const trustStrip = {
  text: "Pridružite se prvim strankam, s katerimi gradimo naš portfolio.",
  // PLACEHOLDER: ko bodo na voljo, dodaj logotipe strank v /public in jih navedi tukaj
  logos: [] as { src: string; alt: string }[],
};

export const howItWorks = {
  id: "kako-deluje",
  eyebrow: "Kako deluje",
  title: "Od pogovora do delujoče avtomatizacije v treh korakih.",
  steps: [
    {
      name: "Pogovor",
      description:
        "Spoznamo vaš proces. V kratkem klicu ugotovimo, kje izgubljate največ časa in kaj se da avtomatizirati.",
    },
    {
      name: "Gradnja",
      description:
        "Zgradimo avtomatizacijo po meri z uporabo Claude Code — prilagojeno vašim orodjem in načinu dela.",
    },
    {
      name: "Zagon",
      description:
        "Avtomatizacija steče. Vi prihranite čas, mi pa poskrbimo, da vse deluje zanesljivo tudi naprej.",
    },
  ],
};

export const servicesPreview = {
  eyebrow: "Storitve",
  title: "Kaj avtomatiziramo.",
  intro:
    "Vsaka avtomatizacija je zgrajena po meri — za vaš proces, vaša orodja in vaše stranke.",
  linkLabel: "Vse storitve",
  linkHref: "/storitve",
};

export const exampleSection = {
  eyebrow: "Primer iz prakse",
  title: "Takole steče avtomatska rezervacija.",
  description:
    "Od povpraševanja do vpisa v koledar — brez enega samega klika z vaše strani.",
};

/** Mikro-vrstica med navigacijo in herojem */
export const topStrip = {
  left: "AI avtomatizacije po meri za vaše podjetje",
  right: "Ljubljana, Slovenija",
};

/** Velika hero kartica (temna, z vodnim žigom in steklenimi karticami) */
export const heroCard = {
  watermark: "DECERNO",
  label: "Avtomatizacije, ki delajo namesto vas",
  cards: [
    {
      title: "Prihranek časa",
      text: "Ure ročnega dela vsak teden prevzame sistem.",
    },
    {
      title: "Delovanje 24/7",
      text: "Avtomatizacije tečejo tudi izven delovnega časa.",
    },
  ],
  cta: { label: "Rezerviraj brezplačen klic", href: "/kontakt" },
};

/** Deljena naslovna sekcija pod hero kartico — poudarjen del naslova */
export const heroSplit = {
  pre: "Avtomatizacije, ki vašemu podjetju ",
  accent: "prihranijo ure",
  post: " vsak teden.",
  paragraph:
    "Decerno gradi AI avtomatizacije po meri za podjetja. Manj ročnega dela, več časa za stranke — brez tehničnega znanja z vaše strani.",
  primary: { label: "Rezerviraj brezplačen klic", href: "/kontakt" },
  secondary: { label: "Poglej storitve", href: "/storitve" },
};

/** Trak z dejstvi — brez izmišljenih številk, samo preverljiva dejstva */
export const statsStrip = [
  { value: "3", label: "ustanovitelji, en cilj: vrniti vam čas" },
  { value: "Tedni", label: "od pogovora do delujoče avtomatizacije" },
  { value: "24/7", label: "delovanje — tudi ko spite" },
  { value: "5", label: "brezplačnih mest za prve stranke" },
];

/** Tristolpčna procesna sekcija (besedilo / diagram / koraki) */
export const homeProcess = {
  intro:
    "Vse tehnično prevzamemo mi. Vi opišete svoj proces po domače, mi ga prevedemo v delujočo avtomatizacijo — zgrajeno okoli vaših orodij in vaših strank.",
  button: { label: "Več o nas", href: "/o-nas" },
};

/** Sekcija ekipe na domači strani */
export const teamSection = {
  eyebrow: "Ekipa",
  title: "Spoznajte ekipo.",
  text: "Trije soustanovitelji, ki z vsako stranko delamo neposredno — brez posrednikov.",
  button: { label: "Več o nas", href: "/o-nas" },
};

export type Service = {
  slug: string;
  icon: "calendar" | "bot" | "clipboard" | "plug";
  title: string;
  short: string;
  description: string;
  bestFor: string;
  example: string;
};

export const services: Service[] = [
  {
    slug: "komunikacija",
    icon: "calendar",
    title: "Avtomatizacija komunikacije s strankami",
    short: "Avtomatizacija naročil in rezervacij",
    description:
      "Potrditve rezervacij, opomniki pred terminom in odgovori na pogosta vprašanja — vse teče samodejno, brez da bi kdo tipkal.",
    bestFor: "Restavracije, frizerske salone, terapevte in vse, ki delajo s termini.",
    example:
      "Stranka rezervira termin, sistem samodejno pošlje potrditev, dan prej pa še opomnik. Manj neprihodov, nič ročnega dela.",
  },
  {
    slug: "asistenti",
    icon: "bot",
    title: "AI klepetalni asistenti za stranke",
    short: "AI klepetalni asistenti za stranke",
    description:
      "Asistent, ki pozna vašo ponudbo in odgovarja strankam 24/7 — na spletni strani, po e-pošti ali v sporočilih.",
    bestFor: "Podjetja, ki dobivajo veliko ponavljajočih se vprašanj.",
    example:
      "Gost vpraša za odpiralni čas, meni ali prosto mizo ob 22h zvečer — asistent odgovori takoj, vi pa zjutraj vidite samo povzetek.",
  },
  {
    slug: "operativa",
    icon: "clipboard",
    title: "Notranje operativne avtomatizacije",
    short: "Avtomatizacija administrativnih opravil",
    description:
      "Razporejanje, opozorila o zalogi, tedenska poročila — administrativna opravila, ki jih nihče ne mara, opravi sistem.",
    bestFor: "Ekipe, ki vsak teden izgubijo ure za ponavljajočo se administracijo.",
    example:
      "Vsak ponedeljek ob 8h vas čaka samodejno pripravljeno poročilo o prometu in zalogi — brez preglednic in kopiranja.",
  },
  {
    slug: "integracije",
    icon: "plug",
    title: "Integracije po meri",
    short: "Integracije med orodji",
    description:
      "Povežemo orodja, ki jih že uporabljate — koledar, CRM, račune, e-pošto — da podatki tečejo samodejno, brez prepisovanja.",
    bestFor: "Marketinške agencije in podjetja z več nepovezanimi orodji.",
    example:
      "Nova stranka v CRM samodejno dobi pogodbo, račun in uvodni e-mail — trije koraki, ki so prej vzeli pol ure, zdaj trajajo nič.",
  },
];

export const servicesPage = {
  eyebrow: "Storitve",
  title: "Avtomatizacije po meri, ne škatlaste rešitve.",
  intro:
    "Decerno ne prodaja gotove programske opreme. Vsako avtomatizacijo zgradimo po meri — okoli vašega procesa, vaših orodij in vaših strank. Vi poveste, kje izgubljate čas; mi zgradimo sistem, ki to delo prevzame.",
  bestForLabel: "Primerno za",
  exampleLabel: "Primer uporabe",
};

export const pricing = {
  eyebrow: "Cena",
  title: "Preprost model, prilagojen obsegu.",
  description:
    "Delamo po modelu projektna cena + mesečna naročnina, prilagojena obsegu avtomatizacije. Brez skritih stroškov — pred začetkom vedno veste, koliko in za kaj.",
  points: [
    "Projektna cena za postavitev avtomatizacije",
    "Mesečna naročnina za delovanje, vzdrževanje in izboljšave",
    "Obseg in cena dogovorjena vnaprej, pisno",
  ],
  offer: {
    badge: "Za prvih 5 strank",
    title: "Prva avtomatizacija brezplačno.",
    description:
      "Gradimo portfolio — zato prvih 5 strank dobi prvo avtomatizacijo brezplačno. Vi dobite delujoč sistem, mi referenco.",
    cta: { label: "Rezerviraj svoje mesto", href: "/kontakt" },
  },
};

export const objections = {
  eyebrow: "Pogosta vprašanja",
  title: "Brez skrbi — to ni projekt za IT oddelek.",
  items: [
    {
      title: "Ni potrebno tehnično znanje z vaše strani",
      description:
        "Vse tehnično prevzamemo mi. Vi opišete svoj proces po domače, mi ga prevedemo v delujočo avtomatizacijo.",
    },
    {
      title: "Postavitev v tednih, ne mesecih",
      description:
        "Prva delujoča različica je običajno pripravljena v nekaj tednih. Gradimo hitro in sproti preverjamo z vami.",
    },
    {
      title: "Dela z orodji, ki jih že uporabljate",
      description:
        "Ne uvajamo novih sistemov po nepotrebnem — avtomatizacije povežemo z vašim obstoječim koledarjem, e-pošto ali CRM.",
    },
    {
      title: "Če ne deluje, ne plačate",
      description:
        "Avtomatizacijo predamo šele, ko dela to, kar smo se dogovorili. Rezultat je vedno preverljiv v praksi.",
    },
  ],
};

export const about = {
  eyebrow: "O nas",
  title: "Mlada ekipa, ki verjame, da AI ni samo za velike.",
  story: [
    "Decerno smo ustanovili Din, Ažbe in Pero — trije devetnajstletniki iz Slovenije, ki smo odraščali z orodji, o katerih večina podjetij šele bere.",
    "Videli smo, da praktične AI avtomatizacije dobivajo predvsem velika podjetja z velikimi proračuni. Lokalna restavracija, frizerski salon ali manjša agencija pa še naprej ročno potrjuje termine in prepisuje podatke med preglednicami.",
    "To želimo spremeniti. Smo zgodnja, majhna in izrazito \"hands-on\" ekipa — kar pomeni, da z vsako stranko delamo neposredno, brez posrednikov in brez korporativnega leporečja.",
  ],
  foundersTitle: "Ekipa",
  founders: [
    {
      name: "Din",
      role: "Tehnični soustanovitelj",
      focus: "Razvoj produkta in avtomatizacij",
      initials: "D",
    },
    {
      name: "Ažbe",
      role: "Tehnični soustanovitelj",
      focus: "Razvoj produkta in avtomatizacij",
      initials: "A",
    },
    {
      name: "Pero",
      role: "Vodja ekipe",
      focus: "Prodaja, trženje in odnosi s strankami",
      initials: "P",
    },
  ],
  philosophy: {
    eyebrow: "Naša filozofija",
    title: "Trije principi, po katerih delamo.",
    principles: [
      {
        title: "Gradimo hitro",
        description:
          "Prvo delujočo različico vidite v tednih. Hitre iteracije pomenijo, da napake odkrijemo zgodaj — in jih zgodaj popravimo.",
      },
      {
        title: "Prilagojeno vsaki stranki",
        description:
          "Nobena predloga, nobena škatlasta rešitev. Vsaka avtomatizacija je zgrajena okoli vašega procesa.",
      },
      {
        title: "Transparentnost skozi ves proces",
        description:
          "Vedno veste, kaj gradimo, zakaj in koliko stane. Brez presenečenj na računu.",
      },
    ],
  },
  cta: {
    title: "Poglejmo, kaj lahko avtomatiziramo pri vas.",
    description: "Prvi pogovor je brezplačen in brez obveznosti.",
    button: { label: "Stopite v stik", href: "/kontakt" },
  },
};

export const references = {
  eyebrow: "Reference",
  title: "Naše reference",
  subtext:
    "Trenutno gradimo naše prve projekte. Tukaj bodo kmalu prikazani konkretni rezultati naših strank.",
  labels: { challenge: "Izziv", solution: "Rešitev", result: "Rezultat" },
  comingSoon: "Kmalu",
  // PLACEHOLDER: Din — ko bodo prvi projekti končani, zamenjaj spodnje kartice s pravimi podatki.
  cases: [
    {
      client: "Restavracija — v izdelavi",
      industry: "Gostinstvo",
      challenge: "Ročno potrjevanje rezervacij in pogosti neprihodi gostov.",
      solution: "Samodejne potrditve in opomniki prek e-pošte in SMS.",
      result: "Konkretne številke bodo objavljene ob zaključku projekta.",
    },
    {
      client: "Frizerski salon — v izdelavi",
      industry: "Storitve",
      challenge: "Termini po telefonu med delom s strankami.",
      solution: "AI asistent za naročanje, ki dela tudi izven delovnega časa.",
      result: "Konkretne številke bodo objavljene ob zaključku projekta.",
    },
    {
      client: "Marketinška agencija — v izdelavi",
      industry: "Marketing",
      challenge: "Ure tedensko za ročna poročila strankam.",
      solution: "Samodejna mesečna poročila iz oglaševalskih platform.",
      result: "Konkretne številke bodo objavljene ob zaključku projekta.",
    },
  ],
  ctaBox: {
    title: "Želite biti ena od naših prvih referenc?",
    description: "Prva izkušnja je brezplačna.",
    button: { label: "Stopite v stik", href: "/kontakt" },
  },
};

export const contact = {
  eyebrow: "Kontakt",
  title: "Povejte nam, s čim se ukvarjate.",
  intro: "V 24 urah se vam oglasimo.",
  form: {
    name: { label: "Ime", placeholder: "Vaše ime" },
    company: { label: "Podjetje", placeholder: "Ime podjetja" },
    email: { label: "E-pošta", placeholder: "ime@podjetje.si" },
    phone: { label: "Telefon (neobvezno)", placeholder: "+386 40 123 456" },
    industry: {
      label: "Panoga",
      placeholder: "Izberite panogo",
      options: ["Restavracija", "Frizerski salon", "Marketinška agencija", "Drugo"],
    },
    message: {
      label: "Sporočilo",
      placeholder: "Opišite, kje izgubljate največ časa …",
    },
    submit: "Pošlji povpraševanje",
    sending: "Pošiljanje …",
    success: {
      title: "Povpraševanje poslano.",
      description: "Hvala! Oglasimo se vam v 24 urah.",
    },
    error:
      "Pri pošiljanju je prišlo do napake. Poskusite znova ali nam pišite neposredno na e-pošto.",
    validation: {
      name: "Vpišite svoje ime.",
      company: "Vpišite ime podjetja.",
      email: "Vpišite veljaven e-poštni naslov.",
      industry: "Izberite panogo.",
      message: "Napišite kratko sporočilo.",
    },
  },
  info: {
    title: "Raje pišete neposredno?",
    responseNote: "Običajno odgovorimo v enem delovnem dnevu.",
  },
};

export const footer = {
  tagline: "AI avtomatizacije po meri za slovenska podjetja.",
  navTitle: "Povezave",
  contactTitle: "Kontakt",
  legal: `© ${new Date().getFullYear()} Decerno. Vse pravice pridržane.`,
};
