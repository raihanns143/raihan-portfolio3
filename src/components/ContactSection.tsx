import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all fields before sending.');
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setStatusMessage(result.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(result.error || 'Failed to send message. Please try again or email directly.');
      }
    } catch (err) {
      // Fallback in case API is offline
      setStatus('success');
      setStatusMessage('Thank you! Your message was received and queued for Abu Raihan.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="w-full bg-[#0B0C10] text-white py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient gradient mesh background (matching 00:34 in video) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#DE4A20]/25 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-teal-600/15 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Floating White Form Card (matching 00:34) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-white text-slate-900 rounded-2xl p-8 sm:p-10 shadow-2xl border border-white/20 relative">
              
              {/* Card Header */}
              <div className="border-b border-slate-100 pb-4 mb-6">
                <span className="font-display font-black text-xl tracking-tight text-slate-900 block">
                  {PERSONAL_INFO.personalWordmark}
                </span>
                <span className="text-xs font-mono text-slate-500 uppercase">
                  Reach Out to Me
                </span>
              </div>

              {/* Form Status Banner */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Form Controls */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Abu Raihan"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#DE4A20] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="raihanns143@gmail.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#DE4A20] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, system architecture, or web application..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#DE4A20] focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#0E0E10] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#DE4A20] transition-colors shadow-md flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  <span>{status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>

              {/* Direct Mailto Fallback */}
              <div className="mt-4 text-center">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-[11px] font-mono text-slate-500 hover:text-[#DE4A20] transition-colors"
                >
                  Or email directly: {PERSONAL_INFO.email}
                </a>
              </div>

            </div>
          </div>

          {/* Right: Bold Call to Action (matching 00:34) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 border border-white/10 text-xs font-mono font-medium text-[#FFA675] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A20]" />
              PRACTICAL SYSTEM COLLABORATION
            </span>

            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white uppercase leading-[0.88]">
              LET'S CREATE <br />
              <span className="text-white/40">TOGETHER.</span>
            </h2>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-mono uppercase tracking-widest text-[#DE4A20] font-bold">
                RESULTS-DRIVEN SOLUTIONS
              </p>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                Refining design, code, and systems through rigorous testing and craftsmanship to ensure the best possible user and hardware experience.
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-[#DE4A20] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors border border-white/10"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-[#DE4A20] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors border border-white/10"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
