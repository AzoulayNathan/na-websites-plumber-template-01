import React from 'react';
import { motion } from 'framer-motion';
import CopperButton from './CopperButton';
import useScrollReveal from './useScrollReveal';
import { useLang } from '@/lib/LanguageContext';

function AnimatedCopperFrame({ visible }) {
  return (
    <svg className="absolute inset-6 lg:inset-12 w-[calc(100%-3rem)] lg:w-[calc(100%-6rem)] h-[calc(100%-3rem)] lg:h-[calc(100%-6rem)] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="99" height="99" stroke="#B66A3C" strokeWidth="0.4" opacity={visible ? 0.3 : 0} style={{ transition: 'opacity 1s ease' }} />
      <path d="M0 8 L0 0 L8 0" stroke="#B66A3C" strokeWidth="1.2" opacity={visible ? 0.6 : 0} style={{ transition: 'opacity 1.2s ease 0.2s' }} />
      <path d="M92 0 L100 0 L100 8" stroke="#B66A3C" strokeWidth="1.2" opacity={visible ? 0.6 : 0} style={{ transition: 'opacity 1.2s ease 0.3s' }} />
      <path d="M100 92 L100 100 L92 100" stroke="#B66A3C" strokeWidth="1.2" opacity={visible ? 0.6 : 0} style={{ transition: 'opacity 1.2s ease 0.4s' }} />
      <path d="M8 100 L0 100 L0 92" stroke="#B66A3C" strokeWidth="1.2" opacity={visible ? 0.6 : 0} style={{ transition: 'opacity 1.2s ease 0.5s' }} />
    </svg>
  );
}

export default function FinalCTASection() {
  const [ref, isVisible] = useScrollReveal(0.2);
  const { t } = useLang();
  const f = t.finalCta;

  return (
    <section className="relative py-28 lg:py-40 bg-mineral overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-[0.025]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#F7F3EA" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>
      <AnimatedCopperFrame visible={isVisible} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-aqua/4 blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-6 h-px bg-copper/40" />
            <p className="text-xs uppercase tracking-[0.35em] text-copper/70 font-medium">{f.tag}</p>
            <div className="w-6 h-px bg-copper/40" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-ceramic mb-7 leading-[1.1]">
            {f.h2a}<br />{f.h2b}
          </h2>

          <p className="text-aqua/80 text-base lg:text-[1.05rem] leading-relaxed mb-12 max-w-lg mx-auto">{f.sub}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <CopperButton variant="copper" href="#quote" className="min-w-[180px]">{f.cta}</CopperButton>
            <a href="tel:{phone}" className="inline-flex items-center gap-2 text-ceramic/70 hover:text-ceramic text-xs uppercase tracking-[0.2em] transition-colors border border-ceramic/20 hover:border-ceramic/40 px-8 py-4">
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V13a1 1 0 01-1 1h-2C7.82 14 2 8.18 2 1z" />
              </svg>
              {f.call}
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-copper/25" />
            <p className="text-xs text-aqua/40 tracking-[0.2em]">{f.line}</p>
            <div className="w-8 h-px bg-copper/25" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}