"use client"
import { useState } from "react"
import Image from "next/image";
import InteractiveBackground from "../../components/InteractiveBackground";

export default function JoinForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    reason: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)

    const res = await fetch("/api/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form),
    })

    const data = await res.json()
    alert(data.message)
    setSubmitted(false)
  }

  const inputFields = [
    { name: "name", type: "text", placeholder: "Full Name", required: true, icon: "👤" },
    { name: "email", type: "email", placeholder: "Email Address", required: true, icon: "✉️" },
    { name: "interest", type: "text", placeholder: "Skills / Interests", required: true, icon: "⚡" },
  ]

  return (
    <InteractiveBackground>
      <div className="flex flex-col items-center justify-center px-4 text-center select-none w-full max-w-4xl mx-auto flex-grow py-20">
            
        {/* GEEKROOM Heading - Increased spacing via py-20 + mb-4 */}
       <h5 className="mt-6 text-3xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1a1a1a] select-none uppercase animate-fadeIn text-center">
         GeekRoom <br />
        <span className="text-base sm:text-xl md:text-xl font-bold">Let's &nbsp; Geek &nbsp; Out </span>
      </h5>
       

        {/* Form Badge Style */}
        <div className="mt-6 px-5 py-1.5 rounded-full border-[1.5px] border-gray-600 mb-6 bg-white/50 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-gray-800 hover:bg-white hover:shadow-lg max-w-md mx-auto">
          <span className="text-gray-800 font-medium text-sm sm:text-base tracking-wide">
            Join GeekRoom - Campus Chapter
          </span>
        </div>

        {/* Form Card - Light theme matching home */}
        <div className="w-full max-w-lg bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-2xl animate-slideInUp max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Text inputs */}
            {inputFields.map((field, idx) => (
              <div key={field.name} className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg text-gray-600 shrink-0">{field.icon}</span>
                  <label className="sr-only">{field.placeholder}</label>
                </div>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  value={form[field.name]}
                  required={field.required}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-300 rounded-xl text-black placeholder-gray-500 font-light text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300"
                />
              </div>
            ))}

            {/* Reason Textarea */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg text-gray-600 shrink-0">💬</span>
                <label className="sr-only">Why do you want to join?</label>
              </div>
              <textarea
                name="reason"
                placeholder="Why do you want to join?"
                onChange={handleChange}
                value={form.reason}
                rows="4"
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-300 rounded-xl text-black placeholder-gray-500 font-light text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button - Home style gradient-ish */}
            <button
              type="submit"
              disabled={submitted}
              className="w-full py-4 px-8 rounded-2xl text-black font-bold text-lg uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-teal-500 hover:text-white active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-gray-200 to-gray-300 border-2 border-gray-400 shadow-lg"
            >
              {submitted ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-gray-600" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "APPLY NOW"
              )}
            </button>
          </form>
        </div>

        {/* Footer note - matching home subtitle style */}
        <p className="text-gray-800 text-base sm:text-lg md:text-xl font-normal tracking-tight leading-relaxed max-w-3xl mt-12 animate-fadeIn">
          By applying, you agree to be part of something extraordinary ✦
        </p>
      </div>
    </InteractiveBackground>
  )
}
