"use client";

import { useEffect, useState } from "react";
import { restaurant } from "@/lib/restaurant";

function isActive(): boolean {
  const h = restaurant.holiday;
  if (!h.enabled) return false;
  // Visible hasta el final del último día de cierre (hora local del visitante).
  const end = new Date(`${h.to}T23:59:59`);
  return Date.now() <= end.getTime();
}

export function VakantiePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isActive()) return;
    // Sale cada vez que se entra a la web (desde Google, Instagram, la URL…),
    // pero no al pasar de una página a otra dentro del propio sitio.
    try {
      const ref = document.referrer ? new URL(document.referrer) : null;
      if (ref && ref.origin === window.location.origin) return;
    } catch {
      /* referrer ilegible: mostramos igualmente */
    }
    const t = window.setTimeout(() => setOpen(true), 2500);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
  }

  if (!open) return null;

  const h = restaurant.holiday;

  return (
    <div className="ba-vakantie-overlay" onClick={close}>
      <div
        className="ba-vakantie-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ba-vakantie-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="ba-vakantie-close"
          onClick={close}
          aria-label="Sluiten"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" aria-hidden focusable="false">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <p className="ba-vakantie-kicker">Vakantie</p>
        <h2 id="ba-vakantie-title" className="ba-vakantie-title">
          Even gesloten
        </h2>
        <p className="ba-vakantie-dates">
          {h.fromLabel}
          <span aria-hidden> t/m </span>
          {h.toLabel}
        </p>
        <p className="ba-vakantie-text">
          Vanaf <strong>{h.reopenLabel}</strong>{" "}zijn we er weer.
          <br />
          <span className="ba-vakantie-sign">¡Hasta pronto!</span>
        </p>

        <button type="button" className="ba-vakantie-cta" onClick={close}>
          <span>Oké</span>
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}
