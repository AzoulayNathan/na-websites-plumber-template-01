import React from 'react';
import { useLang } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="bg-ink relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12 lg:gap-16 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-copper" />
              <p className="font-serif text-2xl text-ceramic tracking-tight">{'{businessName}'}</p>
            </div>
            <p className="text-stone/60 text-sm leading-relaxed max-w-xs mb-6" style={{ whiteSpace: 'pre-line' }}>
              {f.sub}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-5 h-px bg-copper/30" />
              <p className="text-xs text-stone/40 tracking-widest uppercase">Flow Premium</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-copper mb-5 font-medium">{f.contact}</p>
            <div className="space-y-3">
              <a href="tel:{phone}" className="flex items-center gap-3 text-ceramic/60 hover:text-ceramic transition-colors group">
                <div className="w-3 h-px bg-copper/30 group-hover:w-5 group-hover:bg-copper transition-all duration-300" />
                <span className="text-sm">{'{phone}'}</span>
              </a>
              <a href="mailto:{email}" className="flex items-center gap-3 text-ceramic/60 hover:text-ceramic transition-colors group">
                <div className="w-3 h-px bg-copper/30 group-hover:w-5 group-hover:bg-copper transition-all duration-300" />
                <span className="text-sm">{'{email}'}</span>
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-copper mb-5 font-medium">{f.areas}</p>
            <div className="space-y-2">
              {['{city}', '{serviceArea1}', '{serviceArea2}', '{serviceArea3}'].map((area) => (
                <div key={area} className="flex items-center gap-3">
                  <div className="w-2 h-px bg-copper/20" />
                  <span className="text-sm text-ceramic/50">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone/40 tracking-wide">
            © {new Date().getFullYear()} {'{businessName}'} — {'{city}'}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-stone/35 hover:text-stone/60 transition-colors tracking-wide">{f.privacy}</a>
            <div className="w-px h-3 bg-stone/20" />
            <a href="#" className="text-xs text-stone/35 hover:text-stone/60 transition-colors tracking-wide">{f.legal}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}