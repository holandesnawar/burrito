"use client";

import { useEffect, useRef } from "react";

export function Visit() {
  const photoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const photo = photoRef.current;
    if (!photo) return;
    const img = photo.querySelector("img");
    if (!img) return;

    const speed = parseFloat(photo.dataset.zoomSpeed || "0.3") || 0.3;
    let ticking = false;

    function updateZoom() {
      if (!photo || !img) return;
      const vw = window.innerWidth || 1;

      if (vw < 768) {
        img.style.transform = "scale(1.06)";
        return;
      }

      const vh = window.innerHeight || 1;
      const rect = photo.getBoundingClientRect();
      const center = vh / 2;
      const blockCenter = rect.top + rect.height / 2;
      const distance = (center - blockCenter) / vh;

      let scale = 1.06 + Math.abs(distance) * speed;
      if (scale < 1.06) scale = 1.06;
      if (scale > 1.22) scale = 1.22;

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
          {/* Columna izquierda: texto + horarios + CTAs */}
          <div className="ba-visit-left">
            <h2 className="ba-visit-title">Bezoek ons</h2>
            <p className="ba-visit-address">Broederstraat 25, Kampen</p>

            <div className="ba-visit-opening" aria-label="Openingstijden">
              <div className="ba-visit-opening-row">
                <span>Maandag</span><span>Gesloten</span>
              </div>
              <div className="ba-visit-opening-row">
                <span>Dinsdag t/m Donderdag</span><span>16:00 tot 21:00</span>
              </div>
              <div className="ba-visit-opening-row">
                <span>Vrijdag t/m Zaterdag</span><span>16:00 tot 21:30</span>
              </div>
              <div className="ba-visit-opening-row">
                <span>Zondag</span><span>16:00 tot 21:00</span>
              </div>
            </div>

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

          {/* Columna derecha: foto con corte asimétrico + zoom scroll */}
          <div className="ba-visit-right">
            <div className="ba-visit-photo-wrap">
              <div
                className="ba-visit-photo"
                ref={photoRef}
                data-zoom-speed="0.3"
              >
                <img
                  src="/images/visit-sala.jpg"
                  alt="Gezellige sfeer bij Burrito Azteca"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
