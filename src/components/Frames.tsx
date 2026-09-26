import React from 'react';

export const BrowserFrame: React.FC<{
  src: string;
  alt: string;
  url?: string;
  className?: string;
  eager?: boolean;
}> = ({ src, alt, url, className = '', eager }) => (
  <div
    className={`overflow-hidden rounded-xl sm:rounded-2xl border border-mist/20 bg-surface shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] ${className}`}
  >
    <div className="flex items-center gap-2 px-3 sm:px-4 h-8 sm:h-9 border-b border-mist/15 bg-surface">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      {url && (
        <span className="ml-3 hidden sm:block flex-1 max-w-[60%] truncate rounded-md bg-mist/10 px-3 py-0.5 text-[11px] text-mist">
          {url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </span>
      )}
    </div>
    <div className="aspect-[16/10] overflow-hidden bg-white">
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        draggable={false}
        className="w-full h-full object-cover object-top select-none"
      />
    </div>
  </div>
);

export const PhoneFrame: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className = '',
}) => (
  <div
    className={`relative rounded-[28px] border-[6px] border-[#1b1b1f] bg-[#1b1b1f] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden ${className}`}
  >
    <div className="absolute left-1/2 top-1.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-[#1b1b1f]" />
    <div className="aspect-[390/844] overflow-hidden rounded-[22px] bg-white">
      <img src={src} alt={alt} loading="lazy" draggable={false} className="w-full h-full object-cover object-top select-none" />
    </div>
  </div>
);
