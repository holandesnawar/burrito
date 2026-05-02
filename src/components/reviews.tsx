const reviews = [
  {
    name: "Lisa van der Berg",
    date: "2 weken geleden",
    initials: "LB",
    text: "Heerlijke authentieke Mexicaanse keuken in Kampen! De burritos zijn enorm en super smaakvol. De sfeer is gezellig en het personeel vriendelijk.",
    rating: 5,
  },
  {
    name: "Mark de Vries",
    date: "1 maand geleden",
    initials: "MV",
    text: "Verse ingrediënten, generous porties en huisgemaakte sauzen. De Quesadilla en Nachos zijn een aanrader. Halal en zeer lekker!",
    rating: 5,
  },
  {
    name: "Sofia García",
    date: "3 maanden geleden",
    initials: "SG",
    text: "Como mexicana, puedo confirmar que la comida es auténtica. El bife completo y las enchiladas son excepcionales. Definitivamente volveremos.",
    rating: 5,
  },
];

function GoogleLogo() {
  return (
    <svg className="ba-review-google" viewBox="0 0 48 48" width="20" height="20" aria-hidden>
      <path fill="#FFC107" d="M43.61 20.08H42V20H24v8h11.30C33.55 32.91 29.20 36 24 36c-6.63 0-12-5.37-12-12s5.37-12 12-12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C33.85 6.05 29.20 4 24 4 12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20c0-1.34-.14-2.65-.39-3.92z" />
      <path fill="#FF3D00" d="M6.31 14.69l6.57 4.82C14.66 15.10 18.96 12 24 12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C33.85 6.05 29.20 4 24 4 16.32 4 9.66 8.34 6.31 14.69z" />
      <path fill="#4CAF50" d="M24 44c5.16 0 9.86-1.98 13.41-5.20l-6.19-5.24C29.20 35 26.71 36 24 36c-5.18 0-9.51-3.07-11.28-7.50l-6.52 5.02C9.51 39.55 16.23 44 24 44z" />
      <path fill="#1976D2" d="M43.61 20.08H42V20H24v8h11.30c-.84 2.36-2.37 4.40-4.31 5.92l6.19 5.24C36.92 38.41 44 32 44 24c0-1.34-.14-2.65-.39-3.92z" />
    </svg>
  );
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="ba-review-stars" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill={i < count ? "#fbbf24" : "#3a3a3a"} width="16" height="16">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="ba-reviews">
      <div className="ba-reviews-inner">
        <p className="ba-reviews-kicker">REVIEWS</p>
        <h2 className="ba-reviews-title">Wat onze gasten zeggen</h2>
        <p className="ba-reviews-text">
          Echte beoordelingen van Google over ons eten, de service en de
          ervaring bij Burrito Azteca.
        </p>

        <div className="ba-reviews-grid">
          {reviews.map((r) => (
            <article key={r.name} className="ba-review-card reveal">
              <div className="ba-review-head">
                <div className="ba-review-avatar">{r.initials}</div>
                <div>
                  <div className="ba-review-name">{r.name}</div>
                  <div className="ba-review-date">{r.date}</div>
                </div>
                <GoogleLogo />
              </div>
              <StarRow count={r.rating} />
              <p className="ba-review-text">{r.text}</p>
            </article>
          ))}
        </div>

        <div className="ba-reviews-cta">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJ7YR1IoN4yEcRWnsWlLKa9M0"
            target="_blank"
            rel="noopener noreferrer"
            className="ba-reviews-btn"
          >
            Bekijk alle reviews op Google →
          </a>
        </div>
      </div>
    </section>
  );
}
