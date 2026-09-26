import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ScrambleIn } from './ScrambleIn';

interface HeroSectionProps {
  entranceComplete: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ entranceComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mouse scrub state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrubValue, setScrubValue] = useState(0.5); // 0 to 1
  const prevMouseX = useRef<number | null>(null);

  // Mouse scrub listener
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const currentX = e.clientX;
    const currentY = e.clientY;

    if (prevMouseX.current !== null) {
      const deltaX = (currentX - prevMouseX.current) / rect.width;
      setScrubValue((prev) => Math.max(0, Math.min(1, prev + deltaX * 0.8)));
    }
    prevMouseX.current = currentX;

    // Normalised position for 3D tilt (-1 to 1)
    const normX = ((currentX - rect.left) / rect.width) * 2 - 1;
    const normY = ((currentY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x: normX, y: normY });
  };

  const handleMouseLeave = () => {
    prevMouseX.current = null;
    setMousePos({ x: 0, y: 0 });
  };

  // Interactive Neural Particle Canvas in Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes representing neural synaptic networks
    const particleCount = 70;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(142, 127, 148, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx + mousePos.x * 0.2;
        p.y += p.vy + mousePos.y * 0.2;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePos]);

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen h-[100dvh] overflow-hidden bg-black flex flex-col select-none"
    >
      {/* 3D MALE CHARACTER BACKGROUND (Mouse-scrubbed 3D Depth & Tilt) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          animate={{
            rotateY: mousePos.x * 9,
            rotateX: -mousePos.y * 6,
            x: (scrubValue - 0.5) * 50,
          }}
          transition={{ type: 'spring', stiffness: 45, damping: 25, mass: 1 }}
          style={{ perspective: 1000 }}
        >
          <img
            src="images/hero_cyber_male.jpg"
            alt="Đỗ Phú Khương - 3D Neural Character"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.08] transition-transform duration-300"
          />

          {/* Vignette & Radial Edge Fade */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
        </motion.div>
      </div>

      {/* Neural Particle Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-1 pointer-events-none opacity-60"
      />

      {/* 24x24px Dot Grid Overlay */}
      <div className="absolute inset-0 z-2 dot-grid-pattern opacity-5 pointer-events-none" />

      {/* Large Background Watermark Text: TRANSCENDENCE */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center z-3 pointer-events-none select-none"
        style={{ transform: 'translateY(calc(-50% + 50px))' }}
      >
        <span
          className="font-anton uppercase tracking-[-4px] leading-none text-center"
          style={{
            fontSize: 'clamp(120px, 30vw, 521px)',
            opacity: 0.10,
            background: 'radial-gradient(circle, rgba(142,127,148,0) 0%, #8E7F94 70%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          TRANSCENDENCE
        </span>
      </div>

      {/* HERO FOREGROUND CONTENT */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-between px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: entranceComplete ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Top telemetry badge */}
        <div className="flex items-center justify-between text-xs text-white/40 tracking-[0.2em] uppercase font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>NEURAL INTERFACE // V4.8</span>
          </div>
          <div className="hidden sm:block">
            <span>SCRUB: {Math.round(scrubValue * 100)}% // MOUSE RESPONSIVE</span>
          </div>
        </div>

        {/* Flexible spacer */}
        <div className="flex-1" />

        {/* Bottom Row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-light leading-[0.95] tracking-[-0.03em] text-[clamp(40px,10vw,100px)]">
              <ScrambleIn
                text="Brain"
                delay={200}
                triggered={entranceComplete}
              />
              <br />
              <ScrambleIn
                text="And Body"
                delay={500}
                triggered={entranceComplete}
              />
            </h1>

            {/* Description paragraph */}
            <motion.p
              className="max-w-sm text-[13px] sm:text-[15px] text-white/60 leading-relaxed font-sans"
              initial={{ opacity: 0, y: 25 }}
              animate={entranceComplete ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.215, 0.61, 0.355, 1.0],
              }}
            >
              Built at the intersection of neuroscience and artificial intelligence.
              SynapseX continuously maps neural pathways, cognitive load, and physiological
              states into a single adaptive intelligence layer.
            </motion.p>
          </div>

          {/* Right Column */}
          <div className="text-left md:text-right">
            <h1 className="text-white font-light leading-[0.95] tracking-[-0.03em] text-[clamp(40px,10vw,100px)]">
              <ScrambleIn
                text="One"
                delay={700}
                triggered={entranceComplete}
              />
              <br />
              <ScrambleIn
                text="Network"
                delay={1000}
                triggered={entranceComplete}
              />
            </h1>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
