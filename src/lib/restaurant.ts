export const restaurant = {
  name: "Burrito Azteca",
  tagline: "De Mexicaan van Kampen",
  address: {
    street: "Broederstraat 25",
    postal: "8261 GN",
    city: "Kampen",
    country: "Nederland",
  },
  contact: {
    phone: "06 146 59 727",
    phoneHref: "tel:+31614659727",
    email: "info@burrito-azteca.nl",
  },
  social: {
    instagram: "https://instagram.com/burrito.azteca",
    facebook: "https://facebook.com/BurritoAztecaKampen",
  },
  siteUrl: "https://burrito-azteca.nl",
  // Horario también hardcodeado en hero/header/footer; mantener en sync.
  hours: [
    { day: "Maandag", value: "Gesloten", closed: true },
    { day: "Dinsdag", value: "16:30 tot 21:00" },
    { day: "Woensdag", value: "16:30 tot 21:00" },
    { day: "Donderdag", value: "16:30 tot 21:00" },
    { day: "Vrijdag", value: "16:30 tot 21:30" },
    { day: "Zaterdag", value: "16:30 tot 21:30" },
    { day: "Zondag", value: "16:30 tot 21:00" },
  ],
  delivery: {
    info: "Tot €30: €2,50 bezorgkosten",
    orderUrl: "https://burritoazteca.sitedish.shop/",
  },
  reservation: {
    url: "https://widget.thefork.com/a568eaa6-aa18-4b67-bec7-0f0f113445d0",
  },
  // Cierre por vacaciones. El popup se muestra hasta el último día (incluido)
  // y desaparece solo después. Para quitarlo antes: enabled: false.
  holiday: {
    enabled: true,
    from: "2026-09-28", // ISO, primer día cerrado
    to: "2026-10-05", // ISO, último día cerrado
    fromLabel: "maandag 28 september",
    toLabel: "maandag 5 oktober",
    reopenLabel: "dinsdag 6 oktober",
  },
};

export const categories = [
  { slug: "burritos", name: "Burritos", color: "cat-burrito" },
  { slug: "entomatadas", name: "Entomatadas", color: "cat-entomatada" },
  { slug: "quesadillas", name: "Quesadillas", color: "cat-quesadilla" },
  { slug: "nachos", name: "Nacho's", color: "cat-nacho" },
  { slug: "tostadas", name: "Tostadas", color: "cat-tostada" },
  { slug: "desserts", name: "Desserts", color: "cat-dessert" },
] as const;
