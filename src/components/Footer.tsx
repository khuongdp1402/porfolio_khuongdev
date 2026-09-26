import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { ZaloIcon, PHONE_DISPLAY, PHONE_TEL, ZALO_URL } from './Zalo';
import { usePrefs } from '../context/Preferences';
import { UI } from '../i18n/content';

const CARD =
  'group flex h-full flex-col gap-3 rounded-3xl border border-paperfg/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-paperfg/60';

export const Footer: React.FC = () => {
  const { tr } = usePrefs();

  return (
    <footer
      id="contact"
      className="relative z-20 bg-paper text-paperfg rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-12 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 pb-24 sm:pb-8"
    >
      <div className="mx-auto max-w-page">
        <FadeIn y={40}>
          <h2 className="t-display">{tr(UI.footer.heading)}</h2>
          <p className="t-lead mt-5 max-w-xl opacity-70">{tr(UI.footer.text)}</p>
        </FadeIn>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <FadeIn y={20}>
            <a href="mailto:khuongdp1402@gmail.com" className={CARD}>
              <Mail className="h-6 w-6 opacity-80 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              <span className="t-label opacity-60">{tr(UI.footer.email)}</span>
              <span className="t-h4 break-words">khuongdp1402@gmail.com</span>
            </a>
          </FadeIn>

          <FadeIn y={20} delay={0.1}>
            <div className={`${CARD} hover:translate-y-0`}>
              <div className="flex items-center gap-2">
                <Phone className="h-6 w-6 opacity-80" strokeWidth={1.5} />
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0068FF] text-white">
                  <ZaloIcon className="h-4 w-4" />
                </span>
              </div>
              <span className="t-label opacity-60">{tr(UI.footer.phone)}</span>
              <a href={PHONE_TEL} className="t-h4 hover:underline">
                {PHONE_DISPLAY}
              </a>
              <div className="mt-1 flex flex-wrap gap-2">
                <a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0068FF] px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.04]"
                >
                  {tr(UI.footer.zalo)}
                </a>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2 rounded-full border border-paperfg/30 px-4 py-2 text-sm font-semibold transition-colors hover:border-paperfg"
                >
                  <Phone className="h-4 w-4" /> {tr(UI.footer.call)}
                </a>
              </div>
              <span className="text-xs opacity-60">{tr(UI.footer.zaloHint)}</span>
            </div>
          </FadeIn>

          <FadeIn y={20} delay={0.2}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=40%2F40+Le+Thi+Hong+Go+Vap+Ho+Chi+Minh+City"
              target="_blank"
              rel="noreferrer"
              className={CARD}
            >
              <MapPin className="h-6 w-6 opacity-80 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              <span className="t-label opacity-60">{tr(UI.footer.address)}</span>
              <span className="t-h4 break-words">{tr(UI.footer.addressValue)}</span>
            </a>
          </FadeIn>
        </div>

        <div className="mt-16 pt-6 border-t border-paperfg/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm opacity-70">
          <p>
            © {new Date().getFullYear()} Đỗ Phú Khương. {tr(UI.footer.rights)}
          </p>
        </div>
      </div>
    </footer>
  );
};
