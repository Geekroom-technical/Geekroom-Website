import { NextResponse } from "next/server"
import { isAdminRequest } from "../../../../lib/admin-auth"
import { getApplicants } from "../../../../lib/applicants"

const baseColumns = [
  ["Name", "name"],
  ["Registration Number", "registrationNo"],
  ["Phone", "phone"],
  ["Branch", "branch"],
  ["Section", "section"],
  ["Department", "department"],
  ["Why Join", "whyJoin"],
  ["Past Experience", "pastExperience"],
  ["Time Commitment", "timeCommitment"],
  ["Submitted At", "submittedAt"],
]

function formatAnswerLabel(key) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (character) => character.toUpperCase())
}

function csvValue(value) {
  const text = value == null
    ? ""
    : Array.isArray(value)
      ? value.join("; ")
    : typeof value === "object"
      ? ""
      : String(value)

  return `"${text.replaceAll('"', '""')}"`
}

export async function GET(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  try {
    const applicants = await getApplicants(request)
    const answerKeys = [...new Set(
      applicants.flatMap((applicant) => Object.keys(applicant.deptAnswers || {})),
    )].sort()

    const columns = [
      ...baseColumns,
      ...answerKeys.map((key) => [formatAnswerLabel(key), `deptAnswers.${key}`]),
    ]

    const csv = [
      columns.map(([label]) => csvValue(label)).join(","),
      ...applicants.map((applicant) => columns
        .map(([, key]) => csvValue(
          key.startsWith("deptAnswers.")
            ? applicant.deptAnswers?.[key.replace("deptAnswers.", "")]
            : applicant[key],
        ))
        .join(",")),
    ].join("\r\n")

    return new NextResponse(`\uFEFF${csv}`, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": "attachment; filename=geekroom-applicants.csv",
      },
    })
  } catch (error) {
    console.error("Failed to export applicants:", error)
    return NextResponse.json({ message: "Unable to export applicants" }, { status: 502 })
  }
}