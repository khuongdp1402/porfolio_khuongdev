import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { usePrefs } from '../context/Preferences';
import { UI, CERTS } from '../i18n/content';

export const AboutSection: React.FC = () => {
  const { tr } = usePrefs();

  return (
    <section id="about" className="section">
      <div className="mx-auto grid max-w-page grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <FadeIn y={24}>
            <p className="t-label text-accent">{tr(UI.about.eyebrow)}</p>
            <h2 className="t-h2 mt-3 text-strong">{tr(UI.about.heading)}</h2>
          </FadeIn>
          <FadeIn y={24} delay={0.1}>
            <p className="t-lead mt-6 text-mist">{tr(UI.about.p1)}</p>
            <p className="t-lead mt-4 text-mist">{tr(UI.about.p2)}</p>
            <p className="t-body mt-6 border-l-2 border-accent/60 pl-4 italic text-mist">{tr(UI.about.goal)}</p>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {UI.about.facts.map((f, i) => (
              <FadeIn key={f.label.en} delay={0.08 * i} y={20}>
                <div className="h-full rounded-2xl border border-mist/15 bg-surface p-5">
                  <div className="font-display text-4xl font-semibold text-strong">{f.value}</div>
                  <div className="t-small mt-2 text-mist">{tr(f.label)}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} y={20}>
            <div className="rounded-2xl border border-mist/15 bg-surface p-5">
              <div className="flex items-center gap-2 text-strong">
                <Award className="h-4 w-4 text-accent" />
                <span className="t-label">{tr(UI.about.certs)}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {CERTS.map((c) => (
                  <li key={c} className="t-small text-mist">
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-2 text-strong">
                <GraduationCap className="h-4 w-4 text-accent" />
                <span className="t-label">{tr(UI.about.edu)}</span>
              </div>
              <p className="t-small mt-2 text-mist">{tr(UI.about.eduValue)}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
