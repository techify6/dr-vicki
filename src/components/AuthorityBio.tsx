import React from 'react';

export const AuthorityBio: React.FC = () => {
  return (
    <section
      id="authority-bio"
      className="bg-[#FAF8F5] py-20 lg:py-28 border-b border-[#E8E3DA]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl text-left">
          <h2
            id="bio-main-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B2430] leading-tight mb-8"
          >
            "I'm Dr. Vicki Wright Hamilton."
          </h2>

          <p className="text-xl sm:text-2xl font-serif text-[#C79A3D] leading-snug mb-8">
            An executive partner who has spent over four decades inside the engine room of enterprise technology.
          </p>

          <div className="space-y-6 text-[#3A4556] text-base sm:text-lg leading-relaxed mb-12">
            <p>
              I did not arrive at executive consulting from a textbook or an accelerator seminar. My methodology was forged through four decades of enterprise trenches: managing nine-figure technology portfolios, steering complex post-merger integrations, and serving as Chief Operating Officer for high-stakes technology organizations.
            </p>
            <p>
              Throughout my tenure in corporate technology leadership, I observed a consistent pattern: organizations consistently over-invest in software and hardware architectures, while systematically under-investing in the leadership capacity required to steer them. When massive initiatives derailed, the breakdown was never technical capability; it was human alignment, governance clarity, and executive courage.
            </p>
            <p>
              Through VWH Consulting, I partner directly with enterprise leaders, board members, and forward-looking founders. My advisory model integrates three disciplines that are almost never found under one roof:
            </p>
          </div>

          {/* Triad: Strategy + Coaching + Execution (Editorial Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#E8E3DA]">
            <div className="border-l-2 border-[#1B2430] pl-6">
              <h3 className="font-serif text-xl font-semibold text-[#1B2430] mb-2">
                Executive Strategy
              </h3>
              <p className="text-sm text-[#5A6578] leading-relaxed">
                Clarifying high-stakes technology visions, establishing realistic AI integration models, and aligning enterprise roadmaps with quantifiable board outcomes.
              </p>
            </div>

            <div className="border-l-2 border-[#C79A3D] pl-6">
              <h3 className="font-serif text-xl font-semibold text-[#1B2430] mb-2">
                Leadership Coaching
              </h3>
              <p className="text-sm text-[#5A6578] leading-relaxed">
                Serving as a confidential, objective sounding board for C-suite officers navigating intense political, cultural, and operational pressures.
              </p>
            </div>

            <div className="border-l-2 border-[#1B2430] pl-6">
              <h3 className="font-serif text-xl font-semibold text-[#1B2430] mb-2">
                Operational Execution
              </h3>
              <p className="text-sm text-[#5A6578] leading-relaxed">
                Applying former COO rigor to project governance, change readiness, milestone accountability, and team adoption across every business tier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
