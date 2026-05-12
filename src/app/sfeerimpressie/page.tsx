import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Sfeerimpressie | Burrito Azteca Kampen",
  description:
    "Een sfeerimpressie van Burrito Azteca: authentieke Mexicaanse gerechten en de gezellige sfeer van ons restaurant in Kampen.",
};

const photos = [
  {
    src: "/images/food/burrito-classic.jpg",
    alt: "Burrito classic",
    caption: "Burrito classic",
  },
  {
    src: "/images/food/quesadilla.jpg",
    alt: "Quesadilla",
    caption: "Quesadilla",
  },
  {
    src: "/images/food/plato-salmon.jpg",
    alt: "Plato met zalm",
    caption: "Plato met zalm",
  },
  {
    src: "/images/food/tarta-queso-mango.jpeg",
    alt: "Passie/Mango kwarktaart",
    caption: "Passie/Mango kwarktaart",
  },
  {
    src: "/images/food/bebida.png",
    alt: "Verfrissende drank",
    caption: "Verfrissende drank",
  },
  {
    src: "/images/food/jarritos.png",
    alt: "Jarritos Mexicaanse frisdrank",
    caption: "Jarritos frisdrank",
  },
  {
    src: "/images/food/babaroise-chocolate.jpg",
    alt: "Chocolade bavaroise taart",
    caption: "Chocolade bavaroise taart",
  },
  {
    src: "/images/food/nachos-con-queso.jpg",
    alt: "Nachos met kaas",
    caption: "Nachos con queso",
  },
  {
    src: "/images/food/tres-leches.jpg",
    alt: "Tres leches dessert",
    caption: "Tres leches",
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
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 767px) 92vw, (max-width: 1023px) 45vw, 380px"
                    loading="lazy"
                  />
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
