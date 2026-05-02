import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Reserveren | Burrito Azteca Kampen",
  description:
    "Reserveer een tafel bij Burrito Azteca via TheFork. Geniet van authentieke Mexicaanse keuken in het hart van Kampen.",
};

export default function ReserverenPage() {
  return (
    <main className="flex-1">
      <Header />

      <section className="ba-reserve-hero">
        <div className="ba-reserve-hero-bg" aria-hidden>
          <img src="/images/sala.jpg" alt="" />
        </div>
        <div className="ba-reserve-hero-overlay" aria-hidden />
        <div className="ba-reserve-hero-content">
          <p className="ba-reserve-hero-eyebrow">Reserveren</p>
          <h1 className="ba-reserve-hero-title">Boek je tafel</h1>
          <p className="ba-reserve-hero-text">
            Reserveer eenvoudig via TheFork en kies de datum en tijd die jou
            uitkomt. We zien je graag binnenkort!
          </p>
        </div>
      </section>

      <section className="ba-reserve-main">
        <div className="ba-reserve-card">
          <h2 className="ba-reserve-title">Reservering bij Burrito Azteca</h2>
          <p className="ba-reserve-desc">
            Klik hieronder om direct via TheFork een tafel te reserveren. Snel,
            veilig en zonder telefoneren.
          </p>

          <a
            className="ba-reserve-btn"
            href="https://widget.thefork.com/a568eaa6-aa18-4b67-bec7-0f0f113445d0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Hacer una reserva</span>
            <span aria-hidden>→</span>
          </a>

          <p className="ba-reserve-note">
            Voor groepen van meer dan 8 personen, bel ons direct op{" "}
            <a href="tel:+31614659727">06 146 59 727</a>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
