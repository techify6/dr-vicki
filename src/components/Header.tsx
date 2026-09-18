import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onBookCall: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookCall }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E3DA]'
          : 'bg-[#FAF8F5] border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Brand Identity */}
          <a
            id="brand-logo-link"
            href="#"
            className="flex flex-col text-left group"
          >
            <span className="font-serif text-2xl sm:text-[26px] font-semibold tracking-tight text-[#1B2430]">
              Dr. Vicki Wright Hamilton
            </span>
            <span className="text-xs sm:text-[13px] tracking-normal text-[#5A6578] font-sans">
              Founder, VWH Consulting · Former COO
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center space-x-9 text-[15px] font-medium text-[#2C384A]">
            <a
              id="nav-link-focus"
              href="#strategic-pillars"
              className="hover:text-[#1B2430] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C79A3D] hover:after:w-full after:transition-all"
            >
              Advisory Pillars
            </a>
            <a
              id="nav-link-stuck"
              href="#executive-friction"
              className="hover:text-[#1B2430] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C79A3D] hover:after:w-full after:transition-all"
            >
              The AI Crossroads
            </a>
            <a
              id="nav-link-about"
              href="#authority-bio"
              className="hover:text-[#1B2430] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C79A3D] hover:after:w-full after:transition-all"
            >
              Background & Track Record
            </a>
            <a
              id="nav-link-media"
              href="#thought-leadership"
              className="hover:text-[#1B2430] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C79A3D] hover:after:w-full after:transition-all"
            >
              Thought Leadership
            </a>
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button
              id="header-cta-button"
              type="button"
              onClick={onBookCall}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-[#1B2430] text-[#FAF8F5] text-sm font-semibold tracking-normal transition-all hover:bg-[#C79A3D] hover:text-[#1B2430] focus:outline-none focus:ring-2 focus:ring-[#C79A3D] focus:ring-offset-2 cursor-pointer"
            >
              Book a Discovery Call
            </button>

            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1B2430] hover:text-[#C79A3D] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-panel" className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E3DA] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#2C384A]">
            <a
              href="#strategic-pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#1B2430] py-1 border-b border-[#E8E3DA]/40"
            >
              Advisory Pillars
            </a>
            <a
              href="#executive-friction"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#1B2430] py-1 border-b border-[#E8E3DA]/40"
            >
              The AI Crossroads
            </a>
            <a
              href="#authority-bio"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#1B2430] py-1 border-b border-[#E8E3DA]/40"
            >
              Background & Track Record
            </a>
            <a
              href="#thought-leadership"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#1B2430] py-1 border-b border-[#E8E3DA]/40"
            >
              Thought Leadership
            </a>
            <a
              href="#advisory-inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#1B2430] py-1"
            >
              Direct Office
            </a>
          </nav>
          <div className="pt-2">
            <button
              id="mobile-menu-cta-button"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCall();
              }}
              className="w-full inline-flex items-center justify-center py-3 bg-[#1B2430] text-[#FAF8F5] text-sm font-semibold tracking-normal hover:bg-[#C79A3D] hover:text-[#1B2430] transition-colors text-center cursor-pointer"
            >
              Book a Discovery Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
