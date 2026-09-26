import React from 'react';
import { Bot, Check, Search, ShieldCheck, Sparkles } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { usePrefs } from '../context/Preferences';
import { UI, PILLARS } from '../i18n/content';

const ICONS: Record<string, React.ElementType> = {
  foundation: ShieldCheck,
  seo: Search,
  aio: Bot,
  geo: Sparkles,
};

export const CommerceSection: React.FC = () => {
  const { tr } = usePrefs();

  return (
    <section id="ecommerce" className="section relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #1D4ED8 0%, #0E7490 45%, transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-page">
        <FadeIn y={24} className="max-w-3xl">
          <p className="t-label text-accent">{tr(UI.commerce.eyebrow)}</p>
          <h2 className="t-h2 mt-3 text-strong">{tr(UI.commerce.heading)}</h2>
          <p className="t-lead mt-5 text-mist">{tr(UI.commerce.intro)}</p>
        </FadeIn>

        <div className="rail mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = ICONS[p.key];
            return (
              <FadeIn key={p.key} delay={i * 0.08} y={30} className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-mist/15 bg-surface p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="t-h3 mt-4 text-strong">{tr(p.title)}</h3>
                  <p className="t-small mt-1 font-medium text-accent">{tr(p.tagline)}</p>
                  <ul className="mt-4 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt.en} className="t-small flex gap-2.5 text-mist">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{tr(pt)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn y={20} delay={0.2}>
          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-mist/15 bg-surface/60 p-6 sm:flex-row sm:items-center">
            <p className="t-body max-w-2xl text-mist">{tr(UI.commerce.proof)}</p>
            <ContactButton className="shrink-0" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
