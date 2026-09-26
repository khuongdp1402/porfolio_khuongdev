import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface LightboxImage {
  src: string;
  alt: string;
}

export const Lightbox: React.FC<{
  images: LightboxImage[];
  index: number | null;
  onChange: (index: number | null) => void;
}> = ({ images, index, onChange }) => {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChange(null);
      if (e.key === 'ArrowRight') onChange((index! + 1) % images.length);
      if (e.key === 'ArrowLeft') onChange((index! - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, index, images.length, onChange]);

  const btn =
    'absolute top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-colors';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-10 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onChange(null)}
          data-lenis-prevent
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index].src}
              src={images[index].src}
              alt={images[index].alt}
              className="max-h-[86vh] max-w-full rounded-xl object-contain shadow-2xl"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/80">
            {images[index].alt} · {index + 1}/{images.length}
          </p>
          <button
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => onChange(null)}
          >
            <X className="h-5 w-5" />
          </button>
          {images.length > 1 && (
            <>
              <button
                aria-label="Previous"
                className={`${btn} left-3 sm:left-6`}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange((index - 1 + images.length) % images.length);
                }}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next"
                className={`${btn} right-3 sm:right-6`}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange((index + 1) % images.length);
                }}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
