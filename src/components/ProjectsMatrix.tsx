import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, ShieldCheck, Sparkles, Layers, Box, Cpu } from 'lucide-react';
import { AdminModal } from './AdminModal';

interface ProjectItem {
  id: string;
  title: string;
  category: 'web-3d' | 'erp' | 'ai';
  tag: string;
  desc: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  isAdminPrivate?: boolean;
  tech: string[];
}

export const ProjectsMatrix: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web-3d' | 'erp' | 'ai'>('all');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const projects: ProjectItem[] = [
    {
      id: 'okdimall',
      title: 'OKDIMALL - Travel & Hospitality Ecosystem',
      category: 'web-3d',
      tag: 'FLAGSHIP // ERP & CLIENT',
      desc: 'Complete travel booking platform covering hotels, tours, flight ticketing, and partner promotions. Features an enterprise React back office.',
      image: 'images/okdimall_admin_dashboard.png',
      liveUrl: 'https://okdimall.com',
      isAdminPrivate: true,
      tech: ['.NET 9', 'ReactJS Admin', 'Redis', 'Meilisearch', 'Hangfire', 'PostgreSQL'],
    },
    {
      id: 'kinetic',
      title: 'Kinetic 3D Rod Builder & Custom Engineering',
      category: 'web-3d',
      tag: 'WEBGL // 3D CONFIGURATOR',
      desc: 'Interactive 3D configurator for custom fishing rods & engineering components. Real-time rendering, physics-based materials, and custom part assembly.',
      image: 'images/kinetic_preview.png',
      liveUrl: 'https://kinetic.phukhuong.io.vn',
      tech: ['WebGL', 'Three.js', 'React', 'C# Backend', 'CAD Assembly'],
    },
    {
      id: 'ai-quotation',
      title: 'Vendor Quotation AI System (Hong Kong)',
      category: 'ai',
      tag: 'AI AUTOMATION // MCP',
      desc: 'Autonomous AI workflow automating the daily ingestion of vendor quotation emails. Extracts, normalizes, and compares prices against internal inventory.',
      image: 'images/hero_cyber_male.jpg',
      tech: ['n8n', 'Claude Code', 'MCP Protocol', 'Ollama LLM', 'Automated Extraction'],
    },
    {
      id: 'winglove',
      title: 'Winglove Platform',
      category: 'web-3d',
      tag: 'WEB PLATFORM // FULLSTACK',
      desc: 'High-performance interactive web experience with modern micro-animations and seamless user workflows.',
      liveUrl: 'https://winglove.phukhuong.io.vn',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    },
    {
      id: 'wedding',
      title: 'Thanh Tùng & Hương Giang - Online Wedding Platform',
      category: 'web-3d',
      tag: 'INTERACTIVE // EVENT',
      desc: 'Luxury digital wedding invitation with real-time RSVP management, interactive timeline, music audio player, and custom guest greeting messages.',
      image: 'images/wedding_preview.png',
      liveUrl: 'https://thanhtung-huonggiang-wedding.vercel.app/',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Vercel Edge'],
    },
    {
      id: 'gris-cat',
      title: 'Gris-Cat | Luxury Women Fashion',
      category: 'web-3d',
      tag: 'E-COMMERCE // LUXURY UI',
      desc: 'Minimalist high-fashion e-commerce storefront with dynamic cart, editorial collections, responsive lookbook, and fluid micro-interactions.',
      image: 'images/gris_cat_preview.png',
      liveUrl: 'https://gris-cat.vercel.app/',
      tech: ['React', 'Tailwind CSS', 'State Management', 'Vite'],
    },
    {
      id: 'hocvui',
      title: 'Học Vui — Interactive English Learning App',
      category: 'web-3d',
      tag: 'EDTECH // VOCABULARY',
      desc: 'Interactive English learning platform for grades 1-10 with 610+ vocabulary words, audio pronunciation, flashcards, and gamified quiz modules.',
      image: 'images/hocvui_preview.png',
      githubUrl: 'https://github.com/khuongdp1402/homework-app.git',
      tech: ['React', 'Audio Engine', 'EdTech UI', 'Quiz Mechanics'],
    },
    {
      id: 'savills',
      title: 'Savills ERP Singapore & MIH ERP Cambodia',
      category: 'erp',
      tag: 'ENTERPRISE ERP // REAL ESTATE',
      desc: 'Comprehensive real estate management system for leasing, sales, and multi-party commission tracking across Singapore and Cambodia offices.',
      image: 'images/prj_savills.svg',
      tech: ['ASP.NET Core MVC', 'SQL Server', 'Clean Architecture', 'CQRS', 'Gembox'],
    },
    {
      id: 'tealife',
      title: 'Tealife Warehouse Management ERP (Japan)',
      category: 'erp',
      tag: 'ENTERPRISE ERP // LOGISTICS',
      desc: 'Full-cycle warehouse management covering Inbound, Outbound, bundle inventory tracking, and custom thermal printing template integration.',
      image: 'images/prj_tealife.png',
      tech: ['ASP.NET Core 8', 'Blazor Server', 'MS SQL Server', 'Background Jobs'],
    },
    {
      id: 'socialapp',
      title: 'SocialApp — Multi-Tenant Social Commerce ERP',
      category: 'erp',
      tag: 'MICROSERVICES // KAFKA',
      desc: 'Multi-tenant ERP platform combining social networking with enterprise sales, inventory, and staff management across 14 microservices.',
      tech: ['.NET 8', 'Kafka', 'YARP Gateway', 'PostgreSQL', 'MongoDB', 'MudBlazor'],
    },
    {
      id: 'kimlong',
      title: 'Kim Long Motor — Commercial Vehicle Portal',
      category: 'web-3d',
      tag: 'AUTOMOTIVE // SHOWCASE',
      desc: 'Modern digital portal and dealer inventory platform for commercial automotive lineups, technical specifications, and booking quotes.',
      image: 'images/kimlong_preview.png',
      githubUrl: 'https://github.com/khuongdp1402/kimlong-motor.git',
      tech: ['React', 'Tailwind CSS', 'Vite', 'Automotive Spec Engine'],
    },
    {
      id: 'furina',
      title: 'Furina — Smart Clinic & Wellness Solution for Pets',
      category: 'ai',
      tag: 'HEALTHCARE // PET CLINIC',
      desc: 'Modern veterinary clinical management platform with intelligent scheduling, medical record tracking, and pet owner wellness telemetry.',
      githubUrl: 'https://github.com/khuongdp1402/furina-Smart-Clinic-Wellness-Solution-for-Pets.-.git',
      tech: ['Full-stack Architecture', 'Medical Records', 'Automated Notifications'],
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-black py-28 px-4 sm:px-8 md:px-16 overflow-hidden select-none border-t border-white/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-white/40 text-xs font-mono uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Engineered Deployments // 2020 - 2026</span>
            </div>
            <h2 className="text-white text-[clamp(32px,6vw,56px)] font-light tracking-[-0.03em] leading-tight">
              Featured Systems & <br />
              <span className="text-white/60">Enterprise Architecture</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/5 border border-white/10 overflow-x-auto self-start md:self-auto">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web-3d', label: 'Web & 3D' },
              { id: 'erp', label: 'Enterprise ERP' },
              { id: 'ai', label: 'AI & Automation' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                  filter === f.id
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col overflow-hidden backdrop-blur-sm shadow-xl"
          >
            {/* Project Image Preview */}
            {project.image ? (
              <div className="relative w-full h-48 overflow-hidden bg-black/50 border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-black/70 border border-white/20 text-white/80">
                  {project.tag}
                </span>
              </div>
            ) : (
              <div className="relative w-full h-32 flex items-center justify-between p-6 bg-gradient-to-br from-white/5 to-transparent border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/80">
                  {project.category === 'erp' ? (
                    <Layers className="w-5 h-5" />
                  ) : project.category === 'ai' ? (
                    <Cpu className="w-5 h-5" />
                  ) : (
                    <Box className="w-5 h-5" />
                  )}
                </div>
                <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-black/60 border border-white/20 text-white/80">
                  {project.tag}
                </span>
              </div>
            )}

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-white text-lg font-medium tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-xs sm:text-[13px] leading-relaxed mb-4">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/70 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-white hover:text-cyan-400 font-mono transition-colors"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white font-mono transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>

                  {/* Private Admin Screenshots Trigger */}
                  {project.isAdminPrivate && (
                    <button
                      onClick={() => setIsAdminModalOpen(true)}
                      className="flex items-center gap-1.5 text-xs bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-3 py-1.5 rounded-lg font-mono transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Admin View</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Admin Screenshots Modal */}
      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />
    </section>
  );
};
