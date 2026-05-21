import React, { useEffect, useState } from 'react';

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('drop'); // 'drop' → 'ripple' → 'exit'

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('ripple'), 600);
    const t2 = setTimeout(() => setPhase('exit'), 1200);
    const t3 = setTimeout(() => onDone(), 1900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-ceramic transition-opacity duration-700 ease-in-out ${
        phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <svg viewBox="0 0 120 140" className="w-24 h-28" fill="none" xmlns="http://www.w3.org/2000/svg">

        {/* Drop body */}
        <path
          d="M60 10 C60 10 25 60 25 85 C25 104 41 118 60 118 C79 118 95 104 95 85 C95 60 60 10 60 10 Z"
          fill="#B66A3C"
          fillOpacity={phase === 'drop' ? 0 : 1}
          stroke="#B66A3C"
          strokeWidth="1.5"
          strokeOpacity={phase === 'drop' ? 0.6 : 1}
          style={{
            transition: 'fill-opacity 0.4s ease 0.2s, stroke-opacity 0.4s ease',
            transformOrigin: '60px 64px',
            transform: phase === 'drop' ? 'scaleY(0.2) translateY(-30px)' : 'scaleY(1) translateY(0)',
          }}
          className="transition-transform duration-500 ease-out"
        />

        {/* Inner highlight */}
        <ellipse
          cx="48" cy="72"
          rx="6" ry="10"
          fill="white"
          fillOpacity={phase === 'ripple' ? 0.2 : 0}
          style={{ transition: 'fill-opacity 0.4s ease 0.3s' }}
        />

        {/* Ripple 1 */}
        <ellipse
          cx="60" cy="125"
          rx={phase === 'ripple' ? 22 : 0}
          ry={phase === 'ripple' ? 5 : 0}
          stroke="#B66A3C"
          strokeWidth="1"
          strokeOpacity={phase === 'ripple' ? 0.5 : 0}
          style={{ transition: 'rx 0.5s ease 0.1s, ry 0.5s ease 0.1s, stroke-opacity 0.5s ease 0.1s' }}
        />

        {/* Ripple 2 */}
        <ellipse
          cx="60" cy="125"
          rx={phase === 'ripple' ? 36 : 0}
          ry={phase === 'ripple' ? 8 : 0}
          stroke="#B66A3C"
          strokeWidth="0.6"
          strokeOpacity={phase === 'ripple' ? 0.25 : 0}
          style={{ transition: 'rx 0.6s ease 0.25s, ry 0.6s ease 0.25s, stroke-opacity 0.6s ease 0.25s' }}
        />

        {/* Copper corner marks */}
        <path
          d="M5 18 L5 5 L18 5"
          stroke="#B66A3C"
          strokeWidth="1.2"
          opacity={phase === 'exit' ? 0 : 0.4}
          style={{ transition: 'opacity 0.3s ease' }}
        />
        <path
          d="M115 5 L102 5"
          stroke="#B66A3C"
          strokeWidth="1.2"
          opacity={phase === 'exit' ? 0 : 0.4}
          style={{ transition: 'opacity 0.3s ease' }}
        />
      </svg>
    </div>
  );
}