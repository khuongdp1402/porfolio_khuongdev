import React from 'react';
import { motion } from 'framer-motion';

export const MetricsSection: React.FC = () => {
  const metrics = [
    {
      value: '2.4ms',
      label: 'Synaptic Latency',
      sublabel: 'Zero-overhead CQRS & Redis caching',
    },
    {
      value: '99.7%',
      label: 'Signal Accuracy',
      sublabel: 'Fault-tolerant distributed telemetry',
    },
    {
      value: '140B',
      label: 'Neural Parameters',
      sublabel: 'AI-assisted enterprise automation',
    },
  ];

  return (
    <section
      id="metrics"
      className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden py-32 px-6"
    >
      {/* Background Video #3 (autoplay, muted, loop) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-50"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095810_ecea3dd2-fc5e-4e41-8696-4219290b6589.mp4"
      />

      {/* Radial and gradient overlays */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Subtitle */}
        <motion.p
          className="text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2 }}
        >
          Performance Metrics
        </motion.p>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center md:text-left">
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.215, 0.61, 0.355, 1.0],
              }}
            >
              <div className="text-white text-[clamp(48px,10vw,96px)] font-light tracking-[-0.04em] leading-none">
                {item.value}
              </div>
              <div className="text-white/40 text-[13px] sm:text-[15px] mt-4 tracking-wide font-normal">
                {item.label}
              </div>
              <div className="text-white/25 text-[11px] sm:text-[12px] mt-1 tracking-wider uppercase font-mono">
                {item.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
