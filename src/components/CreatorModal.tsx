import React from 'react';
import { Creator } from '../types';
import { X, Sparkles, Check, MapPin, TrendingUp, Users, Eye } from 'lucide-react';

interface CreatorModalProps {
  creator: Creator | null;
  onClose: () => void;
  onBookCreator: (creator: Creator) => void;
  isShortlisted: boolean;
  onToggleShortlist: (creatorId: string) => void;
}

export const CreatorModal: React.FC<CreatorModalProps> = ({
  creator,
  onClose,
  onBookCreator,
  isShortlisted,
  onToggleShortlist,
}) => {
  if (!creator) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#0a0a0a] w-full max-w-4xl max-h-[90vh] overflow-y-auto border-2 border-white/20 shadow-2xl relative animate-in zoom-in-95 duration-200 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2.5 bg-black/90 hover:bg-[#ff2e2e] hover:text-white text-white border border-white/20 transition-colors shadow-xs cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Modal Header & Hero */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10">
          {/* Creator Portrait */}
          <div className="md:col-span-5 bg-[#121212] relative min-h-[300px] md:min-h-[420px]">
            <img
              src={creator.image}
              alt={creator.name}
              className="w-full h-full object-cover filter grayscale contrast-110"
              referrerPolicy="no-referrer"
            />
            {creator.hasLiveCampaign && (
              <div className="absolute top-4 left-4 bg-black/95 backdrop-blur-sm px-3 py-1.5 border border-[#ff2e2e] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ff2e2e] shadow-[0_0_8px_#ff2e2e] animate-pulse"></div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ff2e2e]">
                  LIVE CAMPAIGN
                </span>
              </div>
            )}
          </div>

          {/* Core Info & Actions */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 bg-[#181818] border border-[#ff2e2e]/40 text-[#ff2e2e]">
                  {creator.category}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-white/50">
                  <MapPin className="w-3.5 h-3.5 text-[#ff2e2e]" />
                  {creator.location}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-1">
                {creator.name}
              </h2>
              <p className="text-xs font-mono text-white/40 mb-4">{creator.handle}</p>

              <p className="text-sm text-white/70 leading-relaxed font-light italic mb-6">
                {creator.bio}
              </p>

              {/* High-Level Metrics */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-[#121212] border border-white/10 mb-6">
                <div>
                  <div className="flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider text-white/40 mb-0.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>Reach</span>
                  </div>
                  <p className="text-lg font-black text-white">{creator.followers}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider text-white/40 mb-0.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Avg Views</span>
                  </div>
                  <p className="text-lg font-black text-white">{creator.avgViews}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider text-white/40 mb-0.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#ff2e2e]" />
                    <span>Eng. Rate</span>
                  </div>
                  <p className="text-lg font-black text-[#ff2e2e]">{creator.engagementRate}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => onBookCreator(creator)}
                className="flex-1 bg-[#ff2e2e] text-white text-xs uppercase font-black tracking-[0.2em] py-3.5 px-6 hover:bg-white hover:text-black transition-all text-center cursor-pointer shadow-[0_0_20px_rgba(255,46,46,0.3)]"
              >
                Inquire For Booking
              </button>

              <button
                onClick={() => onToggleShortlist(creator.id)}
                className={`px-5 py-3.5 border-2 text-xs uppercase font-black tracking-[0.2em] transition-all flex items-center gap-2 cursor-pointer ${
                  isShortlisted
                    ? 'bg-[#181818] border-[#ff2e2e] text-[#ff2e2e]'
                    : 'bg-transparent border-white/30 text-white hover:border-[#ff2e2e] hover:text-[#ff2e2e] hover:bg-white/10'
                }`}
              >
                {isShortlisted ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3] text-[#ff2e2e]" />
                    <span>Rostered</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#ff2e2e]" />
                    <span>Add to Brief</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Sections (Platforms, Demographics, Past Brands & Works) */}
        <div className="p-6 sm:p-8 space-y-8 bg-[#0a0a0a]">
          {/* Active Campaign Detail Banner if active */}
          {creator.hasLiveCampaign && creator.liveCampaignDetails && (
            <div className="p-4 bg-[#121212] border-l-4 border-l-[#ff2e2e] border border-white/10">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ff2e2e] block mb-1">
                Current Editorial Focus // Live
              </span>
              <p className="text-sm font-medium text-white">{creator.liveCampaignDetails}</p>
            </div>
          )}

          {/* Social Platforms & Demographics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Platforms */}
            <div className="p-5 bg-[#121212] border border-white/10">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white mb-4">
                Verified Social Channels
              </h4>
              <div className="space-y-3">
                {creator.platforms.map((plat) => (
                  <div key={plat.platform} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div>
                      <p className="text-sm font-bold text-white">{plat.platform}</p>
                      <p className="text-xs font-mono text-white/40">{plat.handle}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#ff2e2e] bg-black px-2.5 py-1 border border-white/10">
                      {plat.followers}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audience Demographics */}
            <div className="p-5 bg-[#121212] border border-white/10">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white mb-4">
                Audience Demographics
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-white/5 font-mono text-xs">
                  <span className="text-white/40 uppercase">Primary Age Bracket</span>
                  <span className="font-bold text-white">{creator.demographics.topAge}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5 font-mono text-xs">
                  <span className="text-white/40 uppercase">Gender Breakdown</span>
                  <span className="font-bold text-white">{creator.demographics.topGender}</span>
                </div>
                <div className="flex justify-between py-2 font-mono text-xs">
                  <span className="text-white/40 uppercase">Top Territories</span>
                  <span className="font-bold text-white">{creator.demographics.topCountry}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Past Brand Partnerships */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white mb-3">
              Brand Collaboration History
            </h4>
            <div className="flex flex-wrap gap-2">
              {creator.pastBrands.map((brand) => (
                <span
                  key={brand}
                  className="px-3.5 py-1.5 bg-[#121212] text-white font-mono text-xs font-bold uppercase border border-white/15 hover:border-[#ff2e2e] transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Works */}
          {creator.featuredWorks && creator.featuredWorks.length > 0 && (
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white mb-4">
                Selected Editorial Campaigns
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {creator.featuredWorks.map((work) => (
                  <div key={work.title} className="group border border-white/15 overflow-hidden bg-[#121212]">
                    <div className="aspect-video relative overflow-hidden bg-[#181818]">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover filter contrast-105 group-hover:scale-103 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/90 text-[#ff2e2e] font-mono text-[9px] font-bold uppercase border border-white/20">
                        {work.metric}
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-[9px] font-mono uppercase tracking-widest text-[#ff2e2e] mb-0.5">{work.type}</p>
                      <p className="text-sm font-bold uppercase tracking-tight text-white">{work.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

