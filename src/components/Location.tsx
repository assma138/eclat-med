import { MapPin, PhoneCall } from "lucide-react";

const locations = ["Martigues", "Port-de-Bouc", "Fos-sur-Mer", "Côte Bleue"];

export function Location() {
  return (
    <section id="location" className="bg-[#f7f4ee] py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8">
        <div className="pt-2">
          <div className="mb-5 flex items-center gap-3 text-[#9a7440]">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">Une présence locale</span>
          </div>

          <h2 className="max-w-2xl font-display text-5xl leading-[0.94] text-[#121a27] sm:text-6xl">
            Martigues
            <span className="mt-3 block text-3xl text-[#9a7440] sm:text-4xl">
              et ses environs
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#4f5b6d]">
            Nous intervenons dans ces quatre secteurs pour l’entretien courant,
            les locations saisonnières et les remises en état.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-1 border-t border-[#d8cfc2] pt-2 text-base text-[#1d2735] sm:grid-cols-3">
            {locations.slice(1).map((location) => (
              <span
                key={location}
                className="border-b border-[#d8cfc2] py-4 font-display last:border-b-0 sm:border-b-0 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0"
              >
                {location}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#111827] p-8 text-[#f7f3ee] shadow-[0_25px_70px_rgba(17,24,39,0.14)] sm:p-10">
          <div className="mb-5 text-sm font-medium text-[#d2b16d]">
            Pour organiser un passage
          </div>

          <p className="text-lg leading-8 text-[#dfe5ee]">
            Appelez-nous pour préciser le type de lieu, la fréquence des
            passages et les horaires qui vous conviennent.
          </p>

          <div className="mt-8 border-t border-white/15 pt-5">
            <div className="flex items-center gap-3 text-[#dfe5ee]">
              <PhoneCall className="h-4 w-4 text-[#d2b16d]" />
              <span className="text-sm text-[#dfe5ee]">Téléphone</span>
            </div>
            <a
              href="tel:0622594679"
              className="mt-2 block text-2xl font-semibold text-white hover:text-[#eed7a9]"
            >
              06 22 59 46 79
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
