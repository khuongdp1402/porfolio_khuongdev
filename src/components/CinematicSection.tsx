import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const CinematicSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Framer Motion useScroll tracks section with offset ["start end", "end start"]
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Pipe through useSpring (stiffness 15, damping 32, mass 1.8)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 15,
    damping: 32,
    mass: 1.8,
  });

  // yScaleValue transforms from 60 to -120 based on smooth scroll progress
  const translateY = useTransform(smoothProgress, [0, 1], [60, -120]);
  const opacity = useTransform(smoothProgress, [0.15, 0.4, 0.7, 0.95], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full h-screen h-[100dvh] overflow-hidden bg-black flex items-center justify-center"
      style={{ perspective: '400px' }}
    >
      {/* Background Video #2 (autoplay, muted, loop) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-75"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_092455_089c54f8-3b03-4966-9df1-e9746063d0ef.mp4"
      />

      {/* Top gradient overlay (180px height, linear-gradient from #010103 to transparent) */}
      <div
        className="absolute inset-x-0 top-0 h-[180px] z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #010103 0%, rgba(1,1,3,0) 100%)',
        }}
      />

      {/* Bottom gradient overlay for smooth transition */}
      <div
        className="absolute inset-x-0 bottom-0 h-[180px] z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #000000 0%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Cinematic 3D Rotated Text Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-12 flex items-center justify-center">
        <motion.p
          style={{
            translateY,
            opacity,
            transformStyle: 'preserve-3d',
            rotateX: 24,
            translateZ: 15,
          }}
          className="font-sans font-normal text-[22px] sm:text-[30px] md:text-[36px] lg:text-[42px] text-white leading-[1.35] tracking-[-0.02em] select-none text-center"
        >
          A neural-AI interface built on the architecture of the human nervous
          system. SynapseX translates synaptic activity into computational
          intelligence. Every signal becomes measurable, structured, and visible.
          It continuously reconstructs internal state as a dynamic neural map.
          Biological noise is filtered into actionable cognitive patterns.
        </motion.p>
      </div>
    </section>
  );
};
