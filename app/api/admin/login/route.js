import { NextResponse } from "next/server"
import { ADMIN_COOKIE, hasValidAdminCredentials } from "../../../../lib/admin-auth"

export async function POST(request) {
  let credentials

  try {
    credentials = await request.json()
  } catch {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 })
  }

  if (!hasValidAdminCredentials(credentials.email, credentials.password)) {
    return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
  }

  if (!process.env.ADMIN_SECRET) {
    return NextResponse.json({ message: "Admin authentication is not configured" }, { status: 500 })
  }

  const response = NextResponse.json({ message: "Login successful" })
  response.cookies.set(ADMIN_COOKIE, process.env.ADMIN_SECRET, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
    path: "/",
  })

  return response
}

export async function DELETE() {
  const response = NextResponse.json({ message: "Logged out" })
  response.cookies.delete(ADMIN_COOKIE)
  return response
}