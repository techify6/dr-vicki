import React from 'react';
import {
  logoWbenc,
  logoTopCoach,
  logoSpeakersMag,
  logoCertifiedSpeaker,
  logoProfitCoach,
} from '../assets/images/index';

export const CredibilityBand: React.FC = () => {
  const credentials = [
    {
      title: 'Certified WBENC',
      subtitle: "Women's Business Enterprise National Council",
      image: logoWbenc,
      alt: 'WBENC Certified Seal',
    },
    {
      title: 'Top Coach Award',
      subtitle: 'Coach Foundation Top Entrepreneur Coach',
      image: logoTopCoach,
      alt: 'Top Coach Honors',
    },
    {
      title: 'Speakers Magazine',
      subtitle: 'Featured National Voice & Thought Leader',
      image: logoSpeakersMag,
      alt: 'Speakers Magazine',
    },
    {
      title: 'Certified Speaker',
      subtitle: 'Certified Public Speaker Credential',
      image: logoCertifiedSpeaker,
      alt: 'Certified Public Speaker',
    },
    {
      title: 'Certified Profit Coach',
      subtitle: 'Executive Business & Profit Growth',
      image: logoProfitCoach,
      alt: 'Certified Profit Coach',
    },
  ];

  return (
    <section
      id="credibility-strip"
      className="bg-[#0D1117] text-[#FAF8F5] py-16 lg:py-20 border-t border-b border-[#222B38]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-left mb-10">
          <p className="text-xs uppercase tracking-widest text-[#C79A3D] font-semibold mb-2">
            Institutional Credentials & Industry Recognition
          </p>
          <p className="text-sm text-[#8B98A9] max-w-2xl">
            VWH Consulting is a nationally certified practice trusted by enterprise organizations, public authorities, and leadership boards.
          </p>
        </div>

        {/* Clean Logo/Credential Row with authentic certification badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 pt-8 border-t border-[#1F2937]">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-5 bg-[#141A22] border border-[#232D3B] hover:border-[#C79A3D]/40 transition-colors text-left group"
            >
              <div className="h-20 flex items-center justify-center bg-[#FFFFFF]/95 p-2 rounded mb-4">
                <img
                  src={cred.image}
                  alt={cred.alt}
                  referrerPolicy="no-referrer"
                  className="max-h-16 max-w-full object-contain"
                />
              </div>

              <div>
                <h4 className="font-serif text-base text-[#FFFFFF] font-medium leading-snug group-hover:text-[#C79A3D] transition-colors">
                  {cred.title}
                </h4>
                <p className="text-xs text-[#9AA5B5] mt-1 leading-relaxed">
                  {cred.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
