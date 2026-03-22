import { NextResponse } from "next/server"

export function proxy(req) {
  const adminCookie = req.cookies.get("admin")
  const adminSecret = process.env.ADMIN_SECRET || "geekroom_admin_secret_key_2026"
  const isAdmin = adminCookie?.value === adminSecret
  const { pathname } = req.nextUrl

  // ❌ Skip login page (VERY IMPORTANT)
  if (pathname === "/admin/login") {
    return NextResponse.next()
  }

  // 🔒 Protect admin pages
  if (!isAdmin && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin/login", req.url))
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