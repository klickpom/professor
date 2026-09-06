import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "البروفيسور للبورسلين والسيراميك";

type Props = { params: Promise<{ locale: string }> };

export default async function OpenGraphImage({ params }: Props) {
  const { locale } = await params;
  const title = locale === "en" ? "Al-Professor" : "البروفيسور";
  const sub =
    locale === "en"
      ? "Adhesive, grout, latex — Gharbia"
      : "لاصق وروبة ولاتكس في الغربية";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#E8E6E1",
          color: "#161513",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 28, color: "#B42318", letterSpacing: 4 }}>ETONG</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 80, fontWeight: 700 }}>{title}</div>
          <div style={{ fontSize: 32, marginTop: 16 }}>{sub}</div>
        </div>
      </div>
    ),
    size,
  );
}
