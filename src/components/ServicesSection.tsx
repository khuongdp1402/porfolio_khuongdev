import React from 'react';
import { FadeIn } from './FadeIn';

const SERVICES = [
  {
    num: '01',
    name: 'Backend Development',
    desc: 'Building robust APIs and business logic with ASP.NET Core, Clean Architecture, and CQRS — designed for correctness and long-term maintainability.',
  },
  {
    num: '02',
    name: 'System Architecture',
    desc: 'Designing microservices, event-driven systems, and database schemas that scale with the business, from a single ERP module to a 14-service platform.',
  },
  {
    num: '03',
    name: 'Frontend Development',
    desc: 'Building responsive, fast interfaces with React and Blazor — admin dashboards, booking flows, and product experiences that feel effortless.',
  },
  {
    num: '04',
    name: 'AI Automation',
    desc: 'Automating real business workflows with n8n, MCP, and LLM tooling — from vendor quotation processing to inventory alerts.',
  },
  {
    num: '05',
    name: 'Enterprise ERP',
    desc: 'Delivering full-cycle ERP systems for warehouse, real estate, and booking businesses across Vietnam, Singapore, Cambodia, and Japan.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="text-ink font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1} y={20}>
            <div
              className="flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined, borderBottom: '1px solid rgba(12,12,12,0.15)' }}
            >
              <span
                className="text-ink font-black flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {s.num}
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  className="text-ink font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {s.name}
                </h3>
                <p
                  className="text-ink font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
