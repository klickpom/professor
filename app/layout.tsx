import type { ReactNode } from "react";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
