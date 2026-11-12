// Concept renders (1600 × 1000). Every one is shown with the caption below.
export const IMAGE_CAPTION = "Konseptbilete (3D-illustrasjon)";

export const IMAGES = {
  hero: {
    src: "/images/heima-boksen-hero.jpg",
    alt: "Heima-boksen: ein boks i lys eik med ei smal, ravfarga lysstripe framme.",
  },
  detail: {
    src: "/images/heima-boksen-detail.jpg",
    alt: "Nærbilete av framsida på Heima-boksen, der den ravfarga lysstripa gløder svakt.",
  },
  shelfEvening: {
    src: "/images/heima-boksen-shelf-evening.jpg",
    alt: "Heima-boksen står mellom bøkene i ei bokhylle om kvelden, med lysstripa tend.",
  },
  shelfDay: {
    src: "/images/heima-boksen-shelf-day.jpg",
    alt: "Heima-boksen står mellom fargerike bøker i ei bokhylle på dagtid.",
  },
  back: {
    src: "/images/heima-boksen-back.jpg",
    alt: "Baksida av Heima-boksen med Heima-logoen, ein nettverkskontakt og ein straumkontakt.",
  },
  phone: {
    src: "/images/heima-boksen-phone.jpg",
    alt: "Heima-boksen på eit bord, med ein mobil framfor som viser Heima-appen.",
  },
  size: {
    src: "/images/heima-boksen-size.jpg",
    alt: "Heima-boksen ved sida av ei bok og ein kaffikopp, for å vise kor stor han er.",
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
