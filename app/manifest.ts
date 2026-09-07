import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name.ar,
    short_name: site.shortName.ar,
    description: `${site.role.ar} — ${site.region.ar}`,
    start_url: "/",
    display: "standalone",
    background_color: "#E8E6E1",
    theme_color: "#B42318",
    lang: "ar",
    dir: "rtl",
    icons: [
      { src: "/icon.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
