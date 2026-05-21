import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollReveal from './useScrollReveal';
import CopperButton from './CopperButton';
import { useLang } from '@/lib/LanguageContext';

const VISUALS = [
  'M 20 60 L 20 20 L 80 20 M 80 20 L 80 60 M 50 60 L 50 80 M 30 80 L 70 80',
  'M 50 20 L 50 60 M 30 40 L 70 40 M 20 70 C 20 80 80 80 80 70',
  'M 20 80 L 20 40 L 50 20 L 80 40 L 80 80 M 35 80 L 35 55 L 65 55 L 65 80',
];
const SERVICES = [
  ['{primaryService1}', '{secondaryService1}'],
  ['{primaryService2}', '{primaryService3}'],
  ['{primaryService4}', '{secondaryService2}'],
];

function PillarVisual({ visual }) {
  return (
    <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={visual} stroke="#B66A3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PillarsSection() {
  const [active, setActive] = useState(0);
  const [ref, isVisible] = useScrollReveal();
  const { t } = useLang();
  const p = t.pillars;
  const current = p.items[active];

  return (
    <section id="projects" className="py-24 lg:py-32 bg-ceramic overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-copper/40" />
            <p className="text-xs uppercase tracking-[0.3em] text-stone font-medium">{p.tag}</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-5">{p.h2}</h2>
          <p className="text-stone text-base lg:text-lg max-w-2xl leading-relaxed">{p.sub}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-0 mb-0"
        >
          {p.items.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setActive(i)}
              className={`relative flex-1 py-5 px-4 lg:px-8 text-left transition-all duration-400 border-b-2 focus:outline-none group ${active === i ? 'border-copper bg-beige/60' : 'border-beige hover:border-copper/30 hover:bg-beige/20'}`}
            >
              <span className={`block text-xs tracking-widest mb-1.5 transition-colors ${active === i ? 'text-copper' : 'text-stone/50 group-hover:text-stone/70'}`}>{item.num}</span>
              <span className={`font-serif text-xl lg:text-2xl transition-colors ${active === i ? 'text-ink' : 'text-ink/40 group-hover:text-ink/70'}`}>{item.label}</span>
              {active === i && (
                <motion.div layoutId="pillarIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-copper" transition={{ type: 'spring', stiffness: 500, damping: 40 }} />
              )}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="bg-beige/40 border border-beige p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-start">
              <div>
                <PillarVisual visual={VISUALS[active]} />
                <h3 className="font-serif text-3xl lg:text-4xl text-ink mt-5 mb-5">{current.headline}</h3>
                <p className="text-stone text-base leading-relaxed mb-6">{current.copy}</p>
                <p className="text-xs text-stone/70 italic border-l-2 border-copper/30 pl-4">{current.detail}</p>
              </div>
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">{p.related}</p>
                  <div className="space-y-3">
                    {SERVICES[active].map((s) => (
                      <div key={s} className="flex items-center gap-3 group">
                        <div className="w-4 h-px bg-copper/30 group-hover:w-7 group-hover:bg-copper transition-all duration-300" />
                        <span className="text-sm text-ink">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-6 border-t border-beige">
                  <p className="font-serif text-lg text-ink/60 italic mb-6">"{current.note}"</p>
                  <CopperButton variant="outline" href="#quote" className="text-xs py-3">{p.cta}</CopperButton>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}