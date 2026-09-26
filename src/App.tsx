import { useEffect } from 'react';
import Lenis from 'lenis';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { CommerceSection } from './components/CommerceSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ZaloFloat } from './components/Zalo';

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-ink text-strong" style={{ overflowX: 'clip' }}>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <CommerceSection />
      <SkillsSection />
      <TimelineSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
      <ZaloFloat />
    </div>
  );
}

export default App;
