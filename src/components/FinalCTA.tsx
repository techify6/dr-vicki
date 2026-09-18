import React from 'react';
import { Clock, MapPin, Mail, Calendar, Shield } from 'lucide-react';

interface FinalCTAProps {
  onBookCall: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookCall }) => {
  return (
    <section
      id="advisory-inquiry"
      className="bg-[#FFFFFF] py-20 lg:py-28 border-b border-[#E8E3DA]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-[#FAF8F5] border border-[#E8E3DA] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Direct Editorial Invitation */}
            <div className="lg:col-span-7 text-left">
              <span className="text-sm font-semibold tracking-wide text-[#C79A3D] mb-3 block">
                Direct Executive Advisory Access
              </span>
              <h2
                id="final-cta-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1B2430] leading-tight mb-6"
              >
                Let us align your leadership with the pace of transformation.
              </h2>
              <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed mb-8">
                Whether you are evaluating an enterprise AI roadmap, navigating cross-functional resistance to digital restructuring, or seeking confidential C-suite counsel, every conversation begins with a 30-minute discovery consultation.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="final-cta-book-button"
                  type="button"
                  onClick={onBookCall}
                  className="px-8 py-4 bg-[#C79A3D] text-[#1B2430] text-[15px] font-semibold tracking-normal hover:bg-[#b88b2f] hover:text-white transition-all text-center focus:outline-none focus:ring-2 focus:ring-[#C79A3D] inline-flex items-center justify-center cursor-pointer"
                >
                  Book a Discovery Call
                </button>

                <a
                  id="final-cta-acuity-direct"
                  href="https://vickihamilton.as.me/chat"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-transparent border border-[#1B2430] text-[#1B2430] text-[15px] font-medium hover:bg-[#1B2430] hover:text-[#FAF8F5] transition-colors text-center inline-flex items-center justify-center"
                >
                  Open in Acuity Scheduling
                </a>
              </div>

              <p className="text-xs text-[#718096] mt-4">
                All inquiries are held in strict executive confidence. Engagements available in-person in Atlanta, on-site globally, and via secure virtual briefings.
              </p>
            </div>

            {/* Right: Office & Operational Details (as requested) */}
            <div className="lg:col-span-5 bg-[#FFFFFF] p-8 border border-[#E8E3DA] text-left">
              <h3 className="font-serif text-xl font-medium text-[#1B2430] mb-6 pb-4 border-b border-[#E8E3DA]">
                Executive Office Details
              </h3>

              <div className="space-y-6 text-sm text-[#3A4556]">
                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#C79A3D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1B2430]">Advisory Hours</p>
                    <p className="text-[#5A6578] mt-0.5">
                      Monday through Friday
                    </p>
                    <p className="text-[#1B2430] font-medium">
                      9:00 AM – 6:00 PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C79A3D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1B2430]">Headquarters</p>
                    <p className="text-[#5A6578] mt-0.5">
                      Atlanta, Georgia
                    </p>
                    <p className="text-xs text-[#718096] mt-0.5">
                      Conducting worldwide corporate and executive engagements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#C79A3D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1B2430]">Direct Executive Channel</p>
                    <a
                      href="mailto:vicki@vickiwrighthamilton.com"
                      className="text-[#C79A3D] hover:underline font-medium break-all"
                    >
                      vicki@vickiwrighthamilton.com
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E3DA] text-xs text-[#718096] leading-relaxed">
                  Certified WBENC / WOSB Practice · C-Suite Advisory & Enterprise Change Management
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
