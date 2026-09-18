"use client";

import { useEffect, useState } from "react";
import { restaurant } from "@/lib/restaurant";

const STORAGE_KEY = "ba-vakantie-dismissed";

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
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* sessionStorage puede no estar disponible; mostramos igualmente */
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
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignorar */
    }
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
          ×
        </button>
        <span className="ba-vakantie-punch ba-vakantie-punch-l" aria-hidden />
        <span className="ba-vakantie-punch ba-vakantie-punch-r" aria-hidden />

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
