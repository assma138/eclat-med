import Image from "next/image";

const serviceDetails = [
  {
    label: "Pour les logements",
    text: "Entretien courant, remise en état et préparation entre deux locations.",
  },
  {
    label: "Pour les professionnels",
    text: "Des passages organisés selon vos locaux, vos horaires et votre activité.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-[#f6f1e8] py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-[#e8dfd2] bg-white shadow-[0_20px_60px_rgba(17,24,39,0.06)] lg:h-[560px]">
          <Image
            src="/images/about.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-[center_34%]"
          />
        </div>

        <div className="flex flex-col justify-center lg:pl-6">
          <h2 className="max-w-2xl font-display text-4xl leading-none text-[#121a27] sm:text-5xl">
            La propreté comme exigence, le confort comme résultat.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#4f5b6d]">
            Éclat Méditerranée assure un service de nettoyage professionnel
            pensé pour les particuliers, les professionnels et les locations
            saisonnières, avec souci du détail et exigence de qualité.
          </p>

          <div className="mt-9 grid gap-4 border-t border-[#d8cfc2] pt-4 sm:grid-cols-[1.15fr_0.85fr] sm:items-end sm:gap-8">
            {serviceDetails.map(({ label, text }) => (
              <div
                key={label}
                className="border-b border-[#d8cfc2] pb-4 first:pb-6 sm:first:pb-7 sm:last:pb-4"
              >
                <p className="font-display text-xl text-[#171d28]">{label}</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[#4f5b6d]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-xl bg-[#111827] p-6 text-[#f7f3ee] sm:p-7 rounded-[1.5rem] shadow-[0_25px_70px_rgba(17,24,39,0.14)]">
            <p className="font-display text-2xl leading-tight">
              Une maison ou un bureau bien entretenu donne immédiatement une
              impression de calme, de sérieux et de bien-être au quotidien.
            </p>
            <p className="mt-4 text-sm text-[#dfe5ee]">
              Un soin particulier est accordé aux détails qui se voient, mais
              aussi à ceux qui facilitent votre quotidien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
