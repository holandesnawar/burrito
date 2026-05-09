"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { restaurant } from "@/lib/restaurant";

const links = [
  { label: "Home", href: "/" },
  { label: "Menukaart", href: "/menukaart" },
  { label: "Sfeerimpressie", href: "/sfeerimpressie" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smart navbar: shrink al hacer scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar con ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div id="ba-nav-wrap" className={scrolled ? "is-scrolled" : ""}>
      <nav id="ba-nav" aria-label="Hoofdnavigatie">
        <div className="ba-nav-inner">
          <a href="/" className="ba-brand" aria-label="Burrito Azteca">
            <Image
              src="/logo.png"
              alt="Burrito Azteca"
              width={401}
              height={361}
              priority
            />
          </a>

          <div className="ba-menu" role="menubar">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                role="menuitem"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="ba-actions">
            <a
              className="ba-cta"
              href={restaurant.delivery.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bestellen
            </a>
            <button
              className={`ba-burger${open ? " is-open" : ""}`}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div id="ba-menu-mobile" className={open ? "is-open" : ""}>
        <div className="ba-menu-mobile-head">
          <span className="ba-menu-mobile-brand" aria-label="Burrito Azteca">
            <Image
              src="/logo-black.png"
              alt="Burrito Azteca"
              width={581}
              height={354}
            />
          </span>
          <button
            type="button"
            className="ba-menu-close"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
          >
            ×
          </button>
        </div>

        <nav className="ba-menu-mobile-links" aria-label="Hoofdmenu">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ba-menu-mobile-info">
          <details open>
            <summary>Openingstijden</summary>
            <div className="ba-menu-mobile-hours">
              <div><span>Maandag</span><span>Gesloten</span></div>
              <div><span>Di t/m Do</span><span>16:00 tot 21:00</span></div>
              <div><span>Vr t/m Za</span><span>16:00 tot 21:30</span></div>
              <div><span>Zondag</span><span>16:00 tot 21:00</span></div>
            </div>
          </details>
          <details>
            <summary>Adres</summary>
            <p>{restaurant.address.street}<br />{restaurant.address.postal} {restaurant.address.city}</p>
          </details>
          <details>
            <summary>Contact</summary>
            <p>
              <a href={restaurant.contact.phoneHref}>{restaurant.contact.phone}</a><br />
              <a href={`mailto:${restaurant.contact.email}`}>{restaurant.contact.email}</a>
            </p>
          </details>
        </div>

        <div className="ba-menu-mobile-social">
          <a
            href={restaurant.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm9 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3a3.001 3.001 0 01-3-3c0-1.654 1.346-3 3-3z" />
            </svg>
          </a>
          <a
            href={restaurant.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 8H15.5V5H13.5C11.57 5 10 6.57 10 8.5V10H8V13H10V19H13V13H15.1L15.5 10H13V8.5C13 8.22 13.22 8 13.5 8Z" />
            </svg>
          </a>
          <a
            href={`mailto:${restaurant.contact.email}`}
            aria-label="E-mail"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13l8-6.99V6H4zm0 3.236V18h16V9.236l-7.385 5.16a2 2 0 01-2.23 0L4 9.236z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
