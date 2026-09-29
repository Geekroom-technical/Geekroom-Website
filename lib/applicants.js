import { getApiBaseUrl } from "./admin-auth"

export async function getApplicants(request) {
  const response = await fetch(`${getApiBaseUrl(request)}/api/recruitment`, {
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`Recruitment API returned ${response.status}`)
  }

  const data = await response.json()
  return Array.isArray(data) ? data : data.recruitment || []
}