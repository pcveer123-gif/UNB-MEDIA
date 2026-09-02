import React, { useState } from 'react';
import { Creator } from '../types';
import { Mail, ArrowRight, Sparkles, Building2, User, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  creators: Creator[];
  shortlistedIds: string[];
  onRemoveShortlist: (id: string) => void;
  preSelectedCreatorId?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  creators,
  shortlistedIds,
  onRemoveShortlist,
  preSelectedCreatorId,
  isModal = false,
  onCloseModal,
}) => {
  const [inquiryType, setInquiryType] = useState<'brand' | 'creator'>('brand');
  const [fullName, setFullName] = useState('');
  const [companyOrHandle, setCompanyOrHandle] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('$25,000 - $50,000');
  const [timeline, setTimeline] = useState('Immediate / Q3-Q4');
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['Brand Awareness']);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
  ];

  const goalOptions = [
    'Brand Awareness & Prestige',
    'Product Launch / Drop',
    'Long-Term Ambassador',
    'Content Production & Licensing',
    'VIP Event Activation',
  ];

  const shortlistedCreators = creators.filter((c) =>
    shortlistedIds.includes(c.id) || (preSelectedCreatorId && c.id === preSelectedCreatorId)
  );

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFullName('');
    setCompanyOrHandle('');
    setEmail('');
    setMessage('');
  };

  const content = (
    <div className={`${isModal ? 'p-6 sm:p-8 text-white' : 'max-w-[1280px] mx-auto text-white'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.5em] text-[#ff2e2e] font-black block mb-2">
              Transmission // Inquiries
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.04em] text-white mb-3">
              Work With Us
            </h2>
            <div className="h-[2px] bg-[#ff2e2e] w-12 mb-4"></div>
            <p className="text-base text-white/70 font-light italic leading-relaxed">
              Whether you are a global brand looking to orchestrate a high-impact editorial campaign, 
              or an elite digital creator seeking bespoke representation, our team is at your service.
            </p>
          </div>

          <div className="p-6 bg-[#121212] border-2 border-white/15 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border border-white/20 flex items-center justify-center text-[#ff2e2e]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/40 uppercase font-bold">Direct Agency Desk</p>
                <a
                  href="mailto:unbagencyind@gmail.com"
                  className="font-mono text-sm font-bold text-white hover:text-[#ff2e2e] transition-colors"
                >
                  unbagencyind@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs font-mono text-white/50 space-y-1">
              <p>📍 Representation Hubs: Paris • New York • London • Tokyo</p>
              <p>⏱ Response Window: Under 24 Business Hours</p>
            </div>
          </div>

          {/* Shortlisted Creators in Brief */}
          {shortlistedCreators.length > 0 && (
            <div className="p-5 bg-[#121212] border-2 border-[#ff2e2e]/40 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-black text-white uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#ff2e2e]" />
                  <span>Targeted Creators ({shortlistedCreators.length})</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {shortlistedCreators.map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center gap-2 pl-2.5 pr-2 py-1 bg-black text-xs font-mono text-white border border-[#ff2e2e]/30"
                  >
                    <span>{c.name}</span>
                    <button
                      type="button"
                      onClick={() => onRemoveShortlist(c.id)}
                      className="text-[#ff2e2e] hover:text-white p-0.5 font-bold cursor-pointer"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <div className="bg-[#121212] p-6 sm:p-8 border-2 border-white/15 shadow-xl">
            {/* Tab Selection: Brand vs Creator */}
            <div className="flex border-b border-white/10 pb-4 mb-6 gap-6">
              <button
                type="button"
                onClick={() => setInquiryType('brand')}
                className={`flex items-center gap-2 text-xs uppercase font-black tracking-[0.2em] pb-2 border-b-2 transition-all cursor-pointer ${
                  inquiryType === 'brand'
                    ? 'border-[#ff2e2e] text-[#ff2e2e]'
                    : 'border-transparent text-white/40 hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>For Brands & Agencies</span>
              </button>

              <button
                type="button"
                onClick={() => setInquiryType('creator')}
                className={`flex items-center gap-2 text-xs uppercase font-black tracking-[0.2em] pb-2 border-b-2 transition-all cursor-pointer ${
                  inquiryType === 'creator'
                    ? 'border-[#ff2e2e] text-[#ff2e2e]'
                    : 'border-transparent text-white/40 hover:text-white'
                }`}
              >
                <User className="w-4 h-4" />
                <span>For Creators & Talent</span>
              </button>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-black text-[#ff2e2e] flex items-center justify-center mx-auto mb-2 border border-[#ff2e2e] shadow-[0_0_15px_rgba(255,46,46,0.3)]">
                  <CheckCircle2 className="w-7 h-7 text-[#ff2e2e]" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                  Inquiry Successfully Received
                </h3>
                <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed font-light">
                  Thank you, <strong>{fullName || 'there'}</strong>. Our editorial partnerships team will review your brief and contact you at <strong>{email}</strong> within 24 hours.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href="mailto:unbagencyind@gmail.com"
                    className="px-6 py-3.5 bg-[#ff2e2e] text-white text-xs uppercase font-black tracking-[0.2em] inline-flex items-center gap-2 hover:bg-white hover:text-black transition-all"
                  >
                    <span>Send Assets via Email</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-5 py-3.5 bg-transparent text-white text-xs uppercase font-black tracking-[0.2em] border border-white/30 hover:border-white transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mb-1.5 font-bold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Claire Dubois"
                      className="w-full px-4 py-3 bg-black border border-white/20 text-xs font-mono text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff2e2e] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mb-1.5 font-bold">
                      {inquiryType === 'brand' ? 'Company / Brand Name *' : 'Creator Handle / Portfolio *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={companyOrHandle}
                      onChange={(e) => setCompanyOrHandle(e.target.value)}
                      placeholder={inquiryType === 'brand' ? 'e.g. Maison de Mode' : 'e.g. @yourname'}
                      className="w-full px-4 py-3 bg-black border border-white/20 text-xs font-mono text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff2e2e] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mb-1.5 font-bold">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="claire@brand.com"
                      className="w-full px-4 py-3 bg-black border border-white/20 text-xs font-mono text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff2e2e] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mb-1.5 font-bold">
                      {inquiryType === 'brand' ? 'Estimated Campaign Budget' : 'Primary Content Domain'}
                    </label>
                    {inquiryType === 'brand' ? (
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-3 bg-black border border-white/20 text-xs font-mono text-white focus:outline-none focus:border-[#ff2e2e] transition-colors"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-black text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-4 py-3 bg-black border border-white/20 text-xs font-mono text-white focus:outline-none focus:border-[#ff2e2e] transition-colors"
                      >
                        <option value="Fashion & Luxury" className="bg-black text-white">Fashion & Luxury</option>
                        <option value="Minimalist Tech & Workspace" className="bg-black text-white">Minimalist Tech & Workspace</option>
                        <option value="Beauty & Skincare" className="bg-black text-white">Beauty & Skincare</option>
                        <option value="Design & Architecture" className="bg-black text-white">Design & Architecture</option>
                        <option value="Travel & Expedition" className="bg-black text-white">Travel & Expedition</option>
                        <option value="Culinary & Lifestyle" className="bg-black text-white">Culinary & Lifestyle</option>
                      </select>
                    )}
                  </div>
                </div>

                {/* Campaign Goals */}
                {inquiryType === 'brand' && (
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mb-2 font-bold">
                      Campaign Strategic Goals
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {goalOptions.map((goal) => {
                        const isSelected = selectedGoals.includes(goal);
                        return (
                          <button
                            type="button"
                            key={goal}
                            onClick={() => toggleGoal(goal)}
                            className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#ff2e2e] text-white shadow-[0_0_10px_rgba(255,46,46,0.3)]'
                                : 'bg-black text-white/60 border border-white/20 hover:border-white hover:text-white'
                            }`}
                          >
                            {goal}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Message / Brief */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mb-1.5 font-bold">
                    {inquiryType === 'brand' ? 'Campaign Brief / Specific Deliverables' : 'Creator Background & Representation Goals'}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      inquiryType === 'brand'
                        ? 'Outline your target demographics, launch dates, preferred creator formats (Reels, TikTok, YouTube integrations, lookbooks)...'
                        : 'Tell us about your audience demographics, past brand collaborations, and why you are seeking management representation...'
                    }
                    className="w-full px-4 py-3 bg-black border border-white/20 text-xs font-mono text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff2e2e] transition-colors"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] font-mono text-white/40">
                    Confidentiality & exclusive talent routing guaranteed.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#ff2e2e] text-white text-xs uppercase font-black tracking-[0.25em] px-8 py-4 hover:bg-white hover:text-black transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,46,46,0.3)]"
                  >
                    <span>{inquiryType === 'brand' ? 'Submit Campaign Brief' : 'Apply For Representation'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
        <div 
          className="bg-[#0a0a0a] w-full max-w-5xl max-h-[92vh] overflow-y-auto border-2 border-white/20 shadow-2xl relative animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {onCloseModal && (
            <button
              onClick={onCloseModal}
              className="absolute top-5 right-5 z-10 p-2.5 bg-black hover:bg-[#ff2e2e] hover:text-white text-white border border-white/20 transition-colors shadow-xs cursor-pointer"
              aria-label="Close modal"
            >
              ×
            </button>
          )}
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-16 border-t border-white/10 relative">
      {content}
    </section>
  );
};

