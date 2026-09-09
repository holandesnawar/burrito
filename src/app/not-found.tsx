import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Pagina niet gevonden | Burrito Azteca Kampen",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex-1">
      <Header />
      <section className="ba-over-hero ba-over-hero-green">
        <div className="ba-over-hero-content">
          <h1 className="ba-over-hero-title">Pagina niet gevonden</h1>
          <p className="ba-over-hero-text">
            Deze pagina bestaat niet (meer). Bekijk onze menukaart of ga terug
            naar de homepage.
          </p>
          <p className="ba-over-hero-text" style={{ marginTop: 24 }}>
            <Link href="/menukaart" className="ba-cta-lg-secondary">
              <span>Bekijk de menukaart</span>
              <span aria-hidden>→</span>
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
