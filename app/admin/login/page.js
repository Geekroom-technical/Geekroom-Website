"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faLock, faShieldHalved } from "@fortawesome/free-solid-svg-icons"

export default function AdminLogin() {
  const router = useRouter()
  const [form, setForm] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await response.json()

      if (!response.ok) {
        setError(data.message || "Unable to sign in")
        return
      }

      router.push("/admin/dashboard")
    } catch {
      setError("Unable to connect to the admin service")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-16 text-black">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyan-200/50 blur-3xl" />

      <main className="relative z-10 w-full max-w-md animate-fadeIn">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Image src="/Logo.png" alt="GeekRoom" width={48} height={48} className="h-12 w-12 object-contain" />
          <div>
            <p className="text-xl font-bold tracking-tight">GeekRoom</p>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">Admin workspace</p>
          </div>
        </div>

        <section className="rounded-[2rem] border border-white/70 bg-white/65 p-7 shadow-[0_24px_80px_rgba(15,118,110,0.12)] backdrop-blur-2xl sm:p-10">
          <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-cyan-500 text-white shadow-lg">
            <FontAwesomeIcon icon={faShieldHalved} className="h-5 w-5" />
          </div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">Restricted access</p>
          <h1 className="mb-3 text-4xl font-semibold tracking-tight">Welcome back.</h1>
          <p className="mb-8 leading-relaxed text-gray-600">Sign in to review and export GeekRoom applications.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-gray-700">Email address</span>
              <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/70 px-4 transition focus-within:border-cyan-600 focus-within:ring-4 focus-within:ring-cyan-500/10">
                <FontAwesomeIcon icon={faLock} className="h-4 w-4 text-cyan-700" />
                <input type="email" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="admin@geekroom.co.in" className="w-full bg-transparent py-3.5 text-sm outline-none placeholder:text-gray-400" />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-gray-700">Password</span>
              <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/70 px-4 transition focus-within:border-cyan-600 focus-within:ring-4 focus-within:ring-cyan-500/10">
                <FontAwesomeIcon icon={faLock} className="h-4 w-4 text-cyan-700" />
                <input type="password" required value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} placeholder="Enter your password" className="w-full bg-transparent py-3.5 text-sm outline-none placeholder:text-gray-400" />
              </span>
            </label>

            {error && <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

            <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-600 to-cyan-700 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-900/10 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-wait disabled:opacity-60">
              {loading ? "Signing in..." : "Open dashboard"}
              {!loading && <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />}
            </button>
          </form>
        </section>

        <p className="mt-6 text-center text-xs font-medium text-gray-500">GeekRoom internal tools</p>
      </main>
    </div>
  )
}
