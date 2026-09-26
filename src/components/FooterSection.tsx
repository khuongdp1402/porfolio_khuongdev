import React from 'react';
import { SynapseXLogo } from './SynapseXLogo';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-black overflow-hidden border-t border-white/10"
    >
      <div className="flex flex-col md:flex-row min-h-[400px]">
        {/* Left Column: Video #5 */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter brightness-70"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_080203_fd7f4f85-3a86-4837-8192-85e7bfe68e75.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-black pointer-events-none" />
        </div>

        {/* Right Column: Information, Contact & Copyright */}
        <div className="w-full md:w-1/2 flex flex-col justify-between p-10 sm:p-16 select-none bg-black">
          <div>
            {/* Logo and Brand */}
            <div className="flex items-center gap-3 mb-8">
              <SynapseXLogo className="w-[18px] h-[18px] text-white/70" />
              <span className="text-[15px] font-medium text-white/70 tracking-tight">
                SynapseX <span className="text-white/40 text-xs font-normal">| Khuong Dev</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-white/40 text-[14px] sm:text-[15px] leading-relaxed max-w-sm font-sans mb-8">
              The next evolution of human-machine interaction. Built for those
              who refuse to be limited by biology alone.
            </p>

            {/* Contact details */}
            <div className="space-y-3 text-xs sm:text-sm font-mono text-white/60">
              <a
                href="mailto:khuongdp1402@gmail.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>khuongdp1402@gmail.com</span>
              </a>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>0372 803 085</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Go Vap District, Ho Chi Minh City</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/khuongdp1402"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-white/30" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-white/30" />
              </a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="text-white/25 text-[12px] mt-12 font-mono">
            &copy; 2026 SynapseX Labs // Đỗ Phú Khương. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
