import Link from "next/link";
import { categories } from "@/lib/restaurant";

const colorMap: Record<string, string> = {
  "cat-burrito": "bg-cat-burrito",
  "cat-entomatada": "bg-cat-entomatada",
  "cat-quesadilla": "bg-cat-quesadilla",
  "cat-nacho": "bg-cat-nacho",
  "cat-tostada": "bg-cat-tostada",
  "cat-dessert": "bg-cat-dessert",
};

export function CategoriesGrid() {
  return (
    <section className="bg-cream-light py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-turquoise">
            Onze keuken
          </p>
          <h2 className="text-4xl text-ink sm:text-5xl">
            Wat wil je vandaag eten?
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/menu#${cat.slug}`}
              className="group relative overflow-hidden rounded-3xl border-4 border-ink bg-white shadow-[6px_6px_0_0_var(--color-ink)] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-ink)]"
            >
              <div className="aspect-[4/3] w-full bg-cream" />
              <div
                className={`${colorMap[cat.color]} border-t-4 border-ink px-6 py-4`}
              >
                <h3 className="text-3xl text-ink">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
