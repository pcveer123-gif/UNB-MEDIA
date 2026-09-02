import React, { useState, useRef } from 'react';
import { ArrowRight, Compass, Layers3 } from 'lucide-react';
import heroImg from '../assets/images/hero_creative_red_black_1788347579634.jpg';
import { Logo } from './Logo';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation between -12 and +12 deg
    const rotX = -((y - rect.height / 2) / (rect.height / 2)) * 14;
    const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 14;
    
    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section 
      id="home" 
      className="relative pt-12 md:pt-20 pb-20 md:pb-28 px-6 md:px-16 max-w-[1280px] mx-auto overflow-hidden"
    >
      {/* Giant Background Watermark Numeral matching design */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-40px] md:right-[-20px] text-[260px] md:text-[420px] font-black text-white/[0.03] select-none pointer-events-none leading-none z-0">
        01
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
        {/* Left Editorial Bold Typography Column */}
        <div className="lg:col-span-7">
          {/* Edition / Tag Marker */}
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.5em] text-[#ff2e2e] font-black mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff2e2e] shadow-[0_0_10px_#ff2e2e] animate-pulse"></span>
            <span>Edition 04 // 3D Spatial Grid</span>
          </div>

          {/* Huge Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[76px] xl:text-[84px] font-black leading-[0.9] tracking-[-0.04em] uppercase text-white mb-8">
            Connecting<br />
            <span 
              className="text-transparent" 
              style={{ WebkitTextStroke: '2px white' }}
            >
              The Influence
            </span>
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] bg-[#ff2e2e] w-12 shadow-[0_0_8px_#ff2e2e]"></div>
            <p className="text-[11px] uppercase tracking-[0.3em] font-mono text-white/60">
              UNB Media Ind // Curated 3D Talent Architecture
            </p>
          </div>

          <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-light italic mb-10">
            Connecting global brands with relevant creators to build authentic, 
            engaging and culturally resonant influencer marketing campaigns in the immersive 3D digital landscape.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center mb-12">
            <a
              href="#creators"
              className="bg-[#ff2e2e] text-white font-black text-xs uppercase tracking-[0.25em] px-8 py-4.5 hover:bg-white hover:text-black transition-all inline-flex items-center gap-2 shadow-[0_0_25px_rgba(255,46,46,0.4)] cursor-pointer"
            >
              <span>Explore Roster</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenInquiry}
              className="bg-transparent text-white font-black text-xs uppercase tracking-[0.25em] px-8 py-4.5 border-2 border-white/40 hover:border-[#ff2e2e] hover:text-[#ff2e2e] hover:bg-white/5 transition-all cursor-pointer"
            >
              Work With Us
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1 font-mono">Combined Reach</div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">50M+</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1 font-mono">Retention</div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#ff2e2e]">98%</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1 font-mono">Campaigns</div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">180+</div>
            </div>
          </div>
        </div>

        {/* Right Hero Image Card (3D Interactive Perspective) */}
        <div 
          className="lg:col-span-5 relative mt-4 lg:mt-0"
          style={{ perspective: '1200px' }}
        >
          {/* Floating 3D Depth Rings / Decorative Background Orbit */}
          <div className="absolute -inset-4 border border-[#ff2e2e]/20 rounded-lg pointer-events-none -z-10 transform translate-z-[-20px] scale-105 opacity-60"></div>
          
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: isHovered
                ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
                : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
              transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
              transformStyle: 'preserve-3d',
            }}
            className="aspect-[4/5] bg-[#121212] relative overflow-hidden border-2 border-white/25 hover:border-[#ff2e2e] shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-grab active:cursor-grabbing group"
          >
            {/* The Better High-Definition 3D Editorial Image */}
            <img
              src={heroImg}
              alt="High-fashion 3D editorial digital creator portrait in a futuristic studio"
              className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Dynamic 3D Glare Lighting Sheen */}
            {isHovered && (
              <div
                className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.8) 0%, rgba(255,46,46,0.3) 30%, transparent 65%)`,
                }}
              />
            )}

            {/* Cyber Grid Lines & Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/15 to-transparent pointer-events-none"></div>

            {/* Top Left Spatial Indicator */}
            <div 
              style={{ transform: 'translateZ(25px)' }}
              className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-white/20 px-3 py-1.5 text-[9px] font-mono uppercase tracking-wider text-white/90 flex items-center gap-2 shadow-lg"
            >
              <Compass className="w-3.5 h-3.5 text-[#ff2e2e] animate-spin" style={{ animationDuration: '8s' }} />
              <span>SPATIAL VIEW // 3D</span>
            </div>

            {/* Top Right Clean Logo Crest */}
            <div 
              style={{ transform: 'translateZ(30px)' }}
              className="absolute top-4 right-4 bg-black/85 backdrop-blur-md border border-[#ff2e2e]/50 px-3 py-1.5 flex items-center gap-2 shadow-[0_0_15px_rgba(255,46,46,0.35)]"
            >
              <Logo variant="horizontal" inverted={true} className="scale-75 origin-right" />
            </div>

            {/* Floating 3D Metadata Card */}
            <div 
              style={{ transform: 'translateZ(35px)' }}
              className="absolute bottom-6 left-6 right-6 p-4 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/25 text-white shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <Layers3 className="w-3.5 h-3.5 text-[#ff2e2e]" />
                    <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#ff2e2e] font-bold">
                      Talent Archive
                    </p>
                  </div>
                  <p className="text-sm font-black tracking-tight uppercase">Curated Talent Division</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono font-bold px-2 py-1 bg-[#ff2e2e] text-white shadow-[0_0_10px_rgba(255,46,46,0.5)] inline-block">
                    2025/26
                  </span>
                  <p className="text-[8px] font-mono text-white/50 mt-1 uppercase">Tilt to orbit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


