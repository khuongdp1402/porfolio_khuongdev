import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { usePrefs } from '../context/Preferences';
import { UI } from '../i18n/content';

const LINKS = [
  { id: 'about', label: UI.nav.about },
  { id: 'skills', label: UI.nav.skills },
  { id: 'timeline', label: UI.nav.timeline },
  { id: 'projects', label: UI.nav.projects },
  { id: 'contact', label: UI.nav.contact },
];

export const Navbar: React.FC = () => {
  const { lang, theme, toggleLang, toggleTheme, tr } = usePrefs();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const iconBtn =
    'w-9 h-9 rounded-full flex items-center justify-center text-strong hover:bg-mist/15 transition-colors';

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/75 backdrop-blur-xl border-b border-mist/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 sm:h-[72px] max-w-page items-center justify-between px-5 sm:px-8">
        <button onClick={() => go('top')} className="font-display text-xl font-semibold tracking-wide text-strong">
          KHƯƠNG<span className="text-accent">.</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="t-small font-medium text-mist hover:text-strong transition-colors"
            >
              {tr(l.label)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={toggleLang}
            aria-label={tr(UI.controls.lang)}
            title={tr(UI.controls.lang)}
            className={`${iconBtn} text-xs font-semibold tracking-wider`}
          >
            {lang === 'en' ? 'VI' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            aria-label={tr(UI.controls.theme)}
            title={tr(UI.controls.theme)}
            className={iconBtn}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={tr(UI.controls.menu)}
            aria-expanded={open}
            className={`${iconBtn} md:hidden`}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-mist/10 bg-ink/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-5 py-3">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="py-3 text-left text-base font-medium text-strong border-b border-mist/10 last:border-0"
                >
                  {tr(l.label)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
