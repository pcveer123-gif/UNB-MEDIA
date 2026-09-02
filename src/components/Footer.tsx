import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t-2 border-white/20 w-full mt-20 text-white">
      <div className="px-6 md:px-16 py-16 md:py-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Logo Brand Header */}
          <div className="md:col-span-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <a href="#home" className="inline-block group">
                <Logo variant="horizontal" inverted={true} />
              </a>
              <p className="text-sm text-white/60 mt-3 max-w-md font-light">
                Connecting brands with relevant creators to build authentic, engaging and impactful influencer marketing campaigns.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff2e2e] shadow-[0_0_10px_#ff2e2e] animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-white/70">
                Studio Operations Online
              </span>
            </div>
          </div>
        </div>

        {/* Links and Copyright Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-8 border-t border-white/10">
          <div className="md:col-span-8 flex flex-wrap gap-x-8 gap-y-3">
            <a
              href="#home"
              className="text-[10px] uppercase font-black tracking-[0.25em] text-white/60 hover:text-[#ff2e2e] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[10px] uppercase font-black tracking-[0.25em] text-white/60 hover:text-[#ff2e2e] transition-colors"
            >
              About
            </a>
            <a
              href="#creators"
              className="text-[10px] uppercase font-black tracking-[0.25em] text-white/60 hover:text-[#ff2e2e] transition-colors"
            >
              Creators
            </a>
            <a
              href="#services"
              className="text-[10px] uppercase font-black tracking-[0.25em] text-white/60 hover:text-[#ff2e2e] transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-[10px] uppercase font-black tracking-[0.25em] text-white/60 hover:text-[#ff2e2e] transition-colors"
            >
              Contact
            </a>
            <a
              href="mailto:unbagencyind@gmail.com"
              className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#ff2e2e] hover:text-white transition-colors"
            >
              unbagencyind@gmail.com
            </a>
          </div>

          <div className="md:col-span-4 md:text-right">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              © {new Date().getFullYear()} UNB Media Ind. Connect // Create // Scale
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

