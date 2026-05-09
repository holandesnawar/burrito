"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type SfeerCard = {
  _id: string;
  title: string;
  image: { _id: string; url: string };
  alt: string;
};

export function SfeerGrid({ cards }: { cards: SfeerCard[] }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const row1 = wrap.querySelector<HTMLDivElement>(".ba-sfeer-row-1");
    const row2 = wrap.querySelector<HTMLDivElement>(".ba-sfeer-row-2");
    if (!row1 || !row2) return;

    let ticking = false;

    function update() {
      if (!wrap || !row1 || !row2) return;
      const vw = window.innerWidth || 1;

      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Progreso del 0 al 1 según cuánto ha pasado el wrap por la viewport.
      const total = vh + rect.height;
      const seen = vh - rect.top;
      const t = Math.max(0, Math.min(1, seen / total));
      // Centramos la animación: -0.5 a +0.5 → ±amp
      const centered = t - 0.5;
      // Mobile usa amplitud menor para no romper layout (las cards ya
      // sobresalen por la derecha como peek)
      const amp = vw < 768 ? 50 : 90;
      // Row 1 → de izquierda a derecha (translateX positivo cuando avanzamos)
      row1.style.transform = `translateX(${(centered * amp).toFixed(1)}px)`;
      // Row 2 → al revés
      row2.style.transform = `translateX(${(-centered * amp).toFixed(1)}px)`;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Dividir las cards en 2 filas (mitad y mitad)
  const half = Math.ceil(cards.length / 2);
  const row1 = cards.slice(0, half);
  const row2 = cards.slice(half);

  return (
    <div className="ba-sfeer-grid-wrap" ref={wrapRef}>
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
