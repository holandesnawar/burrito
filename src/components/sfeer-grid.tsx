"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type SfeerCard = {
  _id: string;
  image: { _id: string; url: string };
  alt: string;
};

export function SfeerGrid({ cards }: { cards: SfeerCard[] }) {
  const half = Math.ceil(cards.length / 2);
  const row1 = cards.slice(0, half);
  const row2 = cards.slice(half);

  const wrapRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const r1 = row1Ref.current;
    const r2 = row2Ref.current;
    if (!wrap || !r1 || !r2) return;

    const RANGE = 60;
    let raf = 0;
    let pending = false;

    const update = () => {
      pending = false;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const total = vh + rect.height;
      const traveled = vh - rect.top;
      let progress = traveled / total;
      if (progress < 0) progress = 0;
      else if (progress > 1) progress = 1;
      const offset = (progress - 0.5) * 2 * RANGE;
      r1.style.transform = `translate3d(${offset}px, 0, 0)`;
      r2.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="ba-sfeer-grid-wrap">
      <div ref={row1Ref} className="ba-sfeer-row ba-sfeer-row-1">
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
      <div ref={row2Ref} className="ba-sfeer-row ba-sfeer-row-2">
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
