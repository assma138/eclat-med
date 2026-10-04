import {
  BriefcaseBusiness,
  Building2,
  CheckCheck,
  House,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    icon: House,
    title: "Entretien de maisons et appartements",
    description:
      "Un entretien régulier pour préserver la propreté de votre logement au quotidien.",
    price: "À partir de 20 €",
  },
  {
    icon: Building2,
    title: "Bureaux et locaux professionnels",
    description:
      "Des espaces de travail impeccables, propres et accueillants pour votre activité.",
    price: "À partir de 25 €",
  },
  {
    icon: Sparkles,
    title: "Locations saisonnières / Airbnb",
    description:
      "Gestion du nettoyage et préparation de logements Airbnb avec un standard propre et professionnel.",
    price: "À partir de 30 €",
  },
  {
    icon: CheckCheck,
    title: "Remise en état après déménagement ou état des lieux",
    description:
      "Nettoyage complet pour des biens prêts à être livrés ou à être remis en location.",
    price: "À partir de 4 €/m²",
  },
  {
    icon: BriefcaseBusiness,
    title: "Interventions ponctuelles ou contrats réguliers",
    description:
      "Des prestations ciblées selon vos besoins, sans engagement excessif ni délai inutile.",
    price: "Tarif personnalisé sur devis",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#f7f4ee] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-none text-[#121a27] sm:text-5xl">
            Ce que nous prenons en charge
          </h2>
          <p className="mt-5 text-base leading-7 text-[#4f5b6d]">
            Des passages réguliers ou une remise en état précise, selon le
            logement, le local et le moment où vous avez besoin de nous.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map(({ icon: Icon, title, description, price }) => (
            <article
              key={title}
              className="min-h-[310px] rounded-[1.6rem] border border-[#e4d6be] bg-white p-7 shadow-[0_14px_40px_rgba(17,24,39,0.02)] sm:p-8"
            >
              <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0e4bf] text-[#162033]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="max-w-[14rem] text-xl font-semibold leading-7 text-[#121a27]">
                {title}
              </h3>
              <p className="mt-3 text-sm font-semibold leading-5 text-[#a47a32]">
                {price}
              </p>
              <p className="mt-4 text-sm leading-6 text-[#5a6678]">
                {description}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm font-medium text-[#5a6678]">Devis gratuit</p>
      </div>
    </section>
  );
}
