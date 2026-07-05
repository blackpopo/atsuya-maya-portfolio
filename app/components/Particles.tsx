'use client';

import { useEffect, useRef } from 'react';

// 「羽化」— 鱗粉のような光の粒子が下から上へ舞い上がる背景演出
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

    const N = Math.min(90, Math.floor((window.innerWidth / 1400) * 90) + 40);
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.9 + 0.6) * DPR,
      vx: (Math.random() - 0.5) * 0.18 * DPR,
      vy: -(Math.random() * 0.4 + 0.1) * DPR,
      hue: 185 + Math.random() * 110, // cyan → violet → magenta
      tw: Math.random() * Math.PI * 2,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.tw += 0.02;
        if (p.y < -12) {
          p.y = h + 12;
          p.x = Math.random() * w;
        }
        if (p.x < -12) p.x = w + 12;
        else if (p.x > w + 12) p.x = -12;

        const alpha = 0.32 + Math.sin(p.tw) * 0.24;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 100%, 72%, ${alpha})`;
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
