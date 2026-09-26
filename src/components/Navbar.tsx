import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SynapseXLogo } from './SynapseXLogo';
import { SquashHamburger } from './SquashHamburger';
import { ScrambleText } from './ScrambleText';

interface NavbarProps {
  entranceComplete: boolean;
  onNavigate: (sectionId: string) => void;
  onDownloadCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  entranceComplete,
  onNavigate,
  onDownloadCV,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'metrics', label: 'Metrics' },
    { id: 'projects', label: 'Projects' },
    { id: 'architecture', label: 'Architecture' },
  ];

  const spring = {
    type: 'spring' as const,
    stiffness: 350,
    damping: 28,
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full h-20 z-50 pointer-events-none px-4 sm:px-6 md:px-8 flex items-center justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: entranceComplete ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* DESKTOP NAV (sm and up) */}
      <div className="hidden sm:flex items-center gap-2 pointer-events-auto">
        {/* Logo Pill */}
        <motion.div
          onClick={() => onNavigate('hero')}
          className={`h-12 px-5 bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-[14px] flex items-center gap-3 cursor-pointer select-none transition-colors border border-white/10 ${
            isOpen ? 'hidden md:flex' : 'flex'
          }`}
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.22)' }}
          whileTap={{ scale: 0.98 }}
        >
          <SynapseXLogo className="w-[18px] h-[18px] text-white" />
          <span className="text-[16px] font-medium tracking-tight text-white">
            SynapseX <span className="text-white/50 text-xs font-normal">| Khuong.Dev</span>
          </span>
        </motion.div>

        {/* Expanding Menu Pill */}
        <motion.div
          className="h-12 rounded-[14px] bg-white/15 backdrop-blur-md flex items-center overflow-hidden border border-white/10"
          animate={{
            width: isOpen ? 380 : 48,
          }}
          transition={spring}
        >
          {/* Hamburger toggle button */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center justify-center cursor-pointer transition-all ${
              isOpen
                ? 'w-9 h-9 rounded-[11px] bg-white/10 hover:bg-white/20 ml-1.5'
                : 'w-12 h-12 rounded-[14px] hover:bg-white/10'
            }`}
          >
            <SquashHamburger isOpen={isOpen} />
          </div>

          {/* Links when open */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex items-center gap-5 px-4 overflow-hidden whitespace-nowrap"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.25 }}
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsOpen(false);
                    }}
                    onMouseEnter={() => setHoveredLink(item.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-[15px] font-normal text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    <ScrambleText
                      text={item.label}
                      isHovered={hoveredLink === item.id}
                    />
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* MOBILE NAV (below sm) */}
      <div className="flex sm:hidden items-center gap-1.5 pointer-events-auto w-full justify-between">
        <div className="flex items-center gap-1.5 flex-1 mr-2">
          {/* Mobile Logo Pill (collapses to 0 width when open) */}
          <motion.div
            onClick={() => onNavigate('hero')}
            className="h-9 px-3 bg-white/15 backdrop-blur-md rounded-[10px] flex items-center gap-2 cursor-pointer select-none overflow-hidden whitespace-nowrap border border-white/10"
            animate={{
              width: isOpen ? 0 : 'auto',
              opacity: isOpen ? 0 : 1,
              paddingLeft: isOpen ? 0 : 12,
              paddingRight: isOpen ? 0 : 12,
            }}
            transition={spring}
          >
            <SynapseXLogo className="w-3.5 h-3.5 text-white flex-shrink-0" />
            <span className="text-[13px] font-medium text-white">SynapseX</span>
          </motion.div>

          {/* Mobile Expanding Menu Pill */}
          <motion.div
            className="h-9 rounded-[10px] bg-white/15 backdrop-blur-md flex items-center overflow-hidden border border-white/10"
            animate={{
              width: isOpen ? '100%' : 36,
            }}
            transition={spring}
          >
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex items-center justify-center cursor-pointer flex-shrink-0"
            >
              <SquashHamburger isOpen={isOpen} isMobile />
            </div>

            {isOpen && (
              <div className="flex items-center gap-3 px-2 overflow-x-auto text-[12px] whitespace-nowrap">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsOpen(false);
                    }}
                    className="text-white/80 hover:text-white"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Mobile Download button */}
        <motion.button
          onClick={onDownloadCV}
          className="h-9 px-3.5 bg-white text-black rounded-full font-medium text-[12px] flex items-center gap-1.5 flex-shrink-0 shadow-lg cursor-pointer"
          whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
          whileTap={{ scale: 0.97 }}
        >
          <i className="bi bi-apple text-[13px]" />
          <span>CV</span>
        </motion.button>
      </div>

      {/* DESKTOP DOWNLOAD BUTTON */}
      <div className="hidden sm:block pointer-events-auto">
        <motion.button
          onClick={onDownloadCV}
          onMouseEnter={() => setIsDownloadHovered(true)}
          onMouseLeave={() => setIsDownloadHovered(false)}
          className="h-12 px-6 bg-white text-black rounded-full font-medium text-[14px] flex items-center gap-2 shadow-xl hover:shadow-2xl cursor-pointer"
          whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
          whileTap={{ scale: 0.97 }}
        >
          <i className="bi bi-apple text-[17px] text-black" />
          <ScrambleText text="Download CV" isHovered={isDownloadHovered} />
        </motion.button>
      </div>
    </motion.header>
  );
};
