import { Mail, MapPinned, Phone } from "lucide-react";

const FORMSPREE_ENDPOINT =
  "https://formspree.io/f/REPLACE_WITH_FORMSPREE_FORM_ID";

export function Contact() {
  return (
    <section id="contact" className="bg-[#f3efe8] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 rounded-[2rem] bg-[#111827] p-8 text-[#f7f3ee] shadow-[0_28px_80px_rgba(17,24,39,0.12)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:p-12">
          <div>
            <h2 className="max-w-lg font-display text-4xl leading-none text-white sm:text-5xl">
              Parlons de votre prochain passage.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#dfe5ee]">
              Indiquez-nous le type de logement ou de local, la fréquence
              souhaitée et vos contraintes horaires. Nous vous répondrons avec
              une proposition adaptée.
            </p>

            <p className="mt-6 max-w-md font-display text-2xl leading-tight text-white">
              Un premier échange suffit pour comprendre votre besoin et trouver
              le bon rythme d’intervention.
            </p>

            <div className="mt-8 space-y-4 border-t border-white/15 pt-6 text-sm text-[#edf1f7]">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#d2b16d]" />
                <a href="tel:0622594679" className="hover:text-white">
                  06 22 59 46 79
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#d2b16d]" />
                <a
                  href="mailto:souad13110@hotmail.fr"
                  className="hover:text-white"
                >
                  souad13110@hotmail.fr
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPinned className="mt-0.5 h-4 w-4 shrink-0 text-[#d2b16d]" />
                <span>
                  Zone d’intervention : Martigues, Port-de-Bouc, Fos-sur-Mer,
                  Côte Bleue
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="space-y-4 text-sm text-[#edf1f7]"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nouvelle demande de contact — ÉCLAT MÉDITERRANÉE"
              />
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#dfe5ee]"
                >
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-white/10 bg-[#f7f4ee] px-4 py-3 text-[#1d2735] outline-none placeholder:text-[#677588]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-[#dfe5ee]"
                >
                  Téléphone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="06 00 00 00 00"
                  className="w-full rounded-xl border border-white/10 bg-[#f7f4ee] px-4 py-3 text-[#1d2735] outline-none placeholder:text-[#677588]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#dfe5ee]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Votre adresse email"
                  className="w-full rounded-xl border border-white/10 bg-[#f7f4ee] px-4 py-3 text-[#1d2735] outline-none placeholder:text-[#677588]"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-[#dfe5ee]"
                >
                  Type de prestation
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-[#f7f4ee] px-4 py-3 text-[#1d2735] outline-none"
                >
                  <option value="" disabled>
                    Choisissez une prestation
                  </option>
                  <option>Entretien de maison ou appartement</option>
                  <option>Nettoyage de bureaux ou locaux professionnels</option>
                  <option>Nettoyage de location saisonnière</option>
                  <option>
                    Remise en état après déménagement ou état des lieux
                  </option>
                  <option>Intervention ponctuelle</option>
                  <option>Contrat régulier</option>
                  <option>Autre demande</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="mb-2 block text-sm font-medium text-[#dfe5ee]"
                >
                  Ville
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  required
                  autoComplete="address-level2"
                  placeholder="Votre ville"
                  className="w-full rounded-xl border border-white/10 bg-[#f7f4ee] px-4 py-3 text-[#1d2735] outline-none placeholder:text-[#677588]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#dfe5ee]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Décrivez votre besoin"
                  className="w-full rounded-xl border border-white/10 bg-[#f7f4ee] px-4 py-3 text-[#1d2735] outline-none placeholder:text-[#677588]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center bg-[#d2b16d] px-5 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#dfc37d]"
              >
                Demander un devis
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
