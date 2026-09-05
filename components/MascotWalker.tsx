'use client';
import { useEffect, useRef, useState } from 'react';

// Dev mascot: walks across the bottom as you scroll, phone in hand.
// Scroll down → walks right · scroll up → walks left · stop → checks phone.
export default function MascotWalker() {
  const [x, setX] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [walking, setWalking] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const lastY = useRef(0);
  const stopTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 380) return;
    setEnabled(true);

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
        const track = Math.max(0, window.innerWidth - 96);
        setX(progress * track);
        if (y !== lastY.current) {
          setDir(y > lastY.current ? 1 : -1);
          setWalking(true);
          lastY.current = y;
          if (stopTimer.current) clearTimeout(stopTimer.current);
          stopTimer.current = setTimeout(() => setWalking(false), 160);
        }
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
      if (stopTimer.current) clearTimeout(stopTimer.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`mascot ${walking ? 'is-walking' : 'is-idle'}`}
      style={{ transform: `translateX(${x}px) scaleX(${dir})` }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 96" width="52" height="78">
        {/* shadow */}
        <ellipse cx="32" cy="90" rx="16" ry="4" fill="rgba(0,0,0,.45)" />
        {/* legs */}
        <g className="leg leg-back">
          <rect x="26" y="62" width="7" height="24" rx="2" fill="#241f1b" />
          <rect x="24" y="82" width="11" height="5" rx="2" fill="#d9a441" />
        </g>
        <g className="leg leg-front">
          <rect x="33" y="62" width="7" height="24" rx="2" fill="#33291f" />
          <rect x="31" y="82" width="11" height="5" rx="2" fill="#eab953" />
        </g>
        {/* torso: hoodie */}
        <rect x="20" y="34" width="26" height="30" rx="4" fill="#1d1917" />
        <rect x="31" y="34" width="2" height="30" fill="#d9a441" opacity="0.7" />
        <rect x="20" y="34" width="26" height="6" rx="3" fill="#141110" />
        {/* head + hood */}
        <circle cx="33" cy="22" r="13" fill="#141110" />
        <circle cx="33" cy="24" r="8" fill="#c9a07a" />
        <circle cx="30" cy="23" r="1.4" fill="#14100a" />
        <circle cx="36" cy="23" r="1.4" fill="#14100a" />
        <rect x="28" y="28" width="10" height="2" rx="1" fill="#14100a" opacity="0.6" />
        {/* headphones */}
        <rect x="18" y="14" width="30" height="4" rx="2" fill="#d9a441" />
        <rect x="17" y="16" width="6" height="12" rx="3" fill="#d9a441" />
        <rect x="43" y="16" width="6" height="12" rx="3" fill="#d9a441" />
        {/* arm holding phone */}
        <g className="arm">
          <rect x="42" y="40" width="7" height="18" rx="3" fill="#33291f" />
          <rect x="40" y="34" width="12" height="18" rx="2" fill="#0c0a08" stroke="#d9a441" strokeWidth="1.5" />
          <rect className="phone-glow" x="42" y="36" width="8" height="10" fill="#5fa99c" />
        </g>
      </svg>
    </div>
  );
}
