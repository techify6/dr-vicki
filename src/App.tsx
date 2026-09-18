/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StuckSection } from './components/StuckSection';
import { AuthorityBio } from './components/AuthorityBio';
import { FocusPillars } from './components/FocusPillars';
import { CredibilityBand } from './components/CredibilityBand';
import { MediaLeadership } from './components/MediaLeadership';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1B2430]">
      {/* Editorial Navigation */}
      <Header onBookCall={handleOpenBooking} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero with full portrait & AI disruption theme */}
        <Hero onBookCall={handleOpenBooking} />

        {/* 2. "Are you feeling stuck" problem-agitation with professional photo */}
        <StuckSection onBookCall={handleOpenBooking} />

        {/* 3. Authority Bio — 4 decades, COO background, Strategy + Coaching + Execution */}
        <AuthorityBio />

        {/* 4. Three Focus Pillars — Change, AI Adoption, Executive Coaching */}
        <FocusPillars onBookCall={handleOpenBooking} />

        {/* 5. Credibility Strip on Black Band — WBENC, Top Coach, Speakers Mag, Certifications */}
        <CredibilityBand />

        {/* 6. Media & Thought Leadership — Memoir 'Game Face', broadcast shows */}
        <MediaLeadership />

        {/* 7. Final CTA — Office hours, Atlanta GA, Acuity booking action */}
        <FinalCTA onBookCall={handleOpenBooking} />
      </main>

      {/* 8. Footer on Black Band */}
      <Footer />

      {/* Executive Discovery Call Modal (Interactive Intake & Direct Acuity Access) */}
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />
    </div>
  );
}
