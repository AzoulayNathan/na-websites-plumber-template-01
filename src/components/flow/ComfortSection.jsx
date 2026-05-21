import React from 'react';
import { motion } from 'framer-motion';
import useScrollReveal from './useScrollReveal';
import CopperButton from './CopperButton';
import { useLang } from '@/lib/LanguageContext';

const PROJECT_TYPES = ['{projectType1}', '{projectType2}', '{projectType3}'];

function BathroomDiagram() {
  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-b from-aqua-light/30 via-ceramic/70 to-beige/50">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="elevTiles" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect x="0.5" y="0.5" width="39" height="39" fill="none" stroke="#1F3D36" strokeWidth="0.4" opacity="0.12" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="70%" fill="url(#elevTiles)" />
        <rect x="0" y="70%" width="100%" height="30%" fill="#B66A3C" fillOpacity="0.03" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#A9A59C" strokeWidth="1" opacity="0.3" />
      </svg>

      <svg viewBox="0 0 320 400" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="60" x2="30" y2="290" stroke="#CFE4E5" strokeWidth="1.2" opacity="0.5" />
        <line x1="130" y1="60" x2="130" y2="290" stroke="#CFE4E5" strokeWidth="1.2" opacity="0.5" />
        <rect x="30" y="60" width="100" height="230" fill="#CFE4E5" fillOpacity="0.06" stroke="#CFE4E5" strokeWidth="0.6" opacity="0.4" />
        <rect x="30" y="285" width="100" height="12" rx="1" fill="#CFE4E5" fillOpacity="0.25" stroke="#CFE4E5" strokeWidth="1" opacity="0.6" />
        <rect x="72" y="288" width="16" height="6" rx="1" stroke="#A9A59C" strokeWidth="0.8" opacity="0.5" />
        <line x1="76" y1="291" x2="84" y2="291" stroke="#A9A59C" strokeWidth="0.5" opacity="0.4" />
        <line x1="112" y1="290" x2="112" y2="85" stroke="#B66A3C" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <path d="M112 85 Q112 68 96 68" stroke="#B66A3C" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
        <line x1="96" y1="68" x2="60" y2="68" stroke="#B66A3C" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <rect x="44" y="58" width="32" height="14" rx="5" fill="#B66A3C" fillOpacity="0.18" stroke="#B66A3C" strokeWidth="1.6" opacity="0.75" />
        <line x1="52" y1="76" x2="52" y2="84" stroke="#CFE4E5" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
        <line x1="60" y1="78" x2="60" y2="88" stroke="#CFE4E5" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <line x1="68" y1="76" x2="68" y2="84" stroke="#CFE4E5" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
        <rect x="104" y="170" width="16" height="28" rx="3" fill="#F7F3EA" stroke="#B66A3C" strokeWidth="1.4" opacity="0.8" />
        <circle cx="112" cy="184" r="4" stroke="#B66A3C" strokeWidth="1" opacity="0.6" />
        <text x="80" y="315" textAnchor="middle" fill="#A9A59C" fontSize="7" fontFamily="Inter,sans-serif" letterSpacing="1.5" opacity="0.55">SHOWER</text>
        <path d="M 180 200 Q 180 185 195 183 L 285 183 Q 300 185 300 200 L 300 220 Q 300 232 288 232 L 192 232 Q 180 232 180 220 Z" fill="#F7F3EA" fillOpacity="0.85" stroke="#CFE4E5" strokeWidth="1.4" opacity="0.75" />
        <path d="M 196 200 Q 196 192 206 191 L 274 191 Q 284 192 284 200 L 284 218 Q 284 226 274 226 L 206 226 Q 196 226 196 218 Z" fill="none" stroke="#CFE4E5" strokeWidth="0.7" opacity="0.4" />
        <circle cx="240" cy="226" r="5" stroke="#A9A59C" strokeWidth="0.8" opacity="0.5" />
        <rect x="233" y="166" width="14" height="20" rx="3" fill="#F7F3EA" stroke="#B66A3C" strokeWidth="1.5" opacity="0.8" />
        <path d="M240 166 L240 158 Q240 150 252 150" stroke="#B66A3C" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
        <line x1="252" y1="150" x2="265" y2="150" stroke="#B66A3C" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="240" y1="162" x2="255" y2="155" stroke="#B66A3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
        <line x1="200" y1="232" x2="200" y2="248" stroke="#A9A59C" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <line x1="280" y1="232" x2="280" y2="248" stroke="#A9A59C" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <circle cx="200" cy="250" r="3" fill="#A9A59C" fillOpacity="0.3" stroke="#A9A59C" strokeWidth="0.8" opacity="0.4" />
        <circle cx="280" cy="250" r="3" fill="#A9A59C" fillOpacity="0.3" stroke="#A9A59C" strokeWidth="0.8" opacity="0.4" />
        <line x1="228" y1="183" x2="228" y2="163" stroke="#CFE4E5" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
        <line x1="252" y1="183" x2="252" y2="163" stroke="#B66A3C" strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />
        <text x="240" y="265" textAnchor="middle" fill="#A9A59C" fontSize="7" fontFamily="Inter,sans-serif" letterSpacing="1.5" opacity="0.55">WASHBASIN</text>
        <line x1="30" y1="330" x2="300" y2="330" stroke="#CFE4E5" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
        <line x1="30" y1="344" x2="300" y2="344" stroke="#B66A3C" strokeWidth="2" strokeLinecap="round" opacity="0.35" strokeDasharray="7,5" />
        <line x1="112" y1="330" x2="112" y2="290" stroke="#CFE4E5" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <line x1="228" y1="330" x2="228" y2="232" stroke="#CFE4E5" strokeWidth="1.8" strokeLinecap="round" opacity="0.35" />
        <line x1="252" y1="344" x2="252" y2="232" stroke="#B66A3C" strokeWidth="1.6" strokeLinecap="round" opacity="0.3" strokeDasharray="5,4" />
        <circle cx="112" cy="330" r="4" fill="#CFE4E5" opacity="0.7" />
        <circle cx="228" cy="330" r="4" fill="#CFE4E5" opacity="0.6" />
        <circle cx="252" cy="344" r="3.5" fill="#B66A3C" opacity="0.45" />
        <text x="32" y="326" fill="#CFE4E5" fontSize="6" fontFamily="Inter,sans-serif" letterSpacing="1" opacity="0.55">COLD</text>
        <text x="32" y="356" fill="#B66A3C" fontSize="6" fontFamily="Inter,sans-serif" letterSpacing="1" opacity="0.5">HOT</text>
        <path d="M12 28 L12 12 L28 12" stroke="#B66A3C" strokeWidth="1.4" opacity="0.55" />
        <path d="M292 12 L308 12 L308 28" stroke="#B66A3C" strokeWidth="1.4" opacity="0.55" />
        <path d="M308 372 L308 388 L292 388" stroke="#B66A3C" strokeWidth="1.4" opacity="0.55" />
        <path d="M28 388 L12 388 L12 372" stroke="#B66A3C" strokeWidth="1.4" opacity="0.55" />
      </svg>

      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-copper/35 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-copper/35 pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-28 h-28 rounded-full bg-aqua/15 blur-3xl animate-flow-pulse pointer-events-none" />
    </div>
  );
}

