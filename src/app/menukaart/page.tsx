import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { menu } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menukaart — Burrito Azteca Kampen",
  description:
    "Onze volledige menukaart: burritos, quesadillas, fajitas, ensaladas, postres en meer. Authentieke Mexicaanse keuken in Kampen.",
};

function formatPrice(price: string | { single: string; double?: string }) {
  if (typeof price === "string") return `€ ${price}`;
  if (price.double) return `€ ${price.single} / € ${price.double}`;
  return `€ ${price.single}`;
}

const badgeLabels: Record<string, { label: string; color: string }> = {
  pikant: { label: "🌶️ Pikant", color: "#d44a3f" },
  vegetarisch: { label: "🌱 Vega", color: "#6faf2d" },
  vegan: { label: "✦ Vegan", color: "#2b9595" },
  halal: { label: "✦ Halal", color: "#6faf2d" },
};

export default function MenukaartPage() {
  return (
    <main className="flex-1">
      <Header />

      <section className="ba-menu-hero">
        <div className="ba-menu-hero-inner">
          <p className="ba-menu-hero-eyebrow">De Mexicaan van Kampen</p>
          <h1 className="ba-menu-hero-title">Menukaart</h1>
          <p className="ba-menu-hero-text">
            Vers, royaal gevuld en vol smaak. Bekijk onze volledige selectie
            authentieke Mexicaanse gerechten — van klassieke burritos tot
            hoofdgerechten en huisgemaakte desserts.
          </p>

          <nav className="ba-menu-toc" aria-label="Categorieën">
            {menu.map((cat) => (
              <a key={cat.slug} href={`#${cat.slug}`}>
                {cat.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="ba-menu-content">
        <div className="ba-menu-inner">
          {menu.map((cat) => (
            <div
              key={cat.slug}
              id={cat.slug}
              className="ba-menu-category"
            >
              <header className="ba-menu-category-head">
                {cat.subtitle && (
                  <p className="ba-menu-category-sub">{cat.subtitle}</p>
                )}
                <h2 className="ba-menu-category-title">{cat.name}</h2>
                <span className="ba-menu-category-rule" aria-hidden />
              </header>

              <div className="ba-menu-list">
                {cat.items.map((item, i) => (
                  <article key={`${cat.slug}-${i}`} className="ba-menu-item">
                    <div className="ba-menu-item-head">
                      <h3 className="ba-menu-item-name">{item.name}</h3>
                      <div className="ba-menu-item-dots" aria-hidden />
                      <p className="ba-menu-item-price">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    {item.description && (
                      <p className="ba-menu-item-desc">{item.description}</p>
                    )}
                    {item.badges && item.badges.length > 0 && (
                      <div className="ba-menu-item-badges">
                        {item.badges.map((b) => {
                          const meta = badgeLabels[b];
                          if (!meta) return null;
                          return (
                            <span
                              key={b}
                              className="ba-menu-badge"
                              style={{ borderColor: meta.color, color: meta.color }}
                            >
                              {meta.label}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className="ba-menu-footer-note">
            <p>
              <strong>Allergieën?</strong> Vraag het ons gerust — we informeren
              je graag over de ingrediënten van elk gerecht.
            </p>
            <p>
              <strong>Halal:</strong> al ons vlees is 100% halal.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
