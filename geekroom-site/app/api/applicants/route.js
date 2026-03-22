import { NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Applicant from "@/models/Applicant"

export async function GET() {
  try {
    await connectDB()

    const applicants = await Applicant.find().sort({ createdAt: -1 })

    return NextResponse.json(applicants)

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: "Error fetching applicants" },
      { status: 500 }
    )
  }
}