import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { restaurant } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Contact | Burrito Azteca Kampen",
  description:
    "Neem contact op met Burrito Azteca in Kampen. Stuur ons een bericht, bel ons of kom langs aan de Broederstraat 25.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Header />

      {/* Hero con nombre horizontal estilo cinematográfico */}
      <section className="ba-contact-hero">
        <div className="ba-contact-hero-bg" aria-hidden>
          <Image
            src="/images/restaurant/interior-bar.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="ba-contact-hero-overlay" aria-hidden />
        <div className="ba-contact-hero-content">
          <p className="ba-contact-hero-eyebrow">Contact</p>
          <h1 className="ba-contact-hero-title">
            Burrito <span className="ba-contact-hero-line-accent">Azteca</span>
          </h1>
          <p className="ba-contact-hero-text">
            Vragen, reserveringen of een groepsboeking? Stuur ons een bericht of
            kom gewoon langs.
          </p>
          {/* Sin "-" entre frases por preferencia de Rida */}
        </div>
      </section>

      {/* Info + Formulario */}
      <section className="ba-contact-main">
        <div className="ba-contact-grid">
          <aside className="ba-contact-info">
            <div className="ba-contact-info-card">
              <h2 className="ba-contact-info-title">Kom in contact</h2>
              <p className="ba-contact-info-text">
                We horen graag van je. Voor reserveringen, vragen over het menu
                of suggesties. Wij zijn er voor je.
              </p>

              <ul className="ba-contact-list">
                <li>
                  <span className="ba-contact-list-icon" aria-hidden>📍</span>
                  <div>
                    <strong>Adres</strong>
                    <p>
                      {restaurant.address.street}<br />
                      {restaurant.address.postal} {restaurant.address.city}
                    </p>
                  </div>
                </li>
                <li>
                  <span className="ba-contact-list-icon" aria-hidden>📞</span>
                  <div>
                    <strong>Telefoon</strong>
                    <p>
                      <a href={restaurant.contact.phoneHref}>
                        {restaurant.contact.phone}
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  <span className="ba-contact-list-icon" aria-hidden>✉️</span>
                  <div>
                    <strong>E-mail</strong>
                    <p>
                      <a href={`mailto:${restaurant.contact.email}`}>
                        {restaurant.contact.email}
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="ba-contact-map">
              <iframe
                src="https://www.google.com/maps?q=Broederstraat+25,+8261+GN+Kampen&output=embed"
                title="Burrito Azteca op de kaart"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>

          <div className="ba-contact-form-wrap">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
