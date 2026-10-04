"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Accueil", href: "#top" },
  { label: "À propos", href: "#about" },
  { label: "Prestations", href: "#services" },
  { label: "Engagements", href: "#commitments" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111827]/90 text-[#f5efe7] backdrop-blur-md">
      <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center px-4 py-3 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <a
          href="#top"
          className="justify-self-start leading-none"
          aria-label="Accueil Éclat Méditerranée"
        >
          <Image
            src={logo}
            alt="Éclat Méditerranée"
            className="h-10 w-auto sm:h-12"
          />
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-[#e9e2d6] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="tel:0622594679"
          className="hidden justify-self-end rounded-full border border-[#d2b16d]/40 bg-[#d2b16d] px-4 py-2 text-sm font-semibold text-[#101827] transition hover:bg-[#e0c17d] lg:inline-flex"
        >
          06 22 59 46 79
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-white/15 text-[#f5efe7] transition hover:border-[#d2b16d]/60 hover:text-[#d2b16d] lg:hidden"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`max-h-0 overflow-hidden border-t border-white/10 px-4 transition-[max-height,opacity] duration-200 lg:hidden ${
          isMenuOpen ? "max-h-[30rem] opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col py-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              tabIndex={isMenuOpen ? 0 : -1}
              className="border-b border-white/10 px-2 py-3 text-sm font-medium text-[#e9e2d6] transition hover:text-[#d2b16d]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:0622594679"
            tabIndex={isMenuOpen ? 0 : -1}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-[#d2b16d] px-4 py-3 text-sm font-semibold text-[#101827] transition hover:bg-[#e0c17d]"
            onClick={() => setIsMenuOpen(false)}
          >
            06 22 59 46 79
          </a>
        </div>
      </div>
    </header>
  );
}
