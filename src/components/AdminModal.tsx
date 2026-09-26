import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, UserCheck, Lock, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const screenshots = [
    {
      title: 'User Management (khuongdp1402@gmail.com)',
      subtitle: 'Active Admin Account & Staff Roles Configuration',
      src: 'images/okdimall_admin_user_khuongdp.png',
      desc: 'Internal administration panel demonstrating master administrative privileges, full user database access, and user lifecycle operations.',
    },
    {
      title: 'Admin Dashboard & Users Overview',
      subtitle: 'OKdimall Back-Office Core Management',
      src: 'images/okdimall_admin_dashboard.png',
      desc: 'High-density enterprise table featuring advanced filters, dynamic status indicators, multi-tenant permissions, and user auditing.',
    },
    {
      title: 'Granular Permissions & Reward Points',
      subtitle: 'Security & Loyalty Engine Management',
      src: 'images/okdimall_admin_permissions.png',
      desc: 'RBAC (Role-Based Access Control) matrix, token authority, and booking reward point adjustment interface for partners and admins.',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative z-10 w-full max-w-5xl bg-[#0a0a0f] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-medium text-base">
                      OKDIMALL Admin ERP System (Private Subsystem)
                    </h3>
                    <span className="text-[10px] tracking-wider uppercase bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-full font-mono">
                      Confidential
                    </span>
                  </div>
                  <p className="text-white/40 text-xs font-mono">
                    Authenticated account: khuongdp1402@gmail.com // Full RBAC Access
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-white/10 px-6 bg-black/40 overflow-x-auto gap-4">
              {screenshots.map((s, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-3 text-xs font-mono tracking-wide transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                    activeTab === index
                      ? 'border-white text-white font-bold'
                      : 'border-transparent text-white/50 hover:text-white/80'
                  }`}
                >
                  [{index + 1}] {s.title.split('(')[0]}
                </button>
              ))}
            </div>

            {/* Content Preview */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center bg-black/60">
              <div className="w-full relative group rounded-xl overflow-hidden border border-white/15 bg-black">
                <img
                  src={screenshots[activeTab].src}
                  alt={screenshots[activeTab].title}
                  className="w-full h-auto max-h-[55vh] object-contain mx-auto"
                />

                {/* Left/Right arrow overlay */}
                {activeTab > 0 && (
                  <button
                    onClick={() => setActiveTab((prev) => prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}
                {activeTab < screenshots.length - 1 && (
                  <button
                    onClick={() => setActiveTab((prev) => prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Information bar below screenshot */}
              <div className="w-full mt-4 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-white text-sm font-semibold">
                    {screenshots[activeTab].title}
                  </h4>
                  <p className="text-white/60 text-xs mt-1">
                    {screenshots[activeTab].desc}
                  </p>
                </div>
                <div className="flex items-center gap-3 self-end sm:self-center">
                  <a
                    href="https://okdimall.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono tracking-wider transition-colors"
                  >
                    <span>Public Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
