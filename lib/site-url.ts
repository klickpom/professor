const LIVE_SITE_URL = "https://professo-eg.online";

export function getSiteUrl() {
  if (process.env.NODE_ENV === "production" || process.env.STATIC_EXPORT === "1") {
    return LIVE_SITE_URL;
  }

  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  if (explicit.includes("professor-eg.online")) return LIVE_SITE_URL;
  if (explicit) return explicit;
  return "http://localhost:3000";
}
