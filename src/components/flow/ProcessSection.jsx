import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useScrollReveal from './useScrollReveal';
import CopperButton from './CopperButton';
import { useLang } from '@/lib/LanguageContext';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(null);
  const [ref, isVisible] = useScrollReveal();
  const { t } = useLang();
  const p = t.process;

  return (
    <section className="py-24 lg:py-32 bg-mineral/5 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-ceramic via-aqua-light/15 to-ceramic pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-[1fr_1fr] gap-10 items-end mb-16 lg:mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-copper/40" />
              <p className="text-xs uppercase tracking-[0.3em] text-stone font-medium">{p.tag}</p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.1]">
              {p.h2a}<br />
              <span className="italic text-mineral">{p.h2b}</span>
            </h2>
          </div>
          <p className="text-stone text-base leading-relaxed lg:max-w-sm">{p.sub}</p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            <div className="absolute top-[22px] left-0 right-0 h-px bg-gradient-to-r from-copper/10 via-copper/25 to-copper/10" />
            <div className="grid grid-cols-5 gap-6">
              {p.steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.12 * i }}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="relative cursor-default group"
                >
                  <div className={`relative z-10 w-[18px] h-[18px] rounded-full border transition-all duration-400 mb-7 ${
                    activeStep === i ? 'bg-copper border-copper shadow-[0_0_0_5px_rgba(182,106,60,0.12)]' : 'bg-ceramic border-copper/35 group-hover:border-copper/60'
                  }`}>
                    <div className={`absolute inset-[3px] rounded-full transition-colors duration-400 ${activeStep === i ? 'bg-ceramic' : ''}`} />
                  </div>
                  <p className={`text-xs tracking-[0.2em] mb-2 transition-colors duration-300 ${activeStep === i ? 'text-copper' : 'text-stone/40'}`}>{step.tag}</p>
                  <h3 className={`font-serif text-lg mb-3 transition-colors duration-300 ${activeStep === i ? 'text-ink' : 'text-ink/70'}`}>{step.title}</h3>
                  <p className={`text-xs leading-relaxed transition-colors duration-300 ${activeStep === i ? 'text-stone' : 'text-stone/50'}`}>{step.copy}</p>
                  <p className={`text-[10px] tracking-[0.3em] mt-4 transition-colors duration-300 ${activeStep === i ? 'text-copper/60' : 'text-stone/25'}`}>{step.num}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden relative mb-12">
          <div className="absolute left-[9px] top-0 bottom-0 w-px bg-gradient-to-b from-copper/15 via-copper/25 to-copper/10" />
          <div className="space-y-10">
            {p.steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -12 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="relative pl-9"
              >
                <div className="absolute left-0 top-1 w-[18px] h-[18px] rounded-full bg-ceramic border border-copper/35 z-10">
                  <div className="absolute inset-[5px] rounded-full bg-copper/60" />
                </div>
                <p className="text-xs tracking-[0.2em] text-copper/60 mb-1">{step.tag}</p>
                <h3 className="font-serif text-lg text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{step.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center pt-4"
        >
          <CopperButton variant="primary" href="#quote">{p.cta}</CopperButton>
          <p className="text-xs text-stone/50 mt-4 tracking-wide">{p.avail}</p>
        </motion.div>
      </div>
    </section>
  );
}