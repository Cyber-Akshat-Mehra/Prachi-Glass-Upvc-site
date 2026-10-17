/**
 * WhatsApp number that receives quote requests from the website form.
 *
 * Format: international, digits only — country code + number.
 * No "+", spaces or hyphens. For India: "91" followed by the 10-digit mobile.
 * Example: "919876543210"
 *
 * This is the single place to change it: the quote form, the Contact page
 * WhatsApp button and the floating WhatsApp button all read from here.
 */
export const WHATSAPP_NUMBER = "919310561094";

/**
 * Business address — also used for the Google Map on the Contact page.
 * Edit here if it ever changes.
 */
const ADDRESS = "Shop no-1, Hariom Market, Vill. Gijhore, Sector 53, Noida, Uttar Pradesh 201307";

/**
 * Google Map on the Contact page (no API key needed).
 *
 * MAP_LINK      — opens the business in Google Maps (the "Open in Google Maps" button).
 * MAP_EMBED_URL — the iframe address. By default it searches ADDRESS above. For an exact pin:
 *                 Google Maps → Share → Embed a map → copy the URL inside src="…" and paste it here.
 */
export const MAP_LINK = "https://maps.app.goo.gl/zZtdT63h8TaFEwrz9";
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=17&output=embed`;

/**
 * Working hours — single source of truth. Shown on the Contact page and next to the quote form.
 * OPENING_HOURS_SCHEMA is the same hours in schema.org format for search engines; keep the two in step.
 */
export const WORKING_HOURS = "Sunday–Sunday: 9:30 AM – 7:00 PM";
export const OPENING_HOURS_SCHEMA = "Mo-Su 09:30-19:00";

export const SITE = {
  name: "Prachi Glass & uPVC",
  shortName: "Prachi",
  tagline: "uPVC, Aluminium & Glass Systems in Noida",
  description:
    "Premium uPVC & aluminium windows, doors, toughened glass, partitions and railings — engineered and installed.",
  phone: "+91 93105 61094",
  phoneHref: "tel:+919310561094",
  whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}`,
  email: "prachiglassandupvc@gmail.com",
  address: ADDRESS,
  instagram: "https://www.instagram.com/prachiglassandupvc",
  workingHours: WORKING_HOURS,
  ogImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
};
