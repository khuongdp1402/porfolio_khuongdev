import React from 'react';
import { motion } from 'framer-motion';

export const ArchitectureSection: React.FC = () => {
  const layers = [
    {
      layer: 'Layer 1',
      title: 'Capture',
      tech: 'Core Data & Signals (.NET 9 / SQL / Kafka)',
    },
    {
      layer: 'Layer 2',
      title: 'Process',
      tech: 'AI Orchestration & Domain Logic (MCP / CQRS)',
    },
    {
      layer: 'Layer 3',
      title: 'Interface',
      tech: 'Distributed Presentation (React / Blazor / Three.js)',
    },
  ];

  return (
    <section
      id="architecture"
      className="relative min-h-screen w-full bg-black flex items-center justify-center px-6 py-32 select-none border-t border-white/10"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.0, ease: [0.215, 0.61, 0.355, 1.0] }}
        >
          <p className="text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-8">
            Architecture
          </p>

          <h2 className="text-white font-light text-[clamp(28px,6vw,56px)] leading-[1.15] tracking-[-0.02em] mb-10">
            Three layers. Zero friction.
          </h2>

          <p className="text-white/45 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto font-sans">
            Sensor layer captures raw bioelectric signals. Processing layer
            isolates intent. Interface layer delivers structured output to any
            connected system.
          </p>
        </motion.div>

        {/* 3 Layer Cards */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {layers.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.3)' }}
              className="w-full max-w-md h-[72px] border border-white/10 bg-white/[0.02] rounded-lg flex items-center justify-between px-6 transition-all"
            >
              <div className="flex flex-col text-left">
                <span className="text-white/30 text-[12px] tracking-[0.15em] uppercase font-mono">
                  {item.layer}
                </span>
                <span className="text-white/40 text-[10px] tracking-wide font-mono hidden sm:inline-block">
                  {item.tech}
                </span>
              </div>
              <span className="text-white text-[16px] sm:text-[18px] font-light">
                {item.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
