import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Over ons | Burrito Azteca Kampen",
  description:
    "Maak kennis met Claudia en Alfredo, de oprichters van Burrito Azteca. Authentieke Mexicaanse keuken in het hart van Kampen.",
};

export default function OverOnsPage() {
  return (
    <main className="flex-1">
      <Header />

      <section className="ba-over-hero ba-over-hero-green">
        <div className="ba-over-hero-content">
          <p className="ba-over-hero-eyebrow">Over ons</p>
          <h1 className="ba-over-hero-title">Claudia &amp; Alfredo</h1>
          <p className="ba-over-hero-text">
            Een passie voor authentieke Latijnse smaken in het hart van Kampen.
          </p>
        </div>
      </section>

      <section className="ba-over-story">
        <div className="ba-over-story-inner">
          <div className="ba-over-photo">
            <img
              src="/images/team/claudia-alfredo-fundadores.jpg"
              alt="Claudia y Alfredo, oprichters van Burrito Azteca"
            />
          </div>

          <div className="ba-over-text">
            <p>
              Wij zijn Claudia en Alfredo: een stel dat gepassioneerd is voor
              lekker eten met een veeleisende smaak. Vanuit onze
              Zuid&#8209;Amerikaanse cultuur zijn wij gewend aan thuis bereid en
              natuurlijk eten. Eten met hoog behoud van de originele smaak!
            </p>
            <p>
              Omdat wij in Kampen de Latijnse smaken die we gewend zijn niet
              konden vinden, besloten wij zelf een restaurant te openen. En zo
              kwam Burrito Azteca tot stand!
            </p>
            <p>
              Voor Burrito Azteca hebben we een prachtige locatie gevonden op de
              hoek van de Broederstraat en de Boven Nieuwstraat, vlak aan de
              rand van de Botermarkt (waar wij volgend jaar ook een terras
              openen).
            </p>
            <p>
              Dit prachtige, authentieke pand hebben we omgetoverd tot hét
              Mexicaanse hoekje van Kampen, zodat u ook in Kampen kunt genieten
              van het lekkerste eten in een unieke sfeer van muziek, vreugde,
              aroma&rsquo;s en intense smaken. Het zijn details die onze
              Latino&#8209;cultuur kenmerken.
            </p>
            <p>
              Het is ons doel om maximaal zorg te dragen voor de oorsprong van
              onze culinaire kunst, waarbij we de kwaliteit en de smaak van wat
              thuis wordt gemaakt, waarderen.
            </p>
            <p>
              Met meer dan 20 jaar ervaring in de horeca staan wij in voor
              lekker eten, zorg voor goede service en gastheerschap. Dit met een
              Mexicaans, sfeervol tempo!
            </p>
            <p className="ba-over-welcome">
              U bent van harte welkom bij Burrito Azteca!
            </p>
            <p className="ba-over-signature">
              Saludos,
              <br />
              <strong>Claudia y Alfredo</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
