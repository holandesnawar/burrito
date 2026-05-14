import Image from "next/image";
import { restaurant } from "@/lib/restaurant";

export function Promos() {
  return (
    <section className="ba-promos" aria-labelledby="ba-promos-title">
      <div className="ba-promos-inner">
        <p className="ba-promos-kicker">Voordelen</p>
        <h2 id="ba-promos-title" className="ba-promos-title">
          Bestel slim, profiteer dubbel
        </h2>

        <div className="ba-promos-grid">
          {/* Hero card: 10% korting via website — coupon style */}
          <article className="ba-promo-hero" aria-labelledby="ba-promo-hero-title">
            <span className="ba-promo-hero-punch ba-promo-hero-punch-l" aria-hidden />
            <span className="ba-promo-hero-punch ba-promo-hero-punch-r" aria-hidden />
            <div className="ba-promo-hero-content">
              <p className="ba-promo-hero-eyebrow">Bestel direct via ons</p>
              <h3 id="ba-promo-hero-title" className="ba-promo-hero-title">
                10% korting met de code
              </h3>
              <span className="ba-promo-hero-code" aria-label="kortingscode AZTECA10">
                AZTECA10
              </span>
              <p className="ba-promo-hero-text">
                Gebruik de code bij het afrekenen.
              </p>
              <a
                href={restaurant.delivery.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ba-promo-hero-cta"
              >
                <span>Bestellen</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </article>

          {/* Perk card: €10 korting bij Natuur Therapie */}
          <article className="ba-promo-perk" aria-labelledby="ba-promo-perk-title">
            <div className="ba-promo-perk-photo">
              <Image
                src="/images/promos/natuur-therapie.webp"
                alt="Natuur Therapie — massage"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="ba-promo-perk-img"
              />
            </div>
            <div className="ba-promo-perk-body">
              <p className="ba-promo-perk-eyebrow">Massages met Claudia</p>
              <h3 id="ba-promo-perk-title" className="ba-promo-perk-title">
                €10 korting op een massage
              </h3>
              <p className="ba-promo-perk-text">
                Na het eten krijg je{" "}
                <span className="ba-promo-highlight">€10 korting</span> op een
                massage bij Natuur Therapie. Toon je bon en geniet van de rust.
              </p>
              <a
                href="https://natuurtherapieclaudia.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="ba-promo-perk-cta"
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
