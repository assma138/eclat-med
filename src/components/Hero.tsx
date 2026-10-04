import { ArrowRight, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const assurancePoints = [
  "Entretien de maisons et appartements",
  "Nettoyage de bureaux et locaux professionnels",
  "Locations saisonnières et états des lieux",
  "Interventions ponctuelles ou régulières",
];

export function Hero() {
  return (
    <section id="top" className="bg-[#f5f1e8] text-[#171d28]">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-14 lg:pt-20">
        <div className="grid items-center gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="max-w-[31rem] lg:pb-4">
            <div className="mb-7 text-sm font-medium text-[#9a7440]">
              Nettoyage & entretien professionnel
            </div>

            <h1 className="font-display max-w-[29rem] text-[clamp(2.75rem,13vw,3.45rem)] leading-[0.96] text-[#171d28] sm:text-[4.25rem] lg:text-[4.75rem]">
              Un environnement impeccable, un service exigeant.
            </h1>

            <p className="mt-7 max-w-[28rem] text-base leading-7 text-[#54607a] sm:text-lg sm:leading-8">
              Prestations rigoureuses de nettoyage et d’entretien à domicile et
              pour vos locaux, dans la région de Martigues, Port-de-Bouc,
              Fos-sur-Mer et la Côte Bleue.
            </p>

            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a
                href="tel:0622594679"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d2b16d] px-6 py-3.5 text-sm font-semibold text-[#111827] transition hover:bg-[#dfc37d]"
              >
                <Phone className="h-4 w-4" />
                Appelez-nous
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-b border-[#d2b16d]/60 pb-1 text-sm font-semibold text-[#171d28] transition hover:border-[#d2b16d] hover:text-[#9a7440]"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-[#54607a]">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#d2b16d]" />
              <span>
                Disponible sur Martigues, Port-de-Bouc, Fos-sur-Mer et Côte
                Bleue
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#d7d0c4] bg-[#efe8dc] p-2.5 shadow-[0_30px_80px_rgba(17,24,39,0.16)]">
            <div className="relative h-[360px] overflow-hidden rounded-[1.35rem] sm:h-[500px] lg:h-[560px]">
              <Image
                src="/images/hero.jpg"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-[center_58%]"
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-[1.15rem] border border-white/10 bg-[#111827]/90 p-4 text-[#f7f3ee] shadow-lg sm:bottom-7 sm:left-7 sm:right-7">
              <div className="mb-3 flex items-center gap-3 text-[#d2b16d]">
                <MapPin className="h-4 w-4" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                  Zone d’intervention
                </span>
              </div>
              <div className="grid gap-2 text-sm sm:grid-cols-2">
                <span>Martigues</span>
                <span>Port-de-Bouc</span>
                <span>Fos-sur-Mer</span>
                <span>Côte Bleue</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#d7d0c4] bg-[#f4efe7] text-[#171d28]">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-4 py-5 text-sm sm:px-6 lg:px-8">
          {assurancePoints.map((point) => (
            <p key={point} className="text-[#4f5b6d]">
              {point}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
