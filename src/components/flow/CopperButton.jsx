import React, { useRef } from 'react';

export default function CopperButton({ children, variant = 'primary', href, onClick, className = '' }) {
  const btnRef = useRef(null);

  const handleClick = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.left = `${e.clientX - rect.left - 10}px`;
    ripple.style.top = `${e.clientY - rect.top - 10}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
    onClick?.(e);
  };

  const base = 'relative overflow-hidden inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-copper/50 focus:ring-offset-2';
  
  const variants = {
    primary: `${base} btn-copper-fill bg-mineral text-ceramic px-8 py-4 text-sm uppercase tracking-widest hover:shadow-lg ${className}`,
    copper: `${base} btn-copper-fill bg-copper text-ceramic px-8 py-4 text-sm uppercase tracking-widest hover:shadow-lg ${className}`,
    outline: `${base} border border-copper/40 text-copper px-8 py-4 text-sm uppercase tracking-widest hover:border-copper hover:text-copper-dark ${className}`,
    ghost: `${base} text-copper hover:text-copper-dark px-6 py-3 text-sm tracking-wide ${className}`,
    white: `${base} btn-copper-fill bg-ceramic text-mineral px-8 py-4 text-sm uppercase tracking-widest hover:shadow-lg ${className}`,
  };

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      ref={btnRef}
      href={href}
      onClick={handleClick}
      className={variants[variant]}
    >
      <span>{children}</span>
    </Tag>
  );
}