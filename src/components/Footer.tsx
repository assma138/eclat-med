import logo from "@/assets/logo.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#111827] text-[#e8edf7]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Image
            src={logo}
            alt="Éclat Méditerranée"
            className="h-20 w-auto sm:h-21"
          />
          <p className="mt-3 max-w-xs text-sm leading-6 text-[#dfe5ee]">
            Entretien de logements, locations et locaux professionnels autour de
            Martigues.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-[#d2b16d]">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm text-[#dfe5ee]">
            <li>
              <a
                href="#about"
                className="transition-colors hover:text-[#d2b16d]"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="transition-colors hover:text-[#d2b16d]"
              >
                Prestations
              </a>
            </li>
            <li>
              <a
                href="#commitments"
                className="transition-colors hover:text-[#d2b16d]"
              >
                Engagements
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors hover:text-[#d2b16d]"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/confidentialite"
                className="transition-colors hover:text-[#d2b16d]"
              >
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-[#d2b16d]">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-[#dfe5ee]">
            <li>
              <a
                href="tel:0622594679"
                className="transition-colors hover:text-[#d2b16d]"
              >
                06 22 59 46 79
              </a>
            </li>
            <li>
              <a
                href="mailto:souad13110@hotmail.fr"
                className="transition-colors hover:text-[#d2b16d]"
              >
                souad13110@hotmail.fr
              </a>
            </li>
            <li>Réponse par téléphone ou par email</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-[10px] uppercase tracking-[0.14em] text-[#dfe5ee] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© 2026 Éclat Méditerranée</span>
          <span>Nettoyage & entretien professionnel</span>
        </div>
      </div>
    </footer>
  );
}
