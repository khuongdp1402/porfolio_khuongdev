import React from 'react';
import type { SimpleIcon } from 'simple-icons';
import {
  siDotnet,
  siBlazor,
  siReact,
  siTypescript,
  siPostgresql,
  siRedis,
  siMongodb,
  siApachekafka,
  siDocker,
  siKubernetes,
  siJenkins,
  siN8n,
  siClaude,
  siTailwindcss,
  siGit,
  siMeilisearch,
  siThreedotjs,
  siShopify,
} from 'simple-icons';
import { usePrefs } from '../context/Preferences';
import { UI, PARTNERS } from '../i18n/content';

type Tech = { name: string; icon?: SimpleIcon };

const TECH: Tech[] = [
  { name: '.NET', icon: siDotnet },
  { name: 'C#' },
  { name: 'ASP.NET Core' },
  { name: 'Blazor', icon: siBlazor },
  { name: 'React', icon: siReact },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'SQL Server' },
  { name: 'PostgreSQL', icon: siPostgresql },
  { name: 'Redis', icon: siRedis },
  { name: 'MongoDB', icon: siMongodb },
  { name: 'Kafka', icon: siApachekafka },
  { name: 'Docker', icon: siDocker },
  { name: 'Kubernetes', icon: siKubernetes },
  { name: 'Jenkins', icon: siJenkins },
  { name: 'Meilisearch', icon: siMeilisearch },
  { name: 'n8n', icon: siN8n },
  { name: 'Claude Code', icon: siClaude },
  { name: 'Three.js', icon: siThreedotjs },
  { name: 'Tailwind CSS', icon: siTailwindcss },
  { name: 'Shopify', icon: siShopify },
  { name: 'Git', icon: siGit },
];

const isDark = (hex: string) => {
  const n = parseInt(hex, 16);
  const lum = 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255);
  return lum < 60;
};

const TechPill: React.FC<{ tech: Tech }> = ({ tech }) => (
  <div className="flex shrink-0 items-center gap-3 rounded-full border border-mist/15 bg-surface px-5 py-3">
    {tech.icon ? (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-strong" aria-hidden>
        <path d={tech.icon.path} fill={isDark(tech.icon.hex) ? 'currentColor' : `#${tech.icon.hex}`} />
      </svg>
    ) : (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#512BD4] text-[9px] font-bold text-white">
        {tech.name.slice(0, 2)}
      </span>
    )}
    <span className="whitespace-nowrap text-sm font-medium text-strong">{tech.name}</span>
  </div>
);

const PartnerTile: React.FC<{ name: string; logo?: string }> = ({ name, logo }) => (
  <div
    className="flex h-24 w-52 shrink-0 items-center justify-center rounded-2xl border border-mist/15 bg-white px-6 transition-transform duration-300 hover:-translate-y-1"
    title={name}
  >
    {logo ? (
      <img src={logo} alt={name} loading="lazy" className="max-h-16 max-w-full object-contain" />
    ) : (
      <span className="text-center font-display text-base font-semibold leading-tight text-neutral-800">{name}</span>
    )}
  </div>
);

const Row: React.FC<{ children: React.ReactNode; reverse?: boolean; duration: string }> = ({
  children,
  reverse,
  duration,
}) => (
  <div className="marquee overflow-hidden">
    <div
      className={`marquee-track flex w-max gap-3 ${reverse ? 'reverse' : ''}`}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {children}
      {children}
    </div>
  </div>
);

export const MarqueeSection: React.FC = () => {
  const { tr } = usePrefs();

  return (
    <section aria-label={tr(UI.marquee.tech)} className="border-y border-mist/10 bg-ink py-12 sm:py-14">
      <p className="t-label mb-6 text-center text-mist">{tr(UI.marquee.tech)}</p>
      <Row duration="55s">
        {TECH.map((t) => (
          <TechPill key={t.name} tech={t} />
        ))}
      </Row>

      <p className="t-label mb-6 mt-12 text-center text-mist">{tr(UI.marquee.partners)}</p>
      <Row duration="40s" reverse>
        {PARTNERS.map((p) => (
          <PartnerTile key={p.name} {...p} />
        ))}
      </Row>
    </section>
  );
};
