import { SITE, OPENING_HOURS_SCHEMA } from "@/constants/site";
import { ENV } from "@/constants/env";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  url: ENV.siteUrl,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop no-1, Hariom Market, Vill. Gijhore, Sector 53",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201307",
    addressCountry: "IN",
  },
  sameAs: [SITE.instagram],
  openingHours: OPENING_HOURS_SCHEMA,
};

export const productSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  image: product.gallery,
  description: product.description,
  category: product.category,
  brand: { "@type": "Brand", name: SITE.name },
});
