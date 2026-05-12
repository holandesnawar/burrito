"use client";

import { useEffect, useState } from "react";
import { restaurant } from "@/lib/restaurant";

export function FloatingReserveer() {
  const [onYellow, setOnYellow] = useState(false);

  useEffect(() => {
    const fab = document.querySelector<HTMLElement>(".ba-fab-reserveer");
    const sfeer = document.querySelector<HTMLElement>(".ba-sfeer");
    if (!fab || !sfeer) return;

    let raf = 0;
    function check() {
      raf = 0;
      const fr = fab!.getBoundingClientRect();
      const sr = sfeer!.getBoundingClientRect();
      const overlap =
        fr.right > sr.left &&
        fr.left < sr.right &&
        fr.bottom > sr.top &&
        fr.top < sr.bottom;
      setOnYellow(overlap);
    }
    function schedule() {
      if (raf) return;
      raf = requestAnimationFrame(check);
    }

    check();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <a
      href={restaurant.reservation.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`ba-fab-reserveer${onYellow ? " ba-fab-reserveer--light" : ""}`}
    >
      <span>Reserveer een tafel</span>
      <span aria-hidden>→</span>
    </a>
  );
}
