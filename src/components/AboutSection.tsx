import React from 'react';
import { Code2, Database, Cpu, Layers } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

const CORNER_ICON_CLASS =
  'flex items-center justify-center rounded-[28px] border border-[#D7E2EA]/20 bg-white/[0.03] text-[#D7E2EA]';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Decorative corner icons */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className={`${CORNER_ICON_CLASS} absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[210px] md:h-[210px]`}
      >
        <Code2 className="w-1/2 h-1/2" strokeWidth={1} />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className={`${CORNER_ICON_CLASS} absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px]`}
      >
        <Database className="w-1/2 h-1/2" strokeWidth={1} />
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className={`${CORNER_ICON_CLASS} absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[210px] md:h-[210px]`}
      >
        <Cpu className="w-1/2 h-1/2" strokeWidth={1} />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className={`${CORNER_ICON_CLASS} absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] md:w-[220px] md:h-[220px]`}
      >
        <Layers className="w-1/2 h-1/2" strokeWidth={1} />
      </FadeIn>

      {/* Heading + text + button */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text="With over 6 years of experience building enterprise systems, i focus on backend architecture, clean code, and reliable delivery, i truly enjoy solving hard problems and shipping software that businesses actually rely on. Let's build something reliable together!"
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          <ContactButton />
        </div>
      </div>
    </section>
  );
};
