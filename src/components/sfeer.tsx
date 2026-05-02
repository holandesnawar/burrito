import { SfeerGrid } from "./sfeer-grid";

const cards = [
  {
    _id: "1",
    title: "Plato completo",
    wide: true,
    image: { _id: "1", url: "/images/food/plato-completo-mesa.jpg" },
    alt: "Plato Mexicano completo",
  },
  {
    _id: "2",
    title: "Postre",
    image: { _id: "2", url: "/images/food/postre-fresa-chocolate.jpg" },
    alt: "Postre artesanal",
  },
  {
    _id: "3",
    title: "Tacos",
    image: { _id: "3", url: "/images/food/tacos-frescos.jpg" },
    alt: "Tacos frescos",
  },
  {
    _id: "4",
    title: "Tarta",
    image: { _id: "4", url: "/images/food/tarta-queso-mango.jpeg" },
    alt: "Tarta de queso",
  },
  {
    _id: "5",
    title: "Nachos",
    image: { _id: "5", url: "/images/food/nachos-con-queso.jpg" },
    alt: "Nachos",
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
            <a href="/over-ons#impressie" className="ba-sfeer-btn">
              Bekijk impressie
            </a>
          </div>

          <SfeerGrid cards={cards} />
        </div>
      </div>
    </section>
  );
}
