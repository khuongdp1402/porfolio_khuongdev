import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const SynapseXLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => {
  const pathD = "M 1.5,23 L 1.5,33 C 1.5,38.5 6,43 11.5,43 L 16.5,43 C 22,43 26.5,38.5 26.5,33 Q 28,28 33,26.5 C 38.5,26.5 43,22 43,16.5 L 43,11.5 C 43,6 38.5,1.5 33,1.5 L 23,1.5 Q 12,12 1.5,23 Z";

  const style = size ? { width: `${size}px`, height: `${size}px` } : undefined;

  return (
    <svg
      viewBox="-50 -50 100 100"
      className={className}
      style={style}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d={pathD} />
        <path d={pathD} transform="rotate(90)" />
        <path d={pathD} transform="rotate(180)" />
        <path d={pathD} transform="rotate(270)" />
      </g>
    </svg>
  );
};
