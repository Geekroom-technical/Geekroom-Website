"use client"
import { useEffect, useState, useRef } from "react"

export default function Dashboard() {
  const [applicants, setApplicants] = useState([])
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    setMounted(true)
    fetchApplicants()
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

  const fetchApplicants = async () => {
    try {
      const res = await fetch("/api/applicants")
      const data = await res.json()
      setApplicants(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const todayCount = applicants.filter(a => {
    const d = new Date(a.createdAt)
    const today = new Date()
    return d.toDateString() === today.toDateString()
  }).length



  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <style>{`
          @keyframes glowPulse {
            0%, 100% { text-shadow: 0 0 20px rgba(185, 130, 50, 0.3); }
            50% { text-shadow: 0 0 40px rgba(210, 160, 70, 0.6), 0 0 80px rgba(185, 130, 50, 0.2); }
          }
          @keyframes spinGold {
            to { transform: rotate(360deg); }
          }
        `}</style>
        <div
          className="mb-6"
          style={{
            width: '48px',
            height: '48px',
            border: '3px solid rgba(185, 130, 50, 0.2)',
            borderTopColor: '#d4a04a',
            borderRadius: '50%',
            animation: 'spinGold 0.8s linear infinite',
          }}
        />
        <h2
          className="text-2xl font-black text-white tracking-tight"
          style={{
            fontStyle: 'italic',
            animation: 'glowPulse 2s ease-in-out infinite',
          }}
        >
          GEEK<span style={{ color: '#d4a04a' }}>ROOM</span>
        </h2>
        <p className="text-xs mt-2 uppercase tracking-widest" style={{ color: 'rgba(210, 160, 70, 0.6)' }}>
          Loading Dashboard...
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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

        @keyframes rowFadeIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
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

        .particle-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .table-row-enter {
          animation: rowFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .stat-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(185, 120, 40, 0.15);
        }
      `}</style>

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="particle-canvas" />

      {/* Geometric Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
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

      {/* Main Content */}
      <div className="relative z-10 p-6 md:p-10 max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12 pt-4">
          <h1
            className="font-black text-white mb-4 tracking-tight leading-none"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
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

          <p
            className="text-sm font-medium uppercase"
            style={{
              color: 'rgba(210, 160, 70, 0.9)',
              animation: mounted ? 'subtitleSlide 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both' : 'none',
              letterSpacing: '0.4em',
            }}
          >
            Applicant Dashboard
          </p>

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

        {/* Stats Row */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-md mx-auto form-field-enter"
          style={{ animationDelay: '0.5s' }}
        >
          {[
            { label: "Total Applicants", value: applicants.length, icon: "👥" },
            { label: "Today", value: todayCount, icon: "📅" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="stat-card rounded-xl p-5 text-center"
              style={{
                background: 'linear-gradient(145deg, rgba(20, 15, 8, 0.85) 0%, rgba(10, 8, 5, 0.9) 100%)',
                border: '1px solid rgba(185, 130, 50, 0.25)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              <span className="text-2xl block mb-2">{stat.icon}</span>
              <p
                className="text-2xl font-bold"
                style={{ color: '#d4a04a' }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs uppercase tracking-widest mt-1"
                style={{ color: 'rgba(255, 255, 255, 0.4)' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Applicants Table Card */}
        <div
          className="rounded-2xl card-glow overflow-hidden form-field-enter"
          style={{
            background: 'linear-gradient(145deg, rgba(20, 15, 8, 0.9) 0%, rgba(10, 8, 5, 0.95) 100%)',
            border: '1px solid rgba(185, 130, 50, 0.3)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(185, 130, 50, 0.1)',
            animationDelay: '0.7s',
          }}
        >
          {applicants.length === 0 ? (
            <div className="text-center py-20">
              <span className="text-5xl block mb-4">📭</span>
              <p className="text-lg font-light" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                No applicants yet
              </p>
              <p className="text-xs mt-2" style={{ color: 'rgba(210, 160, 70, 0.5)' }}>
                Applications will appear here once submitted
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr
                    style={{
                      background: 'linear-gradient(90deg, rgba(185, 120, 40, 0.15) 0%, rgba(210, 160, 70, 0.08) 100%)',
                      borderBottom: '1px solid rgba(185, 130, 50, 0.2)',
                    }}
                  >
                    {["#", "Name", "Email", "Skill", "Reason", "Date"].map((col) => (
                      <th
                        key={col}
                        className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider"
                        style={{ color: 'rgba(210, 160, 70, 0.8)' }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((app, i) => (
                    <tr
                      key={i}
                      className="table-row-enter transition-colors duration-200"
                      style={{
                        animationDelay: `${0.8 + i * 0.05}s`,
                        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                        background: i % 2 === 0
                          ? 'rgba(255, 255, 255, 0.01)'
                          : 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(185, 130, 50, 0.06)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = i % 2 === 0
                          ? 'rgba(255, 255, 255, 0.01)'
                          : 'transparent'
                      }}
                    >
                      <td
                        className="px-5 py-4 text-sm font-mono"
                        style={{ color: 'rgba(210, 160, 70, 0.5)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </td>
                      <td className="px-5 py-4 text-sm text-white font-medium">
                        {app.name}
                      </td>
                      <td
                        className="px-5 py-4 text-sm"
                        style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                      >
                        {app.email}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: 'rgba(185, 120, 40, 0.15)',
                            color: '#d4a04a',
                            border: '1px solid rgba(185, 130, 50, 0.2)',
                          }}
                        >
                          {app.interest}
                        </span>
                      </td>
                      <td
                        className="px-5 py-4 text-sm max-w-xs truncate"
                        style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                      >
                        {app.reason}
                      </td>
                      <td
                        className="px-5 py-4 text-sm font-mono"
                        style={{ color: 'rgba(255, 255, 255, 0.35)' }}
                      >
                        {new Date(app.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <p
          className="text-center mt-8 text-xs font-light form-field-enter"
          style={{
            color: 'rgba(255, 255, 255, 0.2)',
            animationDelay: '1.2s',
          }}
        >
          GeekRoom Admin Dashboard ✦ {applicants.length} total applications
        </p>
      </div>
    </div>
  )
}