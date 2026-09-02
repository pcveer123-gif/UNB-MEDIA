import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenInquiry: (creatorId?: string) => void;
  shortlistedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, shortlistedCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About', href: '#about' },
    { name: 'Creators', href: '#creators' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#080808]/95 backdrop-blur-md border-b border-white/10 w-full transition-all">
      <div className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-[1280px] mx-auto">
        <a 
          href="#home" 
          className="flex items-center gap-3 hover:opacity-90 transition-opacity group"
        >
          <Logo variant="horizontal" inverted={true} />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[11px] uppercase tracking-[0.35em] font-bold transition-all duration-300 hover:text-white ${
                link.active
                  ? 'text-white border-b-2 border-[#ff2e2e] pb-1 shadow-[0_2px_0_#ff2e2e]'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Shortlist Pill */}
        <div className="hidden md:flex items-center gap-4">
          {shortlistedCount > 0 && (
            <button
              onClick={() => onOpenInquiry()}
              className="flex items-center gap-2 px-3.5 py-2 text-[10px] font-mono font-bold uppercase tracking-widest bg-[#141414] border border-[#ff2e2e]/60 text-white hover:border-[#ff2e2e] hover:bg-[#ff2e2e]/10 transition-all cursor-pointer shadow-[0_0_12px_rgba(255,46,46,0.2)]"
              title="View shortlisted creators"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff2e2e] shadow-[0_0_8px_#ff2e2e] animate-pulse"></span>
              <span>{shortlistedCount} ROSTERED</span>
            </button>
          )}

          <button
            onClick={() => onOpenInquiry()}
            className="text-[10px] uppercase tracking-[0.3em] font-black border-2 border-white px-5 py-2.5 text-white hover:bg-[#ff2e2e] hover:border-[#ff2e2e] hover:text-white transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(255,46,46,0.15)]"
          >
            Access System
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          {shortlistedCount > 0 && (
            <button
              onClick={() => onOpenInquiry()}
              className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase bg-[#141414] border border-[#ff2e2e] text-[#ff2e2e]"
            >
              {shortlistedCount}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#ff2e2e] border border-white/20 hover:border-[#ff2e2e] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/15 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-black uppercase tracking-[0.3em] text-white/70 hover:text-[#ff2e2e] py-2 border-b border-white/10 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-white/40" />
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full text-center text-xs uppercase tracking-[0.3em] font-black py-3.5 bg-[#ff2e2e] text-white hover:bg-white hover:text-black transition-colors shadow-[0_0_20px_rgba(255,46,46,0.3)]"
            >
              Access System // Work With Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

