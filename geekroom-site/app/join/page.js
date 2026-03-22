"use client"
import { useState, useEffect, useRef } from "react"

export default function JoinForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    reason: ""
  })
  const [mounted, setMounted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Particle canvas effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.5 + 0.1
        this.color = Math.random() > 0.5 ? "185, 120, 40" : "200, 160, 80"
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`
        ctx.fill()
      }
    }

    for (let i = 0; i < 60; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(185, 130, 50, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

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
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center">
      {/* Inline styles for animations */}
      <style>{`
        @keyframes floatShape {
          0%, 100% { transform: translateY(0) rotate(var(--rot)); }
          50% { transform: translateY(-40px) rotate(calc(var(--rot) + 10deg)); }
        }

        @keyframes floatShapeSlow {
          0%, 100% { transform: translateY(0) rotate(var(--rot)) scale(1); }
          50% { transform: translateY(-20px) rotate(calc(var(--rot) - 8deg)) scale(1.05); }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(185, 130, 50, 0.3); }
          50% { border-color: rgba(210, 160, 70, 0.6); }
        }

        @keyframes letterReveal {
          from { opacity: 0; transform: translateY(60px) rotateX(-40deg); }
          to { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }

        @keyframes subtitleSlide {
          from { opacity: 0; letter-spacing: 1.5em; }
          to { opacity: 1; letter-spacing: 0.4em; }
        }

        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 20px rgba(185, 130, 50, 0.3); }
          50% { text-shadow: 0 0 40px rgba(210, 160, 70, 0.6), 0 0 80px rgba(185, 130, 50, 0.2); }
        }

        .hero-letter {
          display: inline-block;
          animation: letterReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          transform-origin: bottom center;
        }

        .form-field-enter {
          animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .geo-shape {
          animation: floatShape 12s ease-in-out infinite;
        }

        .geo-shape-slow {
          animation: floatShapeSlow 18s ease-in-out infinite;
        }

        .card-glow {
          animation: borderGlow 4s ease-in-out infinite;
        }

        .submit-btn {
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.5s ease;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .input-underline {
          position: relative;
        }

        .input-underline::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #b97828, #d4a04a, #b97828);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateX(-50%);
        }

        .input-underline.focused::after {
          width: 100%;
        }

        .particle-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="particle-canvas" />

      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {/* Large diamond top-left */}
        <div
          className="absolute geo-shape"
          style={{
            '--rot': '45deg',
            width: '400px',
            height: '400px',
            top: '-10%',
            left: '-5%',
            background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.5) 0%, rgba(184, 115, 51, 0.25) 50%, rgba(139, 69, 19, 0.1) 100%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        />
        {/* Medium diamond right */}
        <div
          className="absolute geo-shape-slow"
          style={{
            '--rot': '20deg',
            width: '300px',
            height: '300px',
            top: '15%',
            right: '-8%',
            background: 'linear-gradient(180deg, rgba(160, 82, 45, 0.4) 0%, rgba(210, 150, 60, 0.15) 100%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        />
        {/* Small square bottom-left */}
        <div
          className="absolute geo-shape"
          style={{
            '--rot': '30deg',
            width: '200px',
            height: '200px',
            bottom: '5%',
            left: '8%',
            background: 'linear-gradient(45deg, rgba(184, 115, 51, 0.35) 0%, rgba(139, 69, 19, 0.15) 100%)',
            clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
          }}
        />
        {/* Tiny diamond center-right */}
        <div
          className="absolute geo-shape-slow"
          style={{
            '--rot': '60deg',
            width: '150px',
            height: '150px',
            bottom: '20%',
            right: '15%',
            background: 'linear-gradient(225deg, rgba(185, 120, 40, 0.3) 0%, rgba(140, 80, 30, 0.1) 100%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        />
        {/* Extra subtle shape far right */}
        <div
          className="absolute geo-shape"
          style={{
            '--rot': '15deg',
            width: '250px',
            height: '250px',
            top: '50%',
            left: '-3%',
            background: 'linear-gradient(90deg, rgba(160, 100, 30, 0.2) 0%, transparent 100%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-lg px-6 py-12" style={{ perspective: '1000px' }}>

        {/* Hero Section */}
        <div className="text-center mb-14">
          {/* GEEKROOM large text */}
          <h1
            className="font-black text-white mb-4 tracking-tight leading-none"
            style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontStyle: 'italic',
              animation: mounted ? 'glowPulse 4s ease-in-out infinite' : 'none',
            }}
          >
            {"GEEKROOM".split("").map((letter, i) => (
              <span
                key={i}
                className="hero-letter"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  color: i >= 4 ? '#d4a04a' : '#ffffff',
                }}
              >
                {letter}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm font-medium uppercase"
            style={{
              color: 'rgba(210, 160, 70, 0.9)',
              animation: mounted ? 'subtitleSlide 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both' : 'none',
              letterSpacing: '0.4em',
            }}
          >
            Let's Geek Out
          </p>

          {/* Decorative line */}
          <div
            className="mx-auto mt-6"
            style={{
              width: mounted ? '80px' : '0px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #b97828, transparent)',
              transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s',
            }}
          />
        </div>

        {/* Form Card */}
        <div
          className="rounded-2xl p-8 card-glow"
          style={{
            background: 'linear-gradient(145deg, rgba(20, 15, 8, 0.9) 0%, rgba(10, 8, 5, 0.95) 100%)',
            border: '1px solid rgba(185, 130, 50, 0.3)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(185, 130, 50, 0.1)',
            animation: mounted ? 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both' : 'none',
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Text inputs */}
            {inputFields.map((field, idx) => (
              <div
                key={field.name}
                className={`form-field-enter input-underline ${focusedField === field.name ? 'focused' : ''}`}
                style={{ animationDelay: `${0.6 + idx * 0.12}s` }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg" style={{ opacity: 0.7 }}>{field.icon}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    value={form[field.name]}
                    required={field.required}
                    className="w-full bg-transparent py-3 text-white placeholder:text-white/30 font-light text-base focus:outline-none transition-all duration-300"
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      caretColor: '#d4a04a',
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Reason Textarea */}
            <div
              className={`form-field-enter input-underline ${focusedField === 'reason' ? 'focused' : ''}`}
              style={{ animationDelay: '0.96s' }}
            >
              <div className="flex items-start gap-3">
                <span className="text-lg mt-3" style={{ opacity: 0.7 }}>💬</span>
                <textarea
                  name="reason"
                  placeholder="Why do you want to join?"
                  onChange={handleChange}
                  onFocus={() => setFocusedField('reason')}
                  onBlur={() => setFocusedField(null)}
                  value={form.reason}
                  rows="4"
                  className="w-full bg-transparent py-3 text-white placeholder:text-white/30 font-light text-base focus:outline-none transition-all duration-300 resize-none"
                  style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    caretColor: '#d4a04a',
                  }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div
              className="form-field-enter pt-4"
              style={{ animationDelay: '1.08s' }}
            >
              <button
                type="submit"
                disabled={submitted}
                className="submit-btn w-full py-4 rounded-xl text-black font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #b97828 0%, #d4a04a 50%, #c48a30 100%)',
                  boxShadow: '0 8px 30px rgba(185, 120, 40, 0.3), 0 2px 8px rgba(185, 120, 40, 0.2)',
                  letterSpacing: '0.2em',
                }}
              >
                {submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Apply Now"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Footer note */}
        <p
          className="text-center mt-8 text-xs font-light form-field-enter"
          style={{
            color: 'rgba(255, 255, 255, 0.25)',
            animationDelay: '1.3s',
          }}
        >
          By applying, you agree to be part of something extraordinary ✦
        </p>
      </div>
    </div>
  )
}