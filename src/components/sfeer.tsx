import Image from "next/image";
import { SfeerGrid } from "./sfeer-grid";

const cards = [
  // Row 1 (6 cards, primero y último son "peek")
  {
    _id: "empanada",
    title: "Empanada",
    image: { _id: "empanada", url: "/images/food/empanada-mexicana.jpg" },
    alt: "Empanada",
  },
  {
    _id: "plato",
    title: "Plato completo",
    image: { _id: "plato", url: "/images/food/plato-completo-mesa.jpg" },
    alt: "Plato Mexicano completo",
  },
  {
    _id: "tacos",
    title: "Tacos",
    image: { _id: "tacos", url: "/images/food/tacos-frescos.jpg" },
    alt: "Tacos frescos",
  },
  {
    _id: "burrito",
    title: "Burrito classic",
    image: { _id: "burrito", url: "/images/food/burrito-classic.jpg" },
    alt: "Burrito classic",
  },
  {
    _id: "nachos",
    title: "Nachos",
    image: { _id: "nachos", url: "/images/food/nachos-con-queso.jpg" },
    alt: "Nachos con queso",
  },
  {
    _id: "tostadas",
    title: "Tostadas",
    image: { _id: "tostadas", url: "/images/food/tostadas-mexicanas.jpg" },
    alt: "Tostadas",
  },
  // Row 2 (6 cards, primero y último son "peek")
  {
    _id: "quesadilla",
    title: "Quesadilla",
    image: { _id: "quesadilla", url: "/images/food/quesadilla.jpg" },
    alt: "Quesadilla",
  },
  {
    _id: "enchiladas",
    title: "Enchiladas",
    image: { _id: "enchiladas", url: "/images/food/enchiladas-mexicanos.jpg" },
    alt: "Enchiladas",
  },
  {
    _id: "tarta",
    title: "Cheesecake",
    image: { _id: "tarta", url: "/images/food/tarta-queso-mango.jpeg" },
    alt: "Cheesecake met mango",
  },
  {
    _id: "postre-fresa",
    title: "Framboos meringue",
    image: { _id: "postre-fresa", url: "/images/food/framboos-meringue.jpg" },
    alt: "Framboos meringue",
  },
  {
    _id: "babaroise",
    title: "Chocolade bavaroise",
    image: { _id: "babaroise", url: "/images/food/babaroise-chocolate.jpg" },
    alt: "Chocolade bavaroise taart",
  },
  {
    _id: "plato-mex",
    title: "Plato Mexicano",
    image: { _id: "plato-mex", url: "/images/food/plato-mexicano.jpg" },
    alt: "Plato Mexicano",
  },
];

export function Sfeer() {
  return (
    <section className="ba-sfeer">
      <SfeerGrid cards={cards} />

      <div className="ba-sfeer-bottom">
        <div className="ba-sfeer-bottom-inner">
          <div className="ba-sfeer-text-block">
            <p className="ba-sfeer-kicker">Sfeerimpressie</p>
            <h2 className="ba-sfeer-title">
              Alsof Burrito Azteca <br /> bij jou thuis is
            </h2>
            <p className="ba-sfeer-text">
              Neem alvast een kijkje in onze sfeer. Van dampende burrito&rsquo;s
              tot kleurrijke desserts. Scroll door de beelden en proef hoe
              gezellig het is in ons restaurant.
            </p>
            <a href="/sfeerimpressie" className="ba-sfeer-btn">
              <span>Bekijk impressie</span>
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="ba-sfeer-bottom-photo">
            <Image
              src="/images/restaurant/mesa.jpg"
              alt="Mesa van Burrito Azteca"
              fill
              sizes="(max-width: 767px) 90vw, (max-width: 1023px) 40vw, 360px"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
