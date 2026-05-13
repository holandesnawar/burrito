"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Photo = { src: string; alt: string; caption: string };

export function SfeerimpressieGrid({ photos }: { photos: Photo[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = Array.from(
      container.querySelectorAll<HTMLElement>(".ba-sfeerimpressie-card"),
    );

    if (typeof IntersectionObserver === "undefined") {
      cards.forEach((c) => c.setAttribute("data-revealed", "true"));
      return;
    }

    // Banda central de ~30% del alto del viewport: el caption sólo es visible
    // cuando la card está dentro de esa franja. Al salir, se oculta.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
          } else {
            entry.target.removeAttribute("data-revealed");
          }
        }
      },
      { threshold: 0, rootMargin: "-35% 0px -35% 0px" },
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <div className="ba-sfeerimpressie-grid" ref={containerRef}>
      {photos.map((photo) => (
        <figure key={photo.src} className="ba-sfeerimpressie-card">
          <div className="ba-sfeerimpressie-img">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 767px) 92vw, (max-width: 1023px) 45vw, 380px"
              loading="lazy"
            />
          </div>
          <figcaption className="ba-sfeerimpressie-caption">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
