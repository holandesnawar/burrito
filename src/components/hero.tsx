"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { restaurant } from "@/lib/restaurant";

const VIDEO_VERTICAL = "/images/restaurant/hero-vertical.mp4";
const VIDEO_HORIZONTAL = "/images/restaurant/hero-horizontal.mp4";

export function Hero() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-aspect-ratio: 1/1)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Zoom on scroll: as the user scrolls the hero out, the videos scale up
  // giving the feeling of stepping into the restaurant.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let ticking = false;

    const update = () => {
      const rect = hero.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when fully in view, 1 when fully scrolled past
      const t = Math.min(Math.max(-rect.top / vh, 0), 1);
      const scale = 1 + t * 0.18; // up to 1.18×
      const main = hero.querySelector<HTMLVideoElement>(".ba-hero-video-main");
      const bg = hero.querySelector<HTMLVideoElement>(".ba-hero-video-bg");
      if (main) main.style.transform = `scale(${scale.toFixed(3)})`;
      // bg already has scale(1.18) baseline → add the same delta
      if (bg) bg.style.transform = `scale(${(1.18 + t * 0.18).toFixed(3)})`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  // Mientras detecta, no renderizar vídeo (evita carga doble innecesaria).
  // El bg oscuro del .ba-hero queda hasta que monta.
  const src = isDesktop ? VIDEO_HORIZONTAL : VIDEO_VERTICAL;

  return (
    <section ref={heroRef} className="ba-hero">
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
        <p className="ba-hero-eyebrow">{restaurant.name} · sinds 2017</p>
        <h1 className="ba-hero-title">{restaurant.tagline}</h1>

        <div className="ba-hero-info" aria-label="Restaurant info">
          <p className="ba-hero-address">
            {restaurant.address.street}, {restaurant.address.city}
          </p>
          <p className="ba-hero-hours">
            <span>Di t/m Do</span>
            <span>16:30 — 21:00</span>
          </p>
          <p className="ba-hero-hours">
            <span>Vr t/m Za</span>
            <span>16:30 — 21:30</span>
          </p>
          <p className="ba-hero-hours">
            <span>Zondag</span>
            <span>16:30 — 21:00</span>
          </p>
          <p className="ba-hero-hours ba-hero-hours-closed">
            <span>Maandag</span>
            <span>Gesloten</span>
          </p>
        </div>

        <div className="ba-hero-ctas">
          <Link href="/menukaart" className="ba-cta-lg-secondary">
            <span>Bekijk de menukaart</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
