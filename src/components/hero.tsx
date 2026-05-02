"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { restaurant } from "@/lib/restaurant";

const VIDEO_VERTICAL = "/images/entrando.mp4";
const VIDEO_HORIZONTAL = "/images/horizontal.mp4";

export function Hero() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-aspect-ratio: 1/1)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Mientras detecta, no renderizar vídeo (evita carga doble innecesaria).
  // El bg oscuro del .ba-hero queda hasta que monta.
  const src = isDesktop ? VIDEO_HORIZONTAL : VIDEO_VERTICAL;

  return (
    <section className="ba-hero">
      {isDesktop !== null && (
        <>
          <video
            key={`bg-${src}`}
            className="ba-hero-video-bg"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          >
            <source src={src} type="video/mp4" />
          </video>

          <video
            key={`main-${src}`}
            className="ba-hero-video-main"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={src} type="video/mp4" />
          </video>
        </>
      )}

      <div className="ba-hero-overlay" />

      <div className="ba-hero-content">
        <p className="ba-hero-eyebrow">
          {restaurant.address.city} · sinds 2017
        </p>
        <h1 className="ba-hero-title">{restaurant.tagline}</h1>
        <p className="ba-hero-text">
          Authentieke Mexicaanse keuken met verse ingrediënten, warme kruiden en
          een vleugje fiësta in elk gerecht.
        </p>

        <div className="ba-hero-ctas">
          <Link href="/menukaart" className="ba-cta-lg-secondary">
            <span>Bekijk de menukaart</span>
            <span aria-hidden>→</span>
          </Link>
          <a
            href={restaurant.delivery.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ba-cta-lg"
          >
            <span>Bestellen</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
