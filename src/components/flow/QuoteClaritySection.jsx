import React from 'react';
import { motion } from 'framer-motion';
import CopperButton from './CopperButton';
import useScrollReveal from './useScrollReveal';
import { useLang } from '@/lib/LanguageContext';

export default function QuoteClaritySection() {
  const [ref, isVisible] = useScrollReveal();
  const { t } = useLang();
  const q = t.quote;
  const f = q.form;

  return (
    <section id="quote" className="py-24 lg:py-32 bg-mineral relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-[0.028]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="quoteGrid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M44 0L0 0 0 44" fill="none" stroke="#F7F3EA" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#quoteGrid)" />
        </svg>
      </div>
      <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-copper/15 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-[10%] w-px h-full bg-gradient-to-b from-transparent via-copper/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-16 lg:gap-24">

          {/* Left — briefing guide */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-copper/40" />
              <p className="text-xs uppercase tracking-[0.3em] text-aqua/60 font-medium">{q.tag}</p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ceramic mb-7 leading-[1.1]">
              {q.h2a}<br /><span className="italic text-aqua">{q.h2b}</span>
            </h2>
            <p className="text-aqua/70 text-base leading-relaxed mb-12">{q.sub}</p>

            <div className="space-y-7">
              {q.prompts.map((prompt, i) => (
                <motion.div
                  key={prompt.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.09 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="flex flex-col items-center gap-2 flex-shrink-0 pt-1">
                    <span className="text-[10px] tracking-[0.2em] text-copper/50">0{i + 1}</span>
                    {i < q.prompts.length - 1 && <div className="w-px h-5 bg-copper/15" />}
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-aqua/40 mb-1 font-medium">{prompt.label}</p>
                    <p className="text-ceramic/85 text-sm leading-relaxed group-hover:text-ceramic transition-colors">{prompt.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 border-l-2 border-copper/25 pl-5">
              <p className="text-xs text-aqua/50 leading-relaxed">{q.urgentNote}</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <div className="bg-ceramic relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-copper/60 via-copper to-copper/60" />
              <div className="p-8 lg:p-10">
                <div className="flex items-center justify-between mb-8">
                  <p className="text-xs uppercase tracking-[0.22em] text-copper font-medium">{f.briefTitle || q.briefTitle}</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-copper/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-copper/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-copper" />
                  </div>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-stone mb-2">{f.name}</label>
                    <input type="text" className="w-full bg-transparent border-b border-beige py-3 text-sm text-ink focus:border-copper outline-none transition-colors placeholder:text-stone/40" placeholder={f.namePh} />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.15em] text-stone mb-2">{f.phone}</label>
                      <input type="tel" className="w-full bg-transparent border-b border-beige py-3 text-sm text-ink focus:border-copper outline-none transition-colors placeholder:text-stone/40" placeholder="{phone}" />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.15em] text-stone mb-2">{f.email}</label>
                      <input type="email" className="w-full bg-transparent border-b border-beige py-3 text-sm text-ink focus:border-copper outline-none transition-colors placeholder:text-stone/40" placeholder="{email}" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-stone mb-2">{f.area}</label>
                    <input type="text" className="w-full bg-transparent border-b border-beige py-3 text-sm text-ink focus:border-copper outline-none transition-colors placeholder:text-stone/40" placeholder={f.areaPh} />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-stone mb-2">{f.type}</label>
                    <select className="w-full bg-transparent border-b border-beige py-3 text-sm text-ink focus:border-copper outline-none transition-colors appearance-none cursor-pointer">
                      <option value="">{f.typePh}</option>
                      {f.options.map((opt, i) => <option key={i} value={i}>{opt}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-stone mb-2">{f.message}</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-beige py-3 text-sm text-ink focus:border-copper outline-none transition-colors resize-none placeholder:text-stone/40" placeholder={f.messagePh} />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-stone mb-3">{f.photos}</label>
                    <div className="border border-dashed border-beige p-5 text-center hover:border-copper/30 hover:bg-beige/20 transition-all duration-300 cursor-pointer group">
                      <p className="text-xs text-stone/60 group-hover:text-stone transition-colors">{f.photosPh}</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <CopperButton variant="primary" className="w-full justify-center">{f.send}</CopperButton>
                  </div>
                </form>

                <p className="text-xs text-stone/50 mt-5 text-center tracking-wide">{f.foot}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}