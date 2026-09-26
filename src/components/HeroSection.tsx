import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { BrowserFrame, PhoneFrame } from './Frames';
import { ContactButton } from './ContactButton';
import { usePrefs } from '../context/Preferences';
import { UI } from '../i18n/content';

const EASE = [0.22, 1, 0.36, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const HeroSection: React.FC = () => {
  const { tr } = usePrefs();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });
  const rotY = useTransform(sx, [-1, 1], [-14, -4]);
  const rotX = useTransform(sy, [-1, 1], [8, 2]);
  const backX = useTransform(sx, [-1, 1], [-14, 14]);
  const frontX = useTransform(sx, [-1, 1], [10, -10]);
  const phoneY = useTransform(sy, [-1, 1], [-10, 10]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20 lg:min-h-screen lg:flex lg:items-center">
      <div
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[70vh] w-[70vh] rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, #1D4ED8 0%, #0E7490 45%, transparent 70%)' }}
      />

      <div className="relative mx-auto grid w-full max-w-page grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.08fr] lg:gap-10">
        {/* Copy */}
        <div>
          <motion.div {...rise(0)} className="flex items-center gap-3">
            <img
              src="images/avatar-3d.png"
              alt=""
              aria-hidden
              className="h-12 w-12 rounded-full border border-mist/20 bg-surface object-cover p-1"
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-mist/20 bg-surface/60 px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="t-small font-medium text-mist">{tr(UI.hero.badge)}</span>
          </div>
          </motion.div>

          <motion.h1
            {...rise(0.1)}
            className="t-display mt-6 text-strong"
            style={{ fontSize: 'clamp(2.5rem, 4.6vw, 4.25rem)' }}
          >
            <span className="block">{tr(UI.hero.hello)}</span>
            <span className="accent-text">{tr(UI.hero.name)}</span>
          </motion.h1>

          <motion.p {...rise(0.2)} className="t-h3 mt-4 font-medium text-mist">
            {tr(UI.hero.role)}
          </motion.p>

          <motion.p {...rise(0.3)} className="t-lead mt-5 max-w-xl text-mist">
            {tr(UI.hero.tagline)}
          </motion.p>

          <motion.div {...rise(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => go('projects')}
              className="inline-flex items-center gap-2 rounded-full bg-strong px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-transform hover:scale-[1.04]"
            >
              {tr(UI.hero.ctaWork)}
              <ArrowDown className="h-4 w-4" />
            </button>
            <ContactButton />
          </motion.div>

          <motion.dl {...rise(0.5)} className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-mist/15 pt-6">
            {UI.hero.stats.map((s) => (
              <div key={s.value + s.label.en}>
                <dt className="font-display text-3xl font-semibold text-strong">{s.value}</dt>
                <dd className="t-small mt-1 text-mist">{tr(s.label)}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Product stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative mx-auto w-full max-w-[640px]"
          style={{ perspective: 1400 }}
        >
          <motion.div style={{ rotateY: rotY, rotateX: rotX, transformStyle: 'preserve-3d' }} className="relative aspect-[16/12]">
            <motion.div style={{ x: backX }} className="absolute left-0 top-0 w-[78%] opacity-90">
              <BrowserFrame src="images/shots/winglove-desktop.jpg" alt="Winglove" url="winglove.phukhuong.io.vn" eager />
            </motion.div>
            <motion.div style={{ x: backX }} className="absolute right-0 top-[14%] w-[74%]">
              <BrowserFrame src="images/shots/kinetic-desktop.jpg" alt="Kinetic3D" url="kinetic.phukhuong.io.vn" eager />
            </motion.div>
            <motion.div style={{ x: frontX }} className="absolute left-[6%] bottom-0 w-[80%]">
              <BrowserFrame src="images/shots/okdimall-desktop.jpg" alt="OKDIMALL" url="okdimall.com" eager />
            </motion.div>
            <motion.div style={{ y: phoneY }} className="absolute right-[2%] bottom-[-6%] w-[20%] hidden sm:block">
              <PhoneFrame src="images/shots/okdimall-mobile.jpg" alt="OKDIMALL mobile" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
