import { NextResponse } from "next/server"

export async function POST(req) {
  const { email, password } = await req.json()

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const adminSecret = process.env.ADMIN_SECRET || "geekroom_admin_secret_key_2026"

    const res = NextResponse.json({ message: "Login successful" })

    res.cookies.set("admin", adminSecret, {
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 hours
    })

    return res
  }

  return NextResponse.json(
    { message: "Invalid credentials" },
    { status: 401 }
  )
}