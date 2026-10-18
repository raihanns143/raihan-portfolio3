import React from 'react';
import { PageView } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageView) => void;
  currentPage: PageView;
}

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  currentPage,
}) => {
  if (!isOpen) return null;

  const handleLinkClick = (page: PageView) => {
    onNavigate(page);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0E0E10]/98 backdrop-blur-xl text-white flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
      {/* Top bar with close button */}
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 py-6 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="font-display font-black text-xl tracking-tight text-white">
            {PERSONAL_INFO.brandWordmark}
          </span>
          <span className="text-xs uppercase px-2 py-0.5 rounded bg-[#DE4A20] text-white font-mono">
            PORTFOLIO
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main content grid */}
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
        {/* Left: Giant Navigation Items */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {[
            { label: 'HOME', page: 'home' as PageView },
            { label: 'ABOUT', page: 'about' as PageView },
            { label: 'SERVICES', page: 'services' as PageView },
            { label: 'BLOGS & ARTICLES', page: 'blogs' as PageView },
            { label: 'CONTACT', page: 'contact' as PageView },
          ].map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleLinkClick(item.page)}
                className="group flex items-center justify-between text-left py-2 border-b border-white/5 hover:border-[#DE4A20]/40 transition-colors"
              >
                <span
                  className={`font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight transition-transform duration-200 group-hover:translate-x-3 ${
                    isActive ? 'text-[#DE4A20]' : 'text-white/90 group-hover:text-white'
                  }`}
                >
                  {item.label}
                </span>
                <span className="text-2xl text-white/40 group-hover:text-[#DE4A20] transition-colors">
                  +
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Contact Information & Socials */}
        <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-2xl p-8 space-y-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
              Contact Mail
            </h4>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-lg font-medium text-white hover:text-[#DE4A20] transition-colors break-all"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
              Current Location
            </h4>
            <p className="text-base text-white/90 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#DE4A20]" />
              {PERSONAL_INFO.location}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
              Working Availability
            </h4>
            <p className="text-base text-white/90">
              Monday – Friday: Active for Development
            </p>
            <p className="text-sm text-white/60">
              Remote Worldwide & Hybrid On-Site
            </p>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-4">
              Connect Online
            </h4>
            <div className="flex flex-wrap gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-[#DE4A20] text-sm text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-[#DE4A20] text-sm text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-[#DE4A20] text-sm text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 py-6 flex items-center justify-between text-xs text-white/40 border-t border-white/5">
        <span>©2026 Abu Raihan. All rights reserved.</span>
        <span>Built with React 19 & Tailwind</span>
      </div>
    </div>
  );
};
