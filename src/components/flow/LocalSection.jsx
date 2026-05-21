import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useScrollReveal from './useScrollReveal';
import { useLang } from '@/lib/LanguageContext';

const AREAS = ['{serviceArea1}', '{serviceArea2}', '{serviceArea3}'];
const AREA_POSITIONS = [
  { x: 75, y: 72, cx: 75, cy: 72 },
  { x: 238, y: 95, cx: 238, cy: 95 },
  { x: 195, y: 238, cx: 195, cy: 238 },
];

export default function LocalSection() {
  const [ref, isVisible] = useScrollReveal();
  const [activeArea, setActiveArea] = useState(null);
  const { t } = useLang();
  const l = t.local;

  return (
    <section id="areas" className="py-24 lg:py-32 bg-mineral relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-[0.035]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="localGrid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0 L0 0 0 56" fill="none" stroke="#F7F3EA" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#localGrid)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-copper/40" />
              <p className="text-xs uppercase tracking-[0.3em] text-aqua/60 font-medium">{l.tag}</p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ceramic mb-6 leading-[1.1]">{l.h2}</h2>
            <p className="text-aqua/70 text-base leading-relaxed mb-10 max-w-sm">{l.sub}</p>

            <div className="space-y-3 mb-8">
              {AREAS.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  onMouseEnter={() => setActiveArea(i)}
                  onMouseLeave={() => setActiveArea(null)}
                  className="flex items-center gap-5 group cursor-default"
                >
                  <div className={`flex-shrink-0 w-6 h-px transition-all duration-400 ${activeArea === i ? 'bg-copper w-10' : 'bg-copper/25'}`} />
                  <span className={`text-base transition-all duration-400 ${activeArea === i ? 'text-ceramic tracking-wide' : 'text-ceramic/50'}`}>{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="border-l-2 border-copper/25 pl-5">
              <p className="text-xs text-aqua/50 leading-relaxed">{l.note}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="flex justify-center">
            <svg viewBox="0 0 300 300" className="w-64 h-64 lg:w-80 lg:h-80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="svgLocalGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F7F3EA" strokeWidth="0.2" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="300" height="300" fill="url(#svgLocalGrid)" />
              <rect x="8" y="8" width="284" height="284" stroke="#F7F3EA" strokeWidth="0.3" opacity="0.1" />
              <path d="M8 20 L8 8 L20 8" stroke="#B66A3C" strokeWidth="0.8" opacity="0.4" />
              <path d="M280 8 L292 8 L292 20" stroke="#B66A3C" strokeWidth="0.8" opacity="0.4" />
              <path d="M292 280 L292 292 L280 292" stroke="#B66A3C" strokeWidth="0.8" opacity="0.4" />
              <path d="M20 292 L8 292 L8 280" stroke="#B66A3C" strokeWidth="0.8" opacity="0.4" />
              <line x1="150" y1="30" x2="150" y2="270" stroke="#F7F3EA" strokeWidth="0.2" opacity="0.15" />
              <line x1="30" y1="150" x2="270" y2="150" stroke="#F7F3EA" strokeWidth="0.2" opacity="0.15" />
              {AREA_POSITIONS.map((pos, i) => (
                <line key={i} x1="150" y1="150" x2={pos.x} y2={pos.y} stroke={activeArea === i ? '#B66A3C' : '#CFE4E5'} strokeWidth={activeArea === i ? 1 : 0.5} opacity={activeArea === i ? 0.8 : 0.25} style={{ transition: 'all 0.3s ease' }} />
              ))}
              {AREA_POSITIONS.map((pos, i) => (
                <g key={i}>
                  <circle cx={pos.cx} cy={pos.cy} r={activeArea === i ? 7 : 4} fill={activeArea === i ? '#B66A3C' : 'none'} stroke={activeArea === i ? '#B66A3C' : '#CFE4E5'} strokeWidth="1" opacity={activeArea === i ? 0.9 : 0.35} style={{ transition: 'all 0.3s ease' }} />
                  {activeArea === i && <circle cx={pos.cx} cy={pos.cy} r="12" fill="#B66A3C" fillOpacity="0.1" />}
                </g>
              ))}
              <circle cx="150" cy="150" r="8" fill="#B66A3C" opacity="0.9" />
              <circle cx="150" cy="150" r="16" stroke="#B66A3C" strokeWidth="0.8" opacity="0.25" />
              <circle cx="150" cy="150" r="28" stroke="#CFE4E5" strokeWidth="0.5" opacity="0.15" />
              <text x="150" y="172" textAnchor="middle" fill="#B66A3C" fontSize="7" fontFamily="Inter, sans-serif" opacity="0.65" letterSpacing="2.5">{'{city}'}</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}