export default function ComfortSection() {
  const [ref, isVisible] = useScrollReveal();
  const { t } = useLang();
  const c = t.comfort;

  return (
    <section className="py-24 lg:py-36 bg-ceramic relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-24 items-start">

          <motion.div initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <BathroomDiagram />
            <p className="text-xs text-stone/50 tracking-widest text-center mt-4 uppercase">{c.caption}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.25 }} className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-copper/40" />
              <p className="text-xs uppercase tracking-[0.3em] text-stone font-medium">{c.tag}</p>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.8rem] text-ink leading-[1.12] mb-7">
              {c.h2a}<br className="hidden lg:block" />
              <span className="italic text-mineral"> {c.h2b}</span>
            </h2>

            <p className="text-stone text-base leading-relaxed mb-10 max-w-lg">{c.sub}</p>

            <div className="space-y-4 mb-10">
              {c.items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <div className="w-4 h-px bg-copper/30 mt-2.5 flex-shrink-0 group-hover:w-7 group-hover:bg-copper transition-all duration-300" />
                  <div>
                    <span className="text-sm font-medium text-ink">{item.label}</span>
                    <span className="text-xs text-stone ml-2">{item.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-beige pt-7">
              <p className="text-xs uppercase tracking-[0.2em] text-stone mb-4">{c.projectTypes}</p>
              <div className="flex flex-wrap gap-2 mb-7">
                {PROJECT_TYPES.map((pt) => (
                  <span key={pt} className="text-xs text-ink border border-beige px-4 py-2 bg-ceramic hover:border-copper/30 transition-colors cursor-default">{pt}</span>
                ))}
              </div>
              <CopperButton variant="copper" href="#quote">{c.cta}</CopperButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}