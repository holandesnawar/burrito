"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const PLACE_ID = "ChIJ7YR1IoN4yEcRWnsWlLKa9M0";
const REVIEWS_URL = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;

const AVERAGE_RATING = 4.6;
const TOTAL_REVIEWS = 279;

type Review = {
  name: string;
  initials: string;
  color: string;
  date: string;
  text: string;
  photo?: string;
  url?: string;
};

const reviews: Review[] = [
  {
    name: "Luz Dary Sánchez",
    initials: "L",
    color: "#c0867a",
    date: "3 jaar geleden",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjVmALKOnX1zriQv2U2LOWPt_X0K_PerQTNOPIx-lbs3JRmUyEM=w144-h144-p-rp-mo-ba4-br100",
    text: "¡Qué alegría haber visitado este restaurante! La comida deliciosa y la atención maravillosa. ¡Esperamos volver algún día!",
  },
  {
    name: "jose silvestre",
    initials: "J",
    color: "#6f9e55",
    date: "10 maanden geleden",
    photo:
      "https://lh3.googleusercontent.com/a/ACg8ocItUsm7jTLFSlFsBccKwFWpNsj4Hp1Ygu4DylNncL6AeTgXWw=w144-h144-p-rp-mo-br100",
    url: "https://maps.app.goo.gl/xpwoZ8yR7qKL8QSD7",
    text: "Estoy de vacaciones en esta hermosa ciudad con mi esposa y nos recomendaron este restaurante para visitar. Nos pedimos las tomatadas y fueron una verdadera delicia. El sabor de la salsa de tomate era casero, intenso y perfectamente equilibrado, sin opacar el relleno. La textura de las tortillas estaba en su punto justo: suaves, pero sin deshacerse. ¡Totalmente recomendadas!",
  },
  {
    name: "patricia menendez",
    initials: "P",
    color: "#9ca3af",
    date: "10 maanden geleden",
    photo:
      "https://lh3.googleusercontent.com/a/ACg8ocLggu35ZNJMww2-wXinfC5ODVRH2AcXmSu7txxEcOIZPjZIag=w144-h144-p-rp-mo-br100",
    url: "https://maps.app.goo.gl/v29Rh1PhLmqpRqoX8",
    text: "Estuvimos de vacaciones en Kampen y descubrimos este lugar increíble: Burrito Azteca. ¡Una excelencia mexicana! Desde el primer momento nos atendieron dos personas súper amables, con una calidez que hizo que la experiencia fuera aún mejor. La comida llegó rápido y todo estaba delicioso. Pedimos burritos, quesadillas, nachos, y cada plato tenía un sabor auténtico, bien sabroso y con el toque justo de picante. ¡Recomendadísimo!",
  },
  {
    name: "Miriam Ramirez",
    initials: "M",
    color: "#c0867a",
    date: "3 jaar geleden",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjVUTJtdq2dvHxPQhOnrpNg4g4bxde8mRx87GSROE5ml9brp-wml=w144-h144-p-rp-mo-br100",
    url: "https://maps.app.goo.gl/za77qtkBnYpa3CSt8",
    text: "Muy buen sitio para comer en familia, el restaurante muy acogedor, por no hablar de la comida, muy buena, de los mejores mexicanos que he probado por esta zona de holanda, el personal muy respetuoso y muy agradable, sitio 100% recomendado para aquellos amantes del picante y la comida mexicana, sin duda volvería.",
  },
  {
    name: "Roland Heyn",
    initials: "R",
    color: "#4a90b8",
    date: "2 maanden geleden",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjX-b7rTwPHJlx5pZLP_Tqbq8EyIccy0j2vH9CUkA-KlLzh9vqqh=w144-h144-p-rp-mo-ba4-br100",
    url: "https://maps.app.goo.gl/QE9sQD9fSt8yeH9x9",
    text: "Comimos en este pequeño pero encantador restaurante el 28 de febrero y quedamos muy satisfechos. La comida estaba deliciosa, el servicio fue atento sin ser intrusivo y el ambiente era encantador. La música de fondo también era muy suave y nada intrusiva, lo que permitió que todos se sintieran cómodos y disfrutaran de una agradable conversación.",
  },
  {
    name: "Vera Vogel",
    initials: "V",
    color: "#8b6fa8",
    date: "1 jaar geleden",
    photo:
      "https://lh3.googleusercontent.com/a/ACg8ocI3EfNHdzd1Imeq_KFvehNBOzTlH1DyTA8INQxz1tF47iYaEQ=w144-h144-p-rp-mo-ba3-br100",
    text: "Ontzettend lekker gegeten, goede bediening die ook fijne tips gaf over wat goed bij het gerecht past. Werd een authentieke margarita in elkaar geshaked. De maaltijd smaakte vers en smaakvol. Dat het pittig was, was niet gelogen! Als je lekker uiteten wilt en wil genieten van goed, oprecht eten dan raad ik deze zaak 100% aan. Wij komen absoluut nog een keer terug! NB. Veeel vega(n) opties.",
  },
  {
    name: "Rik Jan Schilder",
    initials: "R",
    color: "#4a9b8e",
    date: "11 maanden geleden",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjW3x-7QO1AxNNVGm2lgJxBkTt9KUkBI150OSa2YQ8RAqw1msM_W=w144-h144-p-rp-mo-ba3-br100",
    url: "https://maps.app.goo.gl/JfwxKyKLd4HKB2mz8",
    text: "Heerlijk authentiek Mexicaans gegeten (ik ben in Mexico geweest) in een knus en sfeervol ingericht restaurantje! Hele vriendelijke bediening die rekening hield met dieetwensen, goede snelle service en dus erg lekker eten!",
  },
];

