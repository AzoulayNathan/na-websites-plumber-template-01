import React, { useState, useEffect } from 'react';
import { useLang } from '@/lib/LanguageContext';

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="h-[1.5px] bg-gradient-to-r from-transparent via-copper/50 to-transparent" />
      <div className="flex bg-mineral/98 backdrop-blur-sm">
        <a href="#quote" className="flex-1 flex items-center justify-center gap-2.5 py-4 text-ceramic hover:bg-mineral-light transition-colors">
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M14 2H2a1 1 0 00-1 1v9a1 1 0 001 1h3l3 2 3-2h3a1 1 0 001-1V3a1 1 0 00-1-1z" />
          </svg>
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium">{t.mobile.quote}</span>
        </a>
        <div className="w-px bg-copper/20" />
        <a href="tel:{phone}" className="flex-1 flex items-center justify-center gap-2.5 py-4 text-copper hover:bg-mineral-light transition-colors">
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V13a1 1 0 01-1 1h-2C7.82 14 2 8.18 2 1z" />
          </svg>
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium">{t.mobile.call}</span>
        </a>
      </div>
    </div>
  );
}