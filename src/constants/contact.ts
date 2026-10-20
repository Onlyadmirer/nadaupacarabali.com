export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nadaupacarabali.com";

export const contactInfo = {
  phone: "+62 851-1930-9088",
  phoneRaw: "6285119309088",
  whatsapp: "https://wa.me/6285119309088",
  email: "nadaupacarabali@gmail.com",
  address: "Denpasar, Bali, Indonesia",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252221.63097546456!2d115.0976606!3d-8.65041615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f1c7b8e5e6d%3A0xf1a1b1c1d1e1f1a1!2sDenpasar%2C%20Kota%20Denpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1",
  social: {
    instagram: "https://www.instagram.com/nadaupacarabali/",
    youtube: "https://www.youtube.com/@NadaUpacaraBali",
    tiktok: "https://www.tiktok.com/@nadaupacarabali",
  },
  hours: "Senin - Sabtu, 08:00 - 20:00 WITA",
} as const;

/** Builds a WhatsApp chat link, optionally pre-filled with a message. */
export function waLink(message?: string) {
  return message
    ? `${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`
    : contactInfo.whatsapp;
}
