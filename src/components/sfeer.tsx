import { SfeerGrid } from "./sfeer-grid";

const cards = [
  {
    _id: "plato",
    title: "Plato completo",
    wide: true,
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
    _id: "canelones",
    title: "Canelones",
    image: { _id: "canelones", url: "/images/food/canelones-mexicanos.jpg" },
    alt: "Canelones mexicanos",
  },
  {
    _id: "nachos",
    title: "Nachos",
    image: { _id: "nachos", url: "/images/food/nachos-con-queso.jpg" },
    alt: "Nachos con queso",
  },
  {
    _id: "postre-fresa",
    title: "Postre con fresa",
    image: { _id: "postre-fresa", url: "/images/food/postre-fresa-chocolate.jpg" },
    alt: "Postre con fresa y chocolate",
  },
];

export function Sfeer() {
  return (
    <section className="ba-sfeer">
      <img
        className="ba-jarritos-peek"
        src="/images/brand/jarritos-bottles.png"
        alt=""
        aria-hidden="true"
      />
      <div className="ba-sfeer-inner">
        <div className="ba-sfeer-layout">
          <div className="ba-sfeer-head">
            <p className="ba-sfeer-kicker">SFEERIMPRESSIE</p>
            <h2 className="ba-sfeer-title">
              Alsof Burrito Azteca <br /> bij jou thuis is
            </h2>
            <p className="ba-sfeer-text">
              Neem alvast een kijkje in onze sfeer. Van dampende burrito&rsquo;s
              tot kleurrijke desserts. Scroll door de beelden en proef hoe
              gezellig het is in ons restaurant.
            </p>
            <a href="/sfeerimpressie" className="ba-sfeer-btn">
              Bekijk impressie
            </a>
          </div>

          <SfeerGrid cards={cards} />
        </div>
      </div>
    </section>
  );
}
