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
    caption: "Tostadas",
  },
  {
    src: "/images/food/tarta-queso-mango.jpeg",
    alt: "Cheesecake met mango",
    caption: "Cheesecake met mango",
  },
  {
    src: "/images/food/postre-platano.jpg",
    alt: "Huisgemaakt dessert met banaan",
    caption: "Postre met banaan",
  },
  {
    src: "/images/food/canelones-mexicanos.jpg",
    alt: "Mexicaanse canelones",
    caption: "Canelones",
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
    src: "/images/food/postre-fresa-chocolate.jpg",
    alt: "Aardbeien dessert met chocolade",
    caption: "Aardbeien dessert",
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
            <p className="ba-sfeerimpressie-kicker">Sfeerimpressie</p>
            <h1 className="ba-sfeerimpressie-title">
              Een kijkje bij Burrito Azteca
            </h1>
            <p className="ba-sfeerimpressie-text">
              Onze gerechten, onze sfeer en onze passie voor de Mexicaanse keuken.
              Beweeg over de foto&rsquo;s om er meer over te ontdekken.
            </p>
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
