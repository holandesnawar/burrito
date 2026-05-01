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
  hours: [
    { day: "Maandag", value: "Gesloten", closed: true },
    { day: "Dinsdag", value: "16:30 — 21:00" },
    { day: "Woensdag", value: "16:30 — 21:00" },
    { day: "Donderdag", value: "16:30 — 21:00" },
    { day: "Vrijdag", value: "16:30 — 21:30" },
    { day: "Zaterdag", value: "16:30 — 21:30" },
    { day: "Zondag", value: "16:30 — 21:00" },
  ],
  delivery: {
    info: "Tot €30 — €2,50 bezorgkosten",
    orderUrl: "https://burritoazteca.sitedish.shop/",
  },
  reservation: {
    url: "https://widget.thefork.com/a568eaa6-aa18-4b67-bec7-0f0f113445d0",
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
