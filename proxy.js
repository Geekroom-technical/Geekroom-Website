import { NextResponse } from "next/server"
import { isAdminRequest } from "./lib/admin-auth"

export function proxy(req) {
  const isAdmin = isAdminRequest(req)
  const { pathname } = req.nextUrl

  // Keep the login entry point available at the intentionally unlinked /admin path.
  if (pathname === "/admin" || pathname === "/admin/login") {
    return NextResponse.next()
  }

  // 🔒 Protect admin pages
  if (!isAdmin && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin", req.url))
  }

  // 🔒 Protect API routes that expose sensitive data
  if (!isAdmin && pathname === "/api/applicants") {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/api/applicants"],
}