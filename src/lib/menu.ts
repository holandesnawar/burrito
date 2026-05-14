export type MenuItem = {
  name: string;
  description?: string;
  price: string | { single: string; double?: string };
  badges?: string[]; // ej: ["vegan", "halal", "pikant"]
};

export type MenuCategory = {
  slug: string;
  name: string;
  subtitle?: string;
  items: MenuItem[];
};

// Menú oficial 2026 — extraído de la carta impresa.

export const menu: MenuCategory[] = [
  {
    slug: "voorgerechten",
    name: "Voorgerechten",
    subtitle: "Entradas",
    items: [
      {
        name: "Nacho Azteca",
        description:
          "Krokante tortilla stukjes met spekjes, rundergehakt, maïs, kaas, tomaat, Mexicaanse Hanensaus, crème-fraîche, jalapeños, guacamole & cheddar saus",
        price: "15,25",
      },
      {
        name: "Papas Azteca",
        description:
          "Friet met spekjes, rundergehakt, maïs, kaas, tomaat, Mexicaanse Hanensaus, crème-fraîche, jalapeños, guacamole & cheddar saus",
        price: "15,25",
      },
      {
        name: "Vegetarische of Vegan Nacho's of Papas",
        description:
          "Krokante tortilla stukjes (of friet), maïs, kaas, tomaat, Mexicaanse Hanensaus, crème fraîche, jalapeños, guacamole & cheddar saus",
        price: "14,25",
        badges: ["vegetarisch", "vegan"],
      },
      {
        name: "Nacho's met saus / topping naar keuze",
        description:
          "Per portie. Toppings: guacamole, crème-fraîche, Mexicaanse Hanensaus, tomatensaus, kaassaus, mangosaus, maïs, tomaat, jalapeño, rundergehakt of verse koriander. Cheddarsaus / spekjes: € 2,50",
        price: "4,50",
      },
      {
        name: "Albondigas con Salsa de Tomate",
        description:
          "Mexicaanse rundergehaktballetjes in tomatensaus geserveerd met friet. Keuze: pikant of normaal",
        price: "11,95",
      },
      {
        name: "Empanadas",
        description:
          "Deegpasteitjes. Keuze: Espinaca (spinazie & kaas), Maïs (maïs & groenten), Pollo (kip met groenten) of Carne (rundergehakt en groenten)",
        price: "4,50",
      },
      {
        name: "Gambas al Ajillo",
        description:
          "Gepelde tijgergarnalen gebakken in olijfolie, knoflook en gedroogde chili-peper. Keuze: pikant of BBQ-saus",
        price: "12,90",
      },
      {
        name: "Aceitunas Marinadas",
        description: "Gemarineerde olijven in diverse kruiden",
        price: "9,95",
        badges: ["vegan"],
      },
      {
        name: "Sopa de Tomate",
        description: "Huisgemaakte Mexicaanse tomatensoep",
        price: "5,95",
        badges: ["vegetarisch"],
      },
      {
        name: "Sopa Pozole",
        description: "Mexicaanse soep met kip, witte maïs & groenten",
        price: "8,50",
      },
      {
        name: "Chicken Wings met Friet",
        price: "9,50",
      },
    ],
  },
  {
    slug: "antojitos",
    name: "Mexicaanse hapjes",
    subtitle: "Antojitos",
    items: [
      {
        name: "Tostadas",
        description:
          "Tortilla (zacht of krokant) met bonen, rijst, groenten, sla, tomaat, kaas, maïs, guacamole, crème fraîche, jalapeños, Mexicaanse Hanensaus & verse koriander. Keuze: kip, rundergehakt, pulled-pork of veggie. Beef / tijgergarnalen / zalm / Azteca-mix: € 20,95",
        price: "19,50",
      },
      {
        name: "Quesadillas",
        description:
          "Gegrilde tortillas met kaas, cheddar, groenten, guacamole & maïs. Keuze: kip, rundergehakt, pulled-pork of veggie. Beef / tijgergarnalen / zalm / Azteca-mix: € 20,95",
        price: "18,95",
      },
      {
        name: "Burrito",
        description:
          "Een grote tortilla met rijst, bonen, sla, tomaat, maïs, guacamole, kaas & Mexicaanse Hanensaus. Keuze: kip, rundergehakt, pulled-pork of veggie. Beef / tijgergarnalen / zalm / Azteca-mix: € 21,50",
        price: "19,50",
      },
      {
        name: "Tacos",
        description:
          "Drie tortillas met groenten, guacamole en andere ingrediënten van de chef. Keuze: kip, rundergehakt, pulled-pork of veggie. Beef / tijgergarnalen / gerookte zalm / Azteca-mix: € 19,95",
        price: "17,95",
      },
    ],
  },
  {
    slug: "hoofdgerechten",
    name: "Hoofdgerechten",
    subtitle: "Principal",
    items: [
      {
        name: "Fajitas",
        description:
          "Zachte maïs tortillas. Reepjes vlees met groenten geserveerd met rijst, bonen & salade (tomaten, maïs, sla). Keuze: kip, beef of veggie en 3 soorten saus apart. Vraag voor niet pikant",
        price: "24,90",
      },
      {
        name: "Chili con Carne",
        description:
          "Rundergehakt, groenten, bonen, maïs, verse koriander, lekker gekruid en geserveerd met rijst & nachos",
        price: "17,90",
        badges: ["pikant"],
      },
      {
        name: "Carne Guisada",
        description: "Stoofvlees in Mexicaanse stijl geserveerd met friet",
        price: "26,90",
      },
      {
        name: "Salmon Mexicano",
        description:
          "Gegrilde zalm met piementos & knoflook geserveerd met rijst en salade",
        price: "18,95",
      },
      {
        name: "Bife Completo",
        description: "Entrecote met rijst, friet, bonen & salade",
        price: "23,90",
      },
      {
        name: "Pollo con Salsa de BBQ",
        description: "Kipfilet met BBQ-saus geserveerd met papas-fritas",
        price: "16,50",
      },
      {
        name: "Enmoladas de Pollo",
        description:
          "Kipfilet met Mexicaanse mole-saus & geserveerd met Mexicaanse rijst",
        price: "17,50",
      },
      {
        name: "Pollo Entomatado",
        description:
          "Malse kip gesmoord in een rijke saus van gerijpte tomaten en specerijen",
        price: "20,90",
      },
      {
        name: "Ravioles",
        description:
          "Pasta gevuld met spinazie en ricotta geserveerd met tomatensaus: normaal of pikant. Met kip of rundergehakt: € 16,90",
        price: "14,90",
        badges: ["vegetarisch"],
      },
      {
        name: "Entomatadas",
        description:
          "Twee zachte tortillas met bonen, rijst, groenten, crème-fraîche, guacamole, tomaat, rode ui & verse koriander. Geserveerd met biologische tomatensaus. Beef / Azteca-mix: € 21,95. Kip, rundergehakt, pulled-pork of veggie: € 20,95",
        price: "20,95",
      },
      {
        name: "Enchiladas",
        description:
          "Drie zachte tortillas met groenten, kaas, guacamole, rode ui, tomaat, sla, verse koriander & pikante tomatensaus. Beef / Azteca-mix: € 22,95. Kip, rundergehakt, pulled-pork of veggie: € 21,95",
        price: "21,95",
        badges: ["pikant"],
      },
    ],
  },
  {
    slug: "menu-sharing",
    name: "Voor te delen",
    subtitle: "Para compartir",
    items: [
      {
        name: "Menu Azteca 2 Personen",
        description:
          "1× Nacho's met cheddarsaus. 2× Quesadilla's (kip, rundergehakt, pulled-pork of veggie). 2× Burrito (kip, rundergehakt, pulled pork of veggie). 2× Churros met chocoladesaus óf 1× Cheesecake p.p.",
        price: "54,90",
      },
      {
        name: "Keuzemenu",
        description:
          "Menu Degustación — probeer verschillende gerechten uit onze Mexicaanse keuken in proef-porties. Kies 6 gerechten van de kaart, bijvoorbeeld 2× voorgerecht, 3× hoofdgerecht en 1× dessert.",
        price: "38,90",
      },
      {
        name: "Borrelplank Pica-Pica",
        description:
          "Grote borrelplank voor ongeveer 2 personen. Nacho's, papas-fritas, kleine empanadas, guacamole-kroketjes en meer...",
        price: "26,90",
      },
    ],
  },
  {
    slug: "salades",
    name: "Salades",
    subtitle: "Ensaladas",
    items: [
      {
        name: "Ensalada Azteca",
        description:
          "Sla, tomaat, maïs, bonen, kaas, nachos, mango, crème-fraîche, guacamole, Mexicaanse Hanensaus, jalapeños, rijst & kip",
        price: "14,50",
      },
      {
        name: "Ensalada Gezond",
        description:
          "Sla, tomaat, maïs, bonen, kaas, nachos, mango, crème-fraîche, guacamole, Mexicaanse Hanensaus, rijst & jalapeños",
        price: "13,50",
        badges: ["vegetarisch", "vegan"],
      },
      {
        name: "Ensalada Broederstraat",
        description:
          "Sla, tomaat, maïs, nachos, mango, crème-fraîche, guacamole",
        price: "9,50",
      },
      {
        name: "Ensalada Burgwal",
        description:
          "Sla, tomaat, nachos, mango, crème-fraîche, guacamole, Mexicaanse Hanensaus, jalapeños",
        price: "10,50",
      },
    ],
  },
  {
    slug: "bijgerechten",
    name: "Bijgerechten & Sauzen",
    subtitle: "Acompañamientos & Salsas",
    items: [
      { name: "Papas fritas", price: "4,50" },
      {
        name: "Batatas fritas",
        description: "Zoete aardappel friet",
        price: "7,50",
      },
      { name: "Mexicaanse rijst", price: "2,50" },
      { name: "Bonen", price: "2,00" },
      { name: "Sla, tomaat, maïs", price: "2,00" },
      { name: "Maïskoven", price: "5,50" },
      { name: "Kip", price: "2,00" },
      { name: "Mayonaise", price: "1,00" },
      { name: "BBQ-saus", price: "1,00" },
      { name: "Mexicaanse Hanensaus", price: "1,00", badges: ["pikant"] },
      { name: "Mango saus", price: "1,00" },
      { name: "Crème Fraîche", price: "1,00" },
      { name: "Guacamole", price: "2,00" },
      { name: "Cheddarsaus", price: "2,00" },
      { name: "Chipotle", price: "2,00", badges: ["pikant"] },
      { name: "Salsa Tomate Normaal", price: "2,00" },
      { name: "Salsa Tomate pikante", price: "3,50", badges: ["pikant"] },
    ],
  },
  {
    slug: "kindermenu",
    name: "Kindermenu",
    subtitle: "Meny Infantil",
    items: [
      {
        name: "Menu Infantil",
        description:
          "1. Voorgerechtje: Nacho's met cheddar of Papas Fritas met cheddar. 2. Hoofdgerecht: Cheeky Wing BBQ al Horno (uit de oven) of Quesadilla met kaas. 3. Toetje: Helado (1 bolletje ijs). + Jugo (klein pakje drinken). Met een cadeautje!",
        price: "12,50",
      },
    ],
  },
  {
    slug: "postres",
    name: "Desserts",
    subtitle: "Postres",
    items: [
      {
        name: "Churros",
        description: "Met poedersuiker of kaneelsuiker",
        price: "6,50",
      },
      {
        name: "Churros de Fiesta",
        description:
          "Een kleurrijk feest! Met dulce de leche, chocoladesaus, frambozensaus, kaneelsuiker, slagroom & verschillende discodips",
        price: "7,75",
      },
      {
        name: "Tres Leches",
        price: "7,75",
      },
      {
        name: "Tarta Chocolate",
        description: "Chocoladetaart met ijs",
        price: "8,50",
      },
      {
        name: "Canasta de Helado",
        description:
          "Een lekker knapperig wafelmandje met 3 bolletjes ijs en pistache noten",
        price: "8,95",
      },
      {
        name: "Merengue Taart Passie / Framboos",
        price: "7,75",
        badges: ["vegetarisch"],
      },
      {
        name: "Cheesecake",
        description: "Passievrucht/Mango of Passievrucht/Framboos",
        price: "8,50",
      },
      {
        name: "Chocolade Lava Cake",
        price: "7,75",
      },
      {
        name: "Cranberry Kwarktaart",
        price: "7,95",
      },
      {
        name: "Handgemaakte Chocolade Bavaroise",
        price: "7,75",
      },
      {
        name: "Postre Azteca",
        description: "Verrassing van de chef",
        price: "7,75",
      },
    ],
  },
  {
    slug: "frisdranken",
    name: "Frisdranken",
    subtitle: "Bebidas",
    items: [
      {
        name: "Jarritos",
        description: "Origineel Mexicaanse frisdrank — mango, limoen of fruitpunch",
        price: "4,50",
      },
      { name: "Spa rood / blauw", price: "3,90" },
      { name: "Spa Grote fles", price: "6,90" },
      { name: "Ice Tea", price: "4,25" },
      { name: "Cola", price: "4,25" },
      { name: "Cola Zero", price: "4,25" },
      { name: "Fanta Orange", price: "4,25" },
      { name: "Fanta Cassis", price: "4,25" },
      { name: "Rivella", price: "4,50" },
      { name: "Bitter Lemon / Tonic", price: "4,25" },
      { name: "Verse Jus d'Orange", price: "4,90" },
      { name: "Appelsap", price: "4,25" },
      { name: "Red Bull", price: "4,50" },
    ],
  },
  {
    slug: "warme-dranken",
    name: "Warme dranken",
    subtitle: "Bebidas calientes",
    items: [
      { name: "Koffie", price: "3,50" },
      { name: "Thee (diverse keuze)", price: "3,50" },
      { name: "Verse Muntthee", price: "4,25" },
      { name: "Cappuccino", price: "4,25" },
      { name: "Cappuccino met slagroom", price: "4,50" },
      { name: "Warme chocolademelk", price: "4,50" },
      { name: "Warme chocolademelk met slagroom", price: "4,90" },
    ],
  },
  {
    slug: "bieren",
    name: "Bieren",
    subtitle: "Cervezas",
    items: [
      { name: "Corona", price: "5,25" },
      { name: "Corona 0.0%", price: "5,25" },
      { name: "Desperados", price: "5,25" },
      { name: "Hertog Jan", price: "4,50" },
      { name: "Hertog Jan 0.0%", price: "4,50" },
      { name: "Radler", price: "4,50" },
      { name: "Radler 0.0%", price: "4,50" },
    ],
  },
  {
    slug: "wijnen",
    name: "Wijnen",
    subtitle: "Vinos",
    items: [
      { name: "Huiswijn Wit (per glas)", price: "5,50" },
      { name: "Huiswijn Rood (per glas)", price: "5,50" },
      { name: "Huiswijn Rosé (per glas)", price: "5,50" },
      { name: "Don David Malbec Reserva (fles)", price: "24,50" },
      { name: "Michel Torino Malbec (fles)", price: "18,50" },
      { name: "Michel Torino Sauvignon Blanc (fles)", price: "18,50" },
      { name: "Santa Alicia Rosé (fles)", price: "15,50" },
    ],
  },
  {
    slug: "cocktails",
    name: "Cocktails",
    subtitle: "Cocteles",
    items: [
      { name: "Mojito", price: "10,50" },
      { name: "Margarita", price: "10,50" },
      { name: "Cuba Libre", price: "10,50" },
    ],
  },
  {
    slug: "gedistilleerd",
    name: "Gedistilleerd",
    subtitle: "Destilados",
    items: [
      { name: "Vodka", price: "5,90" },
      { name: "Gin", price: "5,90" },
      { name: "Tequila", price: "5,90" },
      { name: "Tequila Special", price: "7,90" },
      { name: "Havanna Club Rum", price: "5,90" },
      { name: "Whisky", price: "6,00" },
      { name: "Baileys", price: "5,90" },
      { name: "Amaretto", price: "5,90" },
      { name: "Cointreau", price: "5,90" },
      { name: "Tia Maria", price: "5,90" },
      { name: "Kahlua", price: "5,90" },
    ],
  },
];
