import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useScrollReveal from './useScrollReveal';
import { useLang } from '@/lib/LanguageContext';

const SERVICE_KEYS = ['repair', 'heater', 'bathroom', 'install'];
const SVG_PATHS = [
  'M8 4 L8 20 M4 8 L12 8 M4 16 L12 16',
  'M12 3 C7 3 4 7 4 12 C4 17 7 21 12 21 C17 21 20 17 20 12 C20 7 17 3 12 3 M12 8 L12 12 L15 15',
  'M4 20 L4 8 C4 6 6 4 8 4 L16 4 C18 4 20 6 20 8 L20 12 M4 14 L14 14 M14 14 L14 20',
  'M12 5 L12 19 M5 12 L19 12 M8 8 L16 16 M16 8 L8 16',
];
const TAGS = ['{primaryService1}', '{primaryService2}', '{primaryService3}', '{primaryService4}'];
const SECONDARY = ['{secondaryService1}', '{secondaryService2}'];

function ServiceIcon({ path, active }) {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} stroke={active ? '#B66A3C' : '#A9A59C'} strokeWidth="1.2" className="transition-all duration-500" />
    </svg>
  );
}

function FlowLine({ active, index, total }) {
  return (
    <div className="hidden lg:flex flex-col items-center absolute left-1/2 -translate-x-1/2 inset-y-0 pointer-events-none">
      <div className={`relative z-10 mt-10 w-4 h-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${active ? 'border-copper bg-ceramic scale-110 shadow-[0_0_0_4px_rgba(182,106,60,0.12)]' : 'border-copper/25 bg-ceramic/80'}`}>
        <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${active ? 'bg-copper' : 'bg-copper/20'}`} />
      </div>
      {index < total - 1 && (
        <div className="flex-1 w-px bg-gradient-to-b from-copper/25 via-aqua/30 to-copper/20 mt-1" />
      )}
    </div>
  );
}

export default function ServicesFlowSection() {
  const [active, setActive] = useState(null);
  const [ref, isVisible] = useScrollReveal();
  const { t } = useLang();
  const s = t.services;

  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-aqua-light/15 via-ceramic to-ceramic" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-px bg-copper/40" />
            <p className="text-xs uppercase tracking-[0.3em] text-stone font-medium">{s.tag}</p>
            <div className="w-6 h-px bg-copper/40" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-5">{s.h2}</h2>
          <p className="text-stone text-base lg:text-lg max-w-xl mx-auto leading-relaxed">{s.sub}</p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-copper/20 to-transparent" />
          <div className="space-y-0 lg:space-y-2">
            {s.items.map((service, i) => {
              const isLeft = i % 2 === 0;
              const isActive = active === i;
              return (
                <motion.div
                  key={SERVICE_KEYS[i]}
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative lg:h-44 flex items-center"
                >
                  <FlowLine active={isActive} index={i} total={s.items.length} />
                  <div className={`w-full lg:w-[44%] cursor-default ${isLeft ? 'lg:mr-auto lg:pr-10' : 'lg:ml-auto lg:pl-10'}`}>
                    <div
                      onMouseEnter={() => setActive(i)}
                      onMouseLeave={() => setActive(null)}
                      className={`p-6 lg:p-7 border transition-all duration-400 group ${isActive ? 'border-copper/30 bg-ceramic shadow-md' : 'border-transparent bg-transparent hover:border-beige hover:bg-ceramic/60'}`}
                    >
                      <div className={`flex items-start gap-4 ${isLeft ? '' : 'lg:flex-row-reverse lg:text-right'}`}>
                        <div className="flex-shrink-0 mt-0.5">
                          <ServiceIcon path={SVG_PATHS[i]} active={isActive} />
                        </div>
                        <div className="flex-1">
                          <p className={`text-xs uppercase tracking-[0.2em] font-medium mb-1 transition-colors duration-300 ${isActive ? 'text-copper' : 'text-stone/60'}`}>{TAGS[i]}</p>
                          <h3 className="font-serif text-2xl text-ink mb-2">{service.title}</h3>
                          <p className="text-sm text-stone leading-relaxed">{service.description}</p>
                          <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-28 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                            <p className="text-xs text-stone mb-1">
                              <span className="text-ink font-medium">Best for — </span>
                              {service.bestFor}
                            </p>
                            <p className="text-xs text-stone/70 italic mb-3">{service.detail}</p>
                            <a href="#quote" className="inline-flex items-center gap-2 text-xs text-copper hover:text-copper-dark transition-colors tracking-wide">
                              {s.include}
                              <div className="w-4 h-px bg-copper group-hover:w-6 transition-all duration-300" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-beige text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-stone mb-5">{s.also}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {SECONDARY.map((sec) => (
              <span key={sec} className="text-xs text-ink border border-beige/80 px-5 py-2.5 bg-ceramic/80 hover:border-copper/30 hover:bg-beige/30 transition-all duration-300 cursor-default">{sec}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}