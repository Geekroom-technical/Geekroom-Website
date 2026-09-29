"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket, faCalendarDays, faChartSimple, faDownload, faFileLines, faFilter, faUsers } from "@fortawesome/free-solid-svg-icons"

const formatDate = (value) => value ? new Date(value).toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" }) : "-"

export default function Dashboard() {
  const [applicants, setApplicants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [branchFilter, setBranchFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await fetch("/api/applicants")
        const data = await response.json()
        if (!response.ok) throw new Error(data.message || "Unable to load applicants")
        setApplicants(data)
      } catch (requestError) {
        setError(requestError.message)
      } finally {
        setLoading(false)
      }
    }

    fetchApplicants()
  }, [])

  const todayCount = applicants.filter((applicant) => {
    const date = new Date(applicant.submittedAt)
    return date.toDateString() === new Date().toDateString()
  }).length

  const branches = [...new Set(applicants.map((applicant) => applicant.branch).filter(Boolean))].sort()
  const departments = [...new Set(applicants.map((applicant) => applicant.department).filter(Boolean))].sort()
  const filteredApplicants = applicants.filter((applicant) => {
    const matchesBranch = branchFilter === "all" || applicant.branch === branchFilter
    const matchesDepartment = departmentFilter === "all" || applicant.department === departmentFilter
    return matchesBranch && matchesDepartment
  })

  const handleLogout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" })
    window.location.href = "/admin"
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-gray-600">
        <div className="flex items-center gap-3 text-sm font-semibold"><FontAwesomeIcon icon={faChartSimple} className="h-4 w-4 animate-pulse text-cyan-700" /> Loading applications...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white px-5 py-12 text-black sm:px-8 lg:px-12">
      <div className="pointer-events-none fixed -left-40 top-0 h-96 w-96 rounded-full bg-orange-100/70 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-cyan-100/70 blur-3xl" />

      <main className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col gap-6 border-b border-black/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/Logo.png" alt="GeekRoom" width={44} height={44} className="h-11 w-11 object-contain" />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">GeekRoom</p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Applicant dashboard</h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/api/applicants/csv" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-cyan-700 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-900/10 transition hover:-translate-y-0.5">
              <FontAwesomeIcon icon={faDownload} className="h-4 w-4" /> Download CSV
            </a>
            <button type="button" onClick={handleLogout} className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-bold text-gray-700 transition hover:border-cyan-600 hover:text-cyan-800">
              <FontAwesomeIcon icon={faArrowRightFromBracket} className="h-4 w-4" /> Log out
            </button>
          </div>
        </header>

        {error && <p className="mb-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

        <section className="mb-8 grid gap-4 sm:grid-cols-3">
            {[
            { label: "Showing applicants", value: filteredApplicants.length, icon: faUsers, color: "text-orange-700" },
            { label: "Submitted today", value: todayCount, icon: faCalendarDays, color: "text-cyan-700" },
            { label: "Active intake", value: "Open", icon: faFileLines, color: "text-teal-700" },
          ].map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-white/70 bg-white/65 p-5 shadow-[0_12px_40px_rgba(15,118,110,0.08)] backdrop-blur-xl">
              <FontAwesomeIcon icon={stat.icon} className={`mb-5 h-5 w-5 ${stat.color}`} />
              <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-500">{stat.label}</p>
            </article>
          ))}
        </section>

        <section className="overflow-hidden rounded-2xl border border-black/10 bg-white/75 shadow-[0_20px_70px_rgba(15,118,110,0.08)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-black/10 px-5 py-5 sm:px-7">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Join us applications</h2>
              <p className="mt-1 text-sm text-gray-500">Review the latest submissions from the recruitment form.</p>
            </div>
            <FontAwesomeIcon icon={faFileLines} className="hidden h-5 w-5 text-cyan-700 sm:block" />
          </div>

          <div className="flex flex-col gap-3 border-b border-black/10 bg-gray-50/60 px-5 py-4 sm:flex-row sm:items-center sm:px-7">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
              <FontAwesomeIcon icon={faFilter} className="h-4 w-4 text-cyan-700" />
              Filter applications
            </div>
            <label className="flex-1">
              <span className="sr-only">Filter by branch</span>
              <select value={branchFilter} onChange={(event) => setBranchFilter(event.target.value)} className="w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-500/10">
                <option value="all">All branches</option>
                {branches.map((branch) => <option key={branch} value={branch}>{branch}</option>)}
              </select>
            </label>
            <label className="flex-1">
              <span className="sr-only">Filter by department</span>
              <select value={departmentFilter} onChange={(event) => setDepartmentFilter(event.target.value)} className="w-full rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-500/10">
                <option value="all">All departments</option>
                {departments.map((department) => <option key={department} value={department}>{department}</option>)}
              </select>
            </label>
            {(branchFilter !== "all" || departmentFilter !== "all") && <button type="button" onClick={() => { setBranchFilter("all"); setDepartmentFilter("all") }} className="text-sm font-bold text-cyan-800 underline underline-offset-4">Clear filters</button>}
          </div>

          {filteredApplicants.length === 0 ? (
            <div className="px-6 py-20 text-center text-sm text-gray-500">No applications have been submitted yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left">
                <thead className="bg-gray-50/80 text-xs uppercase tracking-wider text-gray-500">
                  <tr>{["Applicant", "Registration", "Phone", "Department", "Branch", "Submitted"].map((heading) => <th key={heading} className="px-5 py-4 font-bold">{heading}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {filteredApplicants.map((applicant, index) => (
                    <tr key={`${applicant.registrationNo}-${index}`} className="transition hover:bg-cyan-50/40">
                      <td className="px-5 py-4"><p className="font-semibold">{applicant.name || "-"}</p><p className="mt-1 max-w-xs truncate text-xs text-gray-500">{applicant.whyJoin || "No reason provided"}</p></td>
                      <td className="px-5 py-4 font-mono text-sm text-gray-700">{applicant.registrationNo || "-"}</td>
                      <td className="px-5 py-4 text-sm text-gray-700">{applicant.phone || "-"}</td>
                      <td className="px-5 py-4"><span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800">{applicant.department || "-"}</span></td>
                      <td className="px-5 py-4 text-sm text-gray-700">{applicant.branch || "-"}</td>
                      <td className="px-5 py-4 text-sm text-gray-500">{formatDate(applicant.submittedAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
