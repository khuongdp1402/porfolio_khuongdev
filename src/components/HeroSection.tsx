import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

const NAV_LINKS: { label: string; action: 'scroll' | 'mail'; target?: string }[] = [
  { label: 'About', action: 'scroll', target: 'about' },
  { label: 'Price', action: 'scroll', target: 'services' },
  { label: 'Projects', action: 'scroll', target: 'projects' },
  { label: 'Contact', action: 'mail' },
];

export const HeroSection: React.FC = () => {
  const handleNavClick = (item: (typeof NAV_LINKS)[number]) => {
    if (item.action === 'mail') {
      window.location.href = 'mailto:khuongdp1402@gmail.com';
    } else if (item.target) {
      document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn as="nav" y={-20} className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
        {NAV_LINKS.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item)}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {item.label}
          </button>
        ))}
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11.5vw] sm:text-[12.5vw] md:text-[13vw] lg:text-[14vw]">
            hi, i&apos;m khuong
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src="images/hero_cyber_male.jpg"
            alt="Đỗ Phú Khương"
            className="w-full h-auto object-cover rounded-[32px]"
          />
        </FadeIn>
      </Magnet>

      {/* Bottom bar */}
      <div className="relative z-20 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a full-stack .net developer driven by building reliable, well-architected systems
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
