import Image from "next/image";

type SfeerCard = {
  _id: string;
  image: { _id: string; url: string };
  alt: string;
};

export function SfeerGrid({ cards }: { cards: SfeerCard[] }) {

  // Dividir las cards en 2 filas (mitad y mitad)
  const half = Math.ceil(cards.length / 2);
  const row1 = cards.slice(0, half);
  const row2 = cards.slice(half);

  return (
    <div className="ba-sfeer-grid-wrap">
      <div className="ba-sfeer-row ba-sfeer-row-1">
        {row1.map((card) => (
          <div key={card._id} className="ba-sfeer-card">
            <Image
              src={card.image.url}
              alt={card.alt}
              fill
              sizes="(max-width: 767px) 35vw, (max-width: 1023px) 22vw, 18vw"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="ba-sfeer-row ba-sfeer-row-2">
        {row2.map((card) => (
          <div key={card._id} className="ba-sfeer-card">
            <Image
              src={card.image.url}
              alt={card.alt}
              fill
              sizes="(max-width: 767px) 35vw, (max-width: 1023px) 22vw, 18vw"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
