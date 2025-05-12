// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("accessToken")?.value;

  // Public pages
  const isSignin = pathname === "/auth/signin";
  const isSignup = pathname === "/auth/signup";

  // If you have other public pages (e.g. "/", "/about"), list them here:
  const isPublic = isSignin || isSignup || pathname === "/";

  if (!isPublic && !token) {
    // Any non-public page, without a token → redirect to sign-in
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
  if ((isSignin || isSignup) && token) {
    // Already signed in → send away from auth pages
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  // Match every route except Next.js internals
  matcher: [
    /*
      This RegExp matches anything:
      - that does NOT start with /_next or /favicon.ico or /robots.txt (internal)
      - so it will run on /, /profile, /settings, /courses, etc.
    */
    "/((?!_next|favicon\\.ico|robots\\.txt).*)",
  ],
};
