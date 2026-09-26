import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { usePrefs } from '../context/Preferences';
import { UI, TIMELINE } from '../i18n/content';

export const TimelineSection: React.FC = () => {
  const { tr } = usePrefs();
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section id="timeline" className="section">
      <div className="mx-auto max-w-page">
        <FadeIn y={24}>
          <p className="t-label text-accent">{tr(UI.timeline.eyebrow)}</p>
          <h2 className="t-h2 mt-3 text-strong">{tr(UI.timeline.heading)}</h2>
        </FadeIn>

        <div className="relative mt-10 space-y-8 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-mist/20 sm:before:left-[9px]">
          {TIMELINE.map((entry, ei) => (
            <FadeIn key={entry.company} delay={Math.min(ei * 0.08, 0.3)} y={20}>
              <div className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-ink sm:h-[19px] sm:w-[19px]" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="t-h3 text-strong">{entry.company}</h3>
                  <span className="t-small font-medium text-mist">{tr(entry.date)}</span>
                </div>

                <div className="mt-3 space-y-2">
                  {entry.projects.map((proj, pi) => {
                    const key = `${ei}-${pi}`;
                    const isOpen = openKey === key;
                    return (
                      <div key={key} className="overflow-hidden rounded-2xl border border-mist/15 bg-surface">
                        <button
                          onClick={() => setOpenKey(isOpen ? null : key)}
                          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left sm:px-5"
                          aria-expanded={isOpen}
                        >
                          <div>
                            <div className="t-h4 text-strong">{tr(proj.name)}</div>
                            <div className="t-small mt-0.5 text-mist">{tr(proj.date)}</div>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 shrink-0 text-mist transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-mist/10 px-5 pb-5 pt-4">
                                <p className="t-body text-mist">{tr(proj.description)}</p>
                                <div className="t-small mt-3 flex flex-wrap gap-x-6 gap-y-1 text-mist">
                                  <span>
                                    <strong className="font-semibold text-strong">{tr(UI.timeline.role)}:</strong>{' '}
                                    {tr(proj.position)}
                                  </span>
                                  <span>
                                    <strong className="font-semibold text-strong">{tr(UI.timeline.team)}:</strong>{' '}
                                    {tr(proj.team)}
                                  </span>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {proj.tech.map((t) => (
                                    <span key={t} className="t-small rounded-full bg-mist/10 px-3 py-1 text-strong">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
