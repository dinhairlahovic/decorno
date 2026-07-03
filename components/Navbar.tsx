"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6">
      <nav
        className="mx-auto flex h-14 max-w-content items-center justify-between rounded-full border border-body/5 bg-white/85 pl-5 pr-2 shadow-card backdrop-blur-md"
        aria-label="Glavna navigacija"
      >
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-body transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {site.name}
          <span className="text-primary">.</span>
        </Link>

        {/* Sredinski "pill" meni — aktivna povezava dobi temno tabletko */}
        <ul className="hidden items-center gap-1 rounded-full bg-body/[0.05] p-1 lg:flex">
          {nav.links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                    active
                      ? "bg-ink text-white"
                      : "text-body/70 hover:bg-white hover:text-body"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={nav.cta.href}
            className="hidden items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-cta transition-[transform,background-color] hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.97] md:inline-flex"
          >
            {nav.cta.label}
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Zapri meni" : "Odpri meni"}
            className="rounded-full p-2.5 text-body transition-colors hover:bg-body/5 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary active:scale-95 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-content rounded-2xl border border-body/5 bg-white p-4 shadow-card lg:hidden">
          <ul className="flex flex-col gap-1">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-3 py-2.5 text-base font-medium transition-colors hover:bg-primary-light hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                    pathname === link.href ? "bg-body/5 text-primary" : "text-body/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-cta transition-[transform,background-color] hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98]"
          >
            {nav.cta.label}
          </Link>
        </div>
      )}
    </header>
  );
}
