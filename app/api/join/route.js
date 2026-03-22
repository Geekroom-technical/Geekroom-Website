import { NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Applicant from "@/models/Applicant"

export async function POST(req) {
  try {
    const { name, email, interest, reason } = await req.json()

    if (!name || !email) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      )
    }

    await connectDB()

    // Prevent duplicate applications
    const existing = await Applicant.findOne({ email })
    if (existing) {
      return NextResponse.json(
        { message: "You already applied!" },
        { status: 400 }
      )
    }

    // Save to DB
    await Applicant.create({
      name,
      email,
      interest,
      reason,
    })

    return NextResponse.json({
      message: "Application submitted successfully!"
    })

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    )
  }
}