import Link from "next/link";

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[#f3efe8] text-[#1d2735]">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <Link
          href="/"
          className="text-sm font-medium text-[#6f5a2f] transition hover:text-[#1d2735]"
        >
          ← Retour au site
        </Link>

        <div className="mt-12">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#9a7a3f]">
            Éclat Méditerranée
          </p>

          <h1 className="mt-4 font-display text-4xl leading-tight text-[#111827] sm:text-5xl">
            Politique de confidentialité
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#536174]">
            Cette page présente les informations relatives à la collecte et à
            l’utilisation des données personnelles transmises via le site
            Éclat Méditerranée.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          <section>
            <h2 className="font-display text-2xl text-[#111827]">
              Responsable du traitement
            </h2>
            <p className="mt-3 leading-7 text-[#536174]">
              Les informations concernant le responsable du traitement et ses
              coordonnées seront précisées ici.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#111827]">
              Données collectées
            </h2>
            <p className="mt-3 leading-7 text-[#536174]">
              Lorsque vous utilisez le formulaire de contact, certaines
              informations peuvent être collectées afin de permettre à
              Éclat Méditerranée de répondre à votre demande.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#111827]">
              Finalité du traitement
            </h2>
            <p className="mt-3 leading-7 text-[#536174]">
              Les données transmises via le formulaire sont utilisées pour
              traiter votre demande et vous recontacter au sujet de votre
              besoin.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#111827]">
              Vos droits
            </h2>
            <p className="mt-3 leading-7 text-[#536174]">
              Conformément à la réglementation applicable en matière de
              protection des données personnelles, vous disposez de droits sur
              vos données. Les modalités permettant de les exercer seront
              précisées ici.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[#111827]">
              Contact
            </h2>
            <p className="mt-3 leading-7 text-[#536174]">
              Pour toute question concernant vos données personnelles, vous
              pourrez contacter Éclat Méditerranée à l’adresse indiquée sur le
              site.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}