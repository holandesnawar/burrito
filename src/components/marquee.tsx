const PILLS = [
  "🌮 Authentiek Mexicaans",
  "✦ 100% Halal",
  "🥑 Verse ingrediënten",
  "🌶️ Huisgemaakte sauzen",
  "🌽 Sinds 2017",
  "🇲🇽 Hart van Kampen",
];

export function Marquee() {
  const items = [...PILLS, ...PILLS, ...PILLS];
  return (
    <div className="ba-marquee" aria-hidden="true">
      <div className="ba-marquee-track">
        {items.map((p, i) => (
          <span key={i} className="ba-marquee-item">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
