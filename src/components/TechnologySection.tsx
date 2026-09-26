import React from 'react';
import { motion } from 'framer-motion';

export const TechnologySection: React.FC = () => {
  const capabilities = [
    {
      title: 'Cortical Mapping',
      desc: 'Real-time spatial reconstruction of active neural regions.',
    },
    {
      title: 'Signal Isolation',
      desc: 'Separates cognitive intent from biological noise.',
    },
    {
      title: 'State Prediction',
      desc: 'Anticipates cognitive transitions before they occur.',
    },
    {
      title: 'Loop Feedback',
      desc: 'Closed-loop adjustment based on outcome correlation.',
    },
  ];

  return (
    <section
      id="technology"
      className="relative w-full h-screen h-[100dvh] overflow-hidden bg-black flex flex-col justify-between px-8 sm:px-12 md:px-16 py-12 sm:py-16 select-none"
    >
      {/* Background Video #4 (autoplay, muted, loop) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-50"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095750_32a52ce0-2005-45c9-9093-41f03fde9530.mp4"
      />

      {/* Subtle overlays */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Top Area */}
      <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start gap-6 pt-6 sm:pt-10">
        {/* Left Heading */}
        <motion.h2
          className="text-white font-light text-[clamp(36px,8vw,72px)] leading-[0.95] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.215, 0.61, 0.355, 1.0] }}
        >
          Adaptive <br /> Intelligence
        </motion.h2>

        {/* Right Paragraph */}
        <motion.p
          className="text-white/50 text-[13px] sm:text-[15px] leading-relaxed max-w-xs md:text-right md:pt-2 font-sans"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.215, 0.61, 0.355, 1.0] }}
        >
          The system learns your neural baseline within 72 hours. From there,
          every cognitive state is mapped, predicted, and optimized in real time.
        </motion.p>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 pb-4 sm:pb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.0, delay: 0.3 }}
      >
        {capabilities.map((cap, i) => (
          <motion.div
            key={i}
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.215, 0.61, 0.355, 1.0],
            }}
          >
            <h4 className="text-white text-[14px] sm:text-[16px] font-normal mb-2 tracking-tight">
              {cap.title}
            </h4>
            <p className="text-white/40 text-[12px] sm:text-[14px] leading-relaxed">
              {cap.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
