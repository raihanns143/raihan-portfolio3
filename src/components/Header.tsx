import React from 'react';
import { PageView } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, ArrowUpRight, BookOpen } from 'lucide-react';
import { ARLogo } from './ARLogo';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenMenu: () => void;
  onOpenGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenMenu,
  onOpenGuide,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#DE4A20]/95 border-b border-white/10 text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded bg-white text-[#DE4A20] flex items-center justify-center font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
              <ARLogo size={22} />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-white/90">
                {PERSONAL_INFO.brandWordmark}
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Single-line, clean unboxed typography) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => onNavigate('home')}
            className={`whitespace-nowrap transition-colors relative py-1 hover:text-white ${
              currentPage === 'home'
                ? 'text-white font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white'
                : 'text-white/80'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`whitespace-nowrap transition-colors relative py-1 hover:text-white ${
              currentPage === 'about'
                ? 'text-white font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white'
                : 'text-white/80'
            }`}
          >
            About
          </button>
          <button
            onClick={() => onNavigate('services')}
            className={`whitespace-nowrap transition-colors relative py-1 hover:text-white ${
              currentPage === 'services'
                ? 'text-white font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white'
                : 'text-white/80'
            }`}
          >
            Service
          </button>
          <button
            onClick={() => onNavigate('blogs')}
            className={`whitespace-nowrap transition-colors relative py-1 hover:text-white ${
              currentPage === 'blogs'
                ? 'text-white font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white'
                : 'text-white/80'
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`whitespace-nowrap transition-colors relative py-1 hover:text-white ${
              currentPage === 'contact'
                ? 'text-white font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white'
                : 'text-white/80'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Action & Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Asset & Content Guide button for the user as requested */}
          <button
            onClick={onOpenGuide}
            title="Personalization Guide (Asset & Link Replacement)"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-black/20 hover:bg-black/35 text-white/90 hover:text-white rounded-md border border-white/15 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">Asset Guide</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-white text-[#DE4A20] rounded-md hover:bg-white/95 transition-all shadow-sm hover:translate-y-[-1px]"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Fullscreen Menu Trigger (Hamburger icon with 2 bars matching video) */}
          <button
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
            className="p-2.5 rounded-md hover:bg-white/10 text-white transition-colors focus:outline-none"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className="w-6 h-[2px] bg-white rounded-full transition-transform" />
              <span className="w-4 h-[2px] bg-white rounded-full transition-transform group-hover:w-6" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