function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden focusable="false">
      <path fill="#FFC107" d="M43.61 20.08H42V20H24v8h11.30C33.55 32.91 29.20 36 24 36c-6.63 0-12-5.37-12-12s5.37-12 12-12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C33.85 6.05 29.20 4 24 4 12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20c0-1.34-.14-2.65-.39-3.92z" />
      <path fill="#FF3D00" d="M6.31 14.69l6.57 4.82C14.66 15.10 18.96 12 24 12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C33.85 6.05 29.20 4 24 4 16.32 4 9.66 8.34 6.31 14.69z" />
      <path fill="#4CAF50" d="M24 44c5.16 0 9.86-1.98 13.41-5.20l-6.19-5.24C29.20 35 26.71 36 24 36c-5.18 0-9.51-3.07-11.28-7.50l-6.52 5.02C9.51 39.55 16.23 44 24 44z" />
      <path fill="#1976D2" d="M43.61 20.08H42V20H24v8h11.30c-.84 2.36-2.37 4.40-4.31 5.92l6.19 5.24C36.92 38.41 44 32 44 24c0-1.34-.14-2.65-.39-3.92z" />
    </svg>
  );
}

function GoogleWordmark({ height = 16 }: { height?: number }) {
  return (
    <svg
      viewBox="0 0 272 92"
      height={height}
      aria-label="Google"
      role="img"
      focusable="false"
    >
      <path
        fill="#EA4335"
        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      />
      <path
        fill="#FBBC05"
        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      />
      <path
        fill="#4285F4"
        d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
      />
      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
      <path
        fill="#EA4335"
        d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
      />
      <path
        fill="#4285F4"
        d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
      />
    </svg>
  );
}

function Star({ fill = "#fbbf24", size = 16 }: { fill?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill={fill} width={size} height={size} aria-hidden focusable="false">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  );
}

function StarsRow({ value = 5, size = 16 }: { value?: number; size?: number }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.25 && value - full < 0.75;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  return (
    <div className="ba-review-stars" aria-label={`${value} van 5 sterren`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} size={size} />
      ))}
      {hasHalf && (
        <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
          <defs>
            <linearGradient id="half-star-grad">
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="rgba(42,31,24,0.18)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-star-grad)"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"
          />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} fill="rgba(42,31,24,0.18)" size={size} />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <a
      href={review.url ?? REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="ba-review-card"
      aria-label={`Lees de review van ${review.name} op Google`}
    >
      <div className="ba-review-head">
        {review.photo ? (
          <img
            className="ba-review-avatar ba-review-avatar-photo"
            src={review.photo}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="ba-review-avatar" style={{ background: review.color }}>
            {review.initials}
          </div>
        )}
        <div className="ba-review-meta">
          <div className="ba-review-name">{review.name}</div>
          <div className="ba-review-date">{review.date}</div>
        </div>
        <div className="ba-review-google" aria-hidden>
          <GoogleG size={18} />
        </div>
      </div>
      <StarsRow value={5} />
      <p className="ba-review-text">{review.text}</p>
      <span className="ba-review-link">Lees op Google →</span>
    </a>
  );
}

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
    >
      <path d={dir === "right" ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"} />
    </svg>
  );
}

