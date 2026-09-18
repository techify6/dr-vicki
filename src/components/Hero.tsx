import React from 'react';
import { motion } from 'motion/react';
import { heroPortrait } from '../assets/images/index';
import { ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
  return (
    <section
      id="hero-section"
      className="relative bg-[#FAF8F5] pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-[#E8E3DA]/80"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Single deliberate motion moment on load for the hero */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Authoritative Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-sm font-semibold tracking-wide text-[#C79A3D] mb-4">
              Executive Advisory & Organizational Transformation
            </span>

            <h1
              id="hero-main-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] font-normal text-[#1B2430] tracking-tight mb-8"
            >
              Leading through disruption and enterprise change in the age of AI.
            </h1>

            <p className="text-lg sm:text-xl text-[#4A5568] leading-[1.65] font-normal max-w-2xl mb-10">
              Technology accelerates exponentially, but enterprise value is realized only when human systems, leadership clarity, and organizational culture move in sync. Dr. Vicki Wright Hamilton advises senior leaders and boardrooms on turning technological volatility into durable competitive strength.
            </p>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={onBookCall}
                className="px-8 py-4 bg-[#C79A3D] text-[#1B2430] text-[15px] font-semibold tracking-normal transition-all hover:bg-[#b88b2f] hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C79A3D] focus:ring-offset-2 text-center cursor-pointer"
              >
                Book a Discovery Call
              </button>

              <a
                id="hero-secondary-anchor"
                href="#strategic-pillars"
                className="px-8 py-4 bg-transparent border border-[#1B2430] text-[#1B2430] text-[15px] font-medium transition-colors hover:bg-[#1B2430] hover:text-[#FAF8F5] text-center"
              >
                Explore Advisory Pillars
              </a>
            </div>

            {/* Executive Highlights - Editorial Baseline */}
            <div className="pt-8 border-t border-[#E8E3DA] w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div>
                <p className="font-serif text-2xl font-semibold text-[#1B2430]">30+ Years</p>
                <p className="text-xs text-[#5A6578] mt-1 leading-relaxed">
                  Enterprise technology, C-suite operations, and organizational governance.
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-[#1B2430]">Former COO</p>
                <p className="text-xs text-[#5A6578] mt-1 leading-relaxed">
                  Direct operational accountability, $100M+ portfolio execution.
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-[#1B2430]">Certified WBE</p>
                <p className="text-xs text-[#5A6578] mt-1 leading-relaxed">
                  WBENC national credentialed practice based in Atlanta, Georgia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Full-Bleed Professional Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle architectural frame line */}
              <div className="absolute -inset-3 border border-[#C79A3D]/40 pointer-events-none hidden sm:block" />

              <div className="relative bg-[#1B2430] overflow-hidden shadow-xl">
                <img
                  id="hero-portrait-image"
                  src={heroPortrait}
                  alt="Dr. Vicki Wright Hamilton, Executive Technology Consultant and Leadership Coach"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top aspect-[1438/2048] max-h-[640px] sm:max-h-[700px] block"
                />

                <div className="p-5 bg-[#1B2430] text-[#FAF8F5]">
                  <p className="font-serif text-lg font-medium text-[#FAF8F5]">
                    Dr. Vicki Wright Hamilton, Ed.D.
                  </p>
                  <p className="text-xs text-[#C79A3D] font-normal mt-0.5">
                    CEO, VWH Consulting · Executive Change Strategist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
