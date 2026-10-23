
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Keep the waitlist publicly accessible.
  if (pathname === "/join-the-house") {
    return NextResponse.next();
  }

  // Preserve the signup and payment API routes.
  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Allow the images used by the waitlist.
  if (pathname.startsWith("/images/")) {
    return NextResponse.next();
  }

  // Allow Next.js assets and browser icons.
  if (
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // Send every other website page to the waitlist.
  return NextResponse.redirect(
    new URL("/join-the-house", request.url)
  );
}

export const config = {
  matcher: ["/:path*"],
};
