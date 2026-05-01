"use client";

import { useRef } from "react";

function useTilt() {
  const ref = useRef<HTMLDivElement | null>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateZ(0)`;
  }
  function onLeave() {
    if (ref.current) ref.current.style.transform = "";
  }
  return { ref, onMove, onLeave };
}

function TiltImage({
  src,
  alt,
  reveal,
}: {
  src: string;
  alt: string;
  reveal: "right" | "left";
}) {
  const { ref, onMove, onLeave } = useTilt();
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`ba-food-img reveal reveal-${reveal} tilt-3d`}
    >
      <img src={src} alt={alt} />
    </div>
  );
}

export function MexicanClassics() {
  return (
    <section className="ba-food-mocktails">
      <div className="ba-food-inner">
        <div className="ba-food-images">
          <TiltImage
            src="/images/burrito.jpg"
            alt="Burrito recién hecho"
            reveal="right"
          />
          <TiltImage
            src="/images/plato.jpg"
            alt="Plato mexicano de Burrito Azteca"
            reveal="left"
          />
        </div>

        <div className="ba-food-copy">
          <p className="ba-food-kicker">FOOD &amp; DRINKS</p>
          <h2 className="ba-food-title">Mexicaanse klassiekers, modern geserveerd</h2>
          <p className="ba-food-text">
            Van rijkgevulde burrito&rsquo;s en knapperige quesadilla&rsquo;s tot frisse
            mocktails en huisgemaakte desserts. Alles wordt met zorg geserveerd
            in onze warme, moderne zaak in het hart van Kampen.
          </p>
          <a href="/menukaart" className="ba-food-btn">
            <span>Bekijk het menu</span><span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
