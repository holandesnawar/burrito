export function Visit() {
  return (
    <section className="ba-visit">
      <div className="ba-visit-inner">
        <h2 className="ba-visit-title">Bezoek ons</h2>
        <p className="ba-visit-address">Broederstraat 25, Kampen</p>

        <div className="ba-visit-opening" aria-label="Openingstijden">
          <div className="ba-visit-opening-row">
            <span>Maandag</span><span>Gesloten</span>
          </div>
          <div className="ba-visit-opening-row">
            <span>Dinsdag t/m Donderdag</span><span>16:00 tot 21:00</span>
          </div>
          <div className="ba-visit-opening-row">
            <span>Vrijdag t/m Zaterdag</span><span>16:00 tot 21:30</span>
          </div>
          <div className="ba-visit-opening-row">
            <span>Zondag</span><span>16:00 tot 21:00</span>
          </div>
        </div>

        <div className="ba-visit-cta-row">
          <a
            className="ba-visit-cta"
            href="https://maps.apple.com/?address=Broederstraat%2025,Kampen,Netherlands"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Apple Kaart</span><span>&rarr;</span>
          </a>
          <a
            className="ba-visit-cta"
            href="https://maps.app.goo.gl/ZgJGy1zFS9nm2g7p8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Google Maps</span><span>&rarr;</span>
          </a>
        </div>

        <div className="ba-visit-photo-wrap">
          <div className="ba-visit-photo">
            <img
              src="/images/sala.jpg"
              alt="Gezellige sfeer bij Burrito Azteca"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
