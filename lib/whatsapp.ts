import { site } from "@/data/site";

export function waLink(text?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function telLink() {
  return `tel:${site.phoneCall}`;
}
