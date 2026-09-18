import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface FocusPillarsProps {
  onBookCall: () => void;
}

export const FocusPillars: React.FC<FocusPillarsProps> = ({ onBookCall }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'change' | 'ai' | 'coaching'>('all');

  const pillars = [
    {
      id: 'change',
      number: '01',
      title: 'Leading Organizational Change',
      subtitle: 'Sustaining transformation through cultural alignment and governance.',
      description:
        'Enterprise technology investments fail when treated solely as IT deployments. Dr. Vicki guides executive teams to construct change frameworks that secure frontline buy-in, mitigate organizational anxiety, and embed new operating rhythms into the enterprise DNA.',
      capabilities: [
        'Enterprise Change Readiness & Stakeholder Impact Audits',
        'C-Suite Sponsor Enablement and Executive Coalition Building',
        'Resistance Mitigation and Cross-Departmental Bridge Architecture',
        'Post-Merger Operational and Cultural Integration Strategy',
      ],
      deliverables:
        'Structured change governance, risk matrices, and milestone-driven behavioral roadmaps tailored to board-level milestones.',
    },
    {
      id: 'ai',
      number: '02',
      title: 'AI Adoption & Digital Transformation',
      subtitle: 'Bridging emerging intelligence with pragmatic business outcomes.',
      description:
        'The rush to adopt artificial intelligence has left many leaders with expensive pilots that generate noise rather than EBITDA. Dr. Vicki works alongside CIOs, CTOs, and line-of-business leaders to formulate pragmatic AI adoption architectures that balance innovation with rigorous operational safety.',
      capabilities: [
        'Strategic AI Roadmap Formulation & Pragmatic Use-Case Prioritization',
        'Executive & Board AI Literacy and Decision Frameworks',
        'Workforce Upskilling and Human-in-the-Loop Process Engineering',
        'Enterprise Data Governance and AI Ethical Risk Policies',
      ],
      deliverables:
        'Operational blueprints that move AI from fragmented experimentation to validated, enterprise-wide productivity.',
    },
    {
      id: 'coaching',
      number: '03',
      title: 'Executive Coaching & Clarity',
      subtitle: 'High-trust, confidential sounding board for senior leadership.',
      description:
        'The highest tier of executive leadership is inherently isolating. Dr. Vicki provides a confidential sanctuary where leaders can test strategies, address blind spots, and navigate volatile corporate politics with a seasoned peer who has carried P&L and COO responsibilities.',
      capabilities: [
        '1-on-1 Confidential Senior Executive Advisory Retainers',
        'High-Stakes Decision Testing and Board Presentation Preparation',
        'Crisis Leadership and Executive Composure Under Volatility',
        'Strategic Career Trajectory and Succession Navigation',
      ],
      deliverables:
        'Measurable leadership growth plans, direct 360 stakeholder assessments, and strategic sounding board sessions.',
    },
  ];

  return (
    <section
      id="strategic-pillars"
      className="bg-[#FFFFFF] py-20 lg:py-28 border-b border-[#E8E3DA]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-sm font-semibold tracking-wide text-[#C79A3D] mb-3 block">
            Core Advisory Capabilities
          </span>
          <h2
            id="pillars-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B2430] leading-tight mb-6"
          >
            Three disciplined pillars of executive advisory.
          </h2>
          <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed">
            Every engagement is bespoke, built on Dr. Vicki's four decades of operational technology leadership and tailored to the unique complexities of your organization.
          </p>
        </div>

        {/* Editorial Pillars: Architectural Left-Aligned Layout with Hairline Dividers */}
        <div className="space-y-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              id={`pillar-${pillar.id}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-[#E8E3DA] items-start"
            >
              {/* Column 1: Number & Title */}
              <div className="lg:col-span-4 text-left">
                <span className="font-serif text-3xl font-light text-[#C79A3D] block mb-2">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1B2430] leading-snug mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#718096] font-normal leading-relaxed">
                  {pillar.subtitle}
                </p>
              </div>

              {/* Column 2: Deep Context Description */}
              <div className="lg:col-span-4 text-left text-[#3A4556] text-base leading-relaxed">
                <p className="mb-4">{pillar.description}</p>
                <div className="p-4 bg-[#FAF8F5] border-l-2 border-[#1B2430]">
                  <p className="text-xs uppercase tracking-wider text-[#718096] font-semibold mb-1">
                    Deliverable Focus
                  </p>
                  <p className="text-xs sm:text-sm text-[#1B2430] leading-relaxed">
                    {pillar.deliverables}
                  </p>
                </div>
              </div>

              {/* Column 3: Capabilities List */}
              <div className="lg:col-span-4 text-left">
                <p className="text-xs uppercase tracking-wider text-[#1B2430] font-semibold mb-4">
                  Key Strategic Interventions
                </p>
                <ul className="space-y-3">
                  {pillar.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[#4A5568] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C79A3D] mt-2 mr-3 flex-shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4">
                  <button
                    type="button"
                    onClick={onBookCall}
                    className="text-xs font-semibold text-[#1B2430] hover:text-[#C79A3D] transition-colors underline underline-offset-4 cursor-pointer text-left"
                  >
                    Inquire regarding this capability
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 pt-10 border-t border-[#E8E3DA] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-sm sm:text-base text-[#4A5568] max-w-xl text-left">
            Need an enterprise-wide custom diagnostic or executive offsite facilitation?
          </p>
          <button
            type="button"
            onClick={onBookCall}
            className="px-6 py-3 bg-[#1B2430] text-[#FAF8F5] text-sm font-semibold tracking-normal hover:bg-[#C79A3D] hover:text-[#1B2430] transition-colors text-center inline-flex items-center justify-center cursor-pointer"
          >
            Request an Executive Engagement Briefing
          </button>
        </div>
      </div>
    </section>
  );
};
