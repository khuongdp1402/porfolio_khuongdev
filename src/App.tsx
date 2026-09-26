import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CinematicSection } from './components/CinematicSection';
import { MetricsSection } from './components/MetricsSection';
import { TechnologySection } from './components/TechnologySection';
import { ProjectsMatrix } from './components/ProjectsMatrix';
import { ArchitectureSection } from './components/ArchitectureSection';
import { FooterSection } from './components/FooterSection';

export function App() {
  const [entranceComplete, setEntranceComplete] = useState(false);

  // Entrance animation trigger after 800ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setEntranceComplete(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    window.open('mailto:khuongdp1402@gmail.com?subject=Inquiry%20regarding%20CV%20-%20Đỗ%20Phú%20Khương', '_blank');
  };

  return (
    <div
      className="min-h-screen bg-black text-white overflow-x-hidden"
      style={{ fontFamily: '"Space Mono", monospace' }}
    >
      {/* Fixed Navbar with Expanding Pill Menu */}
      <Navbar
        entranceComplete={entranceComplete}
        onNavigate={handleNavigate}
        onDownloadCV={handleDownloadCV}
      />

      {/* SECTION 1: Hero with 3D Male Character & Mouse Scrubbing */}
      <HeroSection entranceComplete={entranceComplete} />

      {/* SECTION 2: Cinematic Text with 3D Perspective Rotation & Video #2 */}
      <CinematicSection />

      {/* SECTION 3: Performance Metrics with Video #3 */}
      <MetricsSection />

      {/* SECTION 4: Technology & Adaptive Intelligence with Video #4 */}
      <TechnologySection />

      {/* FEATURED PROJECTS: Complete Portfolio Deployments & Private Admin Modal */}
      <ProjectsMatrix />

      {/* SECTION 5: Architecture (Pure Black, 3 Stacked Layers) */}
      <ArchitectureSection />

      {/* FOOTER: Split Column with Video #5 */}
      <FooterSection />
    </div>
  );
}

export default App;