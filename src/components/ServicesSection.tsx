import React from 'react';
import { FadeIn } from './FadeIn';
import { usePrefs } from '../context/Preferences';
import { UI, SERVICES } from '../i18n/content';

export const ServicesSection: React.FC = () => {
  const { tr } = usePrefs();

  return (
    <section id="services" className="section bg-paper text-paperfg rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] pb-24 sm:pb-28">
      <div className="mx-auto max-w-page">
        <FadeIn y={24}>
          <p className="t-label opacity-60">{tr(UI.services.eyebrow)}</p>
          <h2 className="t-h2 mt-3">{tr(UI.services.heading)}</h2>
        </FadeIn>

        <div className="rail mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="flex h-full flex-col rounded-2xl border border-paperfg/15 p-5 transition-colors duration-300 hover:border-paperfg/40 sm:p-6"
            >
              <span className="font-display text-sm font-semibold opacity-40">{s.num}</span>
              <h3 className="t-h4 mt-2 text-lg">{tr(s.name)}</h3>
              <p className="t-small mt-2 opacity-70">{tr(s.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
