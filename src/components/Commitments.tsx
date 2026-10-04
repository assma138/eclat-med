import { Clock3, Lock, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Commitment = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const commitments: Commitment[] = [
  {
    icon: Sparkles,
    title: "Travail soigné et méthodique",
    description:
      "Chaque intervention est réalisée avec précision, dans le respect des consignes et des attentes.",
  },
  {
    icon: Clock3,
    title: "Respect des délais convenus",
    description:
      "L’organisation et la disponibilité sont pensées pour tenir les engagements pris.",
  },
  {
    icon: Lock,
    title: "Discrétion et professionnalisme",
    description:
      "Un cadre de confiance et une attitude respectueuse dans chaque intervention.",
  },
  {
    icon: ShieldCheck,
    title: "Exigence constante de qualité",
    description:
      "Le soin du détail et la qualité de service sont au cœur de chaque mission.",
  },
];

export function Commitments() {
  return (
    <section id="commitments" className="bg-[#111827] py-24 text-[#f7f3ee]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-none text-white sm:text-5xl">
            Ce que vous pouvez attendre de nous
          </h2>
          <p className="mt-5 text-base leading-7 text-[#dfe5ee]">
            La même attention portée aux lieux, aux consignes et aux horaires,
            qu’il s’agisse d’un passage régulier ou d’une remise en état.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {commitments.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="min-h-[300px] rounded-[1.6rem] border border-white/10 bg-white/5 p-7 shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:p-8"
            >
              <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d2b16d] text-[#111827]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="max-w-[15rem] text-2xl font-semibold leading-7 text-white">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#dfe5ee]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
