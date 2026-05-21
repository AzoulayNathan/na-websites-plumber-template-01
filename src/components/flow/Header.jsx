import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CopperButton from './CopperButton';
import { useLang } from '@/lib/LanguageContext';

const NAV_HREFS = ['#services', '#quote', '#areas', '#faq'];
const LANGS = ['fr', 'en', 'es'];
const LANG_LABELS = { fr: 'FR', en: 'EN', es: 'ES' };

function PlumbingLogo() {
  return (
    <svg viewBox="0 0 36 36" className="w-8 h-8 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Vertical pipe */}
      <rect x="15" y="2" width="6" height="14" rx="1.5" fill="#B66A3C" opacity="0.9" />
      {/* Elbow connector */}
      <path d="M15 16 Q15 22 9 22" stroke="#B66A3C" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.85" />
      {/* Horizontal pipe left */}
      <rect x="2" y="20" width="9" height="4" rx="1.5" fill="#B66A3C" opacity="0.75" />
      {/* Elbow connector right */}
      <path d="M21 16 Q21 22 27 22" stroke="#1F3D36" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.85" />
      {/* Horizontal pipe right */}
      <rect x="25" y="20" width="9" height="4" rx="1.5" fill="#1F3D36" opacity="0.75" />
      {/* Water drop top */}
      <path d="M18 2 C18 2 16 4.5 16 5.8 C16 6.9 16.9 7.8 18 7.8 C19.1 7.8 20 6.9 20 5.8 C20 4.5 18 2 18 2Z" fill="#CFE4E5" opacity="0.8" />
      {/* Joint rings */}
      <circle cx="18" cy="16" r="2.5" fill="#9A5830" opacity="0.7" />
      <circle cx="7" cy="22" r="1.8" fill="#B66A3C" opacity="0.5" />
      <circle cx="29" cy="22" r="1.8" fill="#1F3D36" opacity="0.5" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ceramic/96 backdrop-blur-lg shadow-[0_1px_0_0_hsl(30,18%,80%)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <PlumbingLogo />
            <span className="font-serif text-xl lg:text-2xl text-mineral tracking-tight leading-none">
              {'{businessName}'}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {t.nav.map((label, i) => (
              <a
                key={NAV_HREFS[i]}
                href={NAV_HREFS[i]}
                className="relative text-[11px] uppercase tracking-[0.22em] text-stone hover:text-mineral transition-colors duration-300 font-medium group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-copper group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA + lang switcher */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language selector */}
            <div className="flex border border-beige overflow-hidden">
              {LANGS.map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 transition-colors font-medium ${lang === l ? 'bg-copper text-ceramic' : 'text-stone hover:text-copper'}`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
            <a
              href="tel:{phone}"
              className="text-[11px] uppercase tracking-[0.2em] text-stone hover:text-copper transition-colors font-medium"
            >
              {'{phone}'}
            </a>
            <CopperButton variant="primary" href="#quote" className="text-[11px] py-3 px-6">
              {t.cta}
            </CopperButton>
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="flex border border-beige/80 overflow-hidden">
              {LANGS.map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-[10px] uppercase tracking-widest px-2 py-1 transition-colors font-medium ${lang === l ? 'bg-copper text-ceramic' : 'text-stone hover:text-copper'}`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-mineral focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-ceramic border-t border-beige`}
      >
        <nav className="flex flex-col px-6 py-7 gap-6">
          {t.nav.map((label, i) => (
            <a
              key={NAV_HREFS[i]}
              href={NAV_HREFS[i]}
              onClick={() => setMobileOpen(false)}
              className="text-[11px] uppercase tracking-[0.25em] text-stone hover:text-mineral transition-colors font-medium"
            >
              {label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-beige">
            <a
              href="tel:{phone}"
              className="text-center text-sm text-copper py-3 border border-copper/30 hover:border-copper transition-colors"
            >
              {'{phone}'}
            </a>
            <CopperButton variant="primary" href="#quote" className="text-[11px] py-3 w-full text-center">
              {t.cta}
            </CopperButton>
          </div>
        </nav>
      </div>
    </header>
  );
}