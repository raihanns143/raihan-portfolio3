import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageView } from '../types/portfolio';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#FAFAFA] text-slate-900 border-t border-slate-200 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Description, Newsletter, Socials (matching 00:36 in video) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-200">
          
          {/* Left: Bio Statement & Contact */}
          <div className="md:col-span-5 space-y-6">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-sm">
              Focused on crafting clean, intuitive, and high-performance digital experiences that blend usability, robust architecture, and hardware connectivity to solve real-world problems.
            </p>

            <div className="space-y-1.5 pt-2">
              <p className="text-xs font-mono text-slate-400 uppercase">Direct Inquiries</p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-bold text-slate-900 hover:text-[#DE4A20] transition-colors block font-mono"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs font-mono text-slate-500 flex items-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#DE4A20]" />
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div className="md:col-span-3 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                Navigation
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <li>
                  <button
                    onClick={() => onNavigate('home')}
                    className="hover:text-[#DE4A20] transition-colors text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-[#DE4A20] transition-colors text-left"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-[#DE4A20] transition-colors text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('blogs')}
                    className="hover:text-[#DE4A20] transition-colors text-left"
                  >
                    Articles
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="hover:text-[#DE4A20] transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                Profiles
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <li>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#DE4A20] transition-colors inline-flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#DE4A20] transition-colors inline-flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:text-[#DE4A20] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Email</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Newsletter Box (matching 00:36) */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Newsletter / Updates
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="developer@domain.com"
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#DE4A20]"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-slate-900 text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#DE4A20] transition-colors flex items-center justify-center gap-2"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SUBSCRIBED</span>
                  </>
                ) : (
                  <>
                    <span>STAY UPDATED</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Giant Architectural Wordmark (matching 00:36 - 00:37) */}
        <div className="pt-12 pb-8 flex items-center justify-between">
          <h2 className="font-display font-black text-6xl sm:text-8xl lg:text-[140px] tracking-tighter text-slate-900 uppercase leading-[0.8] select-none">
            {PERSONAL_INFO.personalWordmark}
          </h2>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>
            Copyright & Engineering by @AbuRaihan — 2026
          </p>
          <p>
            Bangladesh Polytechnic Institute, Rajshahi
          </p>
        </div>

      </div>
    </footer>
  );
};
