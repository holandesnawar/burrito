import { restaurant } from "@/lib/restaurant";

export function Promos() {
  return (
    <section className="ba-promos" aria-labelledby="ba-promos-title">
      <div className="ba-promos-inner">
        <p className="ba-promos-kicker">Voordelen</p>
        <h2 id="ba-promos-title" className="ba-promos-title">
          Twee redenen om hier te eten
        </h2>

        <div className="ba-promos-grid">
          {/* Card 1: 10% korting via website */}
          <article className="ba-promo-card ba-promo-card-online">
            <div className="ba-promo-card-icon" aria-hidden>
              {/* shopping bag icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <div className="ba-promo-card-body">
              <p className="ba-promo-card-eyebrow">Bestel online</p>
              <h3 className="ba-promo-card-title">10% korting via onze website</h3>
              <p className="ba-promo-card-text">
                Bestellen via onze eigen website is goedkoper. Gebruik de code{" "}
                <span className="ba-promo-code">AZTECA10</span> en profiteer van
                10% korting op je bestelling.
              </p>
              <a
                href={restaurant.delivery.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ba-promo-card-cta"
              >
                <span>Bestellen</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </article>

          {/* Card 2: €10 korting bij Natuur Therapie */}
          <article className="ba-promo-card ba-promo-card-massage">
            <div className="ba-promo-card-icon" aria-hidden>
              {/* leaf / wellness icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 014 13c0-3.5 1.5-6.5 6-9 4.5 2.5 6 5.5 6 9a7 7 0 01-5 7" />
                <path d="M11 20l1-9" />
              </svg>
            </div>
            <div className="ba-promo-card-body">
              <p className="ba-promo-card-eyebrow">Eet & ontspan</p>
              <h3 className="ba-promo-card-title">€10 korting op een massage</h3>
              <p className="ba-promo-card-text">
                Na het eten bij Burrito Azteca krijg je{" "}
                <span className="ba-promo-highlight">€10 korting</span> op een
                massage bij Natuur Therapie. Toon je bon en geniet van de rust.
              </p>
              <a
                href="https://natuurtherapie.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="ba-promo-card-cta"
              >
                <span>Meer info</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
