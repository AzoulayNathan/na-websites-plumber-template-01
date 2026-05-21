import React, { useEffect, useRef } from 'react';
import CopperButton from './CopperButton';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

function TechnicalBlueprint() {
  const pathRef = useRef(null);

  useEffect(() => {
    const el = pathRef.current;
    if (!el) return;
    const len = el.getTotalLength?.() || 600;
    el.style.strokeDasharray = len;
    el.style.strokeDashoffset = len;
    const timer = setTimeout(() => {
      el.style.transition = 'stroke-dashoffset 2.4s cubic-bezier(0.22,1,0.36,1)';
      el.style.strokeDashoffset = '0';
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[480px] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-aqua-light/40 via-ceramic/80 to-beige/30 rounded-sm" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F3D36" strokeWidth="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrid)" />
      </svg>

      <svg viewBox="0 0 400 460" className="relative z-10 w-72 h-80 lg:w-[380px] lg:h-[436px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="376" height="436" stroke="#B66A3C" strokeWidth="0.6" opacity="0.18" />
        <path d="M12 32 L12 12 L32 12" stroke="#B66A3C" strokeWidth="1.4" opacity="0.65" />
        <path d="M368 12 L388 12 L388 32" stroke="#B66A3C" strokeWidth="1.4" opacity="0.65" />
        <path d="M388 428 L388 448 L368 448" stroke="#B66A3C" strokeWidth="1.4" opacity="0.65" />
        <path d="M32 448 L12 448 L12 428" stroke="#B66A3C" strokeWidth="1.4" opacity="0.65" />
        <rect x="36" y="36" width="328" height="280" fill="#CFE4E5" fillOpacity="0.07" stroke="#1F3D36" strokeWidth="0.6" opacity="0.25" />
        <rect x="36" y="316" width="328" height="20" fill="#B66A3C" fillOpacity="0.06" stroke="#A9A59C" strokeWidth="0.5" opacity="0.4" />
        <defs>
          <pattern id="wallTiles" x="36" y="36" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="40" height="40" fill="none" stroke="#1F3D36" strokeWidth="0.3" opacity="0.12" />
          </pattern>
        </defs>
        <rect x="36" y="36" width="328" height="280" fill="url(#wallTiles)" />
        <rect x="278" y="60" width="72" height="110" rx="6" fill="#F7F3EA" fillOpacity="0.9" stroke="#B66A3C" strokeWidth="1.4" opacity="0.75" />
        <rect x="286" y="72" width="56" height="86" rx="4" stroke="#B66A3C" strokeWidth="0.5" opacity="0.3" />
        <line x1="314" y1="68" x2="314" y2="60" stroke="#B66A3C" strokeWidth="1.2" opacity="0.6" />
        <line x1="278" y1="80" x2="258" y2="80" stroke="#B66A3C" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <circle cx="258" cy="80" r="3" fill="#B66A3C" opacity="0.5" />
        <line x1="350" y1="75" x2="368" y2="75" stroke="#B66A3C" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <line x1="314" y1="170" x2="314" y2="196" stroke="#B66A3C" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <text x="314" y="122" textAnchor="middle" fill="#B66A3C" fontSize="7" fontFamily="Inter,sans-serif" letterSpacing="1.5" opacity="0.6">WATER</text>
        <text x="314" y="132" textAnchor="middle" fill="#B66A3C" fontSize="7" fontFamily="Inter,sans-serif" letterSpacing="1.5" opacity="0.6">HEATER</text>
        <line x1="148" y1="240" x2="148" y2="108" stroke="#B66A3C" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <path d="M148 108 Q148 94 134 94" stroke="#B66A3C" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55" />
        <line x1="134" y1="94" x2="102" y2="94" stroke="#B66A3C" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
        <rect x="76" y="88" width="28" height="12" rx="4" fill="#B66A3C" fillOpacity="0.15" stroke="#B66A3C" strokeWidth="1.2" opacity="0.7" />
        <circle cx="82" cy="104" r="1" fill="#CFE4E5" opacity="0.6" />
        <circle cx="88" cy="106" r="1" fill="#CFE4E5" opacity="0.5" />
        <circle cx="94" cy="104" r="1" fill="#CFE4E5" opacity="0.6" />
        <circle cx="100" cy="106" r="1" fill="#CFE4E5" opacity="0.4" />
        <rect x="50" y="240" width="100" height="76" rx="3" fill="#CFE4E5" fillOpacity="0.18" stroke="#CFE4E5" strokeWidth="1.2" opacity="0.7" />
        <circle cx="100" cy="278" r="6" stroke="#A9A59C" strokeWidth="0.8" opacity="0.5" />
        <circle cx="100" cy="278" r="2.5" fill="#A9A59C" opacity="0.3" />
        <rect x="104" y="170" width="16" height="28" rx="3" fill="#F7F3EA" stroke="#B66A3C" strokeWidth="1.4" opacity="0.8" />
        <circle cx="112" cy="184" r="4" stroke="#B66A3C" strokeWidth="1" opacity="0.6" />
        <text x="100" y="330" textAnchor="middle" fill="#A9A59C" fontSize="6.5" fontFamily="Inter,sans-serif" letterSpacing="1.5" opacity="0.55">SHOWER</text>
        <line x1="36" y1="196" x2="278" y2="196" stroke="#CFE4E5" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
        <line x1="36" y1="214" x2="258" y2="214" stroke="#B66A3C" strokeWidth="2" strokeLinecap="round" opacity="0.45" strokeDasharray="6,4" />
        <line x1="148" y1="196" x2="148" y2="240" stroke="#CFE4E5" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <line x1="258" y1="196" x2="258" y2="80" stroke="#CFE4E5" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <line x1="36" y1="120" x2="36" y2="316" stroke="#CFE4E5" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
        <circle cx="148" cy="196" r="4" fill="#CFE4E5" stroke="#1F3D36" strokeWidth="0.5" opacity="0.8" />
        <circle cx="258" cy="196" r="4" fill="#CFE4E5" stroke="#1F3D36" strokeWidth="0.5" opacity="0.8" />
        <circle cx="36" cy="196" r="4" fill="#CFE4E5" stroke="#1F3D36" strokeWidth="0.5" opacity="0.7" />
        <circle cx="258" cy="214" r="3.5" fill="#B66A3C" opacity="0.45" />
        <path ref={pathRef} d="M 36 196 L 148 196 L 148 240 M 148 196 L 258 196 L 258 80" stroke="#CFE4E5" strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="220" cy="290" rx="42" ry="26" fill="#CFE4E5" fillOpacity="0.12" stroke="#CFE4E5" strokeWidth="1.2" opacity="0.6" />
        <ellipse cx="220" cy="290" rx="28" ry="16" stroke="#CFE4E5" strokeWidth="0.6" opacity="0.35" />
        <line x1="220" y1="316" x2="220" y2="336" stroke="#A9A59C" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
        <line x1="220" y1="264" x2="220" y2="246" stroke="#B66A3C" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
        <path d="M 210 246 L 230 246" stroke="#B66A3C" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
        <circle cx="220" cy="243" r="3.5" fill="#B66A3C" fillOpacity="0.2" stroke="#B66A3C" strokeWidth="1" opacity="0.65" />
        <text x="220" y="348" textAnchor="middle" fill="#A9A59C" fontSize="6.5" fontFamily="Inter,sans-serif" letterSpacing="1.5" opacity="0.55">WASHBASIN</text>
        <text x="38" y="192" fill="#CFE4E5" fontSize="6" fontFamily="Inter,sans-serif" letterSpacing="1" opacity="0.55">COLD</text>
        <text x="38" y="224" fill="#B66A3C" fontSize="6" fontFamily="Inter,sans-serif" letterSpacing="1" opacity="0.5">HOT</text>
        <line x1="36" y1="420" x2="364" y2="420" stroke="#A9A59C" strokeWidth="0.4" opacity="0.3" />
        <line x1="36" y1="417" x2="36" y2="423" stroke="#A9A59C" strokeWidth="0.4" opacity="0.3" />
        <line x1="364" y1="417" x2="364" y2="423" stroke="#A9A59C" strokeWidth="0.4" opacity="0.3" />
      </svg>

      <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-aqua/15 blur-3xl animate-flow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-28 h-28 rounded-full bg-aqua/10 blur-2xl animate-flow-pulse pointer-events-none" style={{ animationDelay: '2.2s' }} />
    </div>
  );
}

export default function HeroSection() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section id="hero" className="relative bg-ceramic min-h-screen flex items-center overflow-hidden pt-16 lg:pt-0">
      <div className="absolute inset-0 opacity-[0.025]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroBackGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1F3D36" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroBackGrid)" />
        </svg>
      </div>
      <div className="absolute left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-copper/10 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-copper" />
              <p className="text-xs uppercase tracking-[0.35em] text-copper font-medium">{h.eyebrow}</p>
            </div>
            <h1 className="font-serif text-[2.6rem] md:text-5xl lg:text-[3.5rem] xl:text-[4rem] text-ink leading-[1.05] tracking-tight">
              {h.h1a}<br />
              <span className="text-mineral italic">{h.h1b}</span>
            </h1>
            <p className="text-stone text-base lg:text-[1.05rem] leading-[1.75] max-w-[460px]">{h.sub}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <CopperButton variant="primary" href="#quote">{h.cta1}</CopperButton>
              <CopperButton variant="outline" href="tel:{phone}">{h.cta2}</CopperButton>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 border-t border-beige">
              {h.tags.map((item) => (
                <span key={item} className="text-xs text-stone tracking-wide">{item}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <TechnicalBlueprint />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
      </div>
    </section>
  );
}