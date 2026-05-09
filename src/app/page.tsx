import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MexicanClassics } from "@/components/mexican-classics";
import { Sfeer } from "@/components/sfeer";
import { Reviews } from "@/components/reviews";
import { Promos } from "@/components/promos";
import { Visit } from "@/components/visit";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <MexicanClassics />
      <Sfeer />
      <Reviews />
      <Promos />
      <Visit />
      <Footer />
    </main>
  );
}
