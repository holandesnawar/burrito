"use client";

import { useEffect, useRef } from "react";
import type { GalleryPhotoDoc } from "@/sanity/lib/queries";

const speeds = [1.0, 1.4, 0.9, 1.3, 0.8, 1.2];

export function SfeerGrid({ cards }: { cards: GalleryPhotoDoc[] }) {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const els = grid.querySelectorAll<HTMLDivElement>(".ba-sfeer-card");
    if (!els.length) return;

    let ticking = false;

    function updateParallax() {
      const vw = window.innerWidth || 1;

      if (vw < 768) {
        els.forEach((el) => {
          el.style.transform = "translateY(0px)";
        });
        return;
      }

      const vh = window.innerHeight || 1;
      const center = vh / 2;

      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = (center - elCenter) / vh;
        const speed = parseFloat(el.dataset.speed || "1") || 1;
        const move = distance * 22 * speed;

        el.style.transform = `translateY(${move}px)`;
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
    <div className="ba-sfeer-grid" ref={gridRef}>
      {cards.map((card, i) => {
        const reveal = i % 2 === 0 ? "right" : "left";
        const speed = speeds[i % speeds.length];
        return (
          <div
            key={card._id}
            className={`ba-sfeer-card reveal reveal-${reveal}${card.wide ? " ba-sfeer-card-wide" : ""}`}
            data-speed={speed.toString()}
          >
            <img src={card.image.url} alt={card.alt} loading="lazy" />
          </div>
        );
      })}
    </div>
  );
}
