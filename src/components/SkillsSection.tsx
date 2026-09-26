import React from 'react';
import { FadeIn } from './FadeIn';
import { usePrefs } from '../context/Preferences';
import { UI, SKILL_GROUPS } from '../i18n/content';

export const SkillsSection: React.FC = () => {
  const { tr } = usePrefs();

  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-page">
        <FadeIn y={24}>
          <p className="t-label text-accent">{tr(UI.skills.eyebrow)}</p>
          <h2 className="t-h2 mt-3 text-strong">{tr(UI.skills.heading)}</h2>
        </FadeIn>

        <FadeIn y={20} delay={0.08}>
          <div className="mt-10 divide-y divide-mist/10 rounded-2xl border border-mist/15 bg-surface">
            {SKILL_GROUPS.map((group) => (
              <div key={group.key} className="grid grid-cols-1 gap-3 p-5 md:grid-cols-[220px_1fr] md:gap-6">
                <h3 className="t-h4 text-strong">{tr(UI.skills[group.key])}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-mist/15 px-2.5 py-1 text-xs text-mist transition-colors hover:border-accent/60 hover:text-strong sm:text-[13px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
