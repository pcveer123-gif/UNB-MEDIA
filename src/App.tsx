/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CreatorsSection } from './components/CreatorsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CreatorModal } from './components/CreatorModal';
import { ThreeScene } from './components/ThreeScene';
import { CREATORS } from './data/mockData';
import { Creator } from './types';

export default function App() {
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const [shortlistedIds, setShortlistedIds] = useState<string[]>(['elena-rostova']);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [preSelectedCreatorId, setPreSelectedCreatorId] = useState<string | undefined>(undefined);

  const handleToggleShortlist = (creatorId: string) => {
    setShortlistedIds((prev) =>
      prev.includes(creatorId) ? prev.filter((id) => id !== creatorId) : [...prev, creatorId]
    );
  };

  const handleRemoveShortlist = (creatorId: string) => {
    setShortlistedIds((prev) =>
      prev.includes(creatorId) ? prev.filter((id) => id !== creatorId) : [...prev, creatorId]
    );
  };

  const handleOpenInquiry = (creatorId?: string) => {
    if (creatorId) {
      setPreSelectedCreatorId(creatorId);
      if (!shortlistedIds.includes(creatorId)) {
        setShortlistedIds((prev) => [...prev, creatorId]);
      }
    }
    setIsInquiryModalOpen(true);
  };

  const handleBookFromModal = (creator: Creator) => {
    setSelectedCreator(null);
    handleOpenInquiry(creator.id);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col font-sans selection:bg-[#ff2e2e] selection:text-white relative overflow-x-hidden">
      {/* Interactive 3D WebGL Background Scene */}
      <ThreeScene />

      {/* Top ambient lighting glow */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#181818] to-transparent opacity-60 pointer-events-none z-0"></div>

      {/* Navigation */}
      <Navbar
        onOpenInquiry={() => handleOpenInquiry()}
        shortlistedCount={shortlistedIds.length}
      />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <Hero onOpenInquiry={() => handleOpenInquiry()} />
        <About />
        <CreatorsSection
          creators={CREATORS}
          onSelectCreator={setSelectedCreator}
          onToggleShortlist={handleToggleShortlist}
          shortlistedIds={shortlistedIds}
        />
        <ServicesSection onOpenInquiry={() => handleOpenInquiry()} />
        <ContactSection
          creators={CREATORS}
          shortlistedIds={shortlistedIds}
          onRemoveShortlist={handleRemoveShortlist}
          preSelectedCreatorId={preSelectedCreatorId}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Creator Detail Profile Modal */}
      {selectedCreator && (
        <CreatorModal
          creator={selectedCreator}
          onClose={() => setSelectedCreator(null)}
          onBookCreator={handleBookFromModal}
          isShortlisted={shortlistedIds.includes(selectedCreator.id)}
          onToggleShortlist={handleToggleShortlist}
        />
      )}

      {/* Campaign Brief / Work With Us Modal */}
      {isInquiryModalOpen && (
        <ContactSection
          creators={CREATORS}
          shortlistedIds={shortlistedIds}
          onRemoveShortlist={handleRemoveShortlist}
          preSelectedCreatorId={preSelectedCreatorId}
          isModal={true}
          onCloseModal={() => {
            setIsInquiryModalOpen(false);
            setPreSelectedCreatorId(undefined);
          }}
        />
      )}
    </div>
  );
}

