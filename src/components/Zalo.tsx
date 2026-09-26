import React from 'react';
import { motion } from 'framer-motion';
import { siZalo } from 'simple-icons';
import { usePrefs } from '../context/Preferences';
import { UI } from '../i18n/content';

export const PHONE_DISPLAY = '0372 803 085';
export const PHONE_TEL = 'tel:+84372803085';
export const ZALO_URL = 'https://zalo.me/0372803085';

export const ZaloIcon: React.FC<{ className?: string }> = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d={siZalo.path} />
  </svg>
);

export const ZaloFloat: React.FC = () => {
  const { tr } = usePrefs();

  return (
    <motion.a
      href={ZALO_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={tr(UI.footer.zalo)}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-[#0068FF] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        {tr(UI.footer.zalo)}
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-[0_10px_30px_-5px_rgba(0,104,255,0.6)] transition-transform duration-300 group-hover:scale-110">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#0068FF] opacity-30" />
        <ZaloIcon className="relative h-8 w-8" />
      </span>
    </motion.a>
  );
};
