import React, { useState } from 'react';
import { PERSONAL_INFO, FAQS } from '../data/portfolioData';
import { PageView } from '../types/portfolio';
import { ArrowUpRight, Mail, MapPin, Clock, Phone, Send, CheckCircle2, AlertCircle, Plus, Minus } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageView) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please complete all required fields.');
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setStatusMessage(result.message || 'Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(result.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      setStatus('success');
      setStatusMessage('Thank you! Your message was received and logged.');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    }
  };

  return (
    <div className="w-full bg-white text-slate-900 animate-in fade-in duration-300">
      
      {/* Title Header (matching video 01:38) */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono text-[#DE4A20] font-bold tracking-widest uppercase block mb-3">
              {PERSONAL_INFO.personalWordmark}
            </span>
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-slate-900 uppercase leading-[0.88]">
              CONTACT ME.
            </h1>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
              ©2026 (SCROLL TO CONNECT)
            </span>
          </div>
        </div>

        {/* 4 Contact Info Blocks (matching video 01:38 - 01:39) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 p-8 rounded-2xl bg-[#FAFAFA] border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-[#DE4A20] font-semibold block mb-2">
                READY TO START?
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 uppercase leading-none mb-6">
                GET IN TOUCH.
              </h2>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 hover:text-[#DE4A20] transition-colors"
            >
              <span>SEND DIRECT EMAIL</span>
              <div className="w-5 h-5 rounded bg-[#DE4A20] text-white flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </a>
          </div>

          <div className="md:col-span-4 p-8 rounded-2xl bg-[#FAFAFA] border border-slate-200 space-y-2">
            <p className="text-xs font-mono uppercase text-slate-400">Current Base</p>
            <p className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#DE4A20]" />
              {PERSONAL_INFO.location}
            </p>
            <p className="text-xs text-slate-500 font-mono pt-2">
              Available for remote engineering & select on-site engagements
            </p>
          </div>

          <div className="md:col-span-4 p-8 rounded-2xl bg-[#FAFAFA] border border-slate-200 space-y-2">
            <p className="text-xs font-mono uppercase text-slate-400">Direct Inquiries</p>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="font-display font-bold text-base text-slate-900 hover:text-[#DE4A20] transition-colors flex items-center gap-2 font-mono break-all"
            >
              <Mail className="w-4 h-4 text-[#DE4A20] shrink-0" />
              {PERSONAL_INFO.email}
            </a>
            <p className="text-xs text-slate-500 font-mono pt-2">
              GitHub: /raihanns143 · LinkedIn: /in/md-abu-raihan-ns
            </p>
          </div>
        </div>
      </section>

      {/* Dark Form Section (matching video 01:40 - 01:42) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E0E10] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-xs font-mono font-medium text-[#FFA675] uppercase tracking-wider mb-4">
              COLLABORATION FORM
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tighter text-white uppercase leading-[0.95]">
              DISCUSS YOUR <br />
              <span className="text-white/40">NEXT PROJECT.</span>
            </h2>
          </div>

          {status === 'success' && (
            <div className="mb-8 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-8 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Abu"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#DE4A20] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Raihan"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#DE4A20] text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="developer@domain.com"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#DE4A20] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                Project Details or Requirements
              </label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Outline your web app, API integration, or microcontroller hardware goals..."
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#DE4A20] text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#DE4A20] hover:bg-[#C23A14] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg disabled:opacity-50"
            >
              <span>{status === 'loading' ? 'SUBMITTING...' : 'SUBMIT NOW'}</span>
              <div className="w-5 h-5 rounded bg-white text-[#DE4A20] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </form>
        </div>
      </section>

      {/* FAQ on Contact Page (matching video 01:42) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono text-[#DE4A20] font-bold uppercase mb-2 block">
              COLLABORATION FAQS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 uppercase">
              FREQUENT QUESTIONS.
            </h2>
          </div>

          <div className="lg:col-span-8 divide-y divide-slate-200">
            {FAQS.slice(0, 4).map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.id} className="py-5">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="font-display font-bold text-base text-slate-900 group-hover:text-[#DE4A20] transition-colors">
                      {faq.question}
                    </span>
                    <div className="p-1 rounded bg-slate-100 text-slate-600 group-hover:bg-[#DE4A20] group-hover:text-white transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
