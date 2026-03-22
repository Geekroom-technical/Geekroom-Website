"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 120;
const MOUSE_RADIUS = 100;
const REPULSE_STRENGTH = 5;
const BASE_SPEED = 0.4;
const PARTICLE_COLORS = ["#f97316", "#00A8B5", "#ef4444", "#ffffff"];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

class Particle {
  constructor(canvasWidth, canvasHeight) {
    this.reset(canvasWidth, canvasHeight);
  }

  reset(canvasWidth, canvasHeight) {
    this.x = randomBetween(0, canvasWidth);
    this.y = randomBetween(0, canvasHeight);
    this.baseX = this.x;
    this.baseY = this.y;
    this.vx = randomBetween(-BASE_SPEED, BASE_SPEED);
    this.vy = randomBetween(-BASE_SPEED, BASE_SPEED);
    this.radius = randomBetween(1.5, 3.5);
    this.alpha = randomBetween(0.3, 0.9);
    this.color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
  }

  update(canvasWidth, canvasHeight, mouseX, mouseY) {
    // Mouse repulsion
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < MOUSE_RADIUS && dist > 0) {
      const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
      this.x += (dx / dist) * force * REPULSE_STRENGTH;
      this.y += (dy / dist) * force * REPULSE_STRENGTH;
    } else {
      // Drift slowly back and keep drifting
      this.x += this.vx;
      this.y += this.vy;
    }

    // Wrap around edges
    if (this.x < -10) this.x = canvasWidth + 10;
    if (this.x > canvasWidth + 10) this.x = -10;
    if (this.y < -10) this.y = canvasHeight + 10;
    if (this.y > canvasHeight + 10) this.y = -10;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

export default function ParticlesBackground({ children }) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-initialise particles on resize
      particlesRef.current = Array.from(
        { length: PARTICLE_COUNT },
        () => new Particle(canvas.width, canvas.height)
      );
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines between nearby particles
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 80) * 0.15;
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      particles.forEach((p) => {
        p.update(canvas.width, canvas.height, mouse.current.x, mouse.current.y);
        p.draw(ctx);
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center bg-[#050505] text-[#ededed] min-h-screen overflow-hidden">
      {/* Animated Aurora Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-40 blur-[120px]">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[#00A8B5] rounded-full mix-blend-screen animate-pulse duration-10000" />
          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[60vh] bg-[#f97316] rounded-full mix-blend-screen animate-pulse duration-3000 delay-1000" />
          <div className="absolute bottom-[-20%] left-[10%] w-[60vw] h-[50vh] bg-red-700 rounded-full mix-blend-screen animate-pulse duration-3000 delay-500" />
        </div>
      </div>

      {/* Particle Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
