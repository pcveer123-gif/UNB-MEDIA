import React from 'react';
import { CLIENT_LOGOS } from '../data/mockData';

export const About: React.FC = () => {
  const pillars = [
    {
      step: '01',
      title: 'Editorial Rigor',
      description: 'Treating creator campaigns with the creative discernment and visual fidelity of high-end print publishing.',
    },
    {
      step: '02',
      title: 'Vetted Resonance',
      description: 'Targeted matchmaking based on real cultural affinity, verifiable audience trust, and verified engagement.',
    },
    {
      step: '03',
      title: 'Turnkey Governance',
      description: 'Comprehensive management from contract negotiation, FTC/ad-compliance, and creative direction to performance auditing.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-16 max-w-[1280px] mx-auto border-t border-white/10 relative overflow-hidden">
      {/* Background Watermark Numeral */}
      <div className="absolute top-1/3 left-[-30px] text-[260px] md:text-[380px] font-black text-white/[0.02] select-none pointer-events-none leading-none z-0">
        02
      </div>

      {/* Brand Partner Logo Strip */}
      <div className="mb-20 pb-12 border-b border-white/10 relative z-10">
        <p className="text-[10px] uppercase tracking-[0.4em] font-mono text-white/40 font-bold text-center mb-8">
          Trusted By Industry Leaders & Global Luxury Houses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-80">
          {CLIENT_LOGOS.map((brand) => (
            <span 
              key={brand} 
              className="text-lg md:text-2xl font-black tracking-[0.2em] uppercase text-white/50 hover:text-[#ff2e2e] transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Main About Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
        {/* Left Column (Sticky Title) */}
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.5em] text-[#ff2e2e] font-black block">
              Manifesto // Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.04em] text-white leading-[0.95]">
              Where Brands<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>
                Meet Influence
              </span>
            </h2>
            <div className="h-[2px] bg-[#ff2e2e] w-12 mt-4"></div>
            <p className="text-sm font-mono text-white/50 pt-2 hidden md:block uppercase tracking-wider">
              UNB Media Ind operates as an editorial talent bureau and strategic agency, bridging cultural authority with measurable brand equity.
            </p>
          </div>
        </div>

        {/* Right Column (Editorial Copy + Flatlay Photo + Pillars) */}
        <div className="md:col-span-6 md:col-start-7 space-y-8">
          <p className="text-lg sm:text-xl text-white font-light italic leading-relaxed">
            At UNB Media Ind, we understand that influence is more than just metrics; it's about resonance and authenticity. We curate high-impact partnerships between elite creators and forward-thinking brands.
          </p>
          
          <p className="text-base text-white/70 leading-relaxed">
            Our approach is deeply rooted in editorial precision. We manage end-to-end influencer marketing campaigns, ensuring every piece of content aligns seamlessly with your brand's narrative while leveraging the creator's unique voice to maximize engagement and ROI.
          </p>

          {/* Desk Flat-lay Photo */}
          <div className="aspect-video bg-[#121212] overflow-hidden border-2 border-white/20 shadow-2xl relative group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh8FgQHkPSoVolcjM3UJrKVpBnsAcNL8GK2KQgCwp9Gd4Ao-6XLW4OASV3Jz0mzxpJ6NG81zrp9dHMYymbJQMT2Tvrc3TbTO16VrqH5cnB-2yVfRUhtEljMqbb09Unjskd3OTGB8ef_-Uusizrom3Ky6oa-yUbI-0IQf8El_zXQib8Tjmh5KYQrAUBRjmnJXTYfVLdz0enElmEl-OlPnC_FBOzlhDu4A2EdW2LYClC-8Y9zVh9S6_D"
              alt="Sophisticated flat-lay desk composition with smartphone showing social media feed and minimalist stationery"
              className="w-full h-full object-cover filter contrast-105 group-hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 px-2 py-1 bg-black/90 border border-white/20 text-[9px] font-mono uppercase tracking-widest text-[#ff2e2e]">
              SYS.STUDIO_DESK
            </div>
          </div>

          {/* Value Pillars */}
          <div className="pt-4 space-y-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-4 p-5 bg-[#121212] border border-white/10 hover:border-[#ff2e2e]/60 transition-colors">
                <span className="font-mono text-xs font-black text-[#ff2e2e] pt-0.5">
                  {pillar.step}
                </span>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-white">{pillar.title}</h3>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

