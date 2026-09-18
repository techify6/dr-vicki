import React from 'react';
import { advisoryPortrait } from '../assets/images/index';

interface StuckSectionProps {
  onBookCall: () => void;
}

export const StuckSection: React.FC<StuckSectionProps> = ({ onBookCall }) => {
  return (
    <section
      id="executive-friction"
      className="bg-[#FFFFFF] py-20 lg:py-28 border-b border-[#E8E3DA]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image with editorial framing */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden border border-[#E8E3DA] bg-[#FAF8F5]">
                <img
                  id="advisory-portrait-image"
                  src={advisoryPortrait}
                  alt="Dr. Vicki Wright Hamilton in an executive advisory discussion"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top aspect-[4/5] max-h-[520px] block"
                />
              </div>

              <div className="mt-4 pl-4 border-l-2 border-[#C79A3D]">
                <p className="text-sm italic text-[#4A5568] font-serif">
                  "Most digital transformations do not fail in the code. They stall in the boardroom and splinter in the culture."
                </p>
                <p className="text-xs text-[#1B2430] font-semibold mt-2">
                  Dr. Vicki Wright Hamilton
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Problem-Agitation Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            <h2
              id="stuck-section-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B2430] leading-tight mb-8"
            >
              When technology moves at speed, why do organizations get stuck?
            </h2>

            <div className="space-y-6 text-[#3A4556] text-base sm:text-lg leading-relaxed mb-10">
              <p>
                Across enterprise boardrooms, executive teams are experiencing unprecedented friction. AI platforms and enterprise architectures promise transformative velocity, yet internal operations remain bound to fragmented legacy processes.
              </p>
              <p>
                You have invested in high-caliber talent and enterprise systems. Yet change initiatives stall, department heads protect traditional silos, and senior leadership bears the mounting weight of expectations with little objective, battle-tested counsel.
              </p>
            </div>

            {/* Frictions without generic card slop: editorial structured list */}
            <div className="space-y-6 pt-4 border-t border-[#E8E3DA]">
              <div className="flex items-start gap-4">
                <span className="font-serif text-lg font-semibold text-[#C79A3D] mt-0.5">01</span>
                <div>
                  <h3 className="text-base font-semibold text-[#1B2430] mb-1">
                    The AI Disconnect
                  </h3>
                  <p className="text-sm text-[#5A6578] leading-relaxed">
                    Boards mandate generative AI adoption, yet teams lack clear operational frameworks, risk governance, and measurable adoption targets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-serif text-lg font-semibold text-[#C79A3D] mt-0.5">02</span>
                <div>
                  <h3 className="text-base font-semibold text-[#1B2430] mb-1">
                    Systemic Cultural Inertia
                  </h3>
                  <p className="text-sm text-[#5A6578] leading-relaxed">
                    New workflows are delivered from the top, but without deliberate change enablement, employees quietly revert to comfortable legacy routines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-serif text-lg font-semibold text-[#C79A3D] mt-0.5">03</span>
                <div>
                  <h3 className="text-base font-semibold text-[#1B2430] mb-1">
                    Executive Isolation & Decision Fatigue
                  </h3>
                  <p className="text-sm text-[#5A6578] leading-relaxed">
                    Senior executives navigate complex stakeholder tensions and board demands without a confidential, senior peer who has walked the exact operational terrain.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6">
              <button
                id="stuck-section-cta"
                type="button"
                onClick={onBookCall}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#1B2430] text-[#FAF8F5] text-sm font-semibold tracking-normal hover:bg-[#C79A3D] hover:text-[#1B2430] transition-colors cursor-pointer"
              >
                Schedule an Executive Diagnostic Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
