import React from 'react';
import { Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="bg-[#0A0D12] text-[#E2E8F0] pt-16 pb-12 border-t border-[#1C2533]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#1C2533] text-left">
          {/* Brand & Positioning */}
          <div className="md:col-span-6">
            <h3 className="font-serif text-2xl font-medium text-[#FAF8F5] mb-2">
              Dr. Vicki Wright Hamilton
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#C79A3D] font-mono mb-4">
              Executive Technology Consultant & Organizational Change Strategist
            </p>
            <p className="text-sm text-[#8B98A9] max-w-md leading-relaxed">
              Founder & CEO of VWH Consulting. Advising enterprise executives, board directors, and senior leaders navigating systemic digital change and AI transformation.
            </p>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  id="footer-email-link"
                  href="mailto:vicki@vickiwrighthamilton.com"
                  className="text-[#C79A3D] hover:text-[#DFB75E] transition-colors break-all"
                >
                  vicki@vickiwrighthamilton.com
                </a>
              </li>
              <li className="text-[#8B98A9]">
                Office: Atlanta, GA (EST)
              </li>
              <li className="text-[#8B98A9]">
                Hours: M–F, 9:00 AM – 6:00 PM EST
              </li>
            </ul>
          </div>

          {/* Official Online Presences */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold mb-4">
              Affiliations & Profiles
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  id="footer-linkedin-link"
                  href="https://www.linkedin.com/in/vickiwhamilton"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8B98A9] hover:text-[#FAF8F5] transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-[#C79A3D]" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5D6B80] gap-4 text-left">
          <p>
            © {currentYear} Dr. Vicki Wright Hamilton · VWH Consulting LLC. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Certified WBENC Women's Business Enterprise · Confidential Executive Advisory
          </p>
        </div>
      </div>
    </footer>
  );
};
