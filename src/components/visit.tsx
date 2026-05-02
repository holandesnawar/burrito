"use client";

import { useEffect, useRef } from "react";
import { restaurant } from "@/lib/restaurant";

export function Visit() {
  const photoRef = useRef<HTMLDivElement | null>(null);

  // Scroll zoom-out: la foto entra zoomeada y se asienta a normal
  // a medida que el usuario hace scroll hacia ella.
  useEffect(() => {
    const photo = photoRef.current;
    if (!photo) return;
    const img = photo.querySelector("img");
    if (!img) return;

    let ticking = false;

    function updateZoom() {
      if (!photo || !img) return;
      const vh = window.innerHeight || 1;
      const rect = photo.getBoundingClientRect();

      // t va de 0 (foto recién entrando por debajo) a 1 (foto en su sitio)
      const progress = 1 - rect.top / vh;
      const t = Math.max(0, Math.min(1, progress));
      const scale = 1.22 - t * 0.22; // 1.22 → 1.00

      img.style.transform = `scale(${scale.toFixed(3)})`;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateZoom();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateZoom);
    updateZoom();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateZoom);
    };
  }, []);

  return (
    <section className="ba-visit">
      <div className="ba-visit-inner">
        <div className="ba-visit-layout">
          {/* Columna izquierda: kicker + dirección como título + horarios + CTAs */}
          <div className="ba-visit-left">
            <p className="ba-visit-kicker">Bezoek ons</p>
            <h2 className="ba-visit-title">
              {restaurant.address.street}
            </h2>

            <div className="ba-visit-cta-row">
              <a
                className="ba-visit-cta"
                href="https://maps.apple.com/?address=Broederstraat%2025,Kampen,Netherlands"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Apple Kaart</span><span>→</span>
              </a>
              <a
                className="ba-visit-cta"
                href="https://maps.app.goo.gl/ZgJGy1zFS9nm2g7p8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Google Maps</span><span>→</span>
              </a>
            </div>
          </div>

          {/* Columna derecha: foto grande con zoom-out al hacer scroll */}
          <div className="ba-visit-right">
            <div
              className="ba-visit-photo"
              ref={photoRef}
            >
              <img
                src="/images/restaurant/interior-visit.jpg"
                alt="Gezellige sfeer bij Burrito Azteca"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
