import { timingSafeEqual } from "node:crypto"

export const ADMIN_COOKIE = "admin"

function matchesSecret(value, expected) {
  if (!value || !expected) return false

  const actualBuffer = Buffer.from(value)
  const expectedBuffer = Buffer.from(expected)

  return actualBuffer.length === expectedBuffer.length &&
    timingSafeEqual(actualBuffer, expectedBuffer)
}

export function isAdminRequest(request) {
  return matchesSecret(
    request.cookies.get(ADMIN_COOKIE)?.value,
    process.env.ADMIN_SECRET,
  )
}

export function hasValidAdminCredentials(email, password) {
  return matchesSecret(email, process.env.ADMIN_EMAIL) &&
    matchesSecret(password, process.env.ADMIN_PASSWORD)
}

export function getApiBaseUrl() {
  return (process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000").replace(/\/$/, "")
}