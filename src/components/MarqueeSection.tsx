import React, { useEffect, useRef } from 'react';

const ROW_1 = [
  'images/okdimall_admin_dashboard.png',
  'images/kinetic_preview.png',
  'images/wedding_preview.png',
  'images/gris_cat_preview.png',
  'images/hocvui_preview.png',
  'images/kimlong_preview.png',
  'images/okdimall_admin_permissions.png',
];

const ROW_2 = [
  'images/prj_savills.svg',
  'images/prj_mih.jpg',
  'images/prj_tealife.png',
  'images/prj_pohang.png',
  'images/okdimall_admin_user_khuongdp.png',
  'images/prj_okdimall.svg',
];

function tripleRow(row: string[]) {
  return [...row, ...row, ...row];
}

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-ink pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div ref={row1Ref} className="flex gap-3 mb-3" style={{ willChange: 'transform' }}>
        {tripleRow(ROW_1).map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </div>
      <div ref={row2Ref} className="flex gap-3" style={{ willChange: 'transform' }}>
        {tripleRow(ROW_2).map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </div>
    </section>
  );
};
