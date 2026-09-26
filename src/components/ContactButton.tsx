import React from 'react';
import { usePrefs } from '../context/Preferences';
import { UI } from '../i18n/content';

export const ContactButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { tr } = usePrefs();
  return (
    <a
      href="mailto:khuongdp1402@gmail.com"
      className={`inline-flex items-center justify-center rounded-full text-white font-semibold uppercase tracking-[0.14em] px-7 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm transition-transform hover:scale-[1.04] ${className}`}
      style={{
        background: 'linear-gradient(123deg, #030B2E 5%, #0B2A8A 35%, #1D4ED8 65%, #06B6D4 100%)',
        boxShadow: '0px 4px 14px rgba(29, 78, 216, 0.35), 4px 4px 12px #1E3A8A inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      {tr(UI.hero.ctaContact)}
    </a>
  );
};
