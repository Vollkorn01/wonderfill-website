export const SITE = {
  name: 'Wonderfill',
  legalName: 'Fountain Impact AG',
  url: 'https://www.wonderfill.ch',
  email: 'info@wonderfill.ch',
  booking: 'https://meetings.hubspot.com/wonderfill',
  locale: 'de_CH',
  lang: 'de-CH',
  city: 'Zürich',
  country: 'CH',
  ogImage:
    'https://cdn.prod.website-files.com/6788d058c8c090e82d1ab1dd/67f43ea364f571d35ec87a47_Wonderfill_25-03-25-01.jpg',
  stationImage:
    'https://cdn.prod.website-files.com/6788d058c8c090e82d1ab1dd/67ea4e447f5f079ded562410_999a30f6d77c5ce80e5ff3b7c8365ab9_Wonderfill_25-03-25-29.png',
  social: {
    linkedin: 'https://www.linkedin.com/company/wonderfillstation',
    instagram: 'https://instagram.com/wonderfill.ch',
    tiktok: 'https://tiktok.com/@wonderfill6',
  },
};

export const NAV = [
  { href: '/station', label: 'Getränkestation' },
  { href: '/getraenke', label: 'Getränke & Zutaten' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/faq', label: 'FAQ' },
];

const CDN = 'https://cdn.prod.website-files.com/6788d058c8c090e82d1ab1dd/';
export const PARTNERS = [
  { name: 'Boston Consulting Group', src: CDN + '679a1157c261919be192080e_BCG%20Logo.png' },
  { name: 'Emmi Group', src: CDN + '67d956a723866fe6c4bee1bb_Emmi_Group_Logo%201.png' },
  { name: 'ZHAW', src: CDN + '67a322438bfca08379a1410a_ZHAW_Logo%201.png' },
  { name: 'ETH Student Project House', src: CDN + '679a1157c261919be1920805_ETH%20Student%20Project%20House%20Logo.png' },
  { name: 'Rockethub', src: CDN + '679a1157c261919be1920809_Rockethub%20Logo%201.png' },
];

// Main flavours. Ingredients only listed where the current site publishes them.
export const FLAVORS = [
  {
    name: 'Orange',
    note: 'Sonnig & spritzig',
    ingredients: ['Wasser', 'Bio-Zitronensaft (Italien)', 'natürliches Orangenaroma'],
    color: '#d9822b',
  },
  { name: 'Ingwer', note: 'Wärmend & würzig', color: '#c9a24a' },
  { name: 'Himbeere', note: 'Beerig & frisch', color: '#b5485a' },
];

export const MORE_FLAVORS = [
  { name: 'Ingwer & Apfel', color: '#a8a14a' },
  { name: 'Pfirsich & Holunderblüte', color: '#e0a56b' },
  { name: 'Passionsfrucht', color: '#d8a23c' },
  { name: 'Holunderblüte', color: '#e7ddb0' },
  { name: 'Hibiskus', color: '#9c3b4a' },
  { name: 'Grapefruit', color: '#e08a6d' },
  { name: 'Mate', color: '#7c8a4a' },
];

export const BOOSTS = [
  {
    name: 'Focus',
    sub: 'Koffein',
    text: 'Steigere deine Energie und Konzentration mit unserem Koffein-Zusatz.',
  },
  {
    name: 'Recover',
    sub: 'MineraLiquid',
    text: 'Elektrolyte von MineraLiquid bringen Muskeln und Nerven wieder in Balance.',
  },
  {
    name: 'Protect',
    sub: 'Vitamin Mix',
    text: 'Stärke dein Immunsystem mit Vitaminen B1, B2, B3, B5, B6 und B12.',
    isNew: true,
  },
];

export const VITAMINS = [
  ['Vitamin B1 (Thiamin)', 'Unterstützt den Energiestoffwechsel und das Nervensystem.'],
  ['Vitamin B2 (Riboflavin)', 'Trägt zur Zellregeneration und zum Schutz vor oxidativem Stress bei.'],
  ['Vitamin B3 (Niacin)', 'Fördert die mentale Leistungsfähigkeit und gesunde Haut.'],
  ['Vitamin B5 (Pantothensäure)', 'Wichtig für die Bildung von Hormonen und zur Reduktion von Müdigkeit.'],
  ['Vitamin B6', 'Unterstützt die Funktion des Immunsystems und den Proteinstoffwechsel.'],
  ['Vitamin B12', 'Entscheidend für Zellteilung, Nervenfunktion und Blutbildung.'],
];

export const FAQS = [
  {
    group: 'Allgemein',
    items: [
      ['Was macht die Wonderfill-Getränkestation so einzigartig?', 'Die Station bietet ein neues Mass an Personalisierung durch die Auswahl zwischen gefiltertem Wasser (still oder sprudelnd), gesunden Getränken und funktionellen Zusätzen. Dank ihrer IoT-Fähigkeit wird die Wartung optimiert, und das Display ermöglicht eine effiziente Kommunikation mit Mitarbeitenden.'],
      ['Wo kann der Getränkespender eingesetzt werden?', 'Die Wonderfill-Station eignet sich ideal für Büros, Sportzentren, Schulen, Gesundheitseinrichtungen und weitere Standorte. Wir bieten kalorienarme Getränke auf Basis natürlicher Zutaten für eine breite Zielgruppe. Aktuell sind wir in der Region Zürich aktiv, planen aber eine Expansion in weitere Gebiete.'],
      ['Was ist in unserem Angebot enthalten?', 'Im Abonnement erhalten Sie die Wonderfill-Station und Zugang zur IoT-Plattform für die Überwachung von Verbrauch und Füllständen. Je nach Servicepaket übernimmt unser Team die Reinigung, den Austausch von Wasserfilter und CO₂-Flasche sowie den Ersatz der Geschmacks-Kartuschen. Kontaktieren Sie uns für ein massgeschneidertes Angebot.'],
      ['Wie viele Stationen benötige ich für meinen Standort?', 'Die Anzahl richtet sich nach den örtlichen Gegebenheiten – der Mitarbeiterzahl, Nutzungsfrequenz und dem Standort. Kontaktieren Sie uns für eine individuelle Beratung und passende Lösung.'],
      ['Wie oft müssen die Konzentrate ersetzt werden?', 'Ungeöffnete Konzentrate haben eine Haltbarkeit von 1 Jahr. Nach Anschluss sollten sie innerhalb von 6 Monaten verbraucht werden. Das Volumen der Bag-in-Box (BIB) ist für optimalen Austausch und maximale Haltbarkeit ausgelegt.'],
      ['Welche Behälter kann ich an der Wonderfill-Station verwenden?', "Die 'Pour'-Taste ermöglicht eine variable Getränkeabgabe. Behälter sollten maximal 28 cm hoch sein und idealerweise eine weite Öffnung haben. Die meisten wiederverwendbaren Flaschen und Becher sind geeignet."],
      ['Wie viel kostet die Wonderfill-Station?', 'Die Kosten richten sich nach Unternehmensgrösse und Verbrauch. Kontaktieren Sie uns für ein individuelles Angebot. Wir arbeiten mit einem Pauschal-Abonnementmodell plus variablen Kosten für Geschmacksrichtungen.'],
      ['Wie viele Geschmacksrichtungen und Zusätze sind in einem Spender enthalten?', 'Die Station fasst bis zu 6 Geschmacksrichtungen oder Zusätze. Wir empfehlen 3–4 Geschmacksrichtungen und 2–3 funktionelle Zusätze.'],
      ['Enthalten eure Geschmacksrichtungen Zucker?', 'Alle Geschmacksrichtungen sind zuckerarm. Unsere optimierten Rezepturen bieten optimalen Geschmack bei minimalem Zuckergehalt.'],
      ['Wo werden die Geschmacksrichtungen und Zusätze hergestellt?', 'Die Geschmacksrichtungen produzieren wir in der Schweiz, die Zusätze in Deutschland. Wir setzen auf lokale Hersteller und kurze Transportwege zur Minimierung von CO₂-Emissionen.'],
      ['Kann ich die Geschmacksrichtungen und Zusätze selbst wechseln?', 'Ja, die Getränke kommen in Bag-in-Box (BIB)-Kartuschen. Der Austausch ist einfach und unkompliziert – perfekt für Office Manager.'],
    ],
  },
  {
    group: 'Technik',
    items: [
      ['Was wird benötigt, um eine Wonderfill-Station im Büro zu installieren?', 'Erforderlich sind ein Trinkwasseranschluss und eine Standard-220V/50Hz-Steckdose. Für optimalen Betrieb empfehlen wir einen Abwasseranschluss oder alternativ einen Abwassertank mit Wasserstandssensor.'],
      ['Wie lange dauert die Installation der Station?', 'Nach einer Standortbesichtigung zur Prüfung der Anschlüsse dauert die Installation etwa 2–3 Stunden, abhängig von den örtlichen Gegebenheiten.'],
      ['Wie viel Zeit nimmt die Wartung der Station in Anspruch?', 'Die tägliche Reinigung mit Desinfektion von Oberflächen und Ausgabedüse dauert etwa 1 Minute. Der Konzentrat-Austausch benötigt weniger als 5 Minuten und fällt im Durchschnitt einmal pro Monat an.'],
      ['Kann ich die Station auch in einer Küche installieren?', 'Die Wonderfill-Station eignet sich für die Küche oder als freistehende Lösung mit passendem Möbel. Eine vorherige Prüfung durch unsere Spezialisten stellt die optimale Installation sicher.'],
      ['Wie funktioniert die Station?', 'Die Station nutzt lokales Wasser und Strom. Das Wasser wird gefiltert, gekühlt und bei Bedarf karbonisiert. Vor der Ausgabe erfolgt die Mischung mit natürlichen Geschmacksrichtungen und Zusätzen. Die Bedienung erfolgt über Touchscreen, die Vernetzung über WLAN oder 4G-Modul.'],
    ],
  },
  {
    group: 'Impact',
    items: [
      ['Ist der Spender wirklich eine nachhaltigere Alternative zur Einwegflasche?', 'Unser Life-Cycle Assessment (LCA) an der ZHAW belegt: Die Getränkestation reduziert CO₂-Emissionen um 49 % im Vergleich zu Einwegflaschen. Mit weiteren Optimierungen erwarten wir noch grössere Umweltvorteile.'],
      ['Wie viele PET-Flaschen kann man mit der Wonderfill-Getränkestation jährlich einsparen?', 'Die Zahl hängt stark vom Standort und dem Konsum ab. Grundsätzlich kann man bis zu 30’000 Flaschen pro Getränkestation einsparen, wenn die Frequenz hoch genug ist. Laut der Ökobilanzierung an der ZHAW lässt sich der Plastikabfall um 98 % reduzieren.'],
    ],
  },
];

// Prefix internal paths with the deploy base (e.g. /wonderfill-website on GitHub Pages).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path) => BASE + path;
export const stripBase = (path) => (BASE && path.startsWith(BASE) ? path.slice(BASE.length) : path) || '/';

// 'natur' (warm forest design) or 'classic' (close to the current site).
export const THEME = import.meta.env.PUBLIC_THEME === 'classic' ? 'classic' : 'natur';
export const LOGO_IMG = 'https://cdn.prod.website-files.com/6788d058c8c090e82d1ab1dd/679a113dbc1882377919c2e7_logo%2520(5)-p-500.png';
