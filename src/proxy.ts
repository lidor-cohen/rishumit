import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await auth.api.getSession({ headers: await headers() });

  // Dashboard to Auth Routing
  if (pathname.startsWith("/auth") && session)
    return NextResponse.redirect(new URL("/dashboard/clients", request.url));

  // Protected Routes
  if (pathname.startsWith("/dashboard") && !session)
    return NextResponse.redirect(new URL("/auth/login", request.url));

  // Onboarding Routing
  const organizations = await auth.api.listOrganizations({
    headers: await headers(),
  });

  if (pathname.startsWith("/dashboard") && organizations.length < 1)
    return NextResponse.redirect(new URL("/onboarding", request.url));
  if (pathname.startsWith("/onboarding") && organizations.length > 0)
    return NextResponse.redirect(new URL("/dashboard/clients", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
