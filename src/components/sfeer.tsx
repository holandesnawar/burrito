"use client";

import { useEffect, useRef } from "react";

const cardsData = [
  { src: "/images/completo.jpg", alt: "Mexicaans menu compleet", speed: 1.0, wide: true },
  { src: "/images/postre.jpg", alt: "Postre artesanal", speed: 0.9 },
  { src: "/images/sala.jpg", alt: "Sala del restaurante", speed: 1.3 },
  { src: "/images/tarta1.jpeg", alt: "Tarta de postre", speed: 0.8 },
  { src: "/images/sala2.jpg", alt: "Ambiente del local", speed: 1.2 },
];

export function Sfeer() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll<HTMLDivElement>(".ba-sfeer-card");
    if (!cards.length) return;

    let ticking = false;

    function updateParallax() {
      const vw = window.innerWidth || 1;

      if (vw < 768) {
        cards.forEach((card) => {
          card.style.transform = "translateY(0px)";
        });
        return;
      }

      const vh = window.innerHeight || 1;
      const center = vh / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = (center - cardCenter) / vh;
        const speed = parseFloat(card.dataset.speed || "1") || 1;
        const move = distance * 22 * speed;

        card.style.transform = `translateY(${move}px)`;
      });
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateParallax);
    updateParallax();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateParallax);
    };
  }, []);

  return (
    <section className="ba-sfeer">
      {/* Botella de Jarritos asomando como detalle Mexicano */}
      <img
        className="ba-jarritos-peek"
        src="/images/jarritos.png"
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
              tot kleurrijke desserts. Scroll door de beelden en proef hoe gezellig
              het is in ons restaurant.
            </p>
            <a href="/over-ons#impressie" className="ba-sfeer-btn">
              Bekijk impressie
            </a>
          </div>

          <div className="ba-sfeer-grid" ref={gridRef}>
            {cardsData.map((card, i) => {
              const reveal = i % 2 === 0 ? "right" : "left";
              return (
                <div
                  key={card.src}
                  className={`ba-sfeer-card reveal reveal-${reveal}${card.wide ? " ba-sfeer-card-wide" : ""}`}
                  data-speed={card.speed.toString()}
                >
                  <img src={card.src} alt={card.alt} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
