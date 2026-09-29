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

export function getApiBaseUrl(request) {
  const configuredUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL
  const isLocalUrl = configuredUrl && /localhost|127\.0\.0\.1/.test(configuredUrl)

  if (configuredUrl && !(process.env.VERCEL && isLocalUrl)) {
    return configuredUrl.replace(/\/$/, "")
  }

  if (request?.url) {
    return new URL(request.url).origin
  }

  return "http://localhost:8000"
}