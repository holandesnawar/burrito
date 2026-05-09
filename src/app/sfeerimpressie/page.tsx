import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Sfeerimpressie | Burrito Azteca Kampen",
  description:
    "Een sfeerimpressie van Burrito Azteca: authentieke Mexicaanse gerechten en de gezellige sfeer van ons restaurant in Kampen.",
};

const photos = [
  {
    src: "/images/food/empanada-mexicana.jpg",
    alt: "Verse empanada",
    caption: "Empanadas",
  },
  {
    src: "/images/food/tostadas-mexicanas.jpg",
    alt: "Mexicaanse tostadas",
    caption: "Tostadas krokant of zacht",
  },
  {
    src: "/images/food/tarta-queso-mango.jpeg",
    alt: "Passie/Mango kwarktaart",
    caption: "Passie/Mango kwarktaart",
  },
  {
    src: "/images/food/babaroise-chocolate.jpg",
    alt: "Chocolade bavaroise taart handmade",
    caption: "Chocolade bavaroise taart handmade",
  },
  {
    src: "/images/food/enchiladas-mexicanos.jpg",
    alt: "Enchiladas",
    caption: "Enchiladas",
  },
  {
    src: "/images/food/burrito-classic.jpg",
    alt: "Burrito classic",
    caption: "Burrito classic",
  },
  {
    src: "/images/food/plato-mexicano.jpg",
    alt: "Plato Mexicano",
    caption: "Plato Mexicano",
  },
  {
    src: "/images/food/framboos-meringue.jpg",
    alt: "Framboos meringue gebak glutenvrij",
    caption: "Framboos meringue gebak glutenvrij",
  },
  {
    src: "/images/food/nachos-con-queso.jpg",
    alt: "Nachos met kaas",
    caption: "Nachos con queso",
  },
];

export default function SfeerimpressiePage() {
  return (
    <main className="flex-1">
      <Header />

      <section className="ba-sfeerimpressie">
        <div className="ba-sfeerimpressie-inner">
          <div className="ba-sfeerimpressie-head">
            <h1 className="ba-sfeerimpressie-title">Sfeerimpressie</h1>
          </div>

          <div className="ba-sfeerimpressie-grid">
            {photos.map((photo) => (
              <figure key={photo.src} className="ba-sfeerimpressie-card">
                <div className="ba-sfeerimpressie-img">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </div>
                <figcaption className="ba-sfeerimpressie-caption">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
