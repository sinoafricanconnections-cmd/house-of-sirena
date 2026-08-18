export const products = {
  "pearl-muse": {
    slug: "pearl-muse",
    name: "Pearl Muse",
    subtitle:
      "A luminous expression of effortless beauty inspired by the quiet reflections of the sea.",
    price: null,
    currency: "ZAR",
  },

  "ocean-grace": {
    slug: "ocean-grace",
    name: "Ocean Grace",
    subtitle:
      "Gracefully designed to bring softness, balance and timeless elegance to every look.",
    price: null,
    currency: "ZAR",
  },

  "golden-siren": {
    slug: "golden-siren",
    name: "Golden Siren",
    subtitle:
      "A refined statement created for moments that deserve quiet confidence.",
    price: null,
    currency: "ZAR",
  },
} as const;

export type ProductSlug = keyof typeof products;

export function getProduct(slug: string) {
  if (!(slug in products)) {
    return null;
  }

  return products[slug as ProductSlug];
}