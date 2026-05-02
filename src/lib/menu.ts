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

// NOTA: contenido extraído del PDF/menú actual. Los precios son los oficiales.
// Las categorías "Burritos, Quesadillas, Nacho's, Tostadas, Desserts" están
// con placeholder porque no las tenía a mano — Rida puede rellenarlas o
// las migramos a Sanity para que el dueño las edite.

export const menu: MenuCategory[] = [
  {
    slug: "salades",
    name: "Salades",
    items: [
      {
        name: "Ensalada Azteca",
        description:
          "Sla, tomaat, maïs, bonen, kaas, nachos, mango, crème-fraîche, guacamole, Mexicaanse Hanensaus, jalapeños, rijst & kip",
        price: "13,95",
      },
      {
        name: "Ensalada Gezond",
        description:
          "Sla, tomaat, maïs, bonen, kaas, nachos, mango, crème-fraîche, guacamole, Mexicaanse Hanensaus, rijst & jalapeños",
        price: "12,95",
        badges: ["vegetarisch", "vegan"],
      },
      {
        name: "Ensalada Broederstraat",
        description:
          "Sla, tomaat, maïs, nachos, mango, crème-fraîche, guacamole",
        price: "8,50",
      },
      {
        name: "Ensalada Burgwal",
        description:
          "Sla, tomaat, nachos, mango, crème-fraîche, guacamole, Mexicaanse Hanensaus, jalapeños",
        price: "9,50",
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
          "Reepjes vlees met groenten geserveerd met rijst, bonen & salade (tomaten, maïs, sla). Keuze uit: Kip, beef of veggie en 3 soorten saus apart. Zachte maïs tortillas",
        price: "22,90",
      },
      {
        name: "Chili con Carne",
        description:
          "Rundergehakt, groenten, bonen, maïs, verse koriander, lekker gekruid en geserveerd met rijst & nachos",
        price: "16,90",
        badges: ["pikant"],
      },
      {
        name: "Pimientos Rellenos al Horno",
        description:
          "Gevulde paprika's uit de oven met rijst, bonen, groenten en kaas",
        price: "17,95",
      },
      {
        name: "Salmón Mexicano",
        description:
          "Gegrilde zalm met piementos & knoflook geserveerd met rijst en salade",
        price: "17,95",
      },
      {
        name: "Bife Completo",
        description: "Entrecote met rijst, friet, bonen & salade",
        price: "22,90",
      },
      {
        name: "Pollo con Salsa de BBQ",
        description:
          "Kipfilet met BBQ-saus geserveerd met papas-fritas",
        price: "17,95",
      },
      {
        name: "Enmoladas de Pollo",
        description:
          "Kipfilet met Mexicaanse mole-saus & geserveerd met Mexicaanse rijst",
        price: "19,25",
      },
      {
        name: "Crepes Poblanas",
        description:
          "Crêpe (pannenkoekje) gevuld met ricotta, spinazie en een groene saus",
        price: "18,25",
      },
      {
        name: "Ravioles",
        description:
          "Pasta gevuld met spinazie en ricotta geserveerd met tomatensaus: normaal of pikant. Kies: met kip of rundergehakt",
        price: { single: "13,90", double: "15,90" },
      },
      {
        name: "Entomatadas",
        description:
          "Twee zachte tortillas met bonen, rijst, groenten, crème-fraîche, guacamole, tomaat, rode ui & verse koriander. Geserveerd met biologische tomatensaus. Keuze: Beef of Azteca-mix. Kip, rundergehakt, pulled pork of veggie",
        price: { single: "20,95", double: "19,95" },
      },
      {
        name: "Enchiladas",
        description:
          "Drie zachte tortillas met groenten, kaas, guacamole, rode ui, tomaat, sla, verse koriander & pikante tomatensaus. Keuze uit: Beef of Azteca-mix. Kip, rundergehakt, pulled pork of veggie",
        price: { single: "21,95", double: "20,95" },
        badges: ["pikant"],
      },
    ],
  },
  {
    slug: "burritos",
    name: "Burritos",
    items: [
      // TODO Rida: rellena con los burritos del menú original
      { name: "Burrito Clásico", description: "Tortilla met kip, rijst, bonen, guacamole en kaas", price: "14,50" },
      { name: "Burrito Especial", description: "Tortilla met rundvlees, rijst, bonen, kaas en pikante saus", price: "15,50", badges: ["pikant"] },
    ],
  },
  {
    slug: "quesadillas",
    name: "Quesadillas",
    items: [
      // TODO Rida: rellena
      { name: "Quesadilla de Pollo", description: "Tortilla met kip, kaas, ui en paprika", price: "12,95" },
      { name: "Quesadilla Vegetariana", description: "Tortilla met kaas, paprika, ui, mais en bonen", price: "11,95", badges: ["vegetarisch"] },
    ],
  },
  {
    slug: "nachos",
    name: "Nacho's",
    items: [
      // TODO Rida: rellena
      { name: "Nachos Burrito Azteca", description: "Tortillachips met cheddar, jalapeños, salsa, guacamole en crème-fraîche", price: "11,50" },
      { name: "Nachos con Carne", description: "Tortillachips met chili con carne, kaas, jalapeños y guacamole", price: "13,50" },
    ],
  },
  {
    slug: "tostadas",
    name: "Tostadas",
    items: [
      // TODO Rida: rellena
      { name: "Tostada Tradicional", description: "Knapperige maïs tortilla met bonen, sla, tomaat, kaas y crème-fraîche", price: "9,50" },
    ],
  },
  {
    slug: "desserts",
    name: "Desserts",
    items: [
      // TODO Rida: rellena
      { name: "Churros con Chocolate", description: "Verse churros met warme chocolade", price: "5,50" },
      { name: "Flan Mexicano", description: "Romige flan met karamel", price: "5,90" },
    ],
  },
  {
    slug: "bijgerechten",
    name: "Bijgerechten",
    subtitle: "Acompañamientos",
    items: [
      { name: "Papas fritas", price: "3,90" },
      { name: "Batatas fritas", description: "Zoete aardappel friet", price: "5,00" },
      { name: "Mexicaanse rijst", price: "2,50" },
      { name: "Bonen", price: "2,00" },
      { name: "Sla, tomaat, maïs", price: "2,00" },
      { name: "Maïs", price: "1,00" },
      { name: "Spekjes", price: "2,00" },
      { name: "Kip", price: "2,00" },
    ],
  },
  {
    slug: "sauzen",
    name: "Sauzen",
    items: [
      { name: "Mayonaise", price: "1,00" },
      { name: "BBQ-saus", price: "1,00" },
      { name: "Mexicaanse Hanensaus", price: "1,00", badges: ["pikant"] },
      { name: "Pikante saus", price: "1,00", badges: ["pikant"] },
      { name: "Chipotle", price: "1,00", badges: ["pikant"] },
      { name: "Chipotle Dulce (Zoet)", price: "1,00" },
      { name: "Guacamole", price: "2,00" },
      { name: "Cheddarsaus", price: "2,00" },
      { name: "Crème-Fraîche", price: "1,00" },
      { name: "Mango saus", price: "1,00" },
      { name: "Salsa Tomate pikante", price: "2,00", badges: ["pikant"] },
      { name: "Salsa Tomate Normaal", price: "2,00" },
    ],
  },
];
