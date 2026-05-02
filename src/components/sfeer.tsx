import { sanityFetch } from "@/sanity/lib/fetch";
import {
  galleryByCategoryQuery,
  type GalleryPhotoDoc,
} from "@/sanity/lib/queries";
import { SfeerGrid } from "./sfeer-grid";

// Fallback locales si Sanity está vacío (no debería pasar)
const fallback: GalleryPhotoDoc[] = [
  { _id: "1", title: "Plato completo", wide: true, image: { _id: "1", url: "/images/completo.jpg" }, alt: "Plato Mexicano completo" },
  { _id: "2", title: "Postre", image: { _id: "2", url: "/images/postre.jpg" }, alt: "Postre artesanal" },
  { _id: "3", title: "Tacos", image: { _id: "3", url: "/images/tacos.jpg" }, alt: "Tacos frescos" },
  { _id: "4", title: "Tarta", image: { _id: "4", url: "/images/tarta1.jpeg" }, alt: "Tarta de queso" },
  { _id: "5", title: "Nachos", image: { _id: "5", url: "/images/nachos.jpg" }, alt: "Nachos" },
];

export async function Sfeer() {
  const photos = await sanityFetch<GalleryPhotoDoc[]>(
    galleryByCategoryQuery,
    { category: "sfeer" }
  );
  const cards = photos && photos.length > 0 ? photos : fallback;

  return (
    <section className="ba-sfeer">
      <img
        className="ba-jarritos-peek"
        src="/images/jarritos.png"
        alt=""
        aria-hidden="true"
      />
      <div className="ba-sfeer-inner">
        <div className="ba-sfeer-layout">
          <div className="ba-sfeer-head">
            <p className="ba-sfeer-kicker">SFEERIMPRESSIE</p>
            <h2 className="ba-sfeer-title">
              Alsof Burrito Azteca <br /> bij jou thuis is
            </h2>
            <p className="ba-sfeer-text">
              Neem alvast een kijkje in onze sfeer. Van dampende burrito&rsquo;s
              tot kleurrijke desserts. Scroll door de beelden en proef hoe
              gezellig het is in ons restaurant.
            </p>
            <a href="/over-ons#impressie" className="ba-sfeer-btn">
              Bekijk impressie
            </a>
          </div>

          <SfeerGrid cards={cards} />
        </div>
      </div>
    </section>
  );
}
