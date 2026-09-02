import React, { useState, useMemo } from 'react';
import { Creator } from '../types';
import { Search, ArrowRight, Check, Plus } from 'lucide-react';

interface CreatorsSectionProps {
  creators: Creator[];
  onSelectCreator: (creator: Creator) => void;
  onToggleShortlist: (creatorId: string) => void;
  shortlistedIds: string[];
}

export const CreatorsSection: React.FC<CreatorsSectionProps> = ({
  creators,
  onSelectCreator,
  onToggleShortlist,
  shortlistedIds,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filterLiveOnly, setFilterLiveOnly] = useState<boolean>(false);

  const categories = ['All', 'Fashion', 'Tech', 'Beauty', 'Design', 'Lifestyle', 'Travel'];

  const filteredCreators = useMemo(() => {
    return creators.filter((creator) => {
      const matchesSearch =
        creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        creator.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        creator.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        creator.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        creator.pastBrands.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || creator.category === selectedCategory;
      const matchesLive = !filterLiveOnly || creator.hasLiveCampaign;

      return matchesSearch && matchesCategory && matchesLive;
    });
  }, [creators, searchQuery, selectedCategory, filterLiveOnly]);

  return (
    <section id="creators" className="py-20 md:py-28 px-6 md:px-16 max-w-[1280px] mx-auto border-t border-white/10 relative">
      {/* Background Watermark Numeral */}
      <div className="absolute top-12 right-[-20px] text-[260px] md:text-[360px] font-black text-white/[0.02] select-none pointer-events-none leading-none z-0">
        03
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 relative z-10">
        <div>
          <span className="text-[11px] uppercase tracking-[0.5em] text-[#ff2e2e] font-black block mb-2">
            Talent Roster // Index
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.04em] text-white mb-3">
            Our Creators
          </h2>
          <p className="text-base text-white/60 max-w-lg font-light">
            A curated roster of high-resonance cultural drivers and digital architects.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH TALENT..."
              className="w-full pl-11 pr-4 py-3 bg-[#121212] border-2 border-white/20 text-xs font-mono tracking-widest text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff2e2e] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono uppercase text-white/40 hover:text-[#ff2e2e]"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Pills & Live Campaign Filter */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-10 pb-6 border-b border-white/10 relative z-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#ff2e2e] text-white shadow-[0_0_15px_rgba(255,46,46,0.35)]'
                  : 'bg-[#121212] text-white/50 hover:text-white border border-white/15 hover:border-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          onClick={() => setFilterLiveOnly(!filterLiveOnly)}
          className={`flex items-center gap-2.5 px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest border transition-all cursor-pointer ${
            filterLiveOnly
              ? 'bg-[#ff2e2e] border-[#ff2e2e] text-white shadow-[0_0_15px_rgba(255,46,46,0.4)]'
              : 'bg-[#121212] border-white/20 text-white/60 hover:text-white hover:border-white'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${filterLiveOnly ? 'bg-white' : 'bg-[#ff2e2e] shadow-[0_0_8px_#ff2e2e]'}`}></span>
          <span>Live Campaigns Only</span>
        </button>
      </div>

      {/* Creator Grid */}
      {filteredCreators.length === 0 ? (
        <div className="py-20 text-center bg-[#121212] border border-white/10 p-8 relative z-10">
          <p className="text-2xl font-black uppercase tracking-tight text-white mb-2">No creators found</p>
          <p className="text-xs font-mono text-white/40 mb-6 uppercase tracking-wider">Try adjusting search parameters or active filters.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setFilterLiveOnly(false);
            }}
            className="px-6 py-3 bg-[#ff2e2e] text-white text-xs uppercase font-black tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 relative z-10">
          {filteredCreators.map((creator) => {
            const isShortlisted = shortlistedIds.includes(creator.id);

            return (
              <div
                key={creator.id}
                className="group border-2 border-white/15 bg-[#121212] hover:border-[#ff2e2e] transition-all duration-300 flex flex-col relative"
              >
                {/* Image Container */}
                <div className="aspect-square bg-[#181818] relative overflow-hidden">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent pointer-events-none opacity-60"></div>

                  {/* Live Campaign Pill */}
                  {creator.hasLiveCampaign && (
                    <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md px-3 py-1.5 border border-[#ff2e2e] flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#ff2e2e] shadow-[0_0_8px_#ff2e2e] animate-pulse"></div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ff2e2e]">
                        LIVE CAMPAIGN
                      </span>
                    </div>
                  )}

                  {/* Shortlist Quick Toggle Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleShortlist(creator.id);
                    }}
                    aria-label={isShortlisted ? `Remove ${creator.name} from campaign brief` : `Add ${creator.name} to campaign brief`}
                    className={`absolute top-4 right-4 p-2.5 backdrop-blur-md transition-all cursor-pointer ${
                      isShortlisted
                        ? 'bg-[#ff2e2e] text-white border border-[#ff2e2e] shadow-[0_0_12px_rgba(255,46,46,0.5)]'
                        : 'bg-black/80 text-white hover:bg-white hover:text-black border border-white/30'
                    }`}
                    title={isShortlisted ? 'Remove from campaign brief' : 'Add to campaign brief'}
                  >
                    {isShortlisted ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-1 group-hover:text-[#ff2e2e] transition-colors">
                      {creator.name}
                    </h3>
                    <p className="text-xs font-mono text-white/40 mb-4">{creator.handle}</p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6 border-t border-white/10 pt-4">
                      <div>
                        <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/40 mb-1">
                          Reach
                        </p>
                        <p className="text-lg font-black text-white">{creator.followers}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/40 mb-1">
                          Avg Views
                        </p>
                        <p className="text-lg font-black text-white">{creator.avgViews}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="flex justify-between items-center pt-3 border-t border-white/10">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#ff2e2e] bg-[#181818] border border-white/10 px-2.5 py-1">
                      {creator.category}
                    </span>

                    <button
                      onClick={() => onSelectCreator(creator)}
                      className="text-[10px] font-black text-white uppercase tracking-[0.25em] hover:text-[#ff2e2e] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>PROFILE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