export function Reviews() {
  const loop = [...reviews, ...reviews];
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const animateTo = (target: number) => {
    const track = trackRef.current;
    if (!track) return;
    const start = track.scrollLeft;
    if (Math.abs(target - start) < 0.5) return;
    const duration = 520;
    const t0 = performance.now();
    const animate = (t: number) => {
      const progress = Math.min(1, (t - t0) / duration);
      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      track.scrollLeft = start + (target - start) * eased;
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      const firstCard = track.querySelector<HTMLElement>(".ba-review-card");
      const cardW = firstCard?.getBoundingClientRect().width ?? 320;
      const step = cardW + 18;
      const targetIdx = Math.floor(track.scrollLeft / step + 1);
      animateTo(targetIdx * step);
    }, 4000);

    return () => window.clearInterval(id);
  }, []);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    if (half <= 0) return;
    if (track.scrollLeft >= half) track.scrollLeft -= half;
    else if (track.scrollLeft < 0) track.scrollLeft += half;
  };

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector<HTMLElement>(".ba-review-card");
    const cardW = firstCard?.getBoundingClientRect().width ?? 320;
    const step = cardW + 18;
    const currentIdx = track.scrollLeft / step;
    const targetIdx =
      dir > 0 ? Math.floor(currentIdx + 1) : Math.ceil(currentIdx - 1);
    animateTo(Math.max(0, targetIdx * step));
  };

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <section className="ba-reviews">
      <div className="ba-reviews-inner">
        <p className="ba-reviews-kicker">REVIEWS</p>
        <h2 className="ba-reviews-title">Wat onze gasten vinden</h2>

        <div className="ba-reviews-layout">
          <aside className="ba-reviews-summary">
            <div className="ba-reviews-summary-logo">
              <Image
                src="/logo.png"
                alt="Burrito Azteca"
                width={401}
                height={361}
                priority={false}
              />
            </div>
            <div className="ba-reviews-summary-rating">{AVERAGE_RATING.toFixed(1)}</div>
            <StarsRow value={AVERAGE_RATING} size={22} />
            <p className="ba-reviews-summary-count">
              Basado en <strong>{TOTAL_REVIEWS}</strong> reseñas
            </p>
            <div className="ba-reviews-summary-foot">
              <span>powered by</span>
              <GoogleWordmark height={16} />
            </div>
          </aside>

          <div
            className="ba-reviews-carousel"
            aria-label="Reviews van onze gasten"
            onMouseEnter={pause}
            onMouseLeave={resume}
            onTouchStart={pause}
            onTouchEnd={resume}
          >
            <button
              type="button"
              className="ba-reviews-arrow ba-reviews-arrow-l"
              onClick={() => scrollByCard(-1)}
              aria-label="Vorige review"
            >
              <ChevronIcon dir="left" />
            </button>
            <div
              ref={trackRef}
              className="ba-reviews-track"
              onScroll={handleScroll}
            >
              {loop.map((r, i) => (
                <ReviewCard key={`${r.name}-${i}`} review={r} />
              ))}
            </div>
            <div className="ba-reviews-fade ba-reviews-fade-l" aria-hidden />
            <div className="ba-reviews-fade ba-reviews-fade-r" aria-hidden />
            <button
              type="button"
              className="ba-reviews-arrow ba-reviews-arrow-r"
              onClick={() => scrollByCard(1)}
              aria-label="Volgende review"
            >
              <ChevronIcon dir="right" />
            </button>
          </div>
        </div>

        <div className="ba-reviews-cta">
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ba-reviews-all-btn"
          >
            Alle reviews lezen
          </a>
        </div>
      </div>
    </section>
  );
}
