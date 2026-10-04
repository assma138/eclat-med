import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Éclat Méditerranée | Nettoyage & entretien professionnel",
  description:
    "Éclat Méditerranée propose des services de nettoyage et d’entretien professionnel pour les particuliers, professionnels et locations saisonnières.",
  openGraph: {
    title: "Éclat Méditerranée | Nettoyage & entretien professionnel",
    description:
      "Éclat Méditerranée propose des services de nettoyage et d’entretien professionnel pour les particuliers, professionnels et locations saisonnières.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Éclat Méditerranée — Nettoyage & entretien professionnel",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Éclat Méditerranée | Nettoyage & entretien professionnel",
    description:
      "Éclat Méditerranée propose des services de nettoyage et d’entretien professionnel pour les particuliers, professionnels et locations saisonnières.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
