"use client";

import { useEffect, useRef } from 'react';

const COLORS = [
  { fill: '#C18BFC', glow: 'rgba(193, 139, 252, 0.8)' },
  { fill: '#FF006E', glow: 'rgba(255, 0, 110, 0.8)' },
  { fill: '#00D4FF', glow: 'rgba(0, 212, 255, 0.8)' },
  { fill: '#FFD700', glow: 'rgba(255, 215, 0, 0.6)' },
  { fill: '#39FF14', glow: 'rgba(57, 255, 20, 0.5)' },
  { fill: '#BC3931', glow: 'rgba(188, 57, 49, 0.8)' },
  { fill: '#FF4ECD', glow: 'rgba(255, 78, 205, 0.7)' },
  { fill: '#7B61FF', glow: 'rgba(123, 97, 255, 0.8)' },
];

const CONNECTION_DIST = 130;
const MOUSE_RADIUS = 160;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseSize: number;
  size: number;
  color: string;
  glowColor: string;
  baseOpacity: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

function createParticle(w: number, h: number): Particle {
  const colorSet = COLORS[Math.floor(Math.random() * COLORS.length)];
  const baseSize = Math.random() * 3 + 1;
  const baseOpacity = Math.random() * 0.6 + 0.3;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    baseSize,
    size: baseSize,
    color: colorSet.fill,
    glowColor: colorSet.glow,
    baseOpacity,
    opacity: baseOpacity,
    pulseSpeed: Math.random() * 0.02 + 0.008,
    pulsePhase: Math.random() * Math.PI * 2,
  };
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 35 : 70;

    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Initialize particles
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    particlesRef.current = Array.from({ length: count }, () => createParticle(w, h));

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      } else {
        mouseRef.current = { x: -9999, y: -9999 };
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', resize);

    let tick = 0;

    const draw = () => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw, ch);
      tick++;

      const ps = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update and draw particles
      for (const p of ps) {
        // Pulse effect
        const pulse = Math.sin(tick * p.pulseSpeed + p.pulsePhase);
        p.size = p.baseSize * (1 + pulse * 0.4);
        p.opacity = Math.max(0.1, p.baseOpacity + pulse * 0.15);

        // Mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_RADIUS && d > 0) {
          const f = (MOUSE_RADIUS - d) / MOUSE_RADIUS;
          p.vx += (dx / d) * f * 0.3;
          p.vy += (dy / d) * f * 0.3;
        }

        // Apply velocity with friction
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Wrap around edges
        if (p.x < -20) p.x = cw + 20;
        if (p.x > cw + 20) p.x = -20;
        if (p.y < -20) p.y = ch + 20;
        if (p.y > ch + 20) p.y = -20;

        // Draw outer glow
        ctx.save();
        ctx.globalAlpha = p.opacity * 0.3;
        ctx.shadowColor = p.glowColor;
        ctx.shadowBlur = p.size * 10;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw particle core
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw gradient connections between nearby particles
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x;
          const dy = ps[i].y - ps[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.12;
            const grad = ctx.createLinearGradient(ps[i].x, ps[i].y, ps[j].x, ps[j].y);
            grad.addColorStop(0, ps[i].color);
            grad.addColorStop(1, ps[j].color);
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
    />
  );
}
