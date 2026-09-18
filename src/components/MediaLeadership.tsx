import React from 'react';
import { BookOpen, Tv, Mic, Sparkles, ExternalLink } from 'lucide-react';

export const MediaLeadership: React.FC = () => {
  return (
    <section
      id="thought-leadership"
      className="bg-[#FAF8F5] py-20 lg:py-28 border-b border-[#E8E3DA]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Section Framing */}
          <div className="lg:col-span-4 text-left">
            <span className="text-sm font-semibold tracking-wide text-[#C79A3D] mb-3 block">
              Public Voice & Publications
            </span>
            <h2
              id="media-heading"
              className="font-serif text-3xl sm:text-4xl font-normal text-[#1B2430] leading-tight mb-6"
            >
              Shaping the dialogue on leadership and technological change.
            </h2>
            <p className="text-base text-[#5A6578] leading-relaxed">
              Beyond enterprise boardrooms, Dr. Vicki Wright Hamilton authors works, hosts broadcasts, and delivers keynote addresses that equip leaders to navigate uncertainty with resilience and tactical acumen.
            </p>
          </div>

          {/* Right: Editorial 3-Piece Showcase (No AI Card Slop) */}
          <div className="lg:col-span-8 space-y-8 text-left">
            {/* Piece 1: Bestselling Memoir */}
            <div className="bg-[#FFFFFF] p-8 border border-[#E8E3DA] border-l-4 border-l-[#C79A3D]">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C79A3D]">
                  Bestselling Memoir
                </span>
                <span className="text-xs text-[#718096]">Executive Biography</span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1B2430] mb-3">
                Game Face: Corporate Success Strategies of a Trail-Blazing Tech Warrior
              </h3>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed mb-4">
                A definitive, candid account of navigating corporate technology hierarchies, overcoming structural resistance, and rising to the C-suite through strategic excellence, operational grit, and unyielding authenticity.
              </p>
              <p className="text-xs text-[#718096]">
                Available across major literary platforms and corporate reading lists.
              </p>
            </div>

            {/* Piece 2: Broadcast Television & Series */}
            <div className="bg-[#FFFFFF] p-8 border border-[#E8E3DA] border-l-4 border-l-[#1B2430]">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#1B2430]">
                  Broadcast Shows & Media
                </span>
                <span className="text-xs text-[#718096]">Television & Streaming</span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1B2430] mb-3">
                Strategic Minds: Making Money Moves & Hidden Stories, Healed Now
              </h3>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed mb-4">
                Hosting in-depth conversations with CEOs, technology pioneers, and community architects, exploring the intersection of commercial acumen, mental resilience, and transformative leadership.
              </p>
              <p className="text-xs text-[#718096]">
                Broadcast across regional television networks, streaming syndicates, and YouTube.
              </p>
            </div>

            {/* Piece 3: Strategic Frameworks & Podcasts */}
            <div className="bg-[#FFFFFF] p-8 border border-[#E8E3DA] border-l-4 border-l-[#718096]">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#5A6578]">
                  Keynotes & Simulations
                </span>
                <span className="text-xs text-[#718096]">Leadership Tools</span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1B2430] mb-3">
                Decisions Decisions™ Leadership Framework & Keynote Appearances
              </h3>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed mb-4">
                Creator of the proprietary executive simulation board game designed to pressure-test executive decision-making under high-velocity change. Frequent guest on national podcasts including Business RadioX and The Power of Owning Your Career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
