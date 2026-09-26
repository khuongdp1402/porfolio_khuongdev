import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

interface Project {
  num: string;
  category: string;
  name: string;
  liveUrl?: string;
  col1: [string, string];
  col2: string;
}

const PROJECTS: Project[] = [
  {
    num: '01',
    category: 'Client & Personal — Project Manager & Full Stack Developer',
    name: 'OKDIMALL — Travel & Booking Platform',
    liveUrl: 'https://okdimall.com',
    col1: ['images/okdimall_admin_dashboard.png', 'images/okdimall_admin_permissions.png'],
    col2: 'images/okdimall_admin_user_khuongdp.png',
  },
  {
    num: '02',
    category: 'Personal Project — WebGL Configurator',
    name: 'Kinetic — 3D Rod Builder',
    liveUrl: 'https://kinetic.phukhuong.io.vn',
    col1: ['images/kinetic_preview.png', 'images/kinetic_preview.png'],
    col2: 'images/kinetic_preview.png',
  },
  {
    num: '03',
    category: 'Enterprise Client — Full Stack Developer',
    name: 'Enterprise ERP — Singapore / Cambodia / Japan',
    col1: ['images/prj_savills.svg', 'images/prj_mih.jpg'],
    col2: 'images/prj_tealife.png',
  },
  {
    num: '04',
    category: 'Full-Stack Web Platform — Developer',
    name: 'Winglove — High-Performance Web Ecosystem',
    liveUrl: 'https://winglove.phukhuong.io.vn',
    col1: ['images/hero_cyber_male.jpg', 'images/khuongdp.jpg'],
    col2: 'images/hero_cyber_male.jpg',
  },
  {
    num: '05',
    category: 'Interactive Event Platform — React & Motion',
    name: 'Thanh Tùng & Hương Giang — Online Wedding Platform',
    liveUrl: 'https://thanhtung-huonggiang-wedding.vercel.app/',
    col1: ['images/wedding_preview.png', 'images/wedding_preview.png'],
    col2: 'images/wedding_preview.png',
  },
  {
    num: '06',
    category: 'E-Commerce Storefront — Luxury Fashion Template',
    name: 'Gris-Cat — Luxury Women Fashion Store',
    liveUrl: 'https://gris-cat.vercel.app/',
    col1: ['images/gris_cat_preview.png', 'images/gris_cat_preview.png'],
    col2: 'images/gris_cat_preview.png',
  },
  {
    num: '07',
    category: 'EdTech App — English Vocabulary for Grades 1–10',
    name: 'Học Vui — 610+ Vocabulary Audio & Interactive Quizzes',
    liveUrl: 'https://github.com/khuongdp1402/homework-app.git',
    col1: ['images/hocvui_preview.png', 'images/hocvui_preview.png'],
    col2: 'images/hocvui_preview.png',
  },
  {
    num: '08',
    category: 'AI Automation — n8n, Claude Code & MCP Protocol',
    name: 'Vendor Quotation AI System (Hong Kong)',
    col1: ['images/hero_cyber_male.jpg', 'images/code.svg'],
    col2: 'images/hero_cyber_male.jpg',
  },
  {
    num: '09',
    category: 'Automotive & Healthcare Solutions',
    name: 'Kim Long Motor & Furina Pet Clinic',
    liveUrl: 'https://github.com/khuongdp1402/kimlong-motor.git',
    col1: ['images/kimlong_preview.png', 'images/kimlong_preview.png'],
    col2: 'images/kimlong_preview.png',
  },
];

const ProjectCard: React.FC<{
  project: Project;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
}> = ({ project, index, total, progress, range }) => {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32 h-[85vh]" style={{ top: `${96 + index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-ink p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
      >
        {/* Top row */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="text-white font-black"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.num}
            </span>
            <div>
              <p className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest mb-1">
                {project.category}
              </p>
              <h3 className="text-white font-medium uppercase text-lg sm:text-2xl md:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>
          {project.liveUrl && <LiveProjectButton href={project.liveUrl} />}
        </div>

        {/* Bottom row: image grid */}
        <div className="flex-1 flex gap-3 sm:gap-4 min-h-0">
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4">
            <img
              src={project.col1[0]}
              alt={`${project.name} preview 1`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)', objectPosition: 'top' }}
            />
            <img
              src={project.col1[1]}
              alt={`${project.name} preview 2`}
              className="w-full flex-1 object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ minHeight: 'clamp(160px, 22vw, 340px)', objectPosition: 'bottom' }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.col2}
              alt={`${project.name} full preview`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative bg-ink rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 pb-20"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
            range={[i / PROJECTS.length, 1]}
          />
        ))}
      </div>
    </section>
  );
};
