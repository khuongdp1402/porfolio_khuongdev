import React from 'react';
import { motion } from 'framer-motion';

interface SquashHamburgerProps {
  isOpen: boolean;
  isMobile?: boolean;
  className?: string;
}

export const SquashHamburger: React.FC<SquashHamburgerProps> = ({
  isOpen,
  isMobile = false,
  className = '',
}) => {
  const width = isMobile ? 15 : 18;
  const height = isMobile ? 10 : 12;
  const barHeight = isMobile ? 1.2 : 1.5;
  const centerY = (height - barHeight) / 2;

  const spring = {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  };

  return (
    <div
      className={`relative cursor-pointer select-none flex items-center justify-center ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Top Bar */}
      <motion.span
        className="absolute left-0 w-full bg-white rounded-full origin-center"
        style={{ height: `${barHeight}px` }}
        animate={
          isOpen
            ? { top: centerY, rotate: 45 }
            : { top: 0, rotate: 0 }
        }
        transition={spring}
      />

      {/* Middle Bar */}
      <motion.span
        className="absolute left-0 w-full bg-white rounded-full origin-center"
        style={{ height: `${barHeight}px`, top: centerY }}
        animate={
          isOpen
            ? { opacity: 0, scaleX: 0 }
            : { opacity: 1, scaleX: 1 }
        }
        transition={spring}
      />

      {/* Bottom Bar */}
      <motion.span
        className="absolute left-0 w-full bg-white rounded-full origin-center"
        style={{ height: `${barHeight}px` }}
        animate={
          isOpen
            ? { top: centerY, rotate: -45 }
            : { bottom: 0, top: 'auto', rotate: 0 }
        }
        transition={spring}
      />
    </div>
  );
};
