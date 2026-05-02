import { restaurant } from "@/lib/restaurant";

export function Footer() {
  return (
    <footer className="ba-footer">
      <div className="ba-footer-inner">
        <div className="ba-footer-grid">
          {/* Columna 1: marca + texto + redes */}
          <div className="ba-footer-brand">
            <div className="ba-footer-brand-logo">
              <img src="/logo.png" alt="Burrito Azteca" />
              <div className="ba-footer-title">Burrito Azteca</div>
            </div>
            <p className="ba-footer-text">
              Authentieke Mexicaanse burrito&rsquo;s, quesadillas en meer. Royaal gevuld,
              vers van de grill en vol smaak. Eat in, take-away of bestel online.
            </p>

            <div className="ba-footer-social">
              <a
                href={restaurant.social.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm9 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3a3.001 3.001 0 01-3-3c0-1.654 1.346-3 3-3z" />
                </svg>
              </a>
              <a
                href={restaurant.social.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M13.5 8H15.5V5H13.5C11.57 5 10 6.57 10 8.5V10H8V13H10V19H13V13H15.1L15.5 10H13V8.5C13 8.22 13.22 8 13.5 8Z" />
                </svg>
              </a>
              <a href={`mailto:${restaurant.contact.email}`} aria-label="E-mail">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13l8-6.99V6H4zm0 3.236V18h16V9.236l-7.385 5.16a2 2 0 01-2.23 0L4 9.236z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: navigatie */}
          <div>
            <div className="ba-footer-block">
              <ul className="ba-footer-menu-list">
                <li><a href="/">Home</a></li>
                <li><a href="/menukaart">Menukaart</a></li>
                <li><a href="/sfeerimpressie">Sfeerimpressie</a></li>
                <li><a href="/over-ons">Over ons</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Columna 3: openingstijden */}
          <div>
            <div className="ba-footer-block">
              <h4 className="ba-footer-heading">Openingstijden</h4>
              <div className="ba-footer-opening">
                <div className="ba-footer-opening-row">
                  <span>Maandag</span><span className="ba-footer-dots" /><span>Gesloten</span>
                </div>
                <div className="ba-footer-opening-row">
                  <span>Dinsdag t/m Donderdag</span><span className="ba-footer-dots" /><span>16:00 tot 21:00</span>
                </div>
                <div className="ba-footer-opening-row">
                  <span>Vrijdag t/m Zaterdag</span><span className="ba-footer-dots" /><span>16:00 tot 21:30</span>
                </div>
                <div className="ba-footer-opening-row">
                  <span>Zondag</span><span className="ba-footer-dots" /><span>16:00 tot 21:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 4: adres */}
          <div>
            <div className="ba-footer-block">
              <h4 className="ba-footer-heading">Adres</h4>
              <div className="ba-footer-address">
                <p>{restaurant.contact.phone}</p>
                <p>{restaurant.address.street}</p>
                <p>{restaurant.address.postal} {restaurant.address.city}</p>
                <p>
                  <a
                    href="https://maps.app.goo.gl/ZgJGy1zFS9nm2g7p8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Maps <span className="ba-footer-arrow">&rarr;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ba-footer-bottom">
        &copy; Copyright {new Date().getFullYear()}. Alle rechten voorbehouden. Ontwikkeld door NawarWWW.
      </div>
    </footer>
  );
}
