import type { Metadata } from "next";
import { Salsa, Inter } from "next/font/google";
import "./globals.css";
import { FloatingReserveer } from "@/components/floating-reserveer";
import { VakantiePopup } from "@/components/vakantie-popup";
import { restaurant } from "@/lib/restaurant";

const salsa = Salsa({
  variable: "--font-salsa",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Burrito Azteca | De Mexicaan van Kampen",
  description:
    "Authentieke Mexicaanse keuken in het hart van Kampen. Burritos, quesadillas, fajitas en meer. Reserveer of bestel online.",
  metadataBase: new URL("https://burrito-azteca.nl"),
  alternates: { canonical: "/" },
};

// Datos estructurados (schema.org/Restaurant) para Google: horario, dirección,
// teléfono, reservas y menú. Se valida en https://validator.schema.org/
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  url: restaurant.siteUrl,
  image: `${restaurant.siteUrl}/logo.png`,
  telephone: restaurant.contact.phoneHref.replace("tel:", ""),
  email: restaurant.contact.email,
  servesCuisine: "Mexicaans",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.address.street,
    postalCode: restaurant.address.postal,
    addressLocality: restaurant.address.city,
    addressCountry: "NL",
  },
  hasMenu: `${restaurant.siteUrl}/menukaart`,
  acceptsReservations: restaurant.reservation.url,
  sameAs: [restaurant.social.instagram, restaurant.social.facebook],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Sunday"], opens: "16:30", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "16:30", closes: "21:30" },
  ],
  // Cierre por vacaciones (opens = closes = 00:00 significa "gesloten").
  ...(restaurant.holiday.enabled && {
    specialOpeningHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        validFrom: restaurant.holiday.from,
        validThrough: restaurant.holiday.to,
        opens: "00:00",
        closes: "00:00",
      },
    ],
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${salsa.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-light text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <FloatingReserveer />
        <VakantiePopup />
      </body>
    </html>
  );
}
