import { NextResponse } from "next/server"
import { isAdminRequest } from "../../../lib/admin-auth"
import { getApplicants } from "../../../lib/applicants"

export async function GET(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  try {
    return NextResponse.json(await getApplicants())
  } catch (error) {
    console.error("Failed to load applicants:", error)
    return NextResponse.json({ message: "Unable to load applicants" }, { status: 502 })
  }
}