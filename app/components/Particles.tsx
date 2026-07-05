'use client';

import { useEffect, useRef } from 'react';

// 絹糸の鱗粉のような光の粒が、夜のなかを静かに舞い上がる背景演出
export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth * DPR;
      h = canvas.height = window.innerHeight * DPR;
    };
    resize();
    window.addEventListener('resize', resize);

    const N = Math.min(70, Math.floor((window.innerWidth / 1400) * 70) + 30);
    const particles = Array.from({ length: N }, () => {
      const isCrimson = Math.random() < 0.12; // まれに紅い糸くず
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 1.7 + 0.5) * DPR,
        vx: (Math.random() - 0.5) * 0.12 * DPR,
        vy: -(Math.random() * 0.28 + 0.06) * DPR,
        hue: isCrimson ? 340 : 248 + Math.random() * 14,
        sat: isCrimson ? 65 : 32,
        light: isCrimson ? 68 : 88,
        tw: Math.random() * Math.PI * 2,
        sway: Math.random() * 0.4 + 0.15,
      };
    });

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.tw += 0.014;
        p.x += p.vx + Math.sin(p.tw) * p.sway * DPR * 0.3;
        p.y += p.vy;
        if (p.y < -12) {
          p.y = h + 12;
          p.x = Math.random() * w;
        }
        if (p.x < -12) p.x = w + 12;
        else if (p.x > w + 12) p.x = -12;

        const alpha = 0.26 + Math.sin(p.tw) * 0.2;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, ${p.light}%, ${alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="fx-particles" aria-hidden="true" />;
}
