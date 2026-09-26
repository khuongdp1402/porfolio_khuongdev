import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import {
  ArrowUpRight,
  Bot,
  Boxes,
  Briefcase,
  Check,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Lock,
  Maximize2,
  MessageCircle,
  User,
} from 'lucide-react';
import { FadeIn } from './FadeIn';
import { BrowserFrame, PhoneFrame } from './Frames';
import { Lightbox } from './Lightbox';
import { usePrefs } from '../context/Preferences';
import { UI, FEATURED, OTHERS, type FeaturedProject, type OtherProject } from '../i18n/content';

const EASE = [0.22, 1, 0.36, 1] as const;
type DetailTab = 'built' | 'admin' | 'stack';

const Gallery: React.FC<{ project: FeaturedProject; onSwipe: (dir: 1 | -1) => void }> = ({ project, onSwipe }) => {
  const { tr } = usePrefs();
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const dragged = useRef(false);
  const shot = project.shots[active];

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -400) onSwipe(1);
    else if (info.offset.x > 60 || info.velocity.x > 400) onSwipe(-1);
    setTimeout(() => (dragged.current = false), 0);
  };

  return (
    <div>
      <motion.button
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.18}
        onDragStart={() => (dragged.current = true)}
        onDragEnd={onDragEnd}
        onClick={() => !dragged.current && setLightbox(active)}
        className="group relative block w-full cursor-grab text-left active:cursor-grabbing"
        aria-label={`${project.name} — ${tr(shot.label)}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={shot.src}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {shot.kind === 'mobile' ? (
              <div className="flex aspect-[16/10] items-center justify-center rounded-2xl bg-mist/5">
                <PhoneFrame src={shot.src} alt={tr(shot.label)} className="h-[92%] w-auto aspect-[390/844]" />
              </div>
            ) : (
              <BrowserFrame
                src={shot.src}
                alt={`${project.name} — ${tr(shot.label)}`}
                url={shot.locked ? undefined : project.liveUrl}
              />
            )}
          </motion.div>
        </AnimatePresence>
        <span className="absolute right-3 top-11 flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1.5 text-xs font-medium text-white backdrop-blur sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" /> {tr(shot.label)}
        </span>
      </motion.button>

      <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
        {project.shots.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            aria-label={tr(s.label)}
            className={`relative shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
              active === i ? 'border-accent' : 'border-transparent opacity-55 hover:opacity-100'
            }`}
          >
            <img src={s.src} alt="" loading="lazy" className="h-11 w-16 object-cover object-top sm:h-12 sm:w-[4.5rem]" />
            {s.locked && (
              <span className="absolute right-0.5 top-0.5 rounded-full bg-black/70 p-0.5 text-white">
                <Lock className="h-2.5 w-2.5" />
              </span>
            )}
          </button>
        ))}
      </div>
      {project.shots.some((s) => s.locked) && (
        <p className="mt-2 flex items-center gap-1.5 text-xs text-mist">
          <Lock className="h-3 w-3" /> {tr(UI.projects.private)}
        </p>
      )}

      <Lightbox
        images={project.shots.map((s) => ({ src: s.src, alt: `${project.name} — ${tr(s.label)}` }))}
        index={lightbox}
        onChange={setLightbox}
      />
    </div>
  );
};

const Details: React.FC<{ project: FeaturedProject }> = ({ project }) => {
  const { tr } = usePrefs();
  const [tab, setTab] = useState<DetailTab>('built');

  const chips = [project.type, project.period, project.team].filter(Boolean) as NonNullable<FeaturedProject['period']>[];

  const tabs: { id: DetailTab; label: string }[] = [
    { id: 'built', label: tr(UI.projects.tabBuilt) },
    { id: 'admin', label: tr(UI.projects.tabAdmin) },
    { id: 'stack', label: tr(UI.projects.tabStack) },
  ];

  const list = (tab === 'built' ? project.highlights : project.admin).slice(0, 3);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-mist">{tr(project.kicker)}</span>
        {project.personal && (
          <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
            <User className="h-3 w-3" /> {tr(UI.projects.personal)}
          </span>
        )}
      </div>
      <h3 className="t-h3 mt-2 text-[1.9rem] text-strong">{project.name}</h3>
      <p className="t-small mt-2 text-mist sm:text-[0.95rem]">{tr(project.summary)}</p>

      <div className="mt-4 flex items-start gap-2.5">
        <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
        <p className="t-small font-semibold text-strong">{tr(project.role)}</p>
      </div>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {chips.map((c) => (
          <span key={c.en} className="rounded-full bg-mist/10 px-2.5 py-0.5 text-xs font-medium text-strong">
            {tr(c)}
          </span>
        ))}
      </div>

      <div className="mt-5 inline-flex self-start rounded-full border border-mist/15 bg-surface p-1" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`relative rounded-full px-3 py-1.5 text-xs font-semibold transition-colors sm:px-3.5 ${
              tab === t.id ? 'text-ink' : 'text-mist hover:text-strong'
            }`}
          >
            {tab === t.id && (
              <motion.span
                layoutId={`detail-pill-${project.id}`}
                className="absolute inset-0 rounded-full bg-strong"
                transition={{ type: 'spring', stiffness: 400, damping: 34 }}
              />
            )}
            <span className="relative">{t.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-3 min-h-[7.5rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {tab === 'stack' ? (
              <>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((t) => (
                    <span key={t} className="rounded-full bg-mist/10 px-2.5 py-0.5 text-xs text-strong">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="t-small mt-3 text-mist">
                  <span className="font-semibold text-strong">{tr(UI.projects.scope)}:</span> {tr(project.scope)}
                </p>
              </>
            ) : (
              <ul className="space-y-1.5">
                {list.map((h) => (
                  <li key={h.en} className="t-small flex gap-2 text-mist">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{tr(h)}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-strong px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.04]"
        >
          {tr(UI.projects.visit)} <ArrowUpRight className="h-4 w-4" />
        </a>
        {project.extraLink && (
          <a
            href={project.extraLink.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-mist/30 px-5 py-2.5 text-sm font-semibold text-strong transition-colors hover:border-strong"
          >
            {tr(project.extraLink.label)} <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

const FeaturedShowcase: React.FC = () => {
  const { tr } = usePrefs();
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const project = FEATURED[index];

  const go = (next: number) => {
    const n = (next + FEATURED.length) % FEATURED.length;
    setState([n, next > index || (index === FEATURED.length - 1 && n === 0) ? 1 : -1]);
  };


  return (
    <div>
      {/* Project tabs */}
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0" role="tablist">
        {FEATURED.map((p, i) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={i === index}
            onClick={() => go(i)}
            className={`group relative flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300 sm:flex-1 ${
              i === index ? 'border-accent/60 bg-surface' : 'border-mist/15 hover:border-mist/35'
            }`}
          >
            <span
              className={`font-display text-sm font-semibold ${i === index ? 'text-accent' : 'text-mist'}`}
            >
              0{i + 1}
            </span>
            <span>
              <span className={`block text-sm font-semibold ${i === index ? 'text-strong' : 'text-mist group-hover:text-strong'}`}>
                {p.name}
              </span>
              <span className="hidden text-xs text-mist md:block">{tr(p.kicker)}</span>
            </span>
            {i === index && (
              <motion.span
                layoutId="featured-underline"
                className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-accent"
                transition={{ type: 'spring', stiffness: 400, damping: 34 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="relative mt-8" style={{ overflowX: 'clip' }}>
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.div
            key={project.id}
            custom={dir}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: d * 40 }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: d * -40 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: EASE }}
            className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-10"
          >
            <div>
              <Gallery project={project} onSwipe={(d) => go(index + d)} />
            </div>
            <Details project={project} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pager */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {FEATURED.map((p, i) => (
            <button
              key={p.id}
              onClick={() => go(i)}
              aria-label={p.name}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-accent' : 'w-3 bg-mist/30'}`}
            />
          ))}
          <span className="ml-2 text-xs text-mist lg:hidden">{tr(UI.projects.swipe)}</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => go(index - 1)}
            aria-label={tr(UI.projects.prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-mist/25 text-strong transition-colors hover:border-strong"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label={tr(UI.projects.next)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-mist/25 text-strong transition-colors hover:border-strong"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ICONS = { ai: Bot, erp: Boxes, health: HeartPulse };

const OtherCard: React.FC<{ p: OtherProject }> = ({ p }) => {
  const { tr } = usePrefs();
  const Icon = p.icon ? ICONS[p.icon] : null;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mist/15 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-mist/35">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-mist/10">
        {p.internal && (
          <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
            <Lock className="h-3 w-3" /> {tr(UI.projects.internal)}
          </span>
        )}
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        ) : p.logo ? (
          <div className="flex h-full w-full items-center justify-center bg-white p-8">
            <img src={p.logo} alt={p.name} loading="lazy" className="max-h-16 max-w-[65%] object-contain" />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#030b2e] via-[#0b2a8a] to-[#0e7490]">
            {Icon && <Icon className="h-12 w-12 text-white/85" strokeWidth={1.3} />}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{tr(p.tag)}</p>
        <h3 className="t-h4 mt-1.5 text-strong">{p.name}</h3>
        <p className="t-small mt-1.5 line-clamp-3 flex-1 text-mist">{tr(p.desc)}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full bg-mist/10 px-2.5 py-0.5 text-xs text-strong">
              {t}
            </span>
          ))}
        </div>
        {p.liveUrl && (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-strong hover:text-accent"
          >
            {tr(UI.projects.visit)} <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const { tr } = usePrefs();

  return (
    <section
      id="projects"
      className="section relative z-10 -mt-10 rounded-t-[40px] bg-ink sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]"
    >
      <div className="mx-auto max-w-page">
        <FadeIn y={24} className="max-w-2xl">
          <p className="t-label text-accent">{tr(UI.projects.eyebrow)}</p>
          <h2 className="t-h2 mt-3 text-strong">{tr(UI.projects.heading)}</h2>
          <p className="t-lead mt-3 text-mist">{tr(UI.projects.intro)}</p>
        </FadeIn>

        <FadeIn y={30} delay={0.1} className="mt-10">
          <FeaturedShowcase />
        </FadeIn>

        <div className="mt-20 sm:mt-24">
          <FadeIn y={24} className="max-w-3xl">
            <h2 className="t-h2 text-strong">{tr(UI.projects.othersHeading)}</h2>
            <p className="t-body mt-3 text-mist">{tr(UI.projects.othersIntro)}</p>
          </FadeIn>
          <div className="rail mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {OTHERS.map((p) => (
              <OtherCard key={p.id} p={p} />
            ))}
          </div>

          <FadeIn y={20} delay={0.1}>
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-mist/15 bg-surface p-6 sm:p-8">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
                style={{ background: 'radial-gradient(circle, #1D4ED8, #0E7490 60%, transparent)' }}
              />
              <div className="relative flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <h3 className="t-h3 text-strong">{tr(UI.projects.moreHeading)}</h3>
                  <p className="t-small mt-2 text-mist sm:text-base">{tr(UI.projects.moreText)}</p>
                </div>
                <a
                  href="mailto:khuongdp1402@gmail.com"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-strong px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.04]"
                >
                  <MessageCircle className="h-4 w-4" /> {tr(UI.hero.ctaContact)}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
