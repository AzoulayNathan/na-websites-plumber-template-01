import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollReveal from './useScrollReveal';
import { Plus, Minus } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <div className="border-b border-beige last:border-b-0">
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-start justify-between gap-6 py-7 text-left group focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`font-serif text-lg lg:text-xl transition-colors duration-300 leading-snug ${isOpen ? 'text-ink' : 'text-ink/70 group-hover:text-ink'}`}>
          {faq.q}
        </span>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${isOpen ? 'bg-copper text-ceramic' : 'bg-beige text-stone group-hover:bg-copper/10 group-hover:text-copper'}`}>
          {isOpen ? <Minus className="w-3 h-3" strokeWidth={2} /> : <Plus className="w-3 h-3" strokeWidth={2} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-0">
              <div className="flex items-start gap-4">
                <div className="w-4 h-px bg-copper/40 mt-3 flex-shrink-0" />
                <p className="text-stone text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, isVisible] = useScrollReveal();
  const { t } = useLang();
  const f = t.faq;

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-ceramic" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-copper/40" />
            <p className="text-xs uppercase tracking-[0.3em] text-stone font-medium">{f.tag}</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.1]">
            {f.h2a}<br />{f.h2b}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="border-t border-beige"
        >
          {f.items.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} isOpen={openIndex === i} onToggle={toggle} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}