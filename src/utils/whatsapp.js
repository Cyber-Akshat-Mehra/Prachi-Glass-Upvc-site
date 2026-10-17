const INDIAN_MOBILE = /^[6-9]\d{9}$/;
const WHATSAPP_NUMBER_FORMAT = /^\d{8,15}$/;

/** Strips spaces, hyphens, "+91", "91" and a leading "0"; returns the digits only. */
export function normalizeIndianMobile(input) {
  let digits = String(input ?? "").replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return digits;
}

export function isValidIndianMobile(input) {
  return INDIAN_MOBILE.test(normalizeIndianMobile(input));
}

export function formatIndianMobile(input) {
  const d = normalizeIndianMobile(input);
  return INDIAN_MOBILE.test(d) ? `+91 ${d.slice(0, 5)} ${d.slice(5)}` : String(input ?? "").trim();
}

export function isValidWhatsAppNumber(number) {
  return WHATSAPP_NUMBER_FORMAT.test(String(number ?? ""));
}

// Control characters would corrupt the message; everything else is kept as typed.
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

const singleLine = (value) => String(value ?? "").replace(CONTROL_CHARS, "").replace(/\s+/g, " ").trim();
const multiLine = (value) =>
  String(value ?? "")
    .replace(CONTROL_CHARS, "")
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

export function buildQuoteMessage({ businessName, name, phone, product, location, dimensions, requirements }) {
  const lines = [
    `*New quote request — ${businessName}*`,
    "",
    `*Name:* ${singleLine(name)}`,
    `*Phone:* ${formatIndianMobile(phone)}`,
    `*Product:* ${singleLine(product)}`,
    `*Project location:* ${singleLine(location)}`,
  ];
  const dims = singleLine(dimensions);
  if (dims) lines.push(`*Approx. dimensions:* ${dims}`);
  const extra = multiLine(requirements);
  if (extra) lines.push(`*Additional requirements:*`, extra);
  lines.push("", "_Sent from the website quote form._");
  return lines.join("\n");
}

export function buildWhatsAppUrl(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
