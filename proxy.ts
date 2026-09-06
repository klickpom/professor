import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import type { NextRequest } from "next/server";

const handleI18n = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  return handleI18n(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|icon|apple-icon|apple-touch-icon|favicon.ico|.*\\..*).*)",
};
