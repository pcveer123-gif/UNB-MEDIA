import React from 'react';
import { SERVICES } from '../data/mockData';
import { Megaphone, Handshake, Gem, BarChart3, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenInquiry: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const workflowSteps = [
    {
      step: '01',
      title: 'Talent Match & Cultural Curation',
      desc: 'Data-driven profiling combined with editorial judgment to select creators who authentically embody brand ethos.'
    },
    {
      step: '02',
      title: 'Creative Briefing & Narrative Direction',
      desc: 'Crafting bespoke editorial storylines that respect creator voice while embedding crucial commercial deliverables.'
    },
    {
      step: '03',
      title: 'Contracts, Legal & Global Compliance',
      desc: 'Rigorous FTC disclosures, strict exclusivity rights, whitelisting allowances, and seamless talent payment routing.'
    },
    {
      step: '04',
      title: 'Attribution & Full Media Auditing',
      desc: 'Exhaustive post-campaign analytics analyzing reach, verified impressions, sentiment, and downstream conversions.'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-16 max-w-[1280px] mx-auto border-t border-white/10 relative overflow-hidden">
      {/* Background Watermark Numeral */}
      <div className="absolute top-1/4 left-[-20px] text-[260px] md:text-[380px] font-black text-white/[0.02] select-none pointer-events-none leading-none z-0">
        04
      </div>

      {/* Header Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end relative z-10">
        <div className="lg:col-span-6">
          <span className="text-[11px] uppercase tracking-[0.5em] text-[#ff2e2e] font-black block mb-2">
            Strategic Capabilities // Scope
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.04em] text-white">
            Services
          </h2>
          <div className="h-[2px] bg-[#ff2e2e] w-12 mt-4"></div>
        </div>
        <div className="lg:col-span-6">
          <p className="text-base sm:text-lg text-white/70 font-light italic leading-relaxed">
            Comprehensive management and strategic architecture for elite brand-creator partnerships.
          </p>
        </div>
      </div>

      {/* Main 2 Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 relative z-10">
        {/* Card 1: Influencer Marketing */}
        <div className="border-2 border-white/15 p-8 bg-[#121212] hover:border-[#ff2e2e] transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 bg-black border border-white/20 flex items-center justify-center mb-6 text-[#ff2e2e] group-hover:border-[#ff2e2e]/50">
              <Megaphone className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-[#ff2e2e] transition-colors">
              Influencer Marketing
            </h3>
            <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
              End-to-end execution of high-impact influencer campaigns tailored to brand objectives and high-fashion aesthetics.
            </p>

            <ul className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
              {SERVICES[0].features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-xs font-mono text-white/70">
                  <span className="w-1.5 h-1.5 bg-[#ff2e2e] mt-1.5"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onOpenInquiry}
            className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ff2e2e] hover:text-white transition-colors inline-flex items-center gap-2 pt-2 cursor-pointer"
          >
            <span>Initiate Campaign Brief</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 2: Brand Collaborations */}
        <div className="border-2 border-white/15 p-8 bg-[#121212] hover:border-[#ff2e2e] transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 bg-black border border-white/20 flex items-center justify-center mb-6 text-[#ff2e2e] group-hover:border-[#ff2e2e]/50">
              <Handshake className="w-6 h-6 text-[#ff2e2e]" />
            </div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#ff2e2e] transition-colors">
                Brand Collaborations
              </h3>
              <span className="px-2.5 py-1 text-[9px] font-mono uppercase font-black tracking-widest bg-[#ff2e2e] text-white shadow-[0_0_10px_rgba(255,46,46,0.3)]">
                TIER 1 / ELITE
              </span>
            </div>
            <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
              Facilitating premium partnerships and co-creation opportunities between brands and top-tier cultural talent.
            </p>

            <ul className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
              {SERVICES[1].features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-xs font-mono text-white/70">
                  <span className="w-1.5 h-1.5 bg-[#ff2e2e] mt-1.5"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onOpenInquiry}
            className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ff2e2e] hover:text-white transition-colors inline-flex items-center gap-2 pt-2 cursor-pointer"
          >
            <span>Explore Partnership Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Additional Services Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 relative z-10">
        <div className="border border-white/10 p-6 bg-[#121212] hover:border-[#ff2e2e]/50 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <Gem className="w-5 h-5 text-[#ff2e2e]" />
            <h4 className="text-base font-black uppercase tracking-wider text-white">Talent Management & Representation</h4>
          </div>
          <p className="text-xs text-white/60 font-light leading-relaxed mb-4">
            Exclusive career navigation, sponsorship filtration, licensing protection, and commercial incubation for elite creators.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider bg-black border border-white/10 px-2.5 py-1 text-white">Contracts</span>
            <span className="text-[10px] font-mono uppercase tracking-wider bg-black border border-white/10 px-2.5 py-1 text-white">Brand Strategy</span>
            <span className="text-[10px] font-mono uppercase tracking-wider bg-black border border-[#ff2e2e]/30 px-2.5 py-1 text-[#ff2e2e]">VIP Concierge</span>
          </div>
        </div>

        <div className="border border-white/10 p-6 bg-[#121212] hover:border-[#ff2e2e]/50 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <BarChart3 className="w-5 h-5 text-[#ff2e2e]" />
            <h4 className="text-base font-black uppercase tracking-wider text-white">Editorial Content Production</h4>
          </div>
          <p className="text-xs text-white/60 font-light leading-relaxed mb-4">
            Studio-grade lookbooks, high-definition reels, whitelisted paid ad creative, and full commercial copyright clearance.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider bg-black border border-white/10 px-2.5 py-1 text-white">4K Studio</span>
            <span className="text-[10px] font-mono uppercase tracking-wider bg-black border border-white/10 px-2.5 py-1 text-white">Whitelisting</span>
            <span className="text-[10px] font-mono uppercase tracking-wider bg-black border border-[#ff2e2e]/30 px-2.5 py-1 text-[#ff2e2e]">Multi-Platform</span>
          </div>
        </div>
      </div>

      {/* Agency Workflow Pipeline */}
      <div className="p-8 sm:p-10 bg-[#121212] border-2 border-white/15 relative z-10">
        <div className="max-w-2xl mb-8">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#ff2e2e] block mb-1">
            Execution Protocol // Standards
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            The UNB Editorial Process
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((wf) => (
            <div key={wf.step} className="p-5 bg-black border border-white/10 relative hover:border-[#ff2e2e]/50 transition-colors">
              <span className="font-mono text-xl font-black text-[#ff2e2e] block mb-2">
                {wf.step}
              </span>
              <h4 className="font-black text-xs uppercase tracking-wider text-white mb-2">{wf.title}</h4>
              <p className="text-xs text-white/50 leading-relaxed font-light">{wf.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

