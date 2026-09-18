import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, ExternalLink, Shield } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    title: '',
    company: '',
    email: '',
    phone: '',
    primaryObjective: 'ai-transformation',
    timeframe: 'immediate',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0D1117]/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="booking-modal-container"
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#E8E3DA] shadow-2xl p-6 sm:p-10 my-8 text-left text-[#1B2430]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-booking-modal"
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#718096] hover:text-[#1B2430] transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div id="booking-success-view" className="py-6 text-left">
            <div className="w-12 h-12 bg-[#C79A3D]/20 text-[#C79A3D] rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-3xl font-normal text-[#1B2430] mb-3">
              Consultation Brief Received
            </h3>

            <p className="text-base text-[#4A5568] leading-relaxed mb-6">
              Thank you, {formData.fullName}. Dr. Vicki Wright Hamilton's office has received your briefing regarding {formData.company}. We review all executive inquiries within one business day.
            </p>

            <div className="p-5 bg-[#FFFFFF] border border-[#E8E3DA] mb-8 space-y-2 text-sm text-[#3A4556]">
              <p>
                <strong className="text-[#1B2430]">Immediate Calendar Scheduling:</strong> If you wish to confirm an immediate time slot on Dr. Vicki's calendar without waiting for email confirmation, you may access her direct Acuity scheduler below.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://vickihamilton.as.me/chat"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#C79A3D] text-[#1B2430] font-semibold text-sm hover:bg-[#b88b2f] hover:text-white transition-colors text-center"
              >
                Launch Acuity Calendar Scheduler
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 border border-[#1B2430] text-[#1B2430] font-medium text-sm hover:bg-[#1B2430] hover:text-[#FAF8F5] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div id="booking-form-view">
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C79A3D] block mb-2">
                Executive Discovery Call · 30 Minutes
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B2430] leading-snug">
                Schedule with Dr. Vicki Wright Hamilton
              </h3>
              <p className="text-sm text-[#5A6578] mt-2 leading-relaxed">
                A confidential, peer-level conversation to assess your organization's transformation roadmap, evaluate AI readiness, or discuss private executive coaching.
              </p>
            </div>

            {/* Direct Acuity Link Option Bar */}
            <div className="mb-8 p-4 bg-[#FFFFFF] border-l-4 border-l-[#C79A3D] border border-[#E8E3DA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-[#1B2430]">
                  Prefer direct calendar booking right now?
                </p>
                <p className="text-xs text-[#5A6578]">
                  Select an available slot immediately via Dr. Vicki's live calendar.
                </p>
              </div>
              <a
                id="acuity-direct-button-in-modal"
                href="https://vickihamilton.as.me/chat"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#1B2430] text-[#FAF8F5] text-xs font-semibold hover:bg-[#C79A3D] hover:text-[#1B2430] transition-colors text-center whitespace-nowrap"
              >
                Open Live Calendar
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1B2430] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E8E3DA] text-sm text-[#1B2430] focus:border-[#C79A3D] focus:outline-none focus:ring-1 focus:ring-[#C79A3D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1B2430] mb-1.5">
                    Executive Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Chief Information Officer / VP Ops"
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E8E3DA] text-sm text-[#1B2430] focus:border-[#C79A3D] focus:outline-none focus:ring-1 focus:ring-[#C79A3D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1B2430] mb-1.5">
                    Organization / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Global Logistics Enterprises"
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E8E3DA] text-sm text-[#1B2430] focus:border-[#C79A3D] focus:outline-none focus:ring-1 focus:ring-[#C79A3D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1B2430] mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. evance@enterprise.com"
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E8E3DA] text-sm text-[#1B2430] focus:border-[#C79A3D] focus:outline-none focus:ring-1 focus:ring-[#C79A3D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1B2430] mb-1.5">
                    Primary Strategic Objective
                  </label>
                  <select
                    value={formData.primaryObjective}
                    onChange={(e) => setFormData({ ...formData, primaryObjective: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E8E3DA] text-sm text-[#1B2430] focus:border-[#C79A3D] focus:outline-none focus:ring-1 focus:ring-[#C79A3D]"
                  >
                    <option value="ai-transformation">AI Adoption & Digital Transformation</option>
                    <option value="org-change">Leading Large-Scale Organizational Change</option>
                    <option value="executive-coaching">Confidential Executive Coaching & Clarity</option>
                    <option value="speaking-keynote">Keynote / Leadership Offsite Speaking</option>
                    <option value="other">Other Strategic Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1B2430] mb-1.5">
                    Initiative Timeframe
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E8E3DA] text-sm text-[#1B2430] focus:border-[#C79A3D] focus:outline-none focus:ring-1 focus:ring-[#C79A3D]"
                  >
                    <option value="immediate">Immediate (Next 30 Days)</option>
                    <option value="quarter">This Quarter</option>
                    <option value="planning">Annual Strategic Planning Cycle</option>
                    <option value="exploratory">Exploratory Assessment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1B2430] mb-1.5">
                  Brief Context on Your Challenge (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any background on your organization's current friction, systems in transition, or key stakeholders involved..."
                  className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E8E3DA] text-sm text-[#1B2430] focus:border-[#C79A3D] focus:outline-none focus:ring-1 focus:ring-[#C79A3D]"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-[#718096]">
                  Advisory office hours: M–F, 9:00 AM – 6:00 PM EST. All briefs held under strict NDA.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#C79A3D] text-[#1B2430] font-semibold text-sm hover:bg-[#b88b2f] hover:text-white transition-colors"
                >
                  Submit Consultation Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